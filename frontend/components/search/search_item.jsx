import React from "react";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div>
          <Link to={`/products/${this.props.product.id}`} className="user-ordered-items">
            <img src={this.props.product.photoUrl} className="user-ordered-items-img" />
            <div className="user-ordered-items-info">
              {/* <h2 id="search-item-brand">{props.product.brand}</h2> */}
              <h2 className="user-ordered-items-name">{this.props.product.name}</h2>
            </div>
          </Link>
    </div>
    )
  }
}




export default SearchItem;


// const SearchItem = (props) => {
//   return (
//     <div>
//       <Link to={`/products/${props.product.id}`} className="user-ordered-items">
//         <img src={props.product.photoUrl} className="user-ordered-items-img" />
//         <div className="user-ordered-items-info">
//           {/* <h2 id="search-item-brand">{props.product.brand}</h2> */}
//           <h2 className="user-ordered-items-name">{props.product.name}</h2>
//         </div>
//       </Link>
//     </div>
//   );
// };