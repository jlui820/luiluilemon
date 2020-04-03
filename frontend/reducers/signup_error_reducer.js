import { SIGNUP_RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case SIGNUP_RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};
