import React from 'react';
import { LInk } from 'react-router-dom';

export const ProductIndexItem = ({product}) => {
    return (
        <div>
            <div>
                <Link to={`products/${product.id}`}>product</Link>
            </div>
            <div className='product-item-info'>
                <div>
                    <p>color</p>
                </div>
                <div className='product-name'>
                    {product.name}
                </div>
                <div className='product-price'>
                    {product.price}
                </div>
            </div>
        </div>
    )
}

export default ProductIndexItem;