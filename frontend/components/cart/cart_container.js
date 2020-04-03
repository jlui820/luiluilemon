import{ connect } from 'react-redux';
import React from 'react';
import CartForm from './cart';
import { fetchCartItems, updateCart, removeCartItem} from '../../actions/cart_actions'

const mapStateToProps = state => ({
    currentUserId: state.session.id,
    products: Object.values(state.entities.products),
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateCart: cartItem => dispatch(updateCart(cartItem)),
    removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);