import{ connect } from 'react-redux';
import CartItems from './cart_items';
import { fetchCartItems, updateCart, removeCartItem} from '../../actions/cart_actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateCart: cartItem => dispatch(updateCart(cartItem)),
    removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);