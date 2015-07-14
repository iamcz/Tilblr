Rails.application.routes.draw do
  root to: "users#new"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  resources :blogs, only: [:show]

  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [:show]
  end
end
