import app from 'firebase/app'

const config = {
    apiKey: "AIzaSyCJdiZfsRDAhJraJU8XcDgikepmGj4hSc4",
    authDomain: "wellnessnetwork-35780.firebaseapp.com",
    databaseURL: "https://wellnessnetwork-35780.firebaseio.com",
    projectId: "wellnessnetwork-35780",
    storageBucket: "wellnessnetwork-35780.appspot.com",
    messagingSenderId: "740235113080",
    appId: "1:740235113080:web:0b6914c99815a9e59cb38d",
    measurementId: "G-B6HYSCE4VD"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;