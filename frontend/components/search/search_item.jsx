import React from "react";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { product, clearSearch } = this.props

    return (
      <div className='search-products'>
        <Link onClick={clearSearch}
          to={{
            pathname: `/products/${product.id}`,
            state: {
              product: product,
            },
          }}
          className="search-product-items"
        >
        <img src={product.photo} className="search-product-items-img"/>
        <div className="search-product-items-info">
          <div className="search-product-items-name">
            {product.name}
          </div>
        </div>
        </Link>
      </div>
    );
  }
}


export default SearchItem;



