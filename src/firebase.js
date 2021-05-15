import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBvqAQKh9FmI8-fMnb4dLh25NbJ4ys3P1k",
  authDomain: "linkedin-clone-5e3e3.firebaseapp.com",
  projectId: "linkedin-clone-5e3e3",
  storageBucket: "linkedin-clone-5e3e3.appspot.com",
  messagingSenderId: "1064480661450",
  appId: "1:1064480661450:web:3d6fa0935890f1c87eb933",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
