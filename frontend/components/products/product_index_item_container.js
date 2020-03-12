import React from 'react';
import { connect } from 'react-redux';
import ProductIndexItem from './product_index_item'

const mapStateToProps = state => {

    return {
        // colors: Object.values(state.entities.products.colors)
    }
}


const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(ProductIndexItem)