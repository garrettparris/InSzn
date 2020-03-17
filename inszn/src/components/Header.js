import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
let theme = createMuiTheme();

theme.typography.h3 = {
    fontSize: 50,
    fontWeight: 500,
    fontFamily: 'Pacifico',
    fontColor: 'black'
}
class Header extends React.Component{
    render(){
        return(
            <div>
            
            <Row className="justify-content-md-center text-center">
                    <Col xs="auto" md="auto">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3">
                                inseason.in
                            </Typography>

                        </ThemeProvider>
            </Col>
           
            </Row>
            </div>
        );
    }
}
export default Header