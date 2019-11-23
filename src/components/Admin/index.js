import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import {withAuthorization} from "../Session";


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
        const { users, loading } = this.state;
        return (
            <div>
                <div>
                    <h1>Admin</h1>
                    {loading && <div>Loading ...</div>}
                    <UserList users={users} />
                </div>
                <div>
                    <h2> Selected User</h2>
                    <form>
                        <input id = "userFormInput"
                            type="search"
                            placeholder="User ID"
                            aria-label="Search"
                        />
                    </form>
                    <button onClick={() =>  this.deleteUser()}>
                        Delete User
                    </button>
                    <button onClick={() => this.printValue()}>
                        PrintValue
                    </button>
                </div>
            </div>
        );
    }
}
const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
                <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
                <span>
          <strong>Username:</strong> {user.username}
        </span>
            </li>
        ))}
    </ul>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(withFirebase(AdminPage));
//export default withFirebase(AdminPage);