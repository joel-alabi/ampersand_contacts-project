import * as firebase from "firebase"

import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCfEqM1pLHQU8xWhiKHG0wv4wlMLdfY5Y8",
    authDomain: "ampersand-contacts.firebaseapp.com",
    projectId: "ampersand-contacts",
    storageBucket: "ampersand-contacts.appspot.com",
    messagingSenderId: "924062004869",
    appId: "1:924062004869:web:5d096f56e91f587376dbec"
  };
 
  firebase.initializeApp(firebaseConfig);

export default firebase;
