import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = (props) => {
    // console.log(props.cartItem.undefined.product.name);
    debugger
    return (
      <div className="cart-index-item-div">
        {props.cartItem.product.name}

      </div>
    );
}

export default CartIndexItem