require './config/environment'

class ApplicationController < Sinatra::Base
  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    # enable :sessions
    # set :session_secret, ENV["SESSION_SECRET"] || SecureRandom.hex(64)
  end

  get '/' do
    erb :index
  end

  helpers do
    def token(username)
      JWT.encode username, ENV['JWT_SECRET'], 'HS256'
    end

    # def payload(username)
    #   {
    #     exp: Time.now.to_i + 60 * 60,
    #     iat: Time.now.to_i,
    #     iss: ENV['JWT_ISSUER'],
    #     # scopes: ['add_stuff', 'remove_stuff'],
    #     user: {
    #       username: username
    #     }
    #   }
    # end

    def logged_in?
      !!session[:user_id]
    end

    def current_user
      @current_user ||= User.find(session[:user_id])
    end

    def parse_error_message(hash)
      "#{hash[0].to_s} #{hash[1][0]}"
    end

    def parseRequest(req)
      JSON.parse(request.body.read).with_indifferent_access
    end
  end
end
