import React from "react";
import CartIndexItem from "./cart";
import { Link } from "react-router-dom";

class CartForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   // this.props.fetchCartItems();
  // }

  render() {
    const { products, currentUser } = this.props;

    const cart_page = currentUser ? (
      <div className="cart_items">
        <header className="header">
          <h1>Shopping Cart</h1>
        </header>
        <br />
        <div className="prod_block">
          {products.map(product => (
            <CartIndexItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    ) : (
      <div className="header">
        <h1>Please Sign in to View Shopping Cart</h1>
      </div>
    );
    return cart_page;
  }
}

export default CartForm;
