require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do #its means after / in url run this code.
  erb :book # it means run book.erb code. also we can call form.erb in all file.
end
