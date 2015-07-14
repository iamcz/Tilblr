class Api::BlogsController < ApplicationController
  def show
    @blog = blogs.include(:owner).find(params[:id])
  end
end
