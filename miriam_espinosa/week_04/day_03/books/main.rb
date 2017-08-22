require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :form
end

get '/book' do
  redirect to('/') unless params[:title]#FIXME
  @title = params[:title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"       
  info = HTTParty.get url
  @cover_image = info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

   erb :book
end

get '/about' do
  erb :about
end

get '/faq' do
  erb :faq
end
