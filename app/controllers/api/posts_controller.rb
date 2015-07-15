class Api::PostsController < ApplicationController 
  def show
    @post = post.find(params[:id])
  end

  def create
    @post = post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :title)
  end
end
