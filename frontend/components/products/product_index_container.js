import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import ProductIndex from './product_index'

const mapStateToProps = state => ({
    products: Object.values(state.entities.products)
})

const mapStateToDispatch = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)