ENV['SINATRA_ENV'] ||= "development"

require 'dotenv'
Dotenv.load('../.env')

require 'bundler/setup'
require 'securerandom'
require 'sinatra/namespace'


Bundler.require(:default, ENV['SINATRA_ENV'])

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "db/#{ENV['SINATRA_ENV']}.sqlite"
)

require_all 'app'
