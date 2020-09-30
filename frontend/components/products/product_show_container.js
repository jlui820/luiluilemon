import React from 'react';
import ProductShow from './product_show';
import { connect } from 'react-redux';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearSearch } from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.id],
        cartItem: state.entities.cartItems,
        currentUser: state.session.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    clearSearch: () => dispatch(clearSearch()),
    
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductShow)) 

