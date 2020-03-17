import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import './css/table.css'
const mystyle = {
    color: 'white',
    fontFamily: 'Ubuntu'
}
class SimpleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: this.props.index,
            apiResponse: "",
        };
    }
    
    

    render() {

        return (
            <div>
                <TableContainer style={{ overflow: "scroll", height:"40vh", overflowX:"hidden"}}>
                <Table aria-label="simple table">
                        <TableBody className="">
                    {this.props.names.map(row => (
                        <TableRow key={row}>
                            <TableCell component="th" scope="row" className="mx-auto text-center text-dark" style={mystyle} >
                            {row}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>                
            </div>
        )
    }
}
export default SimpleTable;