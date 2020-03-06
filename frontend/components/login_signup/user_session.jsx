import React from 'react';
import LoginFormContainer from '../sessions/login_form_container'
import SignupFormContainer from '../sessions/signup_form_container'

class UserSession extends React.Component {
    render() {
        return (
            <div>
                <LoginFormContainer />
                <SignupFormContainer />
            </div>
        )
    }
}

export default UserSession;