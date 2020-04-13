# json.cartItems do
#     @cart_items.each do |cart_item|
#         json.set! cart_item.id do
#             json.extract! cart_item, :id, :user_id, :product_id, :quantity
#         end
#     end
# end


# json.products do 
#     @cart_items.each do |cart_item|
#         json.set! cart_item.product_id do 
#             json.partial! 'api/products/product', product: cart_item.product
#             # json.photoUrls @product.photos.map { |file| url_for(file) }
#             # json.photoUrl url_for(cart_item.product.photo)
#         # end
#         end
#     end
# end

@cart_items.each do |cart_item| 
    json.set! cart_item.id do 
        json.extract! cart_item, :id, :user_id, :quantity
        json.product do 
            json.partial! "api/products/product", product: cart_item.product
            json.photoUrl url_for(cart_item.product.photo)
        end
    end
end  