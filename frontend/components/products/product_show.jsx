import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                quantity: 1,
                size: '',
            }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(e) {
        e.preventDefault()
        let { product } = this.props
        
        if (this.props.currentUser) {
            product['quantity'] = this.state.quantity
            this.props
                .createCartItem({ cart_item: { product: product } })
                .then(() => this.props.openModal("Add_To_Cart"));
        } else {
            this.props.history.push("/UserSession")
        }
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
        this.props.clearSearch()
    }
    
    render() {
        // let  product  = this.props && this.props.product ? this.props.product : this.props.location.state.product;
        let  product  = this.props ? this.props.product : this.props.location.state.product;
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
                            <div className='purchase-method'>
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

export default withRouter(Product); 