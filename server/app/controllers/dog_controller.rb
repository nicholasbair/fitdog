class DogController < ApplicationController
  register Sinatra::Namespace

  # before do
  #   if !logged_in?
  #     redirect '/login'
  #   end
  # end

  namespace '/api/v1' do

    before do
      content_type 'application/json'
    end

    # TODO: this route should be scoped to the user
    get '/dogs' do
      Dog.all.to_json
      # @dogs = current_user.dogs
      # erb :'dogs/index'
    end

    get '/dogs/:id' do
      # @dog =
      Dog.find(params[:id]).to_json
      # erb :'dogs/show'
    end


    # -------------------------------------------------------
    # These do not work yet

    get '/dogs/new' do
      erb :'dogs/new'
    end

    post '/dogs' do
      dog = current_user.dogs.build(name: params[:name])
      if dog.save
        redirect '/dogs'
      else
        erb :'dogs/new'
      end
    end

    get '/dogs/:id/edit' do
      @dog = Dog.find(params[:id])
      if @dog.user_id == current_user.id
        erb :'dogs/edit'
      else
        redirect '/dogs'
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
