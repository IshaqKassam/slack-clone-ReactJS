import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDT0RUQJRPN2NdUDx-6Ksd2xadB9xGN8Pk",
    authDomain: "slack-clone-challenge-8cd0a.firebaseapp.com",
    projectId: "slack-clone-challenge-8cd0a",
    storageBucket: "slack-clone-challenge-8cd0a.appspot.com",
    messagingSenderId: "812561382099",
    appId: "1:812561382099:web:4aa3710f55aa151c04b226"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();


export default db