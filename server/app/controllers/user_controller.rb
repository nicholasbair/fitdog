require 'json';

class UserController < ApplicationController
  register Sinatra::Namespace

  namespace '/api/v1' do

    before do
      content_type 'application/json'
    end

    post '/signup' do
      user = User.create(
        username: params[:username],
        email: params[:email],
        password: params[:password]
      )
      if user.errors.messages.empty?
        { token: token(user.id) }.to_json
      else
        halt 401
      end
    end

    post '/login' do
      req = parseRequest(request)
      user = User.find_by(username: req[:username].downcase)
      if user && user.authenticate(req[:password])
        { token: token(user.id) }.to_json
      else
        halt 401
      end
    end
  end
end
