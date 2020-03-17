import React from 'react';
import Header from './Header.js';


const style = {
  backgroundColor: "white",
  opacity: 0.7,
  height: "60%",
  border: "solid 5px",
  borderColor:"#f8bbd0"
}


class Request extends React.Component{  

  render() {

    
    
        return(
            <div className="mx-auto w-100 h-100" >


<Header />

            <div className="mx-auto text-center m-5 pt-3 rounded w-50 text-dark" style={style}>
              <div className="m-3">
                <p>inseason.in is created using farming data based on Ontario, Canada's seasons.</p>
                    </div>
              <div className="m-2">
                        <p>This open source website is developed using microservices architecture, utilizing nginx, docker, and AWS ECR EC2 instances.
                        The front end component is created using React and various UI libraries such as react-bootstrap, ant-design, and material-ui. The backend is created using node.js and express. The database instance is a mongodb database
                    hosted on MongoAtlas cluster.</p>
                    </div>
                    <div className="m-2">
                        <p>On the Home page, every iteration of the two carousels triggers a RESTful API call to the containerized backend which then pulls queried data from my Mongo Atlas cluster and returns it to the front end.
                                 On the Request Page, it uses backend validation to verify proper input once the submit button is clicked and emails formatted messages to my inbox.
                </p>
                    </div>
                    <div className="m-2">
                <p>This was an explorative project into modern, scalable software architecture and UI design. follow me and my future projects through the links below!</p>
                    </div>
                    <div className="m-2">
                         TODO: make page responsive to screen size, search functionality on the table
                    </div>
                    <div className="m-2">
                        <div > <i class="fas fa-globe"></i><a href="http://www.garrettparris.ca"> www.garrettparris.ca</a></div>
                        <div > <i class="fab fa-github"></i><a href="https://github.com/garrettparris"> github.com/garrettparris</a></div>
                        <div > <i class="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/garrettparris/"> in/garrettparris</a></div>
                    </div>
             
              <div className="p-1"></div>
            </div>
            
            

            </div>
        );
    }
}
export default Request