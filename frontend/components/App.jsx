
import React from 'react';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Main from './main/main'
import UserSession from '../components/login_signup/user_session'



const App = () => (
    <div>
     <Switch>
        {/* <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} /> */}
        <Route path='/userSession' component={UserSession} />
        <Route path='/' component={Main}/>
    </Switch>
    </div>
);

export default App;