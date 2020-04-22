import React from "react";
import { Link } from "react-router-dom";
import CartIndexItem from './cart_index_item';


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartTotal: 0
        }
    }

    componentDidMount() {
        this.props.getAllCartItems();
    }

    render() {
        // debugger
        let { products } = this.props;
        // let { product } = this.props;
        console.log(this.props.cartItems)
        console.log(this.props.currentUserId)
        return (
            
            <div className='cart-page-wrapper'>
                <div className='left-side-cart-container'>
                    <h1 className='left-side-header'>My Bag</h1>
                    <div className='below-header-left-side-container'>
                        <div className='left-side-items-container'>
                            <div className='product-index-item-picture'>
                                {/* <img className='cart-pic' src={`${product.photo}`} alt="" />   */}
                            </div>
                            <div className='left-side-middle-container'>
                                <div className='cart-product-name'>
                                    {/* {cartItems.name} */}
                                </div>
                                <div className='cart-product-color'>
                                    {/* {product.color} */}
                                </div>
                                <div className='cart-product-size'>
                                    Size 
                                    {/* {product.size} */}
                                </div>
                                <p className='cart-free-ship'>Free Shipping + Free Returns</p>
                            </div>
                            <div className='price-container'>
                                <p className='cart-item-price'>Item Price</p>
                                <div className='cart-product-price'>
                                    Price
                                    {/* {product.price} */}
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className='right-side-cart-container'>
                    <div className='cart-right-side-header'>Order Summary</div>

                </div>
            </div>
        )
    }
}

export default Cart;



















// class CartForm extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   // componentDidMount() {
//   //   // this.props.fetchCartItems();
//   // }



//   render() {
//     debugger
//     const { products, currentUser } = this.props;

//     const cart_page = currentUser ? (
//       <div className="cart_items">
//         <header className="header">
//           <h1>Shopping Cart</h1>
//         </header>
//         <br />
//         <div className="prod_block">
//           {products.map(product => (
//             <CartIndexItem product={product} key={product.id} />
//           ))}
//         </div>
//       </div>
//     ) : (
//       <div className="logged-in-cart-container">
//         <h1 className='cart-header'>Please Sign in to View Shopping Cart</h1>
//       </div>
//     );
//     return cart_page;
//   }
// }

// export default CartForm;