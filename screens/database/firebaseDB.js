import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDJCRnsxhRBhCuJSYj1p7bvUz63HSYBz4",
    authDomain: "pcmob4demo1.firebaseapp.com",
    projectId: "pcmob4demo1",
    storageBucket: "pcmob4demo1.appspot.com",
    messagingSenderId: "788123474505",
    appId: "1:788123474505:web:81b01101d424db2ee6fd98"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;