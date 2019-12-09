import React, { Component } from "react";
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import PodcastRequest from "../PodcastRequest";

class Account extends Component {
    render() {
        return (
            <div>
                <form>
                    <PasswordForgetForm/>
                    <PasswordChangeForm/>
                    <PodcastRequest/>
                </form>
            </div>
        );
    }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
//export default Account;