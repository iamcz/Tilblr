class FeedsController < ApplicationController
  def show
    blog = current_user.blogs.find(params[:id])
    current_user.update(active_blog_id: blog.id)
    @blog_id = params[:id]
  end
end
