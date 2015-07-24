class Api::BlogsController < ApplicationController
  def index
    @blogs = current_user.blogs
  end

  def show
    @blog = Blog.includes(:owner, :posts => :blog).find(params[:id])
  end

  def recommended_blogs
    followed_ids = current_user
      .active_blog
      .followed_follows
      .map(&:followed_id)
      .concat([current_user.active_blog_id])
    @blogs = Blog
      .where.not(user_id: current_user.id)
      .where.not("id IN (?)", followed_ids)
      .order("RANDOM()")
      .limit(3)
    render :index
  end
end
