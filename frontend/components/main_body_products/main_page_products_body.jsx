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
                            <img className='front-page-items_front-image' src={window.pinkjogger}/>
                            {/* <img className='front-page-items_back-image' src={window.pinkjogger2}/> */}
                            <h3 className='product-description'>City Sweat Jogger French Terry 29"</h3>
                            <span className='price'>$118 USD</span>
                        </Link>
                    </div>
                </div>
                <div className='item'>
                    <div className='main-product-item'>
                        <Link to={`/products/183`}>
                        <img className='front-page-items_front-image' src={window.greyjogger} />
                        {/* <img className='front-page-items_back-image' src={window.greyjogger2} /> */}
                        <h3 className='product-description'>City Sweat Jogger French Terry 29"</h3>
                        <span className='price'>$118 USD</span>
                        </Link>
                    </div>                    
                </div>
                <div>
                    <div className='main-product-item'>
                        <Link to={`/products/172`}>
                        <img className='front-page-items_front-image' src={window.shorts4} />
                        {/* <img className='front-page-items_back-image' src={window.shorts3} /> */}
                        <h3 className='product-description'>T.H.E Short 9"</h3>
                        <span className='price'>$68 USD</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='main-product-item'>
                        <Link to={`/products/173`}>
                        <img className='front-page-items_front-image' src={window.shorts2} />
                        {/* <img className='front-page-items_back-image' src={window.shorts} /> */}
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