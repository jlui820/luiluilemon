import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM, RECEIVE_CART_ITEM } from "../actions/cart_actions";

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            // debugger
            return Object.assign({}, action.cartItems)
            // return action.cartItems
        case RECEIVE_CART_ITEM:
            // debugger
            nextState[action.cartItem.id] = action.cartItem
            return nextState
        case REMOVE_CART_ITEM:
            // debugger
            // delete nextState.id
            // return nextState
               delete nextState[action.id]
               return action.allCartItems
        default:
            return state;
    }
};

export default cartItemsReducer;