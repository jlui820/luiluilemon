import React from "react";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    
    return (
      // <div className='search-products'>
        <Link onClick={this.props.clearSearch} to={`/products/${this.props.product.id}`} className="search-product-items">
            <img src={this.props.product.photo} className="search-product-items-img" />
            <div className="search-product-items-info">
                <div className="search-product-items-name">{this.props.product.name}</div>
            </div>
        </Link>
      // </div>
    )
  }
}


export default SearchItem;



