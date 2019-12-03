import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import {withAuthorization} from "../Session";
import background from "./back.png"

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            requests: [],
            userRequest: [],
            userFiles: [],
        };
    }

    componentDidMount() {
        this.setState({
            loading: false,
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    deleteUser() {
        this.props.firebase.doDeleteUser();
    }

    deleteRequest(rid) {
        this.props.firebase.deleteRequest(rid);
    }

    getUserRequests(uid) {
        const elementsRaw = this.props.firebase.getElementsByUserID('requests', uid);
        this.setState({
            userRequest: elementsRaw,
        })
    }

    getUserFiles(uid) {
        const elementsRaw = this.props.firebase.getElementsByUserID('files', uid);
        this.setState({
            userFiles: elementsRaw,
        })
    }

    getUserInformation() {
        var uid = document.getElementById("userFormInput").value;
        this.getUserRequests(uid);
        this.getUserFiles(uid);
    }

    getAllRequests() {
        if (this.state.requests.length !== 0) {
            this.setState({
                requests: [],
            })
        }
        else {
            const query = this.props.firebase.getElementsInPath('requests');
            this.setState({
                requests: query,
            })
        }
    }

    getAllUsers() {
        if (this.state.users.length !== 0) {
            this.setState({
                users: [],
            })
        }
        else {
            const query = this.props.firebase.getElementsInPath('users');
            this.setState({
                users: query,
            })
        }
    }

    render() {

        const sectionStyle = {
            backgroundImage: `url(${background})`,
            height: "665px",
            width: "100%",
            backgroundSize: "contain",

        }

        const ListStyle = {
            maxHeight: "300px",
        }

        const {users,requests, loading, userRequest, userFiles} = this.state;
        return (
            <div>
                <div className="img-fluid col-md-12 img-fluid" style={sectionStyle}>
                    <br/>
                    <br/>
                    <br/>
                    <div className="container">
                        <div className="card card-1 shadow">
                            <button className="btn btn-outline-primary" onClick={() => this.getAllUsers()}>
                                LOAD USERS
                            </button>
                            <div className="card card-1 shadow  overflow-auto">
                                <h4>Users List</h4>
                                <UserList users={users}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container">
                        <div className="card card-1 shadow">
                            <button className="btn btn-outline-primary" onClick={() => this.getAllRequests()}>
                                LOAD REQUESTS
                            </button>
                            <div className="card card-1 shadow  overflow-auto">
                                <h4>Requests List</h4>
                                <RequestList requests={requests}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container card card-1 shadow">
                        <h4> User</h4>
                        <form className="form-group">
                            <input id="userFormInput"
                                   type="search"
                                   placeholder="User ID"
                                   aria-label="Search"
                            />
                        </form>
                        <button className="btn btn-outline-primary" onClick={() => this.getUserInformation()}>
                            GET INFORMATION
                        </button>
                        <div className="card card-1 shadow  overflow-auto">
                            <h4>User Requests</h4>
                            <UserRequest requests={userRequest}/>
                        </div>

                        <div className="card card-1 shadow  overflow-auto">
                            <h4>User Files</h4>
                            <UserFiles files={userFiles}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const UserList = ({ users }) => (
    <ul className="list-group">
        {users.map(user => (
        <li key={user.uid} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="badge badge-primary">
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong></strong> {user.value.email}
            </span>
            <span>
              <strong></strong> {user.value.username}
            </span>
        </li>
        ))}
    </ul>
);

const RequestList = ({ requests }) => (
    <ul className="list-group">
        {requests.map(request => (
        <li key={request.uid} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="badge badge-primary">
              <strong>ID:</strong> {request.uid}
            </span>
            <span>
              <strong></strong> {request.value.name}
            </span>
            <span>
              <strong></strong> {request.value.description}
            </span>
        </li>
        ))}
    </ul>
);

const UserRequest = ({requests}) => (
    <ul>
        {requests.map(request => (
            <li key={request.uid} className="list-group-item ">
                <strong>RequestID: </strong>
                {request.uid}
                <ul>
                    <li>
                        <strong>Description: </strong>
                        {request.value.description}
                    </li>
                    <li>
                        <strong>File: </strong>
                        {request.value.file}
                    </li>
                    <li>
                        <strong>Name: </strong>
                        {request.value.name}
                    </li>
                    <li>
                        <strong>UserID: </strong>
                        {request.value.userID}
                    </li>

                </ul>
            </li>

        ))}
    </ul>
);

const UserFiles = ({files}) => (

    <ul>
        {files.map(file => (
            <li key={file.uid} className="list-group-item">
                <strong>FileID: </strong>
                {file.uid}
                <ul>
                    <li>
                        <strong>UserID: </strong>
                        {file.value.userID}
                    </li>
                </ul>
            </li>
        ))}
    </ul>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(withFirebase(AdminPage));
//export default withFirebase(AdminPage);