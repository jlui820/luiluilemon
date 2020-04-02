import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM, RECEIVE_CART_ITEM } from "../actions/cart_actions";



const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, state, action.cartItems);
        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, {[action.cartItem.id]: action.cartItem});
        case REMOVE_CART_ITEM:
            const newObject = Object.assign({}, state);
            delete newObject[action.cartItemId];
            return newObject;
        default:
            return state;
    }
};

export default cartItemsReducer;