class FeedsController < ApplicationController
  def show
    @blog_id = params[:id]
    # @blog = current_user.blogs.find(params[:id])
  end
end
