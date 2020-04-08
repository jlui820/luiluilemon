import React from 'react';
import ProductShow from './product_show'
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { addToCart } from '../../actions/cart_actions'

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.id],
        cartItem: state.entities.cart
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: id => dispatch(fetchProduct(id)),
    addToCart: product => dispatch(addToCart(product))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow) 