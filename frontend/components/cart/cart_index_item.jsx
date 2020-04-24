import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = (props) => {
    console.log(props.cartItem.undefined.product.name);
    return (
      <div className="cart-index-item-div">
        {props.cartItem.undefined.product.name}

      </div>
    );
}

export default CartIndexItem