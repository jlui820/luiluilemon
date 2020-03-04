import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome User, {currentUser.first_name}</h3>
            <button type='button' onClick={logout()}>Logout</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign Up!</Link>
            <br/>
            <Link to='/login'>Log In!</Link>
        </div>
    )

    return (
        <div>
            <div>
                {display}
            </div>
        </div>
    )
}

export default Greeting;


