export const fetchProducts = () => 
    $.ajax({
        url: '/api/products',
        method: 'GET'
    })

export const fetchProduct = id => 
    $.ajax({
        url: `/api/products/${id}`,
        method: 'GET'
    })
    
export const fetchProductsByType = (itemtype, searchTerm) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products`,
        data: { itemtype: itemtype, searchTerm: searchTerm }
    })
}