import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';


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

class Firebase {
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
        var user = this.auth().currentUser;
        user.delete().then(function() {
            console.log("User deleted.");
        }).catch(function(error) {
            console.log("Error deleting user.")
        });
    };

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;