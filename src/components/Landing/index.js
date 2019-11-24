import React from 'react';
//import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pic from './generic-headshot.png'
import logo from './logo.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Particles from "react-particles-js";
import background from "./template.jpg"

const Landing = () => (
      
   
      

<div>
<div>
<Particles 
              params={{
                
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true

                
              }}
              style={{
                width: '100%',
                position: "absolute"
                
              }}
            />
<img src={background} className="img-fluid navbar-expand-lg" alt="Responsive image" style={{flex:1}}/>
</div>

<div class="container jumbotron text-center">




          <h1 class="jumbotron-heading">Podcasters</h1>
          <p class="lead text-muted">Something short and leading about 
the collection below—its contents, the creator, etc. Make it short and 
sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>


<div className="row">
<div className="col-md-3">
              <div className="card mb-4 box-shadow" style={{width: 180}}>
              <div className="card-body shadow">
               <img className="card-img-top" src={pic} alt="Thumbnail [100%x225]" />
                  <p className="card-text">This is a wider card with supporting text.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>


<div className="col-md-3">
              <div className="card mb-4 box-shadow" style={{width: 180}}>
              <div className="card-body shadow">
               <img className="card-img-top" src={pic} alt="Thumbnail [100%x225]" />
                  <p className="card-text">This is a wider card with supporting text.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>



            <div className="col-md-3">
              <div className="card mb-4 box-shadow" style={{width: 180}}>
              <div className="card-body shadow">
               <img className="card-img-top" src={pic} alt="Thumbnail [100%x225]" />
                  <p className="card-text">This is a wider card with supporting text.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>




            <div className="col-md-3">
              <div className="card mb-4 box-shadow" style={{width: 180}}>
              <div className="card-body shadow">
               <img className="card-img-top" src={pic} alt="Thumbnail [100%x225]" />
                  <p className="card-text">This is a wider card with supporting text.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>



            </div>


            </div>


    
);
export default Landing;