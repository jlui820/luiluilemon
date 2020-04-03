import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3 className='user-greeting'>HI {currentUser.email}</h3>
            <button type='button' onClick={logout}>Logout</button>
        </div >
    ) : (
            <div className='login'>
                <Link to='/UserSession' className='login-button'>SIGN IN</Link>
            </div > 
            
        )
    return (
        <div className='nav-bar-head'>
            <div className='nav-bar-head-container'>
                <div className='left-side-nav-bar'>
                    <div className='nav-bar-logo'>
                        <Link to='/'>
                            <img className='nav-logo' src={window.navlogo2} />
                        </Link>
                    </div>
                    {/* <div>
                        <li className='nav-bar-nav-link' >
                            <Link to='/' className='click-link' href="">WOMEN</Link>
                        </li>
                    </div>
                    <div>
                        <li className='nav-bar-nav-link'>
                            <Link to='/products' className='click-link' href="">MEN</Link>
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
                    </div> */}
                    <div className='dropdown-nav'>
                        <ul className='dropdrop'>
                            <li className='dropdown'>
                                <a href="">WOMEN</a>
                                <div className='dropdown-content'> 
                                    <a className='dropdown-content-list' href="">Womens Clothes</a>
                                </div>
                            </li>   
                            <li className='dropdown'>
                                <a href="#products" className='dropbtn'>MEN</a>
                                <div className='dropdown-content'> 
                                    <a className='dropdown-content-list' href="">Mens Clothes</a>
                                </div>
                            </li>   
                            <li className='dropdown'>
                                <a href="" className='dropbtn'>GIRLS</a>
                                <div className='dropdown-content'>
                                    <a className='dropdown-content-list' href="">Girls</a>
                                </div>
                            </li>   
                            <li className='dropdown'>
                                <a href="" className='dropbtn'>ACCESSORIES</a>
                                <div className='dropdown-content'>
                                    <a className='dropdown-content-list' href="">Accessories</a>
                                </div>
                            </li>   
                        </ul>    
                    </div>
                </div>

                
                <div className='right-side-nav-bar'>
                    {display}
                    <div className="line-break">|</div>
                    <div className='search'>
                        {/* <Link to='/' className='login-button'>SEARCH</Link> */}
                        <div className='search-bar'>
                            {/* <i className="fas fa-search" fa-xs></i> */}
                            <input type="text" placeholder='Search'/>
                            <div className='nav-cart'>
                                <Link to='/cart'>
                                    <i className="fas fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
