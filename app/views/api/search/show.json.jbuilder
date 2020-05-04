json.array! @results.each do |sneaker|
    json.extract! product, :id, :name, :brand, :style, :ticker

    if product.photo.attached?
        json.photo url_for(product.photo)
    else
        json.photo ""
    end
end

