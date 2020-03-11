import React from 'react';

class Product extends React.Component {
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render() {
        return (
            <div className='product-show-whole-page-container'>
                <div className='product-left-side-img'>
                    <img className='product-image-item-img' src={window.shorts2} />
                </div>
                <div className='right-side-whole-container'>
                    <div className='main-product-description'>
                        <h1 className='product-name'>description goes here</h1>
                        {/* {this.props.product.description} */}
                        <div className='product-price'>{}</div>
                        {/* {this.props.product.price} */}
                    </div>
                    <div className='clothes-description-container'>
                        <div className='color-description-container'>
                            <div className='color-description-characteristics'></div>
                            <div className='color-description-characteristics'></div>
                            <div className='color-description-characteristics'></div>
                        </div>
                        <div className='color-buttons-container'>
                            <div className='color-buttons'></div>
                            <div className='color-buttons-'></div>
                            <div className='color-buttons-'></div>
                            <div className='color-buttons-'></div>
                            <div className='color-buttons-'></div>
                        </div>
                        <div className='model-characteristics-container'>
                            <div className='model-description'>model description</div>
                            <div className='size-guide'></div>
                        </div>
                        <div className='purchase-method'>
                            <div className='shipping-method'>
                                <div className='radio-button-container-holder'>
                                    <div className='radio-button'></div>
                                    <div className='ship-container'>Ship it to me</div>
                                </div>
                                    <div className='free-ship'>Free shipping and returns</div>
                            </div>
                            <div className='pickup-container'>
                                <div className='pickup-icon'></div>
                                <div className='pickup-text'>Pick up in-store</div>
                            </div>
                            <button className='add-to-bag-button'>ADD TO BAG</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product; 