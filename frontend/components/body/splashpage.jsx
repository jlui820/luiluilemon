import React from 'react';
import { Link } from 'react-router-dom'


class Body extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        $(function () {
          $(".splash-page-main-image-container img:gt(0)").hide();
          setInterval(function () {
            $(".splash-page-main-image-container :first-child")
              .fadeOut()
              .next("img")
              .fadeIn()
              .end()
              .appendTo(".splash-page-main-image-container");
          }, 6000);
        });
        return (
            <div className='splash-page-main-container'>
                <div className='left-container'>
                    <div className='left-container-title'>luiluilemon</div>
                    <ul className='left-container-lists-wrapper'>
                        <li className='left-container-list-item'>
                            <Link to="" className='click-category-link' href="">All Women's</Link>
                        </li>
                        <li className='left-container-list-item'>
                            <Link to="/products" className='click-category-link mens-clothes' href="">All Men's</Link>
                        </li>
                        <li className='left-container-list-item'>
                            <Link to="" className='click-category-link' href="">All Girls'</Link>
                        </li>
                    </ul>
                </div>
                <div className='splash-page-main-image-container'>
                    <img className='splash-page-img' src={window.mainpageimage2} alt="" />
                    <img className='splash-page-img' src={window.mainpageimage3} alt=""/>
                </div>                 
            </div>
        )
    }
}

export default Body;

