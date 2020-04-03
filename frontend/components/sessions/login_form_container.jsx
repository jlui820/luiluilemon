import React from 'react';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';


const mapStateToProps = state => ({
    loginErrors: state.errors.session,
    formType: 'Login'
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)