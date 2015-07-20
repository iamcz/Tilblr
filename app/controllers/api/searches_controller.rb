class Api::SearchesController < ApplicationController
  def show
    tag = search_params[:tag]
    type = search_params[:type]
    case type
    when "post"
      @results = Tag.find_by(name: tag).tagged_posts.includes(:blog)
      render :post_results
    when "blog"
      @results = Tag.find_by(name: tag).tagged_blogs.includes(:posts)
      render :blog_results
    end
  end

  private
  
  def search_params
    params.require(:search).permit(:tag, :type);
  end
end
