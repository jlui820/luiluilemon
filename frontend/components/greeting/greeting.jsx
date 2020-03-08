import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome, {currentUser.first_name}</h3>
            <button type='button' onClick={logout()}>Logout</button>
        </div>
    ) : (
        <div>
            <div className='greeting-container-links'>
                <Link to='/signup'>Sign Up!</Link>
                <br/>
                <Link to='/login'>Log In!</Link>
            </div>
        </div>
    )

    return (
        <div>
            <div>
                {display}

                <h3>Welcome, {currentUser}</h3>
            </div>
        </div>
    )
}

export default Greeting;


