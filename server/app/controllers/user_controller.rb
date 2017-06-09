require 'json';

class UserController < ApplicationController
  register Sinatra::Namespace


  # get '/signup' do
  #   erb :'users/signup'
  # end

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

    # get '/login' do
    #   erb :'users/login'
    # end

    post '/login' do
      req = parseRequest(request)
      user = User.find_by(username: req[:username].downcase)
      if user && user.authenticate(req[:password])
        user.to_json
        # session[:user_id] = user.id
      else
        # status 500
        response.body << {error: "Authentication Error"}
      #   erb :'users/login'
      end
    end

    # get '/logout' do
    #   session.clear
    #   redirect '/login'
    # end
  end
end
