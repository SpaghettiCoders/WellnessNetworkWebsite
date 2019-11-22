import React, { Component } from "react";
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import firebase, {firestore} from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { AuthUserContext, withAuthorization } from '../Session';

class Account extends Component {
    state = {
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("audio")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));


        firebase.database().ref('files/' + filename.substr(0,filename.indexOf('.'))).set({
            userID: firebase.auth().currentUser.uid,
        });
    };


    render() {
        return (
            <div>
                <form>
                    <PasswordForgetForm/>
                    <PasswordChangeForm/>
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
                </form>
            </div>
        );
    }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);
//export default Account;