// // import React from "react";
// // import { Link } from "react-router-dom";
// // import CartIndexItem from './cart_index_item';
// // import CartContainer from './cart_container';


// // class Cart extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             cartTotal: 0
// //         }
// //     }

// //     componentDidMount() {
// //         this.props.getAllCartItems();
// //     }

// //     render() {
// //         // debugger
// //         // console.log(this.props.cartItems)
// //         let { cartItems } = this.props;

// //         // let cartItem = this.props.cartItems.map((cartItem) => {
// //         //   return <CartIndexItem product={cartItem} key={cartItem.id} />;
// //         // });     
// //         return (
// //           <div className="cart-page-wrapper">
// //           //   <CartContainer />
// //           //   <div className="left-side-cart-container">
// //           //     <h1 className="left-side-header">My Bag</h1>
// //           //     <div className="below-header-left-side-container">
// //           //       <div className="left-side-items-container">
// //           //         <div className="product-index-item-picture"></div>
// //           //         <div className="left-side-middle-container">
// //           //           {/* <div className='cart-product-name'>
                                   
// //           //                       </div>
// //           //                       <div className='cart-product-color'>
                                   
// //           //                       </div>
// //           //                       <div className='cart-product-size'>
// //           //                           Size 
                                  
                                    
// //           //                       </div> */}
// //           //           {/* <p className='cart-free-ship'>Free Shipping + Free Returns</p> */}
// //           //         </div>
// //           //         <div className="price-container">
// //           //           <p className="cart-item-price">Item Price</p>
// //           //           <div className="cart-product-price">Price</div>
// //           //         </div>
// //           //       </div>
// //           //     </div>
// //           //   </div>
// //           //   <div className="right-side-cart-container">
// //           //     <div className="cart-right-side-header">Order Summary</div>
// //           //   </div>
// //           // </div>
// //         );
// //     }
// // }

// // export default Cart;





// import React from "react";
// import { Link } from "react-router-dom";
// import CartIndexItem from '../cart_items/cart_index_item';


// class Cart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cartTotal: 0
//         }
//     }

//     componentDidMount() {
//         this.props.getAllCartItems();
//     }

//     render() {
//         // debugger
//         // let { products } = this.props;
//         // let { product } = this.props;
//         console.log(this.props.cartItems)
        
//         return (
            
//             <div className='cart-page-wrapper'>
//                 <div className='left-side-cart-container'>
//                     <h1 className='left-side-header'>My Bag</h1>
//                     <div className='below-header-left-side-container'>
//                         <div className='left-side-items-container'>
//                             <div className='product-index-item-picture'>
//                                 {/* <img className='cart-pic' src={`${product.photo}`} alt="" />   */}
//                             </div>
//                             <div className='left-side-middle-container'>
//                                 <div className='cart-product-name'>
//                                     {/* {cartItems.name} */}
//                                 </div>
//                                 <div className='cart-product-color'>
//                                     {/* {product.color} */}
//                                 </div>
//                                 <div className='cart-product-size'>
//                                     Size 
//                                     {/* {product.size} */}
//                                 </div>
//                                 <p className='cart-free-ship'>Free Shipping + Free Returns</p>
//                             </div>
//                             <div className='price-container'>
//                                 <p className='cart-item-price'>Item Price</p>
//                                 <div className='cart-product-price'>
//                                     Price
//                                     {/* {product.price} */}
//                                 </div>
//                             </div>
//                         </div>
//                      </div>
//                 </div>
//                 <div className='right-side-cart-container'>
//                     <div className='cart-right-side-header'>Order Summary</div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default Cart;




import React from 'react';
import CartIndexItem from './cart_index_item_container';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            // render: [false],
            grandTotal: 0
        }        

        this.uniqueProducts = this.uniqueCartItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.total = this.total.bind(this);
    }

    componentDidMount() {
        this.props.getAllCartItems();
    }

    deleteItem(cartItem) {
        let deleteableId = cartItem.deleteableId

        this.props.deleteCartItem(deleteableId)
    }

    total(cartItem) {
        return cartItem[1].product.price * cartItem[1].quantity
    }

    uniqueCartItems(){
        let { userCartItems } = this.props
        let newCartItems = {}
        userCartItems.forEach(userCartItem => {
            if (newCartItems[userCartItem.product.id]) {
                newCartItems[userCartItem.product.id].quantity += userCartItem.quantity
            } else {
                newCartItems[userCartItem.product.id] = { product: userCartItem.product, quantity: userCartItem.quantity, deleteableId: userCartItem.id}
            }
        })
        
        return newCartItems
    }



    render() {
        const { cartItems } = this.props;
        // debugger

        // let cartItem = this.props.cartItems.map((cartItem, idx) => {
        //   return <CartIndexItem key={idx}/>
        // });

        // debugger

        const { currentUser } = this.props;

        const cart_page = currentUser ? (
            
          <div className="whole-cart-page-wrapper">
                <div className='cart-body-wrapper'>
                    <div className='left-side-header'>
                        <h1 className="cart-header">My Bag</h1>
                    </div>
                    <div className="left-side-items">
                        <div className="left-cart-index-item-div">
                            {this.props.cartItems.map((cartItem, idx) => {
                            let product = cartItem.product;
                            return (
                                <div className='cart-product-info'>
                                    <Link className="cart-product-link" to={`/products/${product.id}`}>
                                        <img className="cart-product-image" src={product.photoUrl} alt="" />
                                    </Link>
                                    <div className='cart-product-description'>
                                        <div className='prod-des-top'>

                                            <div className='cart-product-name-container'>
                                                <Link className="cart-product-link" to={`/products/${product.id}`}>
                                                    <div className='cart-product-name'>{product.name}</div>
                                                </Link>                                      
                                            </div>
                                            <div className='cart-product-color-container'>
                                                <div className='cart-product-color'>{product.color}</div>
                                            </div>
                                            <div className='cart-sizing-price'>
                                                <div className='cart-product-size-container'>
                                                    <div className='cart-product-size'>
                                                        Size {product.size}
                                                    </div>
                                                </div>
                                                <div className='price-quantity'>                                      
                                                    <div className='cart-item-price'>
                                                        <p className='cart-item-price'>Item Price</p>
                                                        <div>${product.price}</div>
                                                    </div>
                                                    <div className='cart-quantity'>
                                                        <p className='cart-item-quantity'>Quantity</p>
                                                        <div>{product.quantity}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='ship-desc'>
                                            <p>Free Shipping + Free returns</p>
                                            <button className="delete-cart-item" onClick={() => this.props.deleteCartItem(cartItem.deleteableId)}>Remove</button>
                                        </div>
                                    </div>
                                </div>);
                                
                            })}
                            <br />
                        </div>
                    </div>
                </div>
                <div className="right-side-checkout">
                    <p className='cart-summary'>Order Summary</p>
                    <button className="checkout">CHECKOUT</button>
                </div>
          </div>
        ) : (
          <div className="header">
            <h1>Please Sign in to View Shopping Cart</h1>
          </div>
        );
        return (
            cart_page
        )
    }
}


export default Cart;



//   showLess(content) {
//         if (content.length > 16) {
//             return (
//                 <h1 className="public-name">{content.slice(0, 16) + "..."}</h1>
//             )
//         } else {
//             return (
//                 <h1 className="public-name">{content}</h1>
//             )
//         }
//     }





// <div className="buy-page">
//   <div className="new-cart-div">
//     {cartItemsObj.map((cartItem) => {
//       let product = cartItem[1].product;
//       return (
//         <div className="cart-item-div">
//           <Link className="public-product-links" to={`/products/${product.id}`}>
//             <img className="idx-images" src={product.photoUrl} alt="" />
//             {this.showLess(product.name)}
//           </Link>
//           <br />
//           <div className="quantity">
//             <label className="quantity-word">Quantity: </label>
//             <div className="quantity-num">{cartItem[1].quantity}</div>
//           </div>
//           <div className="quantity">
//             <div className="quantity-word">Total: </div>
//             <div className="quantity-num">${this.total(cartItem)}</div>
//           </div>
//           <button
//             className="delete-item-in-cart"
//             onClick={() => this.props.deleteCartItem(cartItem[1].deleteableId)}
//           >
//             Delete Item
//           </button>
//         </div>
//       );
//     })}
//   </div>
// </div>;