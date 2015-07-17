class Api::FollowsController < ApplicationController
  def create
    @blog = Blog.where.not(user_id: current_user.id).find(params[:blog_id])

    follow = current_user.active_blog.follow(@blog)
    render json: follow
  end

  def destroy
    @blog = Blog.where.not(user_id: current_user.id).find(params[:blog_id])

    follow = current_user.active_blog.unfollow(@blog)
    render json: nil
  end
end
