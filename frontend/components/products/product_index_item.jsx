import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
    // debugger
    return (
        <div className='whole-page-wrapper'>
            <div className='whole-content-wrapper'>
            <div className='product-index-item-container'>
                <div className='product-index-item-picture'>
                    <img className='product-image-item-img' src={window.shorts} />
                </div>
            </div>
                <div className='product-item-color-button-holder'>
                    <div>button1</div>
                    <div>button2</div>
                </div>
                <div className='product-item-name'>
                    {props.product.name}
                </div>
                <div className='product-item-price'>
                    {props.product.price}
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