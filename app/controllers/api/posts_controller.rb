class Api::PostsController < ApplicationController 
  def show
    @post = post.find(params[:id])
  end

  def create
    @post = current_user.active_blog.posts.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :title)
  end
end
