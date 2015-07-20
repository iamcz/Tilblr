Rails.application.routes.draw do
  root to: "users#new"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :search, only: :show

  resources :blogs, only: [:show, :create]
  resources :feeds, only: :show

  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [:index, :show] do 
      resource :follow, only: [:show, :create, :destroy]
      resource :feed, only: :show
    end

    resources :posts, only: [:show, :create, :update, :destroy]
    resources :users, only: :show
  end
end
