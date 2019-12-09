import React, { Component } from "react";
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import PodcastRequest from "../PodcastRequest";
import background from "../Account/test.jpg";


const sectionStyle = {
    backgroundImage: `url(${background})`,
    height: "665px",
    width: "100%",
    backgroundSize: "contain"

};

class Account extends Component {


    render() {
        return (
            <div className="img-fluid col-md-12 img-fluid"style={sectionStyle}>
                <div className = "col-centered col-md-12 text-md-center ">
            <br/>
            <br/>
            <br/>
                <form>
                    <PasswordChangeForm/>
                    <br/>
                    <PodcastRequest/>
                </form>
                </div>
            </div>
        );
    }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
//export default Account;