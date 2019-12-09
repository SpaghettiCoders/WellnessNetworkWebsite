//import React from 'react';
//import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pic from './generic-headshot.png'
import logo from './logo.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Particles from "react-particles-js";
import background from "./Yoga-group-Small.jpg"
import kam from "./pamela_koons.jpg"
import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class Landing extends Component {
constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
        };
    }

componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }



render ()  {
      
   const { users, loading } = this.state;
      return(

<div>
<div>
<script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
  <script>
    window.sr = new ScrollReveal()
  </script>
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
  }
  

                
              }}
              style={{
                width: '100%',
                position: "absolute"
                
              }}
            />

<img src={background} className="img-fluid img-responsive" alt="Responsive image" style={{flex:1}}/>
 <div class="carousel-caption">
              <h1 class="hero-text">At the WELLness Network</h1>
              <h3>Radio TV</h3>
              <h5>Our goal at At The WELLnessRadioTV is to enlighten viewers and listeners by bringing them stories and advice from global leaders in health, wellness and holistic living. We will save lives and bring back a quality of life by promoting emotional and physical wellbeing.</h5>
              </div>
</div>


<div class="archive">
  <div class="containter-3 w-container">
    <div class="w-row">
       <div class="w-col w-col-6">
          <h1 class="hero-text heading1light">Missed a Show?</h1>
          <h1 class="hero-text heading1light">Catch up here!</h1>
       </div>
       <div class="w-col w-col-6">
          <iframe width="450" height="310"
              src="https://www.youtube.com/embed/pHIKx_qJQXg">
          </iframe>
        </div>       
    </div>
  </div>
</div>

<div class="show-schedule">
<div class="container-4 w-container">
  <h1 class="hero-text heading1">Our Speakers</h1>
  <div class="w-layout-grid grid">
    <div id="w-node-cfcba1dfc572-49e8e012" data-w-id="d8cd7f8a-a034-b493-25f9-cfcba1dfc572" class="speaker-profile pamela">
      <div class="speaker-profile-picture pamela"></div>
      <h4 class="hero-text speaker-profile">Pamela D Koons</h4>
      <p class="hero-subtitle speaker-profile paragraph"><a href="#" class="link">Listen to Recorded Shows</a></p>
    </div>
    <div id="w-node-bf755ed309a9-5ed309a9" data-w-id="761fe112-cfde-5223-c3c3-bf755ed309a9" class="speaker-profile">
      <div class="speaker-profile-picture"></div>
      <h4 class="hero-text speaker-profile">Name Name</h4>
      <p class="hero-subtitle speaker-profile paragraph"><a href="#" class="link">Listen to Recorded Shows</a></p>
    </div>
    <div id="w-node-6763351ee446-49e8e012" data-w-id="5652ad80-e62b-6aa4-b58e-6763351ee446" class="speaker-profile">
      <div class="speaker-profile-picture"></div>
      <h4 class="hero-text speaker-profile">Name Name</h4>
      <p class="hero-subtitle speaker-profile paragraph"><a href="#" class="link">Listen to Recorded Shows</a></p>
    </div><a href="content-creators/show-schedule.html" id="w-node-9b333cb33e95-49e8e012" data-w-id="ba3ab93c-3579-d2e6-f83c-9b333cb33e95" class="button small w-button">Show all</a></div>
  <div data-w-id="defb86b6-438c-bf01-1837-b8fbfbeaddfd" class="expand-button">
    <div class="div-block-10 up"></div>
    <div class="div-block-10"></div>
  </div>
</div>
</div>
</div>
    



);
}


}

const UserList = ({ users }) => (
    <div className="row">

        {users.map(user => (
                      <div className="col-md-4">
              <div className="card mb-4 box-shadow">
              <div className="card-body shadow">
               <img className="card-img-top" src={kam} alt="Thumbnail [100%x225]" />
                  <p className="card-text">{user.email}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <a href={user.username}>
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      </a>
                    </div>
                    <small className="text-muted">{user.username}</small>
                  </div>
                </div>
              </div>
            </div>
        ))}
    </div>
);
export default (withFirebase(Landing));
