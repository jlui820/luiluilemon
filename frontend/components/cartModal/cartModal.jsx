import React from "react";
import { Link } from "react-router-dom";

class CartModal extends React.Component {

    render () {
        return (
            <div className='cart-modal-container'>
                <h3 className='cart-modal-header'>Added To Your Bag</h3>
                <button className="view-bag" onClick={this.props.closeModal}>
                    <a className='cart-modal-button' href="#cart">View Bag</a>
                </button>
            </div>
        )
    }
}

export default CartModal;