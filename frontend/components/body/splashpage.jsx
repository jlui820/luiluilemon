// import React from 'react';
// import { Link } from 'react-router-dom'

// class Body extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return(
//             <div className='lulu-body'>
//                 <div className='main-body-container'>
//                     <img className='splash-img' src={window.mainpageimage} alt="" srcset=""/>
//                     <div className='left-side-container-wrapper'>

//                         <div className='left-side-container'>
//                             <h1 className='left-side-container-title'>lululemon</h1>
//                             <div className='left-side-container-items'>
//                                 <ul className='left-side-container-list'>
//                                     <div className='left-side-container-list-wrapper'>
//                                         <li className='left-side-container-item'>
//                                             <Link to="/" className='click-category-link' href="">Women's What's New</Link>
//                                         </li>
//                                         <li className='left-side-container-item'>
//                                             <Link to="/" className='click-category-link' href="">All Women's</Link>
//                                         </li>
//                                         <li className='left-side-container-item'>
//                                             <Link to="/" className='click-category-link' href="">All Men's</Link>
//                                         </li>
//                                         <li className='left-side-container-item'>
//                                             <Link to="/" className='click-category-link' href="">All Girls'</Link>
//                                         </li>
//                                         <li className='left-side-container-item'>
//                                             <Link to="/" className='click-category-link' href="">All Accessories</Link>
//                                         </li>
//                                     </div>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Body;


// import React from 'react';
// import { Link } from 'react-router-dom'

// class Body extends React.Component {

//     render() {
//         return (
//             <div className='splash-main'>
//                 <div className='splash-page-main-img'>
//                     <img className='splash-img' src={window.mainpageimage} alt="" srcset="" />
//                 </div>
//                 <div className='left-side-container'>
//                     <h1 className='left-side-container-title'>lululemon</h1>
//                     <ul className='left-side-container-categories'>
//                         <li className='left-side-container-category'>Women's What's New</li>
//                         <li className='left-side-container-category'>All Women's</li>
//                         <li className='left-side-container-category'>All Men's</li>
//                         <li className='left-side-container-category'>All Girl's</li>
//                         <li className='left-side-container-category'>All Accessories</li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Body;
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
            // <div className='whole-container-wrapper'>
                <div className='splash-page-main-container'>
                    <div className='left-container'>
                        <div className='left-container-title'>luiluilemon</div>
                        <ul className='left-container-lists-wrapper'>
                            <li className='left-container-list-item'>
                                <Link to="/" className='click-category-link' href="">Women's What's New</Link>
                            </li>
                            <li className='left-container-list-item'>
                                <Link to="/" className='click-category-link' href="">All Women's</Link>
                            </li>
                            <li className='left-container-list-item'>
                                <Link to="/products" className='click-category-link' href="">All Men's</Link>
                            </li>
                            <li className='left-container-list-item'>
                                <Link to="/" className='click-category-link' href="">All Girls'</Link>
                            </li>
                            <li className='left-container-list-item'>
                                <Link to="/" className='click-category-link' href="">All Accessories</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='splash-page-main-image-container'>
                        
                            <img className='splash-page-img' src={window.mainpageimage2} alt="" />
                      
                            <img className='splash-page-img' src={window.mainpageimage3} alt=""/>
                       
                    </div>
                        {/* <div className='image-click-button'></div> */}
                </div>
            // </div>
        )
    }
}

export default Body;

