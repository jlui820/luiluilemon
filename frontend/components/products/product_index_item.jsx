import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
    
    return (
        <div className='whole-page-wrapper'>
            <div className='whole-content-wrapper'>
                <div className='product-index-item-container'>
                    <Link to={`/products/${props.product.id}`}>
                        <div className='product-index-item-picture'>
                            <img className='show-pic' src={`${props.product.photo}`} alt="" />  
                        </div>
                    </Link>
                </div>

                <div className='product-item-text'>
                    <div className='product-item-name'>
                        {props.product.name}
                    </div>
                    <div className='product-item-price'>
                    ${props.product.price}USD
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductIndexItem;
