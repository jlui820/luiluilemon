import { combineReducers } from 'redux';
import signUpErrorsReducer from './signup_error_reducer';
import loginErrorsReducer from './login_errors_reducer'
import productErrorsReducer from './product_errors_reducer';
// import cartItemErrorsReducer from './cart_item_errors_reducer'

const errorsReducer = combineReducers({
    errorsLogin: loginErrorsReducer,
    errorsSignup: signUpErrorsReducer,
    product: productErrorsReducer,
    // cartItem: cartItemErrorsReducer
});

export default errorsReducer;