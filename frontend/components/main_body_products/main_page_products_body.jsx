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
        // debugger
        // const { products } = this.props;

        // let product = this.props.products.map((product) => {
        //   return <ProductIndexItem product={product} key={product.id} />;
        // });

        return (
            <div className='main-container'>
                <div className='item'>
                    <div className='main-product-item'>
                        <Link to={`/products/182`}>
                            <img className='front-page-items' src={window.pinkjogger}/>
                            <h3 className='product-description'>City Sweat Jogger French Terry 29"</h3>
                            <span className='price'>$118 USD</span>
                        </Link>
                    </div>
                </div>
                <div className='item'>
                    <div className='main-product-item'>
                        <Link to={`/products/183`}>
                        <img className='front-page-items' src={window.greyjogger} />
                        <h3 className='product-description'>City Sweat Jogger French Terry 29"</h3>
                        <span className='price'>$118 USD</span>
                        </Link>
                    </div>                    
                </div>
                <div>
                    <div className='main-product-item'>
                        <Link to={`/products/172`}>
                        <img className='front-page-items' src={window.shorts3} />
                        <h3 className='product-description'>T.H.E Short 9"</h3>
                        <span className='price'>$68 USD</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='main-product-item'>
                        <Link to={`/products/173`}>
                        <img className='front-page-items' src={window.shorts4} />
                        <h3 className='product-description'>T.H.E Short 9"</h3>
                        <span className='price'>$68 USD</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBodyProducts;