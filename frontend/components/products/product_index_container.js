import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchProductsByCategory } from '../../actions/product_actions';
import ProductIndex from './product_index'

const mapStateToProps = state => ({
    products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => {
    return ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProductsByCategory: (itemtype) => dispatch(fetchProductsByCategory(itemtype))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)