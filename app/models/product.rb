class Product < ApplicationRecord
    validates :name, :description, :size, :details, :price, :color, :itemtype, presence: true

    has_one_attached :photo
end
