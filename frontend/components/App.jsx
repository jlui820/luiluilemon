
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute} from '../util/route_util'
import Main from './spash/main'
import UserSession from '../components/login_signup/user_session'
import NavBarContainer from './navbar/navbar_container'
import Footer from '../components/footer/footer'
import ProductShowContainer from './products/product_show_container'
import ProductIndexContainer from './products/product_index_container'
import CartContainer from './cart/cart_container';

import SearchContainer from './search/search_container';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
            <Route exact path='/products/:id' component={ProductShowContainer} />
            <Route path='/products' component={ProductIndexContainer} />
            <AuthRoute path='/UserSession' component={UserSession} />
            <Route exact path="/cart" component={CartContainer} />

            {/* <Route exact path="/search" component={SearchContainer} /> */}

            <Route path='/' component={Main} />
        </Switch>
            <Footer />
        {/* <footer>
        </footer> */}
    </div>
);

export default App;

