class ActivityController < ApplicationController
  register Sinatra::Namespace

  namespace '/api/v1' do

    before do
      if !logged_in?(request.env["HTTP_AUTHORIZATION"])
        halt 401
      end
    end

    before do
      content_type 'application/json'
    end

    get '/activities' do
      Activity.last(100).reverse.to_json
    end

    get '/activities/:id' do
      req = parseRequest(request)
      Activity.find(req[:id]).to_json
    end

    delete '/activities/:id/delete' do
      activity = Activity.find(params[:id])
      if activity.user_id == current_user(request.env["HTTP_AUTHORIZATION"]).id
        Activity.destroy(activity.id)
      else
        halt 401
      end
    end

    # -------------------------------------------------------
    # These do not work yet

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
  end
end
