import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBttDXHKX4Jo8RdKlA3KCxt7JZg9vjt3EU",
    authDomain: "twitter-clone-d7b4e.firebaseapp.com",
    projectId: "twitter-clone-d7b4e",
    storageBucket: "twitter-clone-d7b4e.appspot.com",
    messagingSenderId: "203104004315",
    appId: "1:203104004315:web:a1ac7a87cbd9d921ed84fe",
    measurementId: "G-PTCGGKVZLH"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();

   export default db;