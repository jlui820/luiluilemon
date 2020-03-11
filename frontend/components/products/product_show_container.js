import React from 'react';
import ProductShow from './product_show'
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: id => dispatch(fetchProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow) 