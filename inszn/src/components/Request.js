import React from 'react';
import Header from './Header.js';

import { Form} from 'antd';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
const validateMessages = {
    required: 'This field is required!',
};
const style = {
  backgroundColor: "white",
  opacity: 0.7,
  height: "60%",
  border: "solid 5px",
  borderColor:"#f8bbd0"
}
const formStyle = {
  marginLeft: "2%",
  marginRight: "2%",
 
}

class Request extends React.Component{  
  constructor(props) {
    super(props)
    this.state = {
      errors: []
  }
  }
  render() {

    const onFinish = values => {
      this.setState({
        errors: []
      })
      var url = "http://localhost:4000/message"
      try {
        axios({
          method: 'post',
          url: url,
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            name: values.user.name,
            email: values.user.email,
            message: values.user.message
          }
          
        })
          .catch(error => {
            try { this.setState({
              errors: error.response.data
            })} catch (err) {
              console.log(err)
            }
            
            console.log(this.state.errors)
        })
      } catch (err) {
        
        console.log(err.response)
          }
          
    };
    
        return(
            <div className="mx-auto w-100 h-100" >
              <Header />
              <div className="mx-auto text-center m-5 pt-3 rounded w-50" style={style}>
              <div className="text-dark  m-3">
                <p>Don't see a fruit or vegetable listed? Let me know by requesting it below!</p>
              </div>
              <div style={formStyle} className="p-3 rounded">
                <Form {...layout} name="nest-messages" className="text-dark"onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'name']} >
                      <TextField id="outlined-basic" label="Name" variant="outlined" className="w-50 rounded" />
                    </Form.Item>
                    <Form.Item name={['user', 'email']}  className="mt-3 text-dark" >
                      <TextField id="outlined-basic" label="Email" variant="outlined" className="w-50 rounded" />
                    </Form.Item>
                    <Form.Item name={['user', 'message']}  className="mt-3">
                      <TextField  
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows="3"
                        variant="outlined"
                        className="w-50"
                      />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} className="mt-2" >
                      <Button
                        type="primary"
                        color="primary"
                        style={{backgroundColor: "#f8bbd0", color: "white", width: '10vw'}}
                        endIcon={<Icon>send</Icon>}
                        htmlType="submit"
                      >
                        Send
                       </Button>
 
                    </Form.Item>
                  </Form>
                  <div className="text-danger">
                    {this.state.errors.map((row, index) => (
                                    <div className="mx-auto text-center" key={row.param + index} >
                                    {row.msg }
                                  </div>
                            ))}
                    </div>
              </div>
              <div className="p-1"></div>
            </div>
            
            

            </div>
        );
    }
}
export default Request