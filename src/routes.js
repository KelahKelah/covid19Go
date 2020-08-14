import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Donate from "./pages/Donate/Donate";
import News from "./pages/News/News";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Success from "./components/Success/Success";

const Routes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/news" component={News} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/success" component={Success} />
          {/* <Route exact path="/Donate/:checkoutId" component={Checkout} /> */}
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </Fragment>
  );
};
export default Routes;
