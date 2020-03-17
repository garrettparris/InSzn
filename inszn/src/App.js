import React from 'react';
import ResponsiveDrawer from './components/Drawer.js';
import Home from './components/Home.js';
import Request from './components/Request.js'
import About from './components/About.js'
import Particle from './components/Particle.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <ResponsiveDrawer />
        <Particle />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/request" component={Request} />
            <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
