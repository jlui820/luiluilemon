export const getAllCartItems = () => {
    // debugger
    return $.ajax({
        url: '/api/cart_items',
        method: 'GET'
    })
}

export const getCartItem = (cartItem) => {
    // debugger
    return $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'GET'
    })
}

// export const createCartItem = cart_item => {
//     // debugger

//     return $.ajax({
//         url: `/api/cart_items`,
//         method: 'POST',
//         data: {cart_item}
//     })
// }

export const createCartItem = cartItem => {
    // debugger

    return $.ajax({
        url: `/api/cart_items`,
        method: 'POST',
        data: {cart_item: cartItem.cart_item}
    })
}

export const deleteCartItem = cartItemId => {
    // debugger
    return $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'DELETE'
    })
}
