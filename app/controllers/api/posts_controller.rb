class Api::PostsController < ApplicationController 
  def index
    @posts = Post.includes(:tags, :blog => :tags)
      .where(blog_id: params[:blog_id])
      .page(params[:page].to_i).per(10)
  end

  def show
    @post = Post.includes(:tags, :blog => :tags).find(params[:id])
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

  def feed_posts
    @blog = current_user.blogs.find(params[:blog_id])

    # @posts = Kaminari.paginate_array(
    #   @blog.feed.sort_by(&:created_at).reverse
    # ).page(params[:page]).per(10)
    
    @posts = Kaminari.paginate_array(@blog.feed).page(params[:page]).per(10)
    
    render :index
  end

  private

  def post_params
    params.require(:post).permit(:body, :title, :tag_names)
  end
end
