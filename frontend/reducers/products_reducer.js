import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../actions/product_actions'

const productsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            // debugger
            return Object.assign({}, action.products)
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product
            return nextState
        default:
            return state;
    }
}

export default productsReducer;