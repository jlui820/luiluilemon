import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import { Route } from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <h1>LuluLemon</h1>
            <GreetingContainer />
        </header>

        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignupFormContainer} />
    </div>
);

export default App;