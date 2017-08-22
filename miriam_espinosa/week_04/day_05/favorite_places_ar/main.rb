require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Place < ActiveRecord::Base
end

class State < ActiveRecord::Base
end

get '/' do
  erb :home
end


get '/places' do
  @places = Place.all
  erb :places_index
end

get '/states/:state' do
  # FIXME: need to get associations working
  # @state = State.find params[:id]
  # @places = @state.places
   erb :places_index
end

before do
  @states = Place.pluck(:state).uniq
end


get '/places/new' do
  erb :places_new
end

post '/places' do
  place = Place.new
  place.name = params[:name]
  place.image = params[:image]
  place.save

  redirect to ("places/#{place[:id]}")
end

get '/places/:id' do
  @place = Place.find params[:id]
  erb :places_show
end

get '/places/:id/edit' do
  @place = Place.find params[:id]
  erb :places_edit
end

post '/places/:id' do
  place = Place.find params[:id]
  place.name = params[:name]
  place.image = params[:image]
  place.save

  redirect to ("/places/#{params['id']}")
end

get '/places/:id/delete' do
  place = Place.find params[:id]
  place.destroy
  redirect to ('/places')
end

get '/states' do
  @state = State.all
  erb :states_index
end

get '/states/new' do
  erb :states_new
end

post '/states' do
  state = State.new
  state.name = params[:name]
  state.image = params[:image]
  state.save

  redirect to ("states/#{state.id }")
end

get '/states/:id' do
  @state = State.find params[:id]
  erb :states_show
end

get '/states/:id/edit' do
  @state = State.find params[:id]
  erb :states_edit
end

post '/states/:id' do
  state = State.find params[:id]
  state.name = params[:name]
  state.image = params[:image]
  state.save

  redirect to ("/states/#{state.id}")
end

get '/states/:id/delete' do
  state = State.find params[:id]
  state.destroy
  redirect to ('/states')
end

after do
  ActiveRecord::Base.connection.close
end

#my program is trying to delete places when i am asking to delete a state
# is it possible to delete  a database at this point in time?
