import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Header extends React.Component{
    render(){
        return(
            <div>
            <Row className="justify-content-md-center">
                <Col xs="auto" md="auto">
                    <h5>In Season</h5>
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
export default Header