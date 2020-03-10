// import React from 'react';
// import { Link } from 'react-router-dom';

// class MainBodyProducts extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className='main-body-products-container'>
//                 <div className='main-products-container'>
//                     <div className='main-products-items'>
//                         <div className='main-product-item'>
//                             <Link></Link>
//                             <h3 className='product-description'>ProductDescriptionGoesHere</h3>
//                             <span className='price'>PriceGoesHere</span>
//                         </div>
//                         <div className='main-product-item'>
//                             <Link></Link>
//                             <h3 className='product-description'>ProductDescriptionGoesHere</h3>
//                             <span className='price'>PriceGoesHere</span>
//                         </div>
//                         <div className='main-product-item'>
//                             <Link></Link>
//                             <h3 className='product-description'>ProductDescriptionGoesHere</h3>
//                             <span className='price'>PriceGoesHere</span>
//                         </div>
//                         <div className='main-product-item'>
//                             <Link></Link>
//                             <h3 className='product-description'>ProductDescriptionGoesHere</h3>
//                             <span className='price'>PriceGoesHere</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default MainBodyProducts;


import React from 'react';
import { Link } from 'react-router-dom';

class MainBodyProducts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='main-container'>
                <div className='item'>
                    <div className='main-product-item'>
                        <img className='front-page-items' src={window.shorts}/>
                        <h3 className='product-description'>T.H.E Short 9"</h3>
                        <span className='price'>$68 USD</span>
                    </div>
                </div>
                <div className='item'>
                    <div className='main-product-item'>
                        <img className='front-page-items' src={window.shorts2} />
                        <h3 className='product-description'>T.H.E Short 9"</h3>
                        <span className='price'>$68 USD</span>
                    </div>                    
                </div>
                <div>
                    <div className='main-product-item'>
                        <img className='front-page-items' src={window.shorts3} />
                        <h3 className='product-description'>T.H.E Short 9"</h3>
                        <span className='price'>$68 USD</span>
                    </div>
                </div>
                <div>
                    <div className='main-product-item'>
                        <img className='front-page-items' src={window.shorts4} />
                        <h3 className='product-description'>T.H.E Short 9"</h3>
                        <span className='price'>$68 USD</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBodyProducts;