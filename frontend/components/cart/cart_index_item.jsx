import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = (props) => {
    // console.log(props.cartItem.undefined.product.name);
    debugger
    return (
      <div className="cart-index-item-div">
        <h1 className="cart-name">{props.product.name}</h1>
        <h1 className="cart-quantity">{props.product.quantity}</h1>
        <h1 className="cart-price">{props.product.price}</h1>
      </div>
    );
}

export default CartIndexItem