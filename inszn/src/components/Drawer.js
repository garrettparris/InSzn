import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

class Drawer extends React.Component{
    render(){
        return(
            <div>
            <Row className="justify-content-md-center">
                <Col xs="auto" md="auto">
                    <h5>In Szn</h5>
                </Col>
               
            </Row>
            
            <Row className="justify-content-md-center">
            <Col xs="auto" md="auto">
                <h5>In Season is a fullstack webapp built for you!!!</h5>
            </Col>
           
            </Row>
            </div>
        );
    }
}
export default Drawer