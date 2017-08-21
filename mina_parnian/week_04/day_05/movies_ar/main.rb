require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Movie < ActiveRecord::Base
end

class Director < ActiveRecord::Base
end

#///////////////////////////////////////


get '/' do
  erb :home
end


#first we need index to make sure we get all Movies from database;
#index-1
get '/movies' do
  @movies = Movie.all
  erb :movies_index
end

get '/movies/directors/:director' do
  @movies = Movie.where :director => params[:director] # its just show the butterfly in the same family
  erb :movies_index
end

before do
  @directors = Movie.pluck(:director).uniq
end


#new-3
get '/movies/new' do
  erb :movies_new
end


#CREATE-4 to show the image
post '/movies' do
  movie = Movie.new #local variable redirecting to the new movie pages.
  movie.name = params[:name]
  movie.genre = params[:genre]
  movie.year = params[:year]
  movie.director = params[:director]
  movie.image = params[:image]
  movie.save

  redirect to("/movies/#{ movie.id}")
end

#show-2
get '/movies/:id' do
  @movie = Movie.find params[:id]
  erb :movies_show
end


#Destroy

get '/movies/:id/delete' do
  movie =Movie.find params[:id]
  movie.destroy
  redirect to ('/movies')
end


#EDIT

get '/movies/:id/edit' do
  @movie = Movie.find params[:id]
  erb :movies_edit
end


#UPDATE

post '/movies/:id' do
  movie = Movie.find params[:id]
  movie.name = params[:name]
  movie.genre = params[:genre]
  movie.year = params[:year]
  movie.director = params[:director]
  movie.image = params[:image]
  movie.save
  redirect to("/movies/#{ params['id']}")
end



#//////////////////////////////////////////

#index

get '/directors' do
  @directors = Director.all
  puts @director
   erb :directors_index
end


#new

get '/directors/new' do
  erb :directors_new
end



#creat

post '/directors' do
  director = Director.new #local variable redirecting to the new director pages.
  director.name = params[:name]
  director.born = params[:born]
  director.movie = params[:movie]
  director.upcoming = params[:upcoming]
  director.image = params[:image]
  director.save

  redirect to("/directors/#{ director.id}")
end


#show
get '/directors/:id' do
  @director = Director.find params[:id]
  erb :directors_show
end


#Destroy

get '/directors/:id/delete' do
director = Director.find params[:id]
director.destroy
  redirect to ('/directors')
end


#EDIT

get '/directors/:id/edit' do
  @director = Director.find params[:id]
  erb :directors_edit
end


#UPDATE

post '/directors/:id' do
  director = Director.find params[:id]
  director.name = params[:name]
  director.born = params[:born]
  director.movie = params[:movie]
  director.upcoming = params[:upcoming]
  director.image = params[:image]
  director.save
  redirect to("/directors/#{ params['id']}")
end


after do
  ActiveRecord::Base.connection.close #any time any request happen in the server
end
