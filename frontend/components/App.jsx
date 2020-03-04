import React from 'react';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Main from './main/main'



const App = () => (
    <div>
     <Switch>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <Route path='/' component={Main}/>
    </Switch>
    </div>
);

export default App;