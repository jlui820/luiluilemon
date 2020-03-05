import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (        
            <div className='nav-bar-head'>
                <div className='nav-bar-head-container'>
                    <div className='left-side-nav-bar'>
                        <div className='nav-bar-logo'>
                           <img className='nav-logo' src={window.navlogo} />
                        </div>   
                        <div>
                            <li className='nav-bar-nav-link' >
                                <Link className='click-link' href="">WOMEN</Link>
                            </li>
                        </div>   
                        <div>
                            <li className='nav-bar-nav-link'>
                                <Link className='click-link' href="">MEN</Link>
                            </li>
                        </div>   
                            
                        <div>
                            <li className='nav-bar-nav-link'>
                                <Link className='click-link' href="">GIRLS</Link>
                            </li>
                        </div>   
                        <div>
                            <li className='nav-bar-nav-link'>
                                <Link className='click-link' href="">ACCESSORIES</Link>
                            </li>
                        </div>  
                    </div>
                    <div className='right-side-nav-bar'>
                        <div className='login'>
                            <Link className='login-button'>Login</Link>
                        </div>
                        <div className='search'>
                            <Link className='login-button'>search</Link>
                        </div>
                    </div>
                 </div>           
            </div>
            
        )
    }
}

export default NavBar;

//text decoration : none.. remove underline put on parent?
//ReactLink for the links