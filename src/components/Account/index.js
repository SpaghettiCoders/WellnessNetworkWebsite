import React, { Component } from "react";
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import PodcastRequest from "../PodcastRequest";

class Account extends Component {
    render() {
        return (
            <body class="body-2">
            <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="container">
            <h2 class="hero-text-heading1">At the WELLness Network Account Manager</h2>
                <form>
                    <br/>
                    <PasswordChangeForm/>
                    <br/>
                    <PodcastRequest/>
                </form>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
            </body>
        );
    }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
//export default Account;