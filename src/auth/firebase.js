import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

// to create  a new user
export const createUser = async (email, password, name, lastname) => {
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
        var errorMessage = error.message;
        console.log(error.code)
        // ..
      });

    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ name, lastname });
    alert(currentUser);
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};
