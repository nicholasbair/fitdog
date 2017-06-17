class UserController < ApplicationController
  register Sinatra::Namespace

  namespace '/api/v1' do

    before do
      content_type 'application/json'
    end

    post '/signup' do
      req = parseRequest(request)
      user = User.new(
        username: req[:username].downcase,
        email: req[:email],
        password: req[:password]
      )
      if user.save
        {
          token: token(user.id),
          user: {
            id: user.id,
            username: user.username
          }
        }.to_json
      else
        halt 401
      end
    end

    post '/login' do
      req = parseRequest(request)
      user = User.find_by(username: req[:username].downcase)
      if user && user.authenticate(req[:password])
        {
          token: token(user.id),
          user: {
            id: user.id,
            username: user.username
          }
        }.to_json
      else
        halt 401
      end
    end
  end
end
