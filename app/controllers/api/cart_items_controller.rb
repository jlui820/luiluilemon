class Api::CartItemsController < ApplicationController
    before_action :require_login, only: [:create]
    
    def index
        @cart_items = current_user.cart_items
        render :index
    end

    def create
        # debugger
        @cart_item = CartItem.new
        @cart_item.product_id = cart_items_params[:product][:id]
        @cart_item.quantity = cart_items_params[:product][:quantity]
        @cart_item.user_id = @current_user.id
        # debugger
        if @cart_item.save
            # @cart_item.product = cart_items_params[:product]
            render :show
            # want to send up product json object we just added 
            # can creat @product extract what we want
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
        params.require(:cart_item).permit(:product => [:itemtype, :name, :description, :size, :details, :price, :id, :quantity, :photo, :color])
    end
end 

# [:itemtype, :name, :description, :size, :details, :price, :id, :photo])