class BlogsController < ApplicationController
  def show
    @blog = Blog.find(params[:id])

    if current_user.blogs.include?(@blog)
      current_user.update(active_blog: @blog)
    end
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
    params.require(:blog).permit(:title)
  end
end
