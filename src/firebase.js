import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwEl6-BwFlmYBaUlqsegfHsu7Vo3bZK5g",
  authDomain: "todo-react-firebase-e754d.firebaseapp.com",
  projectId: "todo-react-firebase-e754d",
  storageBucket: "todo-react-firebase-e754d.appspot.com",
  messagingSenderId: "925550223517",
  appId: "1:925550223517:web:666d7ad7d4b4a8df53b474",
  measurementId: "G-CSQS632007",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };