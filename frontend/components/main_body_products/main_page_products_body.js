import React from 'react';
import {connect} from 'react-redux';
import MainBodyProducts from './main_page_products_body'
import { fetchProducts, fetchProductsByCategory } from '../../actions/product_actions';

const mapStateToProps = state => {

    return {
        products: Object.values(state.entities.products)
    }
}


const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProductsByCategory: (itemtype) => dispatch(fetchProductsByCategory(itemtype))
})


export default connect(mapStateToProps, mapDispatchToProps)(MainBodyProducts)


//do i need this page?