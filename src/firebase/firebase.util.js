import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDzhWE5Er92Bx5dhyKCBnJzTuhG5NNzDzc",
    authDomain: "react-shop-9e44e.firebaseapp.com",
    databaseURL: "https://react-shop-9e44e.firebaseio.com",
    projectId: "react-shop-9e44e",
    storageBucket: "",
    messagingSenderId: "568625860690",
    appId: "1:568625860690:web:2c678c848db86c1c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

