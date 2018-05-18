Rails.application.routes.draw do
    get '/users/search/:loc' => 'users#search'
  resources :users
  post 'user_token' => 'user_token#create'
  # root 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  # included new route to get the near by locs


end
