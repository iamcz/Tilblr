class Api::UsersController < ApplicationController
  def show
    @user = User
      .includes(
        :blogs, 
        :active_blog => [ 
          :followed_follows, 
          :follower_follows 
        ]
      ).find(params[:id])
  end
end
