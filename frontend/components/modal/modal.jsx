import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import LoginFormContainer from '../sessions/login_form_container';
import SignupFormContainer from '../sessions/signup_form_container';
import ProductShowContainer from '../products/product_show_container';

const Modal = ( {modal, closeModal } ) => {
    if (!modal) {
        return null
    }

    let component;

    switch(modal){
        case "signUp":
            component = <SignupFormContainer />;
            break;
        case "logIn":
            component = <LoginFormContainer />;
            break;
        case "addToCart":
            component = <ProductShowContainer />;
            break;
        default: 
            return null
    }
    return (
        <div className="modal-background" >
            <div className="close" onClick={closeModal}>X</div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)
