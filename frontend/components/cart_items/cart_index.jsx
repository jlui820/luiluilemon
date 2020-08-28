import React from 'react';
import CartIndexItem from './cart_index_item';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cartItems = this.props.cartItems.map((cartItem, idx) => {
      return (
        <CartIndexItem
          cartItem={cartItem}
          currentUser={this.props.currentUser}
        />
      );
    });

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