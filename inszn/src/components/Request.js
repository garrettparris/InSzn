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
    backgroundColor: "white",
    width: "50%",
    height: "50%",
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
      var url = "http://ec2-52-14-94-175.us-east-2.compute.amazonaws.com:3000/message"
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
                        zIndex: -9

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
          }, 
        }} 
                />


                <div className="mx-auto text-center">
                <div>
                <h3>Don't see a fruit or vegetable listed? Let me know by requesting it below!</h3>
              </div>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email"  >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
              </Form>
              
            </div>
            <div>
              
            {this.state.errors.map((row, index) => (
                            <div className="mx-auto text-center" key={row.param + index} >
                            {row.msg }
                          </div>
                    ))}
            </div>
            

            </div>
        );
    }
}
export default Request