class DogController < ApplicationController
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

    get '/dogs' do
      current_user(token).dogs
    end

    get '/dogs/:id' do
      req = parseRequest(request)
      Dog.find(req[:id]).to_json
    end

    # -------------------------------------------------------
    # These do not work yet

    post '/dogs' do
      dog = current_user.dogs.build(name: params[:name])
      if dog.save
        redirect '/dogs'
      else
        erb :'dogs/new'
      end
    end

    patch '/dogs/:id' do
      dog = Dog.find(params[:id])
      if dog.user_id == current_user.id
        dog.update(name: params[:name])
      end
      redirect '/dogs'
    end

    delete '/dogs/:id/delete' do
      dog = Dog.find(params[:id])
      if dog.user_id == current_user.id
        Dog.destroy(dog.id)
      end
      redirect '/dogs'
    end
  end
end
