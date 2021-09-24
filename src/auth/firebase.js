import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { successToastify, errorToastify } from "../styling/toastify";

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
});


// to create  a new user
export const createUser = async (firstName, lastName, email, password) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
        console.log(firstName)
      });
      console.log("create user")
    const currentUser = firebase.auth().currentUser;
    // console.log(currentUser)
    await currentUser.updateProfile({displayName: `${firstName} ${lastName}`});
    successToastify(`New user created successfully. Welcome ${currentUser.displayName}`);
  } catch (error) {
    errorToastify("There exists an account with this email. Please login with your password or continue with Google!")
  }
};

// sign up with google
export const signUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithPopup(provider);
};

export const userObserver = async (setCurrentUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};

// sign in

export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      alert("The password is invalid or the user does not have a password!");
    });
};


// sign out
export const signOut = () => {
  firebase.auth().signOut();
};

