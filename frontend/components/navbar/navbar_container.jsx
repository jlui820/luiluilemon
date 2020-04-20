import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import  { fetchProducts } from '../../actions/product_actions';


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    allProducts: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
