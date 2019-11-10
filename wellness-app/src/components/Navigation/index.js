import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import logo from './logo.jpg'


const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand ml-5" href="#">
        <img src={logo} alt="logo" style={{ width: '50px' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-black text-uppercase ml-5" to="/">
              Home&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to="/Newsletter"
            >
              Newsletter
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to="/contacts"
            >
              contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to={ROUTES.SIGN_UP}
            >
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to={ROUTES.SIGN_IN}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to={ROUTES.ACCOUNT}
            >
              Account
            </Link>
          </li>
          <li className="nav-item">
            <Link
                className="nav-link text-black text-uppercase ml-5"
                to={ROUTES.ADMIN}
            >
              Admin
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary  my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
);
const NavigationNonAuth = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand ml-5" href="#">
        <img src={logo} alt="logo" style={{ width: '50px' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-black text-uppercase ml-5" to="/">
              Home&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to="/Newsletter"
            >
              Newsletter
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to="/contacts"
            >
              contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to={ROUTES.SIGN_UP}
            >
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-black text-uppercase ml-5"
              to={ROUTES.SIGN_IN}
            >
              Login
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary  my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>

);
export default Navigation;