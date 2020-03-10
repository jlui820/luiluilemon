
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Main from './spash/main'
import UserSession from '../components/login_signup/user_session'
import NavBarContainer from './navbar/navbar_container'
import Footer from '../components/footer/footer'


const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
            <AuthRoute path='/userSession' component={UserSession} />
            <Route path='/' component={Main}/>
        </Switch>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;

{/* <AuthRoute path='/login' component={LoginFormContainer} />  
<AuthRoute path='/signup' component={SignupFormContainer} /> */}