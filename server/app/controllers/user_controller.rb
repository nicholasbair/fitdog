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
        session[:user_id] = user.id
        redirect '/activities'
      # else
      #   erb :'/users/signup'
      end
    end

    post '/login' do
      req = parseRequest(request)
      user = User.find_by(username: req[:username].downcase)
      if user && user.authenticate(req[:password])
        # binding.pry
        { token: token(user.username) }.to_json
      else
        halt 401
      end
    end

    # get '/logout' do
    #   session.clear
    #   redirect '/login'
    # end
  end
end
