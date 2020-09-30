import React from 'react';
import Body from '../body/splashpage';
import Product from '../products/product_show';
import ProductIndexItem from '../products/product_index_item'
import ProductIndex from '../products/product_index_container'

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className='main'>
                    <div>
                        <Body />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main; 