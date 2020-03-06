import React from 'react';
import { Link } from 'react-router-dom'

class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='main-body-container'>
                <div className='main-body-image'>
                    {/* <img className="main-image" src="/assets/mainpage.jpg" alt="" /> */}
                        <img className='main-image' src={window.mainpageimage} />
                </div>
                <div className='left-side-container'>
                    <h1>lululemon</h1>
                    <div className='left-side-container-items'>
                        <ul className='left-side-container-list'>
                            <li className='left-side-container-item'>
                                <Link to="/" className='click-category-link' href="">Women's What's New</Link>
                            </li>
                            <li className='left-side-container-item'>
                                <Link to="/" className='click-category-link' href="">All Women's</Link>
                            </li>
                            <li className='left-side-container-item'>
                                <Link to="/" className='click-category-link' href="">All Men's</Link>
                            </li>
                            <li className='left-side-container-item'>
                                <Link to="/" className='click-category-link' href="">All Girls'</Link>
                            </li>
                            <li className='left-side-container-item'>
                                <Link to="/" className='click-category-link' href="">All Accessories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;
