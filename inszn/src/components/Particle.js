import React from 'react';
import Particles from 'react-particles-js'; 



class Particle extends React.Component{  
 
  render() {
        return(
            <div className="mx-auto w-100 h-100" >
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


        </div>
        );
    }
}
export default Particle