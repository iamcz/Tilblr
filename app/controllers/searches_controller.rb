class SearchesController < ApplicationController
  def show
    @query = params[:q]
  end
end
