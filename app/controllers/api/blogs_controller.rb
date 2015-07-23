class Api::BlogsController < ApplicationController
  def index
    @blogs = current_user.blogs
  end

  def show
    @blog = Blog.includes(:owner, :posts => :blog).find(params[:id])
  end

  def recommended_blogs
    @blogs = Blog
      .where.not(user_id: current_user.id)
      .order("RANDOM()")
      .limit(3)
    render :index
  end
end
