import React from 'react';
import ProductShow from './product_index'
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
    product: state.products[ownProps.match.params.productId]
})

const mapStateToDispatch = dispatch => ({
    fetchProduct: id => dispatch(fetchProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)