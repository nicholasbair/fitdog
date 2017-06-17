require './config/environment'

class ApplicationController < Sinatra::Base
  helpers do
    def token(userId)
      JWT.encode userId.to_s, ENV['JWT_SECRET'], 'HS256'
    end

    def decode_token(token)
        JWT.decode token, ENV['JWT_SECRET'], true, { algorithm: 'HS256' }
    end

    def logged_in?(token)
      !!current_user(token)
    end

    def current_user(token)
      user_id = decode_token(token)[0]
      @current_user ||= User.find_by(id: user_id)
    end

    def parseRequest(req)
      JSON.parse(request.body.read).with_indifferent_access
    end
  end
end
