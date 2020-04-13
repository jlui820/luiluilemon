class Api::ProductsController < ApplicationController
    # debugger
    def index
        if params[:itemtype]
            # debugger
            @products = Product.where(itemtype: params[:itemtype])
        else
            @products = Product.all
        end
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end
    

end
