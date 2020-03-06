import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import NavBar from '../navbar/navbar'
import Body from '../body/body'
import MainBodyProducts from '../main_body_products/main_products_body'

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <header>
                    <NavBar />
                    <GreetingContainer />
                </header>
                <div>
                    <Body />
                    <MainBodyProducts />
                </div>
            </div>
        )
    }
}

export default Main; 