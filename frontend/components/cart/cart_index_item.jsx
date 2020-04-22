import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = (props) => {
    return (
      <div>
        <img className="show-pic-show-page" src={`${product.photo}`} alt="" />
        <h1 className="product-name">{product.name}</h1>
        <div className="product-price">${product.price}USD</div>
      </div>
    );
}

export default CartIndexItem