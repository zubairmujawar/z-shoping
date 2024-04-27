// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQTb7gK_z5aBCAMx0Lrfj1qd9fQjvOb5U",
  authDomain: "zshoping-752cf.firebaseapp.com",
  projectId: "zshoping-752cf",
  storageBucket: "zshoping-752cf.appspot.com",
  messagingSenderId: "861667345655",
  appId: "1:861667345655:web:8fa06f831334b7418bbff2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDB = getFirestore(app);

export { fireDB, auth };
