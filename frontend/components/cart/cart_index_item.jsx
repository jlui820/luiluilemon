import React from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchCartItems()
    }

    render() {

        const {products, cartItems} = this.props

        return (
            <div className='cart-index-item-wrapper'>
                <h1 className='cart-title'>Cart.........</h1>
                <ul>
                    {cartItems.map(cartItem => {
                        return <li>{products[cartItem.product_id].name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default CartIndexItem


// const CartIndexItem = (props) => {
//     return (
//         <div className="cart_index_item">
//             <Link to={`/products/${props.product.id}`} className="cart-item">
//                 <img className="cart-item_image" src={window['prod' + props.product.id.toString()]} />
//             </Link>
//                 <h1 className="cart-name">{props.product.name}</h1>
//                 <h1 className="cart-price">$ {props.product.price}</h1>
//                 <h1> </h1>
//         </div>
//     )
// }