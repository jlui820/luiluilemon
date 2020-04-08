class Product < ApplicationRecord
    validates :name, :description, :size, :details, :price, :color, :itemtype, presence: true

    has_many :cart_items,
    foreign_key: :product_id,
    class_name: :CartItem

    has_one_attached :photo
end
