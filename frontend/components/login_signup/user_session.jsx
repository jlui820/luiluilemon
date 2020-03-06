import React from 'react';
import LoginFormContainer from '../sessions/login_form_container'
import SignupFormContainer from '../sessions/signup_form_container'

class UserSession extends React.Component {
    render() {
        return (
            <div className='profile-container-wrapper'>
                <div classname='profile-container'>
                    <div clasName='profile-container-top-sectioin'>
                        <h1 className='profile-container-header'>Let's be friends with benefits</h1>
                        <p className='profile-container-body'>Here are just a few ways we can make it all about you</p>
                        <div className='profile-container-icons-holder'>
                            <div className='profile-container-icon'>
                                <div className='icon-log'></div>
                                <p className='icon-description'></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <LoginFormContainer />
                        <SignupFormContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSession;