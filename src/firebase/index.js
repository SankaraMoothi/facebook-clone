// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdLbdj__badT9zSlMcc3rYCmUlMOu7JAU",
  authDomain: "facebook-clone-27eda.firebaseapp.com",
  projectId: "facebook-clone-27eda",
  storageBucket: "facebook-clone-27eda.appspot.com",
  messagingSenderId: "1050924828220",
  appId: "1:1050924828220:web:fde27b7463470dc70be539",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default db;
