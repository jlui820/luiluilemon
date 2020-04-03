import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = (props) => {
    return (
        <div className="cart_index_item">
            <Link to={`/products/${props.product.id}`} className="cart-item">
                <img className="cart-item_image" src={window['prod' + props.product.id.toString()]} />
            </Link>
                <h1 className="cart-name">{props.product.name}</h1>
                <h1 className="cart-price">{props.product.price}</h1>
                <h1> </h1>
        </div>
    )
}

export default CartIndexItem