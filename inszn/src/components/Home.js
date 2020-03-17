import React, { Component } from 'react';
import Header from './Header.js';
import ResponsiveDrawer from './Drawer.js';
import CarouselTable from './CarouselTable.js';
import MyFooter from './Footer.js';
class Home extends React.Component{
    render(){
        return(
            <div className="mx-auto mt-5">
            <div className="mt-5 mx-auto w-50"><CarouselTable /></div>
            {/* <div className="mt-5 mx-auto h-auto"><MyFooter /></div> */}
            </div>
        );
    }
}
export default Home