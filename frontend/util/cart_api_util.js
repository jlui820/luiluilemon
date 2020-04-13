export const getAllCartItems = () => (
    $.ajax({
        url: '/api/cart_items',
        method: 'GET'
    })
)

export const getCartItem = (cartItem) => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'GET'
    })
)

export const createCartItem = cartItem => (
    $.ajax({
        url: `/api/cart_items`,
        method: 'POST',
        data: {cartItem}
    })
)

export const deleteCartItem = cartItemId => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'DELETE'
    })
)
