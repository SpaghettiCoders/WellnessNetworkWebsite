import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import background from "./test.jpg"
const SignInPage = () => (

    <div className="img-fluid col-md-12 img-fluid"style={sectionStyle}>
    <div className = "col-centered col-md-12 text-md-center ">
    <h1></h1>
        <h1>SignIn</h1>
        <br/>
        <SignInForm />
        
    
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
    email: '',
    password: '',
    error: null,
};
class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {

        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <div className="container">
            <div className="card card-1 shadow col-md-6" >
            <h1>SignIn</h1>
            <form onSubmit={this.onSubmit}>
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
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                </div>
                <div className="form-group">
                <button disabled={isInvalid} type="submit" className="btn btn-primary">
                    Sign In
                </button>
                </div>
                {error && <p>{error.message}</p>}
                
            </form>
            <PasswordForgetLink />
        <SignUpLink />
            </div>
            </div>
        );
    }
}




const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };



