import React from "react";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // debugger
    return (
      <div className='search-products'>
        <Link to={`/products/${this.props.product.id}`} className="search-product-items">
    
          <img src={this.props.product.photo} className="search-product-items-img" />

          <div className="search-product-items-info">
              <div className="search-product-items-name">{this.props.product.name}</div>
          </div>
          
        </Link>
      </div>
    )
  }
}




export default SearchItem;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const SearchItem = props => {
//   debugger
//     return(
//             <Link to={`/products/${props.product.id}`} className="user-ordered-items">
//                 <img src={props.product.photoUrl} className="user-ordered-items-img"/>
//                 <div className="user-ordered-items-info">
                    
//                     <h2 className="user-ordered-items-name">{props.product.name}</h2>
//                 </div>
//             </Link>    
//     )
// }

// export default SearchItem;