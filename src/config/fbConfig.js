import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAsPEiYfsvgu04O55ytMtxRwRPtPSoG734",
  authDomain: "netninjareactfirebauth.firebaseapp.com",
  databaseURL: "https://netninjareactfirebauth.firebaseio.com",
  projectId: "netninjareactfirebauth",
  storageBucket: "",
  messagingSenderId: "576188287304"

};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 