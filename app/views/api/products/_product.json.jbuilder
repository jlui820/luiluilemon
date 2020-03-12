json.extract! @product, :itemtype, :name, :description, :size, :details, :price, :id


# if @product.photo.attached?
    json.photo url_for(@product.photo)
# else
#     json.photo ''
# end