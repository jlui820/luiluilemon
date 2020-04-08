export const fetchCartItems = () => (
    $.ajax({
        url: '/api/cart_items',
        method: 'GET'
    })
)

export const addToCart = (cartItem) => (
    $.ajax({
        url: '/api/cart_items',
        method: 'POST',
        data: {cartItem}
    })
)

export const updateCart = cartItem => (
    $.ajax({
        url: `/api/cart_items/${cartItem.id})`,
        method: 'PATCH',
        data: {cartItem}
    })
)

export const removeCartItem = cartItemId => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'DELETE'
    })
)
