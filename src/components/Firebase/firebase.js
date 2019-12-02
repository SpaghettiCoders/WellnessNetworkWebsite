import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import {database} from "firebase";


//FireBase config
const config = {
      apiKey: "AIzaSyAW6EcHD6NKddCRGs6ynNnkfLh64RIVB9Q",
      authDomain: "wellness-network-website.firebaseapp.com",
      databaseURL: "https://wellness-network-website.firebaseio.com",
      projectId: "wellness-network-website",
      storageBucket: "wellness-network-website.appspot.com",
      messagingSenderId: "671256703093",
      appId: "1:671256703093:web:3f4a8271dab69a0983883c"
};

/*
var admin = require("firebase-admin");


var serviceAccount = require("./wellness-network-website-firebase-adminsdk-rymfd-2db6ae4219");

console.log('LOADING TIME:', process.env.FIREBASE_CONFIG);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://wellness-network-website.firebaseio.com"
});
*/

class Firebase{
    //Comment
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    //Auth

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
    doDeleteUser = () => {

        var user = this.auth.currentUser;
        console.log(user);
        this.auth.signOut();

        user.delete().then(function() {
            console.log("User deleted.");
        }).catch(function(error) {
            console.log("Error deleting user.")
        });
    };

    doDeleteUser = (uid) => {

        //this.insertRequest('desc', 'fff', 'Name1', '123321');
        this.deleteRequest('-Lv32ZI2qNLHxw5QNsU0');
        /*
        this.db.ref('users/xxxx').set({
            email: 'xxxxx@123321.com',
            username : 'xxxx'
        });
        */
        /*
        try {
            this.auth().deleteUser(uid)
                .then(function() {
                    console.log('Successfully deleted user');
                })
        }
        catch (error) {
            console.log('Error deleting user:', error);
        }
         */
    };

    //Information Handle

    insertRequest = (description, file, name, userID) => {
        this.db.ref('requests').push({
            description: description,
            file: file,
            name: name,
            userID: userID
        });
    }

    deleteRequest = (requestID) => {
        try {
            this.db.ref('requests').child(requestID).remove();
        } catch (error) {
            console.log(error);
        }
    }


    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;