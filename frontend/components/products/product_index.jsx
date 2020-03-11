import React from 'react';
import ProductIndexItem from './product_index_item'

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products } = this.props;
        if(!products) return null


        let productList = this.props.products.map(product => {
            return <ProductIndexItem product={product} key={product.id}/>
        })

        return (
            <div className='product-index-item'>
                {productList}
            </div>
        );
    }
}

export default ProductIndex;