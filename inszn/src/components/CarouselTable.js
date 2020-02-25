import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import SimpleTable from './Table.js'


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
        var url = "http://localhost:4000/api/" + (this.state.index+1) + "/" + this.typeValues[this.state.typeIndex]
        fetch(url)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render(){
        return (
            <div>
            <Carousel interval = {null} className="mx-auto text-center" activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                <Carousel.Item className="mx-auto">
                    <div>January</div>
                    <Carousel.Caption>
                    <h3>January</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    February
                    <Carousel.Caption>
                    <h3>February</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    March
                    <Carousel.Caption>
                    <h3>March</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    April
                    <Carousel.Caption>
                    <h3>April</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    May
                    <Carousel.Caption>
                    <h3>May</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    June
                    <Carousel.Caption>
                    <h3>June</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    July
                    <Carousel.Caption>
                    <h3>July</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    August
                    <Carousel.Caption>
                    <h3>August</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    September
                    <Carousel.Caption>
                    <h3>September</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    October
                    <Carousel.Caption>
                    <h3>October</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    November
                    <Carousel.Caption>
                    <h3>November</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    December
                    <Carousel.Caption>
                    <h3>December</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <Carousel interval = {null} className="mx-auto text-center w-50 mt-5" activeIndex={this.state.typeIndex} direction={this.state.typeDirection} onSelect={this.handleTypeSelect}>
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

                <SimpleTable {...this.state}></SimpleTable>
            </div>
            

        );

    }
 
}
export default CarouselTable;
