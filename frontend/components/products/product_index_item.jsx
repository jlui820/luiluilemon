import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
    // const buttons = this.props.colors.map(color => {
    //     return (
    //         <div>
    //             <button className={`color-${color}`}></button>
    //         </div>
    //     )
    // }) 
    // debugger
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
                {/* <div className='product-item-color-button-holder'>
                    <div className='single-button-container'>
                        <button className='product-color-button color-black'></button>
                    </div>
                    <div className='single-button-container'>
                        <button className='product-color-button'></button>
                    </div>
                </div> */}
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