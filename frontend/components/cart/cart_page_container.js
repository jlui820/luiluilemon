import{ connect } from 'react-redux';
import React from 'react';
import Cart from './cart';
import { getAllCartItems, deleteCartItem, getCartItem, createCartItem} from '../../actions/cart_actions'

const mapStateToProps = state => {
    // debugger
    return({
    products: Object.values(state.entities.products),
    cartItems: Object.values(state.entities.cartItems),
    currentUser: state.entities.users[state.session.id]
})}

const mapDispatchToProps = dispatch => {
    // debugger

    return ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    getCartItem: cartItemId => dispatch(getCartItem(cartItemId)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem))
})}




export default connect(mapStateToProps, mapDispatchToProps)(Cart);