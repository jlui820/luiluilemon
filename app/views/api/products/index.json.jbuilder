@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :size, :details, :price, :color, :itemtype
    end
end