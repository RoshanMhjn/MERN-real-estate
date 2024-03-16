// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-be54d.firebaseapp.com",
  projectId: "mern-real-estate-be54d",
  storageBucket: "mern-real-estate-be54d.appspot.com",
  messagingSenderId: "1044629165463",
  appId: "1:1044629165463:web:422c7f6f13b9bb08bf20d2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
