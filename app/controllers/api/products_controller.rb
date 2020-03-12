class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

    def create
        @product = Prduct.new(product_params)
    end


    def product_params
        params.require(:product).permit(:name, :description, :size, :details, :price, :color, :itemtype, :photo)
    end
end
