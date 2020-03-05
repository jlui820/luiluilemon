import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import NavBar from '../navbar/navbar'

class Main extends React.Component {
    render() {
        return (
            <header>
                <NavBar />
                <br/>
                <h1 className='Main'>LuluLemon</h1>
                <GreetingContainer />
            </header>
        )
    }
}

export default Main; 