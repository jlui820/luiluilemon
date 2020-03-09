import React from 'react';
import Body from '../body/splashpage';
import MainBodyProducts from '../main_body_products/main_page_products_body'
import Greeting from '../greeting/greeting'

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className='main'>
                    <header>

                    </header>
                    <div>
                        {/* <Greeting /> */}
                        <Body />
                        <MainBodyProducts />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main; 