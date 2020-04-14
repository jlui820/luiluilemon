import React from 'react';
import ProductIndexItem from './product_index_item_container';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleGetProduct = this.handleGetProduct.bind(this)
        this.handleAllProduct = this.handleAllProduct.bind(this)
    }
    componentDidMount() {
        this.props.fetchProducts();
    }

    handleGetProduct(e){
        // debugger
        e.preventDefault()
        const itemtype = e.currentTarget.value
        return(
            this.props.fetchProductsByCategory(itemtype)
        )
    }

    handleAllProduct(e) {
        e.preventDefault()
        return this.props.fetchProducts();
    }

    render() {
        const { products } = this.props;
        if(!products) return null

        let product = this.props.products.map(product => {
            return <ProductIndexItem product={product} key={product.id}/>
        })

        return (
            <div className='productindex-wrapper'>
                <div className='left-side-product-index'>
                    <p className='right-side-header'>Men's Clothes</p>
                </div>
                <div className='right-side-product-index'>
                    <div className="productindex-buttons-container">
                        <button className='product-index-buttons' onClick={this.handleAllProduct}>
                            All
                        </button>
                        <button className='product-index-buttons' onClick={this.handleGetProduct} value="shorts">
                            Shorts
                        </button>
                        <button className='product-index-buttons' onClick={this.handleGetProduct} value="shirts">
                            Shirts
                        </button>
                        <button className='product-index-buttons' onClick={this.handleGetProduct} value="pants">
                            Pants
                        </button>
                    </div>    
                    <div className='product-index-item'>
                        {product}
                    </div>
                    {/* <div>
                        {this.props.product2}
                    </div> */}
                </div>
            </div>      
        );
    }
}

export default ProductIndex;