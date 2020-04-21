class Api::CartItemsController < ApplicationController
    before_action :require_login, only: [:create]
    
    def index
        @cart_items = current_user.cart_items
        render :index
    end

    def create
        debugger
        @cart_item = CartItem.new
        @cart_item.product_id = cart_items_params[:product][:id]
        @cart_item.user_id = @current_user.id
        if @cart_item.save
            render :index
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render :show
    end

    private
    def cart_items_params
        params.require(:cart_item).permit(:quantity, :product => [:id])
    end
end 

# [:itemtype, :name, :description, :size, :details, :price, :id, :photo])