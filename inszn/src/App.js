import React from 'react';
import Header from './components/Header.js';
import ResponsiveDrawer from './components/Drawer.js';
import CarouselTable from './components/CarouselTable.js';
import MyFooter from './components/Footer.js';
import Home from './components/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/request" component={Header} />
        <Route exact path="/about">
          
        </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
