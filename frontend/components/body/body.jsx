import React from 'react';


class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='whole-page-container'>
                <div className='main-body-container'>
                    <div className='main-body-image'>
                        <img className="main-image" src="/assets/mainpage.jpg" alt="" />
                    </div>
                    <div className='left-side-container'>
                        <h1>lululemon</h1>
                        <div className='left-side-container-items'>
                            <ul className='left-side-container-list'>
                                <li className='left-side-container-item'>
                                    <a className='click-category-link' href="">Women's What's New</a>
                                </li>
                                <li className='left-side-container-item'>
                                    <a className='click-category-link' href="">All Women's</a>
                                </li>
                                <li className='left-side-container-item'>
                                    <a className='click-category-link' href="">All Men's</a>
                                </li>
                                <li className='left-side-container-item'>
                                    <a className='click-category-link' href="">All Girls'</a>
                                </li>
                                <li className='left-side-container-item'>
                                    <a className='click-category-link' href="">All Accessories</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;
