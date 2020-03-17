import React, { Component } from 'react';
import Header from './Header.js';
import ResponsiveDrawer from './Drawer.js';
import CarouselTable from './CarouselTable.js';
import MyFooter from './Footer.js';
import Particles from 'react-particles-js'; 
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const validateMessages = {
    required: 'This field is required!',
};
const style = {
    backgroundColor: "#f8bbd0",
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
            <div className="mx-auto mt-5 w-100 h-100" >
                <Particles
                    style={{
                        position: "absolute",
                        top: 0,
                        zIndex: -9,
                        left:0,
                        height: "100%",
                        width: "100%"
                    }
                }
                params={{ 
                particles: { 
                    number: { 
                    value: 200, 
                    density: { 
                        enable: true, 
                        value_area: 1000, 
              } 
                        }, 
                    
                        line_linked: {
            				shadow: {
            					enable: true,
            					color: "#7cb342",
            					blur: 2
            				}
            			}
                    },
                    
                    
        }} 
                /> 


            <div className="mx-auto text-center w-50 justify-content-center
                 rounded " style={style}>
              <Header />
              <div className="text-dark pt-3 m-3">
                <p>Don't see a fruit or vegetable listed? Let me know by requesting it below!</p>
              </div>
              <Form {...layout} name="nest-messages" className="text-dark"onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" className="mt-1" >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'message']} label="Message" className="mt-1">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} >
        <Button type="primary" htmlType="submit" className="mb-3">
          Submit
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
            
            

            </div>
        );
    }
}
export default Request