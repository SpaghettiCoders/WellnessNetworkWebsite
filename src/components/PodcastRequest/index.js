import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
const INITIAL_STATE = {
    error: null,
};
class PodcastRequest extends Component {
    state = {
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        const { name, description, reqID } = this.state;
        firebase
            .storage()
            .ref("audio")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
        firebase
            .database()
            .ref('files/' + filename.substr(0,filename.indexOf('.')))
            .set({
                userID: firebase.auth().currentUser.uid,
            });
        firebase
            .database()
            .ref('requests/' + reqID)
            .set({
                userID: firebase.auth().currentUser.uid,
                name: name,
                description: description,
                file: filename.substr(0,filename.indexOf('.'))
            });
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {

    };

    render() {
        const { name, description, reqID } = this.state;
        return (
            <div className="container">
                <div className="card card-1 shadow col-md-6" >
                    <h1>Podcast Request</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <input
                            name="name"
                            value={name}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Name"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            name="description"
                            value={description}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Description"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            name="reqID"
                            value={reqID}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Request ID"
                        />
                        </div>
                        <div className="form-group">
                        <FileUploader
                            accept="audio/*"
                            name="avatar"
                            randomizeFilename
                            storageRef={firebase.storage().ref("audio")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                        />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Request
                        </button>
                    </form>
                </div>
            </div>

        );
    }
}
export default withFirebase(PodcastRequest);