json.extract! @cart_item, :id, :user_id, :product_id, :quantity
json.product @cart_item.product, :itemtype, :name, :description, :size, :details, :price, :id, :photo, :color