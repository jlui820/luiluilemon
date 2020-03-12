
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import Main from './spash/main'
import UserSession from '../components/login_signup/user_session'
import NavBarContainer from './navbar/navbar_container'
import Footer from '../components/footer/footer'
import ProductShowContainer from './products/product_show_container'
import ProductIndexContainer from './products/product_index_container'


const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
            <Route exact path='/products/:id' component={ProductShowContainer} />
            <ProtectedRoute path='/products' component={ProductIndexContainer} />
            <AuthRoute path='/UserSession' component={UserSession} />
            <Route path='/' component={Main} />
        </Switch>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;

