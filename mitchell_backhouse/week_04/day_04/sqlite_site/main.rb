require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do

    erb :home
end

# INDEX
get '/languages' do
    @languages = query_db "SELECT * FROM languages"

    erb :languages_index
end

# NEW
get '/languages/new' do

    erb :languages_new
end

# SHOW
get '/languages/:id' do
    @language = query_db "SELECT * FROM languages WHERE id=#{params['id']}"
    @language = @language.first
    erb :languages_show
end

# CREATE
post '/languages' do

    # This is why active_record exists
    query_db "INSERT INTO languages (logo, name, creator, year_developed,
    year_abandoned, current_version, description) VALUES ( '#{params["logo"]}',
    '#{params["name"]}', '#{params["creator"]}', '#{params["year_developed"].to_i}',
    '#{params["year_abandoned"].to_i}', '#{params["current_version"]}',
    '#{params["description"]}' )"

    last_language = query_db "SELECT * FROM languages ORDER BY ID DESC LIMIT 1"
    redirect to("/languages/#{last_language[0]['id']}")
end

# EDIT
get '/languages/:id/edit' do
    @language = query_db "SELECT * FROM languages WHERE id=#{params['id']}"
    @language = @language.first

    erb :languages_edit
end

# UPDATE
post '/languages/:id' do
    query_db "UPDATE languages SET
    logo='#{params["logo"]}',
    name='#{params["name"]}',
    creator='#{params["creator"]}',
    year_developed='#{params["year_developed"].to_i}',
    year_abandoned='#{params["year_abandoned"].to_i}',
    current_version='#{params["current_version"]}',
    description='#{params["description"]}'
    WHERE id=#{params["id"]}"

    redirect to("/languages/#{params[:id]}")
end

# DESTROY
get '/languages/:id/delete' do
    query_db "DELETE FROM languages WHERE id=#{params['id']}"
    redirect to('/languages')
end

get '/resetdb' do
    #query_db 
end

def query_db(sql)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true

    result = db.execute sql

    puts result

    db.close

    result
end
