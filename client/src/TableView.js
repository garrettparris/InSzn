import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class TableView extends React.Component{
    render(){
        return(
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <Table responsive className="mx-auto text-center">
                        <thead>
                            <tr>
                            <th>Table heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>ceell1</td>
                            </tr>
                           
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }

}
export default TableView;