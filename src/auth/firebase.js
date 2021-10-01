import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { successToastify, errorToastify } from "../styling/toastify";
import { useEffect, useState } from "react";

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

export const createUser = async (firstName, lastName, email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({
      displayName: `${firstName[0].toUpperCase() + firstName.substring(1).toLowerCase()} ${lastName[0].toUpperCase() + lastName.substring(1).toLowerCase()}`,
    });
    successToastify(`New user created successfully. Welcome ${currentUser.displayName} 🖐`);
  } catch (error) {
    errorToastify("There exists an account with this email. Please login with your password or continue with Google!");
  }
};

export const SignUpProvider = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const { user } = await firebase.auth().signInWithPopup(provider);
  successToastify(`Welcome ${user.displayName} 🖐`);
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    successToastify(`Signed in successfully. Welcome ${userCredential.user.displayName} 🖐`);
  } catch (error) {
    errorToastify("The password is invalid or the user does not have a password!");
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    successToastify(`Signed out succesfully. See you soon 👋`);
  } catch (error) {
    errorToastify("Something went wrong, try again!");
  }
};

export const addInfo = async (info) => {
  try {
  const milestoneRef = await firebase.database().ref("milestone");
  await milestoneRef.push(info);
  successToastify("Added successfully");
} catch (error) {
  errorToastify("Something went wrong, try again!");
}
};

export const useFetch = () => {
  const [cardList, setcardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const cardRef = firebase.database().ref("milestone");
    // console.log("cardref: ", cardRef)
    cardRef.on("value", (snapshot) => {
      const cards = snapshot.val();

      const cardArray = [];
      for (let id in cards) {
        cardArray.push({ id, ...cards[id]});
      }
      setcardList(cardArray);
      setIsLoading(false);
    });
  }, []);

  return { cardList, isLoading };
};

export const deleteHandler = async (id) => {
  const milestoneRef = firebase.database().ref("milestone").child(id);
  await milestoneRef.remove();
  successToastify("Deleted successfully");
}
