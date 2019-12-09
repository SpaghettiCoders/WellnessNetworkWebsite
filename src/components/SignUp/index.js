import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import background from "./back.png"
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
const SignUpPage = () => (
 <div className="img-fluid col-md-12 img-fluid"style={sectionStyle}>
    <div className = "col-centered col-md-12 text-md-center ">
        <h1></h1>
        <h1>SignUp</h1>
        <br/>
        
         <SignUpForm />
         
    </div>
    </div>
    
);

var sectionStyle = {
   backgroundImage: `url(${background})`,
   height: "665px",
   width: "100%",
   backgroundSize: "contain"

}

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        isAdmin: 0
                    });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (

            <div className="row d-flex justify-content-center">
            <div className="container-fluid ">
            </div>

            <div className="card-bg" >
            <h1 class = "hero-text dark">Sign up to be a</h1>
            <h1 class = "hero-text dark">Content Creator</h1>
            <p class="text-block-3">Content creators can submit their work to be on the WELLness Network Radio TV</p>
            <form onSubmit={this.onSubmit} >

            <div className="form-group card mb-4 box-shadow">
                <input className="form-control"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                </div>
                <div className="form-group">
                <input className="form-control"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                </div>
                <div className="form-group">
                <input className="form-control"
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                </div>
                <div className="form-group">
                <input className="form-control"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                </div>
                <div className="form-group">
                <button disabled={isInvalid} type="submit" className="button-signin">
                    Sign Up
                </button>
                </div>
                {error && <p>{error.message}</p>}
            </form>
            </div>
            </div>
        );
    }
}
const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };