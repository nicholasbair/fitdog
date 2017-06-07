class UserController < ApplicationController

  # get '/signup' do
  #   erb :'users/signup'
  # end

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
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect '/activities'
    # else
    #   erb :'users/login'
    end
  end

  get '/logout' do
    session.clear
    redirect '/login'
  end
end
