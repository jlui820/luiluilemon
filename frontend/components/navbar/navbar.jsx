import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='nav-bar-head-nav'>
                <div>
                        <img src="/assets/lululemon.png" alt=""/>
                    <ul>
                        <li className='nav-bar-nav-link' >
                            <a className='click-link' href="">WOMEN</a>
                        </li>
                        
                        <li className='nav-bar-nav-link'>
                            <a className='click-link' href="">MEN</a>
                        </li>

                        <li className='nav-bar-nav-link'>
                            <a className='click-link' href="">GIRLS</a>
                        </li>

                        <li className='nav-bar-nav-link'>
                            <a className='click-link' href="">ACCESSORIES</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;