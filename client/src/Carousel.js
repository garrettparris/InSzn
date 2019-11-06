import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class MonthCarousel extends React.Component{
    
    render(){
 
        return(
            <Carousel interval = {null}>
                <Carousel.Item>
                    <div className="mx-auto d-block w-100">January</div>
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
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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

        );

    }
 
}
export default MonthCarousel;
