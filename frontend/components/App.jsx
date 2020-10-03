import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute} from '../util/route_util'
import Main from './spash/main'
import UserSession from '../components/login_signup/user_session'
import NavBarContainer from './navbar/navbar_container'
import Footer from '../components/footer/footer'
import ProductShowContainer from './products/product_show_container'
import ProductIndexContainer from './products/product_index_container'
import CartContainer from './cart/cart_container';
import Modal from '../components/modal/modal';
import SearchContainer from './search/search_container';
import ReactGa from 'react-ga';


function App() {

    useEffect(() => {
        ReactGa.initialize('UA-179350646-1');
        ReactGa.pageview(window.location.hash);
    }, [])

    return (
        <div>
            <header>
                <NavBarContainer />
            </header>
            <Modal />
            <Switch>
                <Route exact path='/products/:id' component={ProductShowContainer} />
                <Route path='/products' component={ProductIndexContainer} />
                <AuthRoute path='/UserSession' component={UserSession} />
                <Route exact path="/cart" component={CartContainer} />

                {/* <Route exact path="/search" component={SearchContainer} /> */}

                <Route path='/' component={Main} />
            </Switch>
            <Footer />
        </div>
    )
}


export default App;

