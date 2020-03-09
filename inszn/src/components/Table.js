import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const mystyle = {color: 'white'}
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
                <TableContainer>
                <Table aria-label="simple table">
                        <TableBody className="color:white">
                    {this.props.names.map(row => (
                        <TableRow key={row}>
                            <TableCell component="th" scope="row" className="mx-auto text-center" style={mystyle} >
                            {row }
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