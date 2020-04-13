import{ connect } from 'react-redux';
import React from 'react';
import CartForm from './cart';
import { getAllCartItems, updateCart, deleteCartItem, getCartItem, deletedCartItem} from '../../actions/cart_actions'

const mapStateToProps = state => ({
    currentUserId: state.session.id,
    userCartItems: Object.values(state.entities.cartItems),
    cartItems: Object.values(state.entities.cartItems)
    // products: Object.values(state.entities.products),
    // currentUser: state.session.currentUser,
    // cartItems: Object.values(state.entities.cartItems)
})

const mapDispatchToProps = dispatch => ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    getCartItem: cartItem => dispatch(getCartItem(cartItem)),
    // updateCart: cartItem => dispatch(updateCart(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    deletedCartItem: (id) => dispatch(deletedCartItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);