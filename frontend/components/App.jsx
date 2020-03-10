
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Main from './spash/main'
import UserSession from '../components/login_signup/user_session'
import NavBarContainer from './navbar/navbar_container'
import Footer from '../components/footer/footer'
import ProductShowContainer from './products/product_show.container'
import ProductIndexContainer from './products/product_index_container'


const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
            <AuthRoute path='/UserSession' component={UserSession} />
            <AuthRoute path='/ProductIndex' component={ProductIndexContainer} />
            <AuthRoute path='/ProductShow/:id' component={ProductShowContainer} />
            <Route path='/' component={Main}/>
        </Switch>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;

