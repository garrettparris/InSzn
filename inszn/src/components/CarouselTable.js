import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import SimpleTable from './Table.js'
import Skeleton from '@material-ui/lab/Skeleton';
import axios from 'axios'
import Particles from 'react-particles-js'; 
import { withTheme } from '@material-ui/core';
import Header from './Header.js'
import MyFooter from './Footer.js';

class CarouselTable extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            index: new Date().getMonth(),
            typeIndex: 0,                   //nested Carousel state
            typeDirection: null,            //nested Carousel state
            direction: null,
            apiResponse: "",
            collection: "",
            names: [],
            isDone: false
        }
    
        this.handleSelect = this.handleSelect.bind(this)

        this.handleTypeSelect = this.handleTypeSelect.bind(this)    //nested Carousel state
    
      }
    
    
    typeValues = ['fruit', 'vegetable', 'produce'] //Dictionary of mongodb collection names

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        })
          this.callAPI()

    }

    handleTypeSelect(selectedIndex, e) {
        this.setState({
            
            typeIndex: selectedIndex,
            typeDirection: e.direction,
        })
          this.callAPI()

    }

    callAPI() {
        try {
            var url = "http://localhost:4000/api/" + (this.state.index+1) + "/" + this.typeValues[this.state.typeIndex]

            axios.get(url)
                .then(res => {
                    console.log(res.data);
                    this.handleResponse(res.data);
                })
                

        } catch (err) {
            console.error(err)
        }
        
    }
    
    componentWillMount() {
        this.callAPI();
    }

    handleResponse(data) {
        try {
            let temp = []
            data.forEach(i => {
                temp.push(i.name)
            });
            temp.sort()
            this.setState({
                names: temp
            })

        } catch (err) {
            console.error(err)
        }
        
    }
    render() {
        const style = {
            backgroundColor: "#f8bbd0"
        }
        return (
            
            <div className="mx-auto w-100 h-100">
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
            
            <div className="m-5  rounded" style = {style}>
                <Header></Header>
                <Carousel interval={null} className="text-center p-3" activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} indicators={false}>
                <Carousel.Item>
                    <div>January</div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    February
                    
                </Carousel.Item>
                <Carousel.Item>
                    March
                    
                </Carousel.Item>
                <Carousel.Item>
                    April
                    
                </Carousel.Item>
                <Carousel.Item>
                    May
                    
                </Carousel.Item>
                <Carousel.Item>
                    June
                    
                </Carousel.Item>
                <Carousel.Item>
                    July
                    
                </Carousel.Item>
                <Carousel.Item>
                    August
                    
                </Carousel.Item>
                <Carousel.Item>
                    September
                    
                </Carousel.Item>
                <Carousel.Item>
                    October
                    
                </Carousel.Item>
                <Carousel.Item>
                    November
                   
                </Carousel.Item>
                <Carousel.Item>
                    December
                    
                </Carousel.Item>
                </Carousel>
                <Carousel interval = {null} className="mx-auto text-center w-50 mt-5" controls="true" indicators = "false" activeIndex={this.state.typeIndex} direction={this.state.typeDirection} onSelect={this.handleTypeSelect} indicators={false}>
                    <Carousel.Item className="mx-auto">
                        <div>Fruits</div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        Vegetables
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        Fruits and Vegetables
                        
                    </Carousel.Item>

                </Carousel>
                <div className="mx-auto mt-3 mb-5 w-50">
                { this.state.names ? (
                <SimpleTable {...this.state}></SimpleTable>

                ) : (
                          <Skeleton variant="rect" className="mx-auto"/>

                        )}
                </div>
                </div>
                <div className= "w-100 h-100">
            
                </div>
                </div>
            

        );

    }
 
}
export default CarouselTable;
