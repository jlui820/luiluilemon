import React from 'react';
import CartIndexItem from './cart_index_item_container';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      productQty: 0,
    };

    // this.uniqueProducts = this.uniqueCartItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.total = this.total.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  componentDidMount() {
    this.props.getAllCartItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
      this.updateTotalPrice();
    }
  }

  deleteItem() {
      debugger
      this.props.deleteCartItem(cartItems.id)
  }

  total(cartItem) {
    return cartItem.product.price * cartItem.quantity;
  }
  

    updateTotalPrice() {
    //   debugger
        let sum = 0;
        let prodQty = 0;

        this.props.cartItems.forEach(cartItem => {
            if (cartItem.product) {
            sum += cartItem.quantity * cartItem.product.price;
        }
            prodQty++;
        })

        this.setState({total: sum})
        this.setState({productQty: prodQty})
    }


    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
  render() {
    const { cartItems } = this.props;
    const { currentUser } = this.props;

    const cart_page = currentUser ? (
        <div className="whole-cart-page-wrapper">
        <div className="cart-body-wrapper">
          <div className="left-side-header">
            <h1 className="cart-header">My Bag</h1>
            <div className='cart-items-qty'>{this.state.productQty} Items</div>
          </div>
          <div className="left-side-items">
            <div className="left-cart-index-item-div">
              {cartItems.map((cartItem) => {
                let product = cartItem.product;
                return (
                  <div className="cart-product-info" key={cartItem.id}>
                    <Link className="cart-product-link" to={`/products/${product.id}`}>
                      <img className="cart-product-image" src={product.photoUrl} alt=""/>
                    </Link>
                    <div className="cart-product-description">
                      <div className="prod-des-top">
                        <div className="cart-product-name-container">
                          <Link className="cart-product-link" to={`/products/${product.id}`}>
                            <div className="cart-product-name">
                              {product.name}
                            </div>
                          </Link>
                        </div>
                        <div className="cart-product-color-container">
                          <div className="cart-product-color">
                            {product.color}
                          </div>
                        </div>
                        <div className="cart-sizing-price">
                          <div className="cart-product-size-container">
                            <div className="cart-product-size">
                              Size {product.size}
                            </div>
                          </div>
                          <div className="price-quantity">
                            <div className="cart-item-price">
                              <p className="cart-item-price">Item Price</p>
                              <div className="cart-price">${product.price}</div>
                            </div>
                            <div className="cart-quantity">
                              <p className="cart-item-quantity">Quantity</p>
                              <div className="cart-quantity">
                                {cartItem.quantity}
                              </div>
                            </div>
                            <div className="cart-total">
                              <p className="cart-item-total">Total Price</p>
                              <div className="cart-item-total-price">
                                ${this.total(cartItem)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ship-desc">
                        <p>Free Shipping + Free returns</p>
                        {/* <input  type="submit" onClick={() => this.props.deleteCartItem(cartItem.id)}/>Remove */}
                        <button
                          className="delete-cart-item"
                          onClick={() => this.props.deleteCartItem(cartItem.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <br />
            </div>
          </div>
        </div>
        <div className="right-side-checkout">
          <p className="cart-summary">Order Summary</p>
          <div className='cart-total-continer'>
            <p className='cart-total-text'>Total</p>
            <div className="cart-total">USD ${this.numberWithCommas(this.state.total)}</div>
          </div>
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    ) : (
      <div className="signed-out-cart">
        <h1 className="signed-out-message">Give your bag some love!</h1>
        <a className="shop-button" href="#products">
          SHOP WHAT'S NEW
        </a>
      </div>
    );
    return cart_page;
  }
}


export default Cart;


