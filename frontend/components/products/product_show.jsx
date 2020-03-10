import React from 'react';

class Product extends React.Component {
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render() {
        return (
           
        )
    }
}

export default Product; 