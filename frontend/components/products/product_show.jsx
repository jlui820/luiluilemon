import React from 'react';
import { Link } from 'react-router-dom'

class Product extends React.Component {
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }


    render() {
      
        if (!this.props.product) {
            return null;
        } else {

        
        return (
            <div className='product-show-whole-page-container'>
                <div className='product-left-side-img'>
                    <img className='show-pic-show-page' src={`${this.props.product.photo}`} alt="" />  
                </div>
                <div className='right-side-whole-container'>
                    <div className='main-product-description'>
                        <h1 className='product-name'>{this.props.product.name}</h1>
                        <div className='product-price'>${this.props.product.price}USD</div>
                    </div>
                    <div className='clothes-description-container'>
                        <div>{this.props.product.color}</div>
                        <div className='color-description-container'>
                            <div className='color-description-characteristics'></div>
                            <div className='color-description-characteristics'></div>
                            <div className='color-description-characteristics'></div>
                        </div>
                        <div className='color-buttons-container'>
                            {/* {this.props.product.color} */}
                            <button className='color-buttons first'></button>
                            <button className='color-buttons second'></button>
                        </div>
                        {/* <div className='model-characteristics-container'>
                            <div className='model-description'>model description</div>
                            <div className='size-guide'></div>
                        </div> */}
                        <div className='size-container'>
                            <button className='clothes-size-button'>S</button>
                            <button className='clothes-size-button'>M</button>
                            <button className='clothes-size-button'>L</button>
                        </div>
                        <div className='purchase-method'>
                            <div className='shipping-method'>
                                <div className='radio-button-container-holder'>
                                    <input type="radio" className='radio-button'/>
                                    <div className='ship-container'>Ship it to me</div>
                                </div>
                                    <div className='free-ship'>Free shipping and returns</div>
                            </div>
                            <div className='pickup-container'>
                                <div className='pickup-icon'>
                                    <i className="fas fa-university"></i>
                                </div>
                                    <div className='pickup-text'>Pick up in-store</div>
                            </div>
                            <div className='add-to-bag-button-container'>
                                <button className='add-to-bag-button'>ADD TO BAG</button>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-container'>
                        <div className='left-side-product-show-review-box'>
                            <div>
                                <i className="far fa-star"></i>
                            </div>
                            <div>
                                <Link to='/'>Reviews</Link>
                            </div>
                        </div>
                        <div className='right-side-product-show-chat-box'>
                            <div>
                                <i class="far fa-comment-alt"></i>
                            </div>
                            <div>
                                <Link to='/' className='live-chat-text'>Live Chat</Link>
                            </div>
                        </div>
                    </div>
                    <div className='details-container'>
                        <div className='details'>Details
                            <div className='product-details'>{this.props.product.details}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   
}

export default Product; 