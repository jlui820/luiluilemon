import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="side-box">
                <div className='nav-bar-head-nav'>
                    <div className='left-side-nav-bar'>
                        <ul className="left-side-list">
                        <img className="nav-logo" src="/assets/lululemon.png" alt=""/>
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
            </div>
        )
    }
}

export default NavBar;

//text decoration : none.. remove underline put on parent?
//ReactLink for the links