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


# 2nd product where search...
# something like this... see how i want to use UI first
# Product.where(item type: params[:itemtype]).where(“name” LIKE “#{params[:searchTerm]}”) Product.where(item type: params[:itemtype]).where(“name” LIKE “$#{params[:searchTerm]}$”) & 