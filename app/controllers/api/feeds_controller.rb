class Api::FeedsController < ApplicationController
  def show
    @blog = current_user
      .blogs
      .includes(:followed_blogs => :posts)
      .find(params[:blog_id])
  end
end
