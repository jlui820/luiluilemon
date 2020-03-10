import React from 'react';
import Body from '../body/splashpage';
import MainBodyProducts from '../main_body_products/main_page_products_body'
// import ProductIndexItem from '../products/product_index_item'
import Product from '../products/product_show'

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className='main'>
                    <header>

                    </header>
                    <div>
                        <Body />
                        <MainBodyProducts />
                        {/* <ProductIndexItem /> */}
                        <Product />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main; 