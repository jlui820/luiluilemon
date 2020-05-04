class Product < ApplicationRecord
    validates :name, :description, :details, :price, :color, :itemtype, presence: true

    has_many :cart_items,
    foreign_key: :product_id,
    class_name: :CartItem

    has_one :user,
    through: :cart_items,
    source: :User

    has_one_attached :photo
end
