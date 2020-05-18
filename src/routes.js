import  React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';
import News from './pages/News/News';
import Footer from './components/Footer/Footer';

const Routes = () => {
    return(
        <Fragment>
            <BrowserRouter>
            <Navigation />
            {/* <div className=""> */}
            {/* <BrowserRouter>
                <div className='nav-wrap'>
                    <div className='logo-brand'>
                        <p className='logo-label'><FaVine className='logo' />COVID19G0</p>
                    </div>
                    <div className='wrap'>
                        <p><Link to='/' className='item'>Home</Link></p>
                        <p><NavLink to='/Donate' className='item'>Donate</NavLink></p>
                        <p><NavLink to='/News' className='item'>News</NavLink><FaCaretDown /></p>
                    </div>
                </div>
            </BrowserRouter> */}
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
export default Routes;