import  React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';
import News from './pages/News/News';

const Router = () => {
    return(
        <Fragment>
            <BrowserRouter>

            <Navigation />
            <Switch>
                <Route exact path='/' component={Home} Hom  />
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Donate' component={Donate} />
                <Route exact path='/News' component={News} />
            </Switch>
        </BrowserRouter>
    </Fragment>
    )
   
} 
export default Router;