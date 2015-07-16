class Api::UsersController < ApplicationController
  def show
    @user = User
      .includes(:active_blog => [ :follows_follows, :followers_follows ])
      .find(params[:id])
  end
end
