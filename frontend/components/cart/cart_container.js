// // import{ connect } from 'react-redux';
// // import React from 'react';
// // import CartIndex from './cart_index';
// // import { getAllCartItems, deleteCartItem, getCartItem, createCartItem} from '../../actions/cart_actions'

// // const mapStateToProps = state => {
// //     // debugger
// //     return({
// //     products: Object.values(state.entities.products),
// //     cartItems: Object.values(state.entities.cartItems),
// //     currentUser: state.entities.users[state.session.id]
// // })}

// // const mapDispatchToProps = dispatch => {
// //     // debugger

// //     return ({
// //     getAllCartItems: () => dispatch(getAllCartItems()),
// //     getCartItem: cartItemId => dispatch(getCartItem(cartItemId)),
// //     deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
// //     createCartItem: cartItem => dispatch(createCartItem(cartItem))
// // })}




// // export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);


// import {
//     connect
// } from 'react-redux';
// import React from 'react';
// import Cart from './cart';
// import { getAllCartItems, deleteCartItem, getCartItem, createCartItem } from '../../actions/cart_actions'

// const mapStateToProps = state => {
//     // debugger
//     return ({
//         products: Object.values(state.entities.products),
//         cartItems: Object.values(state.entities.cartItems),
//         currentUserId: state.session.id
//     })
// }

// const mapDispatchToProps = dispatch => {
//     // debugger

//     return ({
//         getAllCartItems: () => dispatch(getAllCartItems()),
//         getCartItem: cartItemId => dispatch(getCartItem(cartItemId)),
//         deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
//         createCartItem: cartItem => dispatch(createCartItem(cartItem))
//     })
// }




// export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import { connect } from 'react-redux'
import { getAllCartItems, createCartItem, deleteCartItem, clearCartItems } from '../../actions/cart_actions'
import Cart from './cart';

const mapStateToProps = state => { 
    return ({
    userCartItems: Object.values(state.entities.cartItems),
    cartItems: Object.values(state.entities.cartItems),
    currentUserId: state.session.id,

    //test below
    currentUser: state.entities.users[state.session.id],
})}

const mapDispatchToProps = dispatch => ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),

    clearCartItems: (id) => dispatch(clearCartItems(id))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)