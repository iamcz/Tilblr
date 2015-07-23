Rails.application.routes.draw do
  root to: "users#new"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :search, only: :create

  resources :blogs, only: [:show, :new, :create]
  resources :feeds, only: :show

  get "auth/:provider/callback", to: "sessions#omniauth"

  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [:index, :show] do 
      resource :follow, only: [:show, :create, :destroy]
      resource :feed, only: :show
    end

    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: :show

    get "feed_posts", to: "posts#feed_posts"
    get "recommended_blogs", to: "blogs#recommended_blogs"

    resource :search, only: :show
  end
end
