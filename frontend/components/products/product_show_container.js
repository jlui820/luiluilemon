import React from 'react';
import ProductShow from './product_show'
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.id],
        cartItem: { user_id: null, product_id: null },
        sessionId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCartItem: product => dispatch(createCartItem(product)),
    // createCartItem: product => dispatch(createCartItem(product))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow) 