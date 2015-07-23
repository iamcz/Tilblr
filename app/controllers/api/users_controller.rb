class Api::UsersController < ApplicationController
  def show
    @user = User
      .includes(
        :blogs, 
        :active_blog => [ 
          :followed_follows, 
          :follower_follows 
        ]
      ).find_by(session_token: session[:session_token])

    if @user
      render :show
    else
      render json: nil
    end
  end
end
