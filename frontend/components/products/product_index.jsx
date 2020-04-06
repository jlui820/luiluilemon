import React from 'react';
import ProductIndexItem from './product_index_item_container'

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleGetProduct = this.handleGetProduct.bind(this)
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

    render() {
        const { products } = this.props;
        if(!products) return null

        let product = this.props.products.map(product => {
            return <ProductIndexItem product={product} key={product.id}/>
        })

        return (
            <div>
                <div className='product-index-item'>
                    {product}
                </div>
                <div className="index-body-sidebar-7">
                    <button onClick={this.handleGetProduct} value="shorts">
                        SHORTS
                    </button>
                    <button onClick={this.handleGetProduct} value="shirts">
                        SHIRTS
                    </button>
                    <button onClick={this.handleGetProduct} value="pants">
                        PANTS
                    </button>
                </div>
            </div>      
        );
    }
}

export default ProductIndex;