import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6NO7ZjZ-mGlmD_mulO6dWjKIzGfNXw8E",
  authDomain: "habituation.firebaseapp.com",
  databaseURL: "https://habituation.firebaseio.com",
  projectId: "habituation",
  storageBucket: "habituation.appspot.com",
  messagingSenderId: "820524751733",
  appId: "1:820524751733:web:899bc636f65277d9ed913c",
};

firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = "ja";

export const auth = firebase.auth();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();

// firebase.auth.GoogleAuthProvider
export { firebase, firestore };
