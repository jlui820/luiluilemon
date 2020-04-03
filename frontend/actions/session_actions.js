import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const LOGIN_RECEIVE_ERRORS = "LOGIN_RECEIVE_ERRORS";
export const SIGNUP_RECEIVE_ERRORS = "SIGNUP_RECEIVE_ERRORS";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,  
});

export const receiveLoginErrors = errors => {
    return {
        type: LOGIN_RECEIVE_ERRORS,
        errors
    }
};

export const receiveSignUpErrors = errors => {
    return {
        type: SIGNUP_RECEIVE_ERRORS,
        errors
    }
};

export const signup = user => dispatch => (
    APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSignUpErrors(error.responseJSON)))
)

export const login = user => dispatch => {  
    return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveLoginErrors(error.responseJSON)))
}

export const logout = () => dispatch => (
    APIUtil.logout()
    .then((user) => dispatch(logoutCurrentUser()))
)