export const fetchCartItems = () => (
    $.ajax({
        url: '/api/carts',
        method: 'GET'
    })
)

export const addToCart = (cartItem) => (
    $.ajax({
        url: '/api/carts',
        method: 'POST',
        data: {cartItem}
    })
)

export const updateCart = cartItem => (
    $.ajax({
        url: `/api/carts/${cartItem.id})`,
        method: 'PATCH',
        data: {cartItem}
    })
)

export const removeCartItem = cartItemId => (
    $.ajax({
        url: `/api/carts/${cartItemId}`,
        method: 'DELETE'
    })
)
