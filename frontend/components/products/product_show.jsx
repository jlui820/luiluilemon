import React from 'react';
import { Link } from 'react-router-dom'


class Product extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = {quantity: 1}

        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(e) {
        // debugger
        e.preventDefault()
        let { product } = this.props
        debugger
        product['quantity'] = this.state.quantity
        this.props.createCartItem({cart_item:{product: product}})
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    render() {
        // debugger
        console.log(this.props.cartItems)
        let { product } = this.props
        if (!product) {
            return null;
        } else {
             return (
                <div className='product-show-whole-page-container'>
                    <div className='product-left-side-img'>
                        <img className='show-pic-show-page' src={`${product.photo}`} alt="" />  
                    </div>
                    <div className='right-side-whole-container'>
                        <div>
                            <a href="#products" className='men-show-link'>Men's Clothes</a>
                            
                        </div>
                        <div className='main-product-description'>
                            <h1 className='product-name'>{product.name}</h1>
                            <div className='product-price'>${product.price}USD</div>
                        </div>
                        <div className='clothes-description-container'>
                            <div>{product.color}</div>
                            <div className='color-description-container'>
                                <div className='color-description-characteristics'></div>
                                <div className='color-description-characteristics'></div>
                                <div className='color-description-characteristics'></div>
                            </div>
                            <div className='color-buttons-container'>
                                {/* {this.props.product.color} */}
                                <button className='color-buttons first'></button>
                                <button className='color-buttons second'></button>
                                <button className='color-buttons third'></button>
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
                            {/* <div className='description-container'>
                                <p>
                                  {product.description}  
                                </p>
                            </div> */}
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
                                    <button className='add-to-bag-button' onClick={this.addToCart}>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                        <div className='reviews-container'>
                            <div className='left-side-product-show-review-box'>
                                <div>
                                    <i className="far fa-star"></i>
                                </div>
                                <div>
                                    <div className='product-show-review'>Reviews</div>
                                </div>
                            </div>
                            <div className='right-side-product-show-chat-box'>
                                <div>
                                    <i className="far fa-comment-alt"></i>
                                </div>
                                <div>
                                    <div className='live-chat-text'>Live Chat</div>
                                </div>
                            </div>
                        </div>
                        <div className='details-container'>
                            <div className='details'>Details
                                <div className='product-details'>{product.details}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }   
}

export default Product; 