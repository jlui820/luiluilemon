import React from "react";
import { Link } from "react-router-dom";

class CartModal extends React.Component {
    render () {
        return (
            <div>
                <h3>Added To Your Bag</h3>
                <button className="view-bag" onClick={this.props.closeModal}>
                    <a href="#cart">View Bag</a>
                </button>
            </div>
        )
    }
}

export default CartModal;