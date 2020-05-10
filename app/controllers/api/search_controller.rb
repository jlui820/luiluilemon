class Api::SearchController < ApplicationController

    def show
        @products = Product.where("LOWER(name) LIKE ?", "%#{params[:id]}%")
        render :show
        # render "/api/products/index"
    
    end
end
