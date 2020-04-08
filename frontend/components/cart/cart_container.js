import{ connect } from 'react-redux';
import React from 'react';
import CartIndexItem from './cart_index_item';
import { fetchCartItems, updateCart, removeCartItem, addToCart} from '../../actions/cart_actions'

const mapStateToProps = state => ({
    currentUserId: state.session.id,
    products: Object.values(state.entities.products),
    currentUser: state.session.currentUser,
    cartItems: Object.values(state.entities.cartItems)
})

const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    addToCart: cartItem => dispatch(addToCart(cartItem)),
    updateCart: cartItem => dispatch(updateCart(cartItem)),
    removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIndexItem);