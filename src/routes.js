import  React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';
import News from './pages/News/News';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
// import Loader from './components/Loader/Loader';

const Routes = () => {
    return(
        <Fragment>
            <BrowserRouter>
            <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/Donate' component={Donate} />
                    <Route exact path='/News' component={News} />
                    <Route exact path='/Login' component={Login} />
                    {/* <Route exact path='/Loader' component={Loader} /> */}
                    {/* <Route exact path="/Donate/:checkoutId" component={Checkout} /> */}
                </Switch>
            {/* </div> */}
        </BrowserRouter>
        <Footer />
    </Fragment>
    )
   
} 
export default Routes;