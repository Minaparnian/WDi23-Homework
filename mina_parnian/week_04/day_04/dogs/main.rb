require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Dog < ActiveRecord::Base
end

class Origin < ActiveRecord::Base # all class should be start by capital letter nad single plant.
end # let us to access the databaseo

get '/' do
  erb :home
end

#Index
get '/dogs' do
  @dogs = Dog.all
  erb :dogs_index
end


get '/dogs/breeds/:breed' do
  @dogs = Dog.where :breed => params[:breed] # its just show the butterfly in the same breed
  erb :dogs_index
end


before do
  @families = Dog.pluck(:breed).uniq
end



#New
get '/dogs/new' do
  erb :dogs_new
end





# SHOW
get '/dogs/:id' do
  @dog = Dog.find params[:id]
  erb :dogs_show
end



# CREATE
post '/dogs' do
  dog = Dog.new
  dog.color = params[:color]
  dog.breed = params[:breed]
  dog.image = params[:image]
  dog.save

  redirect to("/dogs/#{ dog[:id] }")
end



# EDIT
get '/dogs/:id/edit' do
  @dog = Dog.find params[:id]
  erb :dogs_edit
end


# UPDATE
post '/dogs/:id' do
  dog = Dog.find params[:id]
  dog.color = params[:color]
  dog.breed = params[:breed]
  dog.image = params[:image]
  dog.save
  redirect to("/dogs/#{ params['id'] }")
end


# DESTROY
get '/dogs/:id/delete' do
  dog = Dog.find params[:id]
  dog.destroy
  redirect to('/dogs')
end
# /////////////////////////////////////////////

#Index

get '/origins' do
  @origins = Origin.all
  erb :origins_index
end


#New
get '/origins/new' do  #place before show
  erb :origins_new
end

#Show
get '/origins/:id' do
  @origin = Origin.find params[:id]
  erb :origins_show
end



# CREATE
post '/origins' do
  origin = Origin.new
  origin.name = params[:name]
  origin.information = params[:information]
  origin.image = params[:image]
  origin.save

  redirect to("/origins/#{ origin[:id] }")
end

# EDIT
get '/origins/:id/edit' do
  @origin = Origin.find params[:id]
  erb :origins_edit
end


# UPDATE
post '/origins/:id' do
  origin = Origin.find params[:id]
  origin.name = params[:name]
  origin.information = params[:information]
  origin.image = params[:image]
  origin.save
  redirect to("/origins/#{ params['id'] }")
end

# DESTROY
get '/origins/:id/delete' do
  origin = Origin.find params[:id]
  origin.destroy
  redirect to('/origins')
end






after do
  ActiveRecord::Base.connection.close #any time any request happen in the server
end
