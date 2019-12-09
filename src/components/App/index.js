import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,Switch,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AboutPage from '../About';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import ContactPage from '../Contact';
import User from '../User';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newsletter from '../NewsLetter';
import Contact from "../Contact";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }
    componentDidMount() {

        this.props.firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            },
        );
    }
    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <AuthUserContext.Provider value={this.state.authUser}>
                <Router>
                    <div>
                        <Navigation authUser={this.state.authUser} />
                        <Switch>

                            <Route exact path={ROUTES.LANDING} component={LandingPage} />
                            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                            <Route path={ROUTES.HOME} component={HomePage} />
                            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                            <Route path={ROUTES.CONTACT} component={ContactPage} />
                            <Route path={ROUTES.ADMIN} component={AdminPage} />
                            <Route path={ROUTES.NEWSLETTER} component={Newsletter}/>
                            <Route path={ROUTES.ABOUT} component={AboutPage}/>
                            <Route component={User} />
                        </Switch>
                    </div>
                </Router>
            </AuthUserContext.Provider>
        );
    }
}

export default withFirebase(App);