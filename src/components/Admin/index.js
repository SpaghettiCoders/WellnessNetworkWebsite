import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import {withAuthorization} from "../Session";
import NewsletterEditor from '../NewsletterEditor';
import { Container, Row, Col, Table, InputGroup, InputGroupAddon, Button, Input, Alert } from 'reactstrap';
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

    deleteRequest() {
        const rid = document.getElementById("requestInputForm").value;
        this.props.firebase.deleteRequest(rid);
        this.getUserInformation();
        this.getAllRequests();
    }

    deleteFile() {
        const fid = document.getElementById("fileInputForm").value;
        this.props.firebase.deleteFile(fid);
        this.getUserInformation();
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
        if(this.state.userRequest.length == 0 && this.state.userFiles.length == 0) {
            window.alert("User does not have any information");
        }
        else if (this.state.userRequest.length == 0 ) {
            window.alert("User has 0 requests");
        }
        else if (this.state.userFiles.length == 0){
            window.alert("User has 0 files");
        }
    }

    getAllRequests() {
        const query = this.props.firebase.getElementsInPath('requests');
        this.setState({
            requests: query,
        })
    }

    getAllUsers() {
        const query = this.props.firebase.getElementsInPath('users');
        this.setState({
            users: query,
        })
    }
    render() {

        const sectionStyle = {
            //backgroundImage: `url(${background})`,
            backgroundColor: "white",
            width: "100%",
            backgroundSize: "30%",
            backgroundRepeat : "repeat",
        }

        const ListStyle = {
            maxHeight: "300px",
        }

        const adminHeaderStyle = {
            textAlign: "center",
            color: "#307DFF",
        }

        const {users,requests, loading, userRequest, userFiles} = this.state;
        return (
            <div>
                <div className="img-fluid col-md-12 img-fluid" style={sectionStyle}>
                    <br/>
                    <br/>
                    <br/>
                    <h1 style={adminHeaderStyle}>ADMIN</h1>
                    <br/>
                    <br/>
                    <br/>

                    <div>
                        <Row>
                            <Col>
                                <div className="card card-1 shadow">
                                    <button className="btn btn-outline-primary" onClick={() => this.getAllUsers()}>
                                        LOAD USERS
                                    </button>
                                    <div className="card card-1 shadow  overflow-auto">
                                        <UserList users={users}/>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card card-1 shadow">
                                    <button className="btn btn-outline-primary" onClick={() => this.getAllRequests()}>
                                        LOAD REQUESTS
                                    </button>
                                    <div className="card card-1 shadow  overflow-auto">
                                        <RequestList requests={requests}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <br/>

                    <div className="card card-1 shadow">
                        <h4 style={{margin: 'auto'}}> User</h4>
                        <br/>
                        <Row>
                            <Col style={{maxWidth:500, margin:'auto'}}>
                                <InputGroup>
                                    <Input id="userFormInput"/>
                                    <InputGroupAddon addonType="append">
                                        <Button color="primary" onClick={() => this.getUserInformation()}>
                                            GET INFORMATION
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="card card-1 shadow  overflow-auto">
                                    <h4 style={{margin:"auto"}}>User Requests</h4>
                                    <UserRequest requests={userRequest}/>
                                </div>
                            </Col>
                            <Col>
                                <div className="card card-1 shadow  overflow-auto">
                                    <h4 style={{margin:"auto"}}>User Files</h4>
                                    <UserFiles files={userFiles}/>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                    </div>
                    <br/>

                    <div>
                        <Row style={{maxWidth:1000, margin:'auto'}}>
                            <Col>
                                <div className="card card-1 shadow">
                                    <h4 style={{ margin:'auto', maxWidth:500}}> Delete Request</h4>
                                    <InputGroup>
                                        <Input id="requestInputForm"/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this request?')) this.deleteRequest()} }>
                                                DELETE
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col>
                                <div className="card card-1 shadow">
                                    <h4 style={{ margin:'auto',maxWidth:500}}> Delete File</h4>
                                    <InputGroup>
                                        <Input id="fileInputForm"/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this file?')) this.deleteFile()} }>
                                                DELETE
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <br/>
                    <div className="card card-1 shadow">
                        <NewsletterEditor/>
                    </div>
                </div>
            </div>
        );
    }
}
const UserList = ({ users }) => (
    <ul className="list-group">
        <Table striped>
            <thead>
            <tr>
                <th>ID</th>
                <th>EMAIL</th>
                <th>USERNAME</th>
            </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr>
                        <th key={user.uid} >
                            <span className="badge badge-primary">
                                {user.uid}
                            </span>
                        </th>
                            <td>
                              <strong></strong> {user.value.email}
                            </td>
                            <td>
                              <strong></strong> {user.value.username}
                            </td>

                    </tr>
                ))}
            </tbody>
        </Table>
    </ul>
);

const RequestList = ({ requests }) => (
    <ul className="list-group">
        <Table striped>
            <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DESCRIPTION</th>
            </tr>
            </thead>
            <tbody>
                {requests.map(request => (
                <tr>
                    <th key={request.uid}>
                        <span className="badge badge-primary">
                                {request.uid}
                        </span>
                    </th>
                    <th>{request.value.name}</th>
                    <th>{request.value.description}</th>
                </tr>
                ))}
            </tbody>
        </Table>

    </ul>
);

const UserRequest = ({requests}) => (
    <ul className="list-group">
        {requests.map(request => (
            <li key={request.uid} className="list-group-item  justify-content-between align-items-center">
                 <span className="badge badge-primary">
                     <strong>RequestID: </strong> {request.uid}
                 </span>
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
    <ul className="list-group">
        {files.map(file => (
            <li key={file.uid} className="list-group-item  justify-content-between align-items-center">
                <span className="badge badge-primary">
                    <strong>FileID: </strong>{file.uid}
                </span>
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