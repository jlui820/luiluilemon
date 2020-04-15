import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';
export const DELETED_CART_ITEM = "DELETED_CART_ITEM"

export const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

export const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

export const removeCartItem = () => ({
    type: REMOVE_CART_ITEM
});

export const deletedCartItem = (id) => ({
    type: DELETED_CART_ITEM,
    id
})

export const receiveItemErrors = errors => ({
    type: RECEIVE_ITEM_ERRORS,
    errors
});

export const getAllCartItems = () => {
    // debugger
    return dispatch => {
    // debugger
    return CartAPIUtil.getAllCartItems()
    .then(cartItems => {
        // debugger
        dispatch(receiveCartItems(cartItems)),
        err => dispatch(receiveItemErrors(err.response.JSON))
        })
    }
}


export const getCartItem = cartItemId => dispatch => (
    CartAPIUtil.getCartItem(cartItemId)
    .then(cartItem => dispatch(receiveCartItem(cartItem))),
    err => dispatch(receiveItemErrors(err.response.JSON))
);


// export const createCartItem = cartItem => dispatch => (
//     CartAPIUtil.createCartItem(cartItem)
//     .then(cartItem => dispatch(receiveCartItem(cartItem))),
//     err => dispatch(receiveItemErrors(err.response.JSON))
// );

export const createCartItem = () => {
    // debugger
    return dispatch => {
        // debugger
        return CartAPIUtil.createCartItem()
            .then(cartItem => {
                // debugger
                dispatch(receiveCartItem(cartItem)),
                    err => dispatch(receiveItemErrors(err.response.JSON))
            })
    }
}

export const deleteCartItem = cartItemId => dispatch => (
    CartAPIUtil.deleteCartItem(cartItemId)
    .then(() => dispatch(removeCartItem(cartItemId))),
    err => dispatch(receiveItemErrors(err.response.JSON))
);
