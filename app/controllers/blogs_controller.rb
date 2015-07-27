class BlogsController < ApplicationController
  before_action :ensure_logged_in

  def show
    @blog_id = params[:id]
    
    if logged_in? && current_user.blogs.find_by(id: @blog_id)
      current_user.update(active_blog_id: @blog_id)
    end
  end

  def new
    @blog = Blog.new
  end

  def create
    @blog = current_user.blogs.new(blog_params)

    if @blog.save
      current_user.active_blog = @blog
    else
      flash[:errors] = @blog.errors.full_messages
    end

    redirect_to current_user.active_blog
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :tag_names, :avatar)
  end
end
