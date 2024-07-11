// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLIM-YTQR55l6V9ZG_bQR8j0H47paNB1U",
  authDomain: "disneychild-clone.firebaseapp.com",
  projectId: "disneychild-clone",
  storageBucket: "disneychild-clone.appspot.com",
  messagingSenderId: "494851212345",
  appId: "1:494851212345:web:1201da836a73ae1e41b9e8",
  measurementId: "G-JGYFEFED01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth module
const db = app.firestore;
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
