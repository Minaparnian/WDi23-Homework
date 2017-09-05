# == Route Map
#
#        Prefix Verb   URI Pattern                   Controller#Action
#     directors GET    /directors(.:format)          directors#index
#               POST   /directors(.:format)          directors#create
#  new_director GET    /directors/new(.:format)      directors#new
# edit_director GET    /directors/:id/edit(.:format) directors#edit
#      director GET    /directors/:id(.:format)      directors#show
#               PATCH  /directors/:id(.:format)      directors#update
#               PUT    /directors/:id(.:format)      directors#update
#               DELETE /directors/:id(.:format)      directors#destroy
#

Rails.application.routes.draw do
  get 'movies/index'

  get 'movies/new'

  get 'movies/edit'

  get 'movies/show'

  # root :to => 'dorectors#index'
    resources :directors
    resources :movies
end
