import app from 'firebase/app'

const firebaseConfig = {
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
    }
}

export default Firebase;