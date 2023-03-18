// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh-LTeupK-jahnhyzvixNskQ4uinZeCrk",
  authDomain: "tw-shop-1c92b.firebaseapp.com",
  projectId: "tw-shop-1c92b",
  storageBucket: "tw-shop-1c92b.appspot.com",
  messagingSenderId: "127285020237",
  appId: "1:127285020237:web:ed144ce833686418affe04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase_store = getFirestore(app);
const firebase_auth = getAuth(app);

export { firebase_store, firebase_auth };
