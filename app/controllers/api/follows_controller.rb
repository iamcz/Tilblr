class Api::FollowsController < ApplicationController
  def create
    @blog = Blog.where.not(user_id: current_user.id).find(params[:id])

    current_user.active_blog.follow(@blog)
    render json: nil
  end

  def destroy
    current_user.active_blog.unfollow(@blog)
    render json: nil
  end
end
