import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header.js';
import ResponsiveDrawer from './components/Drawer.js';
import CarouselTable from './components/CarouselTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './components/Footer.js';
import Home from './components/Home.js';
import Request from './components/Request.js'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
