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

  def update
    @post = current_user.posts.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @post = current_user.posts.find(params[:id])

    @post.destroy
    render json: nil
  end

  private

  def post_params
    params.require(:post).permit(:body, :title)
  end
end
