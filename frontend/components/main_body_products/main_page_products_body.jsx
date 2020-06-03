import React from 'react';
import { Link } from 'react-router-dom';


class MainBodyProducts extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        // const { products } = this.props;

        // let product = this.props.products.map((product) => {
        //   return <ProductIndexItem product={product} key={product.id} />;
        // });
        return (
            <div className='main-container'>
                <div className='item'>
                    <div className='main-product-item'>
                        <Link to={`/products/8`}>
                            <img className='front-page-items_front-image main-shirt' src={window.metal}/>
                            {/* <img className='front-page-items_back-image' src={window.pinkjogger2}/> */}
                            <h3 className='product-description'>Metal Vent Tech Short Sleeve 2.0</h3>
                            <span className='price'>$88 USD</span>
                        </Link>
                    </div>
                </div>
                <div className='item'>
                    <div className='main-product-item'>
                        <Link to={`/products/9`}>
                        <img className='front-page-items_front-image main-shirt' src={window.metal1} />
                        {/* <img className='front-page-items_back-image' src={window.greyjogger2} /> */}
                        <h3 className='product-description'>Metal Vent Tech Short Sleeve 2.0</h3>
                        <span className='price'>$88 USD</span>
                        </Link>
                    </div>                    
                </div>
                <div>
                    <div className='main-product-item'>
                        <Link to={`/products/2`}>
                        <img className='front-page-items_front-image' src={window.shorts4} />
                        {/* <img className='front-page-items_back-image' src={window.shorts3} /> */}
                        <div className='product-description'>T.H.E Short 9"</div>
                        <span className='price'>$68 USD</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='main-product-item'>
                        <Link to={`/products/3`}>
                        <img className='front-page-items_front-image' src={window.shorts2} />
                        {/* <img className='front-page-items_back-image' src={window.shorts} /> */}
                        <h3 className='product-description'>T.H.E Short 9"</h3>
                        <span className='price'>$68 USD</span>
                        </Link>
                    </div>
                    {/* <div className="swap-on-hover">
                        <img  className="swap-on-hover__front-image" src={window.shorts2}/>
                        <img className="swap-on-hover__back-image" src={window.shorts}/>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default MainBodyProducts;