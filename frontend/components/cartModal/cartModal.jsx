import React from "react";
import { Link } from "react-router-dom";

class CartModal extends React.Component {

    render () {
        return (
            <div className='cart-modal-container'onClick={this.props.closeModal}>
                <h3 className='cart-modal-header'>Added To Your Bag</h3>
                 <a className='cart-modal-button' onClick={this.props.closeModal} href="#cart">View Bag</a>
            </div>
        )
    }
}

export default CartModal;