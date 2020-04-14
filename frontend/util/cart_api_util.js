export const getAllCartItems = () => {
    debugger
    return $.ajax({
        url: '/api/cart_items',
        method: 'GET'
    })
}

export const getCartItem = (cartItem) => {
    debugger
    return $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'GET'
    })
}

export const createCartItem = cartItem => {
    debugger

    return $.ajax({
        url: `/api/cart_items`,
        method: 'POST',
        data: {cartItem}
    })
}

export const deleteCartItem = cartItemId => {
    debugger
    return $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'DELETE'
    })
}
