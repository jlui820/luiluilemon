import React from 'react';
import ProductIndexItem from './product_index_item'

class ProductIndex extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products } = this.props;

        let productList = this.props.products.map(product => {
            return <ProductIndexItem name={product.name} price={product.price} />
        })

        return (
            <div>
                {productList}
                {/* hello */}
            </div>
        );
    }
}

export default ProductIndex;