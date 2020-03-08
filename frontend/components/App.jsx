
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Main from './spash/main'
import UserSession from '../components/login_signup/user_session'
import NavBar from './navbar/navbar'


const App = () => (
    <div>
        <header>
            <NavBar />
        </header>
     <Switch>
        {/* <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} /> */}
        <Route path='/userSession' component={UserSession} />
        <Route path='/' component={Main}/>
    </Switch>
    </div>
);

export default App;