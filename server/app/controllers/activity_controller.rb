class ActivityController < ApplicationController

  before do
    if !logged_in?
      redirect '/login'
    end
  end

  get '/activities' do
    @activities = Activity.last(15).reverse
    erb :'/activities/index'
  end

  get '/activities/new' do
    @dogs = current_user.dogs
    erb :'/activities/new'
  end

  get '/activities/:id' do
    @activity = Activity.find(params[:id])
    erb :'activities/show'
  end

  post '/activities' do
    if !params[:dogs].nil?
      current_user.activities.build(
        name: params[:name],
        duration: params[:duration],
        dog_ids: params[:dogs]
      ).save
      redirect '/activities'
    else
      @dogs = current_user.dogs
      erb :'/activities/new'
    end
  end

  get '/activities/:id/edit' do
    @activity = Activity.find(params[:id])
    if @activity.user_id == current_user.id
      @dogs = current_user.dogs
      erb :'activities/edit'
    else
      redirect '/activities'
    end
  end

  patch '/activities/:id' do
    activity = Activity.find(params[:id])
    if activity.user_id == current_user.id && !params[:dogs].nil?
      activity.update(
      name: params[:name],
      duration: params[:duration],
      dog_ids: params[:dogs]
      )
      redirect '/activities'
    else
      @activity = Activity.find(params[:id])
      @dogs = current_user.dogs
      erb :'activities/edit'
    end
  end

  delete '/activities/:id/delete' do
    activity = Activity.find(params[:id])
    if activity.user_id == current_user.id
      Activity.destroy(activity.id)
    end
    redirect '/activities'
  end
end
