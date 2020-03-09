import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Header extends React.Component{
    render(){
        return(
            <div>
            {/* <Row className="justify-content-md-center">
                <Col xs="auto" md="auto">
                    <h5>In Szn</h5>
                </Col>
               
            </Row>
             */}
            <Row className="justify-content-md-center text-center">
            <Col xs="auto" md="auto">
                <h5>In Szn is an open-source full-stack webapp built to show what produce is in season for Ontario</h5>
            </Col>
           
            </Row>
            </div>
        );
    }
}
export default Header