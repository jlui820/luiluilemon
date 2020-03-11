import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
    // debugger
    return (
        <div className='whole-page-wrapper'>
            <div className='whole-content-wrapper'>
                <div className='product-index-item-container'>
                    <Link to={`/products/${props.product.id}`}>
                        <div className='product-index-item-picture'>
                            <img className='product-image-item-img' src={window.shorts} />
                        </div>
                    </Link>
                </div>
                <div className='product-item-color-button-holder'>
                    <div className='single-button-container'>
                        <button className='product-color-button'></button>
                    </div>
                    <div className='single-button-container'>
                        <button className='product-color-button'></button>
                    </div>
                </div>
                <div className='product-item-name'>
                    {props.product.name}
                </div>
                <div className='product-item-price'>
                   ${props.product.price}USD
                </div>
            </div>
        </div>
    )
}

export default ProductIndexItem;

// {/* <div className='main-'>
//     {/* {product.namer} */}
// </div>
//     <div className='product-item-info'>
//         <div>
//             <p>color</p>
//         </div>
//         <div className='product-name'>
//             {props.product.name}
//         </div>
//         <div className='product-price'>
//             {props.product.price}
//         </div>
//     </div> */}