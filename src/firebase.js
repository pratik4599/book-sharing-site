import  firebase from "firebase";

var firebaseConfig = {
   apiKey: "AIzaSyDDWlAAjUqHpzATeg2a96h5vTVzawJ9L-s",
    authDomain: "myapp-4b8a8.firebaseapp.com",
    projectId: "myapp-4b8a8",
    storageBucket: "myapp-4b8a8.appspot.com",
    messagingSenderId: "881220536297",
    appId: "1:881220536297:web:416b6ef017e40cd161ed78"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();