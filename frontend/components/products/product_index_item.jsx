import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ({product}) => {
    return (
        <div>
            <div className='main-'>
                {/* <Link to={`products/${product.id}`}>product</Link> */}
            </div>
            <div className='product-item-info'>
                <div>
                    <p>color</p>
                </div>
                <div className='product-name'>
                    {/* {product.name} */}
                </div>
                <div className='product-price'>
                    {/* {product.price} */}
                    hellowwwww
                </div>
            </div>
        </div>
    )
}

export default ProductIndexItem;