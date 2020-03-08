import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
        const display = currentUser ? (
            <div>
                <h3>Welcome, {currentUser.first_name}</h3>
                <button type='button' onClick={logout()}>Logout</button>
            </div>
        ) : (
            <div>
                <Link to='/userSession'></Link>
            </div>
        )
    
        return (
            <div className='nav-bar-head'>
                <div>
                    {display}
                </div>
                <div className='nav-bar-head-container'>
                    <div className='left-side-nav-bar'>
                        <div className='nav-bar-logo'>
                            <Link to='/'>
                                <img className='nav-logo' src={window.navlogo} />
                            </Link>
                        </div>
                        <div>
                            <li className='nav-bar-nav-link' >
                                <Link to='/' className='click-link' href="">WOMEN</Link>
                            </li>
                        </div>
                        <div>
                            <li className='nav-bar-nav-link'>
                                <Link to='/' className='click-link' href="">MEN</Link>
                            </li>
                        </div>

                        <div>
                            <li className='nav-bar-nav-link'>
                                <Link to='/' className='click-link' href="">GIRLS</Link>
                            </li>
                        </div>
                        <div>
                            <li className='nav-bar-nav-link'>
                                <Link to='/' className='click-link' href="">ACCESSORIES</Link>
                            </li>
                        </div>
                    </div>
                    <div className='right-side-nav-bar'>
                        <div className='login'>
                            <Link to='/userSession' className='login-button'>Login</Link>
                        </div>
                        <div className="line-break">|</div>
                        <div className='search'>
                            <Link to='/' className='login-button'>Search</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
}

export default NavBar;