// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFvTwiT6ZLgc6C2SYHMTy8X45TriQBinQ",
  authDomain: "codes-arno.firebaseapp.com",
  projectId: "codes-arno",
  storageBucket: "codes-arno.firebasestorage.app",
  messagingSenderId: "450355166269",
  appId: "1:450355166269:web:e5728b0a5708af2c9e3e54",
  measurementId: "G-30EV005XKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);