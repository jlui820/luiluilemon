@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :size, :details, :price, :color, :itemtype 
        if product.photo.attached?
            json.photo   url_for(product.photo)
        else
            json.photo ''
        end
    end
end

