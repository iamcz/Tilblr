class FeedsController < ApplicationController
  def show
    @blog = current_user.blogs.find(params[:id])
  end
end
