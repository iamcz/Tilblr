class SearchesController < ApplicationController
  def create
    @query = search_params[:q]
  end

  private

  def search_params
    params.require(:search).permit(:q)
  end
end
