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

    printValue(id) {
        var uid = document.getElementById("userFormInput").value;
        this.props.firebase.doDeleteUser(uid);
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

        const { users, loading } = this.state;
        return (
            <div>
            














            <div className="img-fluid col-md-12 img-fluid"style={sectionStyle}>
            <br/>
            <br/>
            <br/>
            
            <div className="row">
            <div className="card card-1 shadow col-md-4 bg-light" >
                <div>
                    <h2> Selected User</h2>
                    <form className="form-group">
                        <input id = "userFormInput"
                            type="search"
                            placeholder="User ID"
                            aria-label="Search"
                        />
                    </form>
                    <button  className="btn btn-outline-primary" onClick={() =>  this.deleteUser()}>
                        Delete User
                    </button>
                    <button  className="btn btn-outline-secondary" onClick={() => this.printValue()}>
                        PrintValue
                    </button>
                </div>
                </div>
               


                
















                <div>
                <br/>
                    
                    <br/>
                    <div className="container overflow-auto" style={ListStyle}>
                    <div className="card card-1 shadow col-md-12 overflow-auto bg-light">
                    {loading && <div>Loading ...</div>}
                    <UserList users={users} />
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
const condition = authUser => !!authUser;
export default withAuthorization(condition)(withFirebase(AdminPage));
//export default withFirebase(AdminPage);