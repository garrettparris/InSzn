import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import SimpleTable from './Table.js'

class CarouselTable extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            index: new Date().getMonth(),
            direction: null,
            apiResponse: ""
        }
    
        // Bind callback methods to make `this` the correct context.
        this.handleSelect = this.handleSelect.bind(this)
    
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
            apiResponse: "" 
        })
        this.callAPI()
    }
    callAPI() {
        var url = "http://localhost:9000/api/".concat(this.state.index+1)
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
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    February
                    <Carousel.Caption>
                    <h3>February</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    March
                    <Carousel.Caption>
                    <h3>March</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    April
                    <Carousel.Caption>
                    <h3>April</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    May
                    <Carousel.Caption>
                    <h3>May</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    June
                    <Carousel.Caption>
                    <h3>June</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    July
                    <Carousel.Caption>
                    <h3>July</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    August
                    <Carousel.Caption>
                    <h3>August</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    September
                    <Carousel.Caption>
                    <h3>September</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    October
                    <Carousel.Caption>
                    <h3>October</h3>
                    <p>Nulla vitae elitd libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    November
                    <Carousel.Caption>
                    <h3>November</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    December
                    <Carousel.Caption>
                    <h3>December</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

                <SimpleTable {...this.state}></SimpleTable>
            </div>
            

        );

    }
 
}
export default CarouselTable;
