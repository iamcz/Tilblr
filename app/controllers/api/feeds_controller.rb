class Api::FeedsController < ApplicationController
  def show
    @blog = current_user.blogs.find(params[:blog_id])
  end
end
