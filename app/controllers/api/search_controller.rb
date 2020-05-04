class Api::SearchController < ApplicationController

    def show
        @products = Product.where("LOWER(name) LIKE ?", "%#{params[:id]}%")
        render "/api/products/index"
    end
end
