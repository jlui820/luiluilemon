import React from 'react';
import CartIndexItem from './cart_index_item';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

//   componentDidMount() {
//     this.props.fetchProduct(this.props.match.params.id);
//   }
  // componentDidMount

  // get /cartitems/id
  // pass in id

  // back end controller
  // query db for cart id
  // grab all products with that cart id

  // ---------------

  // add in entire product
  //add cart id to product table can be null
  // update product cart id with current id

  // cart
  // user_id -cart belongs to user - maybe dont need

  // product table- add cart_id
  //need cart item id
  // products belong to cart Items
  // cart items has many products
  // change in model

  // cart item controller
  // create cart item
  // send up same product

  // front end- add proudct to cart slice of state

  // container- pass in and map over it.

  render() {
    let cartItems = this.props.cartItems.map((cartItem, idx) => {
      return (
        <CartIndexItem
          cartItem={cartItem}
          currentUser={this.props.currentUser}
        />
      );
      // debugger
    });
    console.log(cartItems);
    debugger;
    return (
      <div className="cart-index-wrapper">
        <div className="left-side-contaner">
          <h1 className="left-side-head">My Bag</h1>
        </div>
        <div className="cart-index-item">{cartItems}</div>
        <div className="right-side-container">
          <div className="right-side-head">Order Summary</div>
        </div>
      </div>
    );
  }
}

export default CartIndex;