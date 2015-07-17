Rails.application.routes.draw do
  root to: "users#new"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  resources :blogs, only: [:show, :create]

  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [:index, :show] do 
      resource :follow, only: [:create, :destroy]
    end

    resources :posts, only: [:show, :create, :update, :destroy]
    resources :users, only: :show
  end
end
