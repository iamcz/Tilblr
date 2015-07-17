class Api::FollowsController < ApplicationController
  def show
    @follow = Follow.find_or_initialize_by(
      follower_id: current_user.active_blog.id,
      followed_id: params[:id]
    )
  end

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
