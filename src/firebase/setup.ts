// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWRs6uJ2Shfqizl4Q0H93RXBwv75CMC8Q",
  authDomain: "blinkit-eb149.firebaseapp.com",
  projectId: "blinkit-eb149",
  storageBucket: "blinkit-eb149.firebasestorage.app",
  messagingSenderId: "59849276193",
  appId: "1:59849276193:web:3bae2c19efe4c00bc7dc60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
