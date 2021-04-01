import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import PageRenderer from "./Page-renderer";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>  
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render = {() => <Redirect to="/home"/>} />
          <Route component={() => 404} />   
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
