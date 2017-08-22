Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root :to => 'pages#home'


get '/home' => 'pages#home'


get '/magics' => 'pages#magics'

get '/secretnumber' => 'pages#secretnumber'

get '/rockpaperscissors' => 'pages#rockpaperscissors'

get '/answer' =>
'pages#answer'
end
