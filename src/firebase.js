// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // <- needed for DB

import { getAuth } from "firebase/auth"; // <- needed for auth (later)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_nzZ6B_O6jFkkBxv-D7So0P53ZbOmO_s",
  authDomain: "projekt-valgfag.firebaseapp.com",
  projectId: "projekt-valgfag",
  storageBucket: "projekt-valgfag.appspot.com",
  messagingSenderId: "759383622349",
  appId: "1:759383622349:web:db362d1927b408bc7edf84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



 const auth = getAuth(app); // <- needed for auth (later)
 export { auth }

export const db = getFirestore(app); // <- needed for DB so we can use it in our application componentsls