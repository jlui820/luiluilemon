import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import NavBar from '../navbar/navbar'
import Body from '../body/body'

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <header>
                    <NavBar />
                    
                    {/* <GreetingContainer /> */}
                </header>
                <div>
                    <Body />
                </div>
            </div>
        )
    }
}

export default Main; 