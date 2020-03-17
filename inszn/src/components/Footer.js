import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';

class MyFooter extends React.Component{
    
    render() {
        // bottom=""
        const style = {
            flexShrink: 0,
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            position: "fixed",
            bottom: 0,
            width: "100%",
            
        }
        return(
            <div>
                <footer style={style}>
                    <p>Made with ❤️ by Garrett Parris</p>
               </footer>
            </div>
        );
    }
}
export default MyFooter