import React from 'react';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import logo from './logo.jpg'

//onClick={firebase.doSignOut}
// const Navigation = ({ authUser }) => (
//     <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
// );



const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {
          authUser => authUser ?  <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuthAdmin = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div class="container">
            <a class="navbar-brand" href={ROUTES.LANDING}><img src={logo} width="70" height="40"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" >
        <span class="navbar-toggler-icon">
        </span>
            </button>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={ROUTES.ACCOUNT}>Account</a>
                    </li>

                    <SignOutButton/>

                    <li className="nav-item">
                        <a className="nav-link" href={ROUTES.ADMIN}>Admin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={ROUTES.SIGN_UP}>Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

const NavigationAuth = () => (
    <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top">
      <div class="container">
      <a class="navbar-brand" href={ROUTES.LANDING}><img src={logo} width="120" alt="" class="logo"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" >
        <span class="navbar-toggler-icon">
        </span>
      </button>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={ROUTES.ACCOUNT}>Account</a>
          </li>
         
            <SignOutButton/>
          <li class="nav-item">
            <a class="nav-link" href={ROUTES.SIGN_UP}>Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
);
const NavigationNonAuth = () => (
    <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top">
      <div class="container">
      <a class="navbar-brand" href={ROUTES.LANDING}><img src={logo} width="120" height="90"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" >
        <span class="navbar-toggler-icon">
        </span>
      </button>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={ROUTES.SIGN_IN}>Sign In</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={ROUTES.SIGN_UP}>Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>

);

export default Navigation;