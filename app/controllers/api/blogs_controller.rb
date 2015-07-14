class Api::BlogsController < ApplicationController
  def show
    @blog = Blog.includes(:owner).find(params[:id])
  end
end
