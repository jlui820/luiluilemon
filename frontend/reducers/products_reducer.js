import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../actions/product_actions'

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    

    // debugger
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, action.products);
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, { [action.product.id]: action.product });
        default:
            return state;
    }
}


export default productsReducer;