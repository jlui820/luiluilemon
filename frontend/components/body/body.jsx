import React from 'react';
import { Link } from 'react-router-dom'

class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='lulu-body'>
                <div className='main-body-container'>
                    <div className='left-side-container-wrapper'>
                        <div className='left-side-container'>
                            <h1 className='left-side-container-title'>lululemon</h1>
                            <div className='left-side-container-items'>
                                <ul className='left-side-container-list'>
                                    <div className='left-side-container-list-wrapper'>
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
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;
