require './config/environment'

class ApplicationController < Sinatra::Base
  helpers do
    def token(userId)
      JWT.encode userId.to_s, ENV['JWT_SECRET'], 'HS256'
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

    def decode_token(token)
      # Server will rec
      # {"token"=>"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.Im5pY2si.YSSxCdQPj4iNN57SA-oTpCHgRBEMu8fddAwwEAmv224"}
      # Expected input is value of above hash
      # JSON.parse(hash).with_indifferent_access
      # begin
        JWT.decode token, ENV['JWT_SECRET'], true, { algorithm: 'HS256' }
        # ["nick", {"typ"=>"JWT", "alg"=>"HS256"}]
      # rescue JWT::DecodeError
      #   [401, { 'Content-Type' => 'text/plain' }, ['A token must be passed.']]
      # end
    end

    def logged_in?(token)
      user_id = decode_token(token)[0]
      !!User.find(user_id)
    end

    def current_user(token)
      user_id = decode_token(token)[0]
      @current_user ||= User.find(user_id)
    end

    def parseRequest(req)
      JSON.parse(request.body.read).with_indifferent_access
    end
  end
end
