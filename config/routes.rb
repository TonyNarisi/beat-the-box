Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'game#index'
  
  get '/play_game', to: 'game#play'

  resources :game_results, only: :create
end
