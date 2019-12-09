import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import {withAuthorization} from "../Session";
import { Container, Row, Col, Table, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class NewsLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            selectedRequest : {value:{ content:'Something', date:'01/01/2001', linked_video:'https://www.youtube.com/embed/pHIKx_qJQXg', title:'Title :)'}}
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        const query = this.props.firebase.getElementsInPath('newsletters');
        this.setState({
                users: query
        });
    }

    loadRequests() {
        const query = this.props.firebase.getElementsInPath('newsletters');
        this.setState({
            users: query,
            loading: false,
        });
        console.log(query);
    }

    render() {
        const { users, selectedRequest } = this.state;
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{width:'100%'}}>
                    <Button color="primary" onClick={()=>this.loadRequests()} style={{margin:'auto'}}>
                    Load Requests
                </Button>
                </div>
                <br/>
                <br/>
                <div>
                    <Row>
                        <Col style={{paddingLeft:"30px"}}>
                            <UserList users={users}/>
                        </Col>
                        <SelectedNewsLetter request={selectedRequest}/>
                    </Row>
                </div>

            </div>
        );
    }
}
const UserList = ({ users }) => (
    <ul>
        <Table striped style={{maxWidth:"30%"}}>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.uid}>
                        <th>{user.value.title}</th>
                        <th>{user.value.date}</th>
                        <th></th>
                    </tr>
                ))}
            </tbody>
        </Table>
    </ul>
);

const SelectedNewsLetter = ({request}) => (
    <ul>
        <Col>
            <h4>Title</h4>
            <br/>
            <span>{request.value.title}</span>
            <br/>
            <br/>
            <h4>Date</h4>
            <br/>
            <span>{request.value.date}</span>
            <br/>
            <br/>
            <span>{request.value.content}</span>
            <br/>
            <iframe width="450" height="310"
                    src={request.value.linked_video}>
            </iframe>
        </Col>
    </ul>
);

export default withFirebase(NewsLetter);