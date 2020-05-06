import React from "react";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // debugger
    return (
        <div>
          <Link to={`/products/${this.props.product.id}`} className="search-product-items">
            <img src={this.props.product.photoUrl} className="search-product-items-img" />
            <div className="search-product-items-info">
              {/* <h2 id="search-item-brand">{props.product.brand}</h2> */}
              <h2 className="search-product-items-name">{this.props.product.name}</h2>
            </div>
          </Link>
    </div>
    )
  }
}




export default SearchItem;


