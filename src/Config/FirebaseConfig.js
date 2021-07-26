import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/functions';


// Prod environment

var firebaseConfig = {
    apiKey: "AIzaSyAhPY4nR5tDanQbIHmP3MLrgNHDka2shns",
    authDomain: "agenz-dev.firebaseapp.com",
    databaseURL: "https://agenz-dev-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "agenz-dev",
    storageBucket: "agenz-dev.appspot.com",
    messagingSenderId: "459123777464",
    appId: "1:459123777464:web:caf543cd184d541cc3f94d"
};


//Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.storage();
firebase.functions();
export default firebase;