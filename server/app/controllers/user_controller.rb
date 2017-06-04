require 'rack-flash'

class UserController < ApplicationController
  use Rack::Flash

  get '/signup' do
    erb :'users/signup'
  end

  post '/signup' do
    user = User.create(
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )
    if user.errors.messages.empty?
      session[:user_id] = user.id
      flash[:message] = "Successfully created your account!"
      redirect '/activities'
    else
      flash[:message] = parse_error_message(user.errors.messages.first)
      erb :'/users/signup'
    end
  end

  get '/login' do
    erb :'users/login'
  end

  post '/login' do
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:message] = "Successfully logged in!"
      redirect '/activities'
    else
      flash[:message] = "Oops, something went wrong.  Please try again."
      erb :'users/login'
    end
  end

  get '/logout' do
    flash[:message] = "Successfully logged out."
    session.clear
    redirect '/login'
  end
end
