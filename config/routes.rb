Rails.application.routes.draw do
  get 'static_pages/root'

  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :robots

  namespace :api do
    resources :robots
  end
end
