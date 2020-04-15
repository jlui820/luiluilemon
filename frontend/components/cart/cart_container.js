import{ connect } from 'react-redux';
import React from 'react';
import Cart from './cart';
import { getAllCartItems, deleteCartItem, getCartItem} from '../../actions/cart_actions'

const mapStateToProps = state => {
    // debugger
    return({
    currentUserId: state.session.id,
    products: Object.values(state.entities.products),
    cartItems: Object.values(state.entities.cartItems)
})}

const mapDispatchToProps = dispatch => {
    // debugger

    return ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    getCartItem: cartItemId => dispatch(getCartItem(cartItemId)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
})}




export default connect(mapStateToProps, mapDispatchToProps)(Cart);