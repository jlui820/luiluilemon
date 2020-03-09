class Api::ProductsController < ApplicationController
    def index
        @products = Products.all
        render '/api/products/show'
    end

    def show
        @product = Product.find(params[:id])
        render '/api/products/index'
    end
end
