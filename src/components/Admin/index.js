import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import NewsletterEditor from '../NewsletterEditor';
import {withAuthorization} from "../Session";
import background from "./back.png"

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            userRequest: [],
            userFiles: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }
    componentWillUnmount() {
        this.props.firebase.users().off();
    }
    deleteUser() {
        this.props.firebase.doDeleteUser();
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

    render() {

        var sectionStyle = {
            backgroundImage: `url(${background})`,
            height: "665px",
            width: "100%",
            backgroundSize: "contain"

        }

        var ListStyle = {
            maxHeight: "300px"
        }

        const { users, loading, userRequest, userFiles } = this.state;
        return (
            <div>
            <div className="img-fluid col-md-12 img-fluid"style={sectionStyle}>
            <br/>
            <br/>
            <br/>
            
            <div className="row">

            <div className="col-md-4">
            <div className="card mb-4 box-shadow">
            <div className="card-body shadow">
            
                <div>
                    <h2> Selected User</h2>
                    <form className="form-group">
                        <input id = "userFormInput"
                            type="search"
                            placeholder="User ID"
                            aria-label="Search"
                        />
                    </form>
                    <button  className="btn btn-outline-primary" onClick={() =>  this.getUserInformation()}>
                        GET INFORMATION
                    </button>
                </div>
                </div>
                </div>
                </div>




                <div className="col-md-8">
                <div className="card mb-8 box-shadow">
              <div className="card-body shadow">

              <NewsletterEditor />
                    <h2>User Requests</h2>
                    <UserRequest requests={userRequest} />
                    <h2>User Files</h2>
                    <UserFiles files={userFiles} />
                


              </div>
                </div>
                </div>




                <div className="col-md-8">
                <div className="card mb-8 box-shadow">
              <div className="card-body shadow">

                <div className="container overflow-auto" style={ListStyle}>
                <div className="card card-1 shadow col-md-14 overflow-auto bg-light">
                    {loading && <div>Loading ...</div>}
                    <UserList users={users} />
                    </div>

                   

                    </div>
                </div>
                </div>
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
          <strong></strong> {user.email}
        </span>
                <span>
          <strong></strong> {user.username}
        </span>
            </li>
        ))}
    </ul>
);

const UserRequest = ({requests}) => (
    <ul>
        {requests.map(request => (
            <li key={request.uid}>
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
            <li key={file.uid}>
                <strong>FileID:</strong>
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