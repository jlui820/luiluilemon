import React from "react";
import { Link } from "react-router-dom";

class CartModal extends React.Component {
    render () {
        return (
            <div>
                <h3>Added To Your Bag</h3>
                <a href="#cart">View Bag</a>
            </div>
        )
    }
}

export default CartModal;