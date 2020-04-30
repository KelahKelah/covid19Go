import  React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';
import News from './pages/News/News';
import Footer from './components/Footer/Footer';

const Router = () => {
    return(
        <Fragment>
            <BrowserRouter>
            {/* <div className=""> */}
            <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/Donate' component={Donate} />
                    <Route exact path='/News' component={News} />
                </Switch>
            {/* </div> */}
        </BrowserRouter>
        <Footer />
    </Fragment>
    )
   
} 
export default Router;