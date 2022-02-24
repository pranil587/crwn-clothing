import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
    apiKey: "AIzaSyAc-WE471HFi7qYXCPAY9knttj-KyhBrtc",
    authDomain: "crwn-clothing-99581.firebaseapp.com",
    projectId: "crwn-clothing-99581",
    storageBucket: "crwn-clothing-99581.appspot.com",
    messagingSenderId: "1073576052925",
    appId: "1:1073576052925:web:823c2e32c3044320fb0fd4",
    measurementId: "G-CREK5CNNJP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;