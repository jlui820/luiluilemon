import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';

export const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

export const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

export const deleteCartItem = cartItemId => ({
    type: REMOVE_CART_ITEM,
    cartItemId
});

export const receiiveItemErrors = errorrs => ({
    type: RECEIVE_ITEM_ERRORS,
    errors
});

export const fetchCartItems = () => dispatch => (
    CartAPIUtil.fetchCartItems()
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
);

export const addToCart = cartItem => dispatch => (
    CartAPIUtil.addToCart(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
);


export const updateCart = cartItem => dispatch (
    CartAPIUtil.updateCart(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const removeCartItem = cartItemId => dispatch (
    CartAPIUtil.removeCartItem(cartItemId)
    .then(() => dispatch(deleteCartItem(cartItemId)))
);
