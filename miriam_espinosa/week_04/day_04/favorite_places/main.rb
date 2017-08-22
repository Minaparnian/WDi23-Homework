require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/places' do
  @places = query_db "SELECT * FROM places"
  erb :places_index
end

get '/places/new' do
  erb :places_new
end

post '/places' do
  query_db "INSERT INTO places (name, state, image) VALUES ('#{params["name"]}', '#{params["state"]}', '#{params["image"]}')"
  redirect to ('/places')
end

get '/places/:id' do
  @place = query_db "SELECT * FROM places WHERE id=#{params['id']}"
  @place = @place.first
  erb :places_show
end

get '/places/:id/edit' do
  @place = query_db "SELECT * FROM places WHERE id=#{params['id'] }"
  @place = @place.first
  erb :places_edit
end

post '/places/:id' do
  query_db "UPDATE places SET name='#{params['name']}', state='#{params['state']}', image='#{params['image']}' WHERE id=#{params['id']}"
  redirect to ("/places/#{params['id']}")
end

get '/places/:id/delete' do
  query_db "DELETE FROM places WHERE id=#{ params['id']}"
  redirect to ('/places')
end

def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql # Optional but nice for debugging.

  results = db.execute sql
  db.close
  results # Implicit return
end
