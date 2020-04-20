import React from 'react';
import ProductShow from './product_show'
import { connect } from 'react-redux';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.id],
        cartItem: state.entities.cartItems,
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCartItem: product => dispatch(createCartItem(product)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow) 