import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo62hroG4zs35CkiQL2GXh0K2B3DaV9LU",
  authDomain: "projecto-react---coder.firebaseapp.com",
  projectId: "projecto-react---coder",
  storageBucket: "projecto-react---coder.appspot.com",
  messagingSenderId: "516143872866",
  appId: "1:516143872866:web:a8a522b2cd0de62f4b4a3b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)