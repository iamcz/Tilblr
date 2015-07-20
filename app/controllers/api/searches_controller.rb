class Api::SearchesController < ApplicationController
  def show
    type = search_params[:type]
    query = search_params[:query]
    case type
    when "post"
      @results = Tag.where("name LIKE ?", query).includes(:tagged_posts => :blog)
      render :post_results
    when "blog"
      @results = Tag.where("name LIKE ?", query).includes( :tagged_blogs => :posts)
      render :blog_results
    end
  end

  private
  
  def search_params
    params.require(:search).permit(:type, :query);
  end
end
