import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import firebase from "firebase";
const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
class PodcastRequest extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { name, description, reqID } = this.state;
        firebase
            .database()
            .ref('requests/' + reqID)
            .set({
                userID: firebase.auth().currentUser.uid,
                name: name,
                description: description
        });

    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { name, description, reqID } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    name="description"
                    value={description}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Description"
                />
                <input
                    name="reqID"
                    value={reqID}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Request ID"
                />
                <button type="submit">
                    Submit Request
                </button>
            </form>
        );
    }
}
export default withFirebase(PodcastRequest);