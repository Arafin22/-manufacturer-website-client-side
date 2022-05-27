// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4z8ycybzAsPhdwojdC_8eBiNySBlBiWo",
  authDomain: "manufacturer01-ce949.firebaseapp.com",
  projectId: "manufacturer01-ce949",
  storageBucket: "manufacturer01-ce949.appspot.com",
  messagingSenderId: "966167830487",
  appId: "1:966167830487:web:644cb8249c8689df1cf592",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
