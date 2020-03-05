import React from 'react';


class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='main-body-container'>
                <img className="main-body-image" src="/assets/lulumainbodyimage.jpg" alt="" />
                <div className='side-nav'>
                    <h1>lululemon</h1>
                    <ul className="side-nav-links">
                        <li>
                            <a className=''>What's New</a>
                        </li>
                        <li>
                            <a className=''>All Women's</a>
                        </li>
                        <li>
                            <a className=''>All Men's</a>
                        </li>
                        <li>
                            <a className=''>All Girls</a>
                        </li>
                        <li>
                            <a className=''>All Accessories</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Body;
