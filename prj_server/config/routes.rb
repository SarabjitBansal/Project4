Rails.application.routes.draw do
  resources :messages
  post 'user_token' => 'user_token#create'
    get '/users/search/:loc' => 'users#search'
  resources :users

  # root 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'






end
