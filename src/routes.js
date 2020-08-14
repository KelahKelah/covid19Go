import  React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';
import News from './pages/News/News';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
<<<<<<< HEAD
import Loader from './components/Loader/Loader';
=======
import Success from "./components/Success/Success";
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4

const Routes = () => {
    return(
        <Fragment>
            <BrowserRouter>
            <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
<<<<<<< HEAD
                    <Route exact path='/Donate' component={Donate} />
                    <Route exact path='/News' component={News} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/Loader' component={Loader} />

=======
                    <Route exact path='/donate' component={Donate} />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/success' component={Success} />
                    {/* <Route exact path="/Donate/:checkoutId" component={Checkout} /> */}
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
                </Switch>
        </BrowserRouter>
        <Footer />
    </Fragment>
    )
   
} 
export default Routes;