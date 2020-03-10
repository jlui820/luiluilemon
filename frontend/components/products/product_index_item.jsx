import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
    // debugger
    return (
        <div>
            <div className='main-'>
                {/* {product.namer} */}
            </div>
            <div className='product-item-info'>
                <div>
                    <p>color</p>
                </div>
                <div className='product-name'>
                    {props.product.name}
                </div>
                <div className='product-price'>
                    {props.product.price}
                </div>
            </div>
        </div>
    )
}

export default ProductIndexItem;