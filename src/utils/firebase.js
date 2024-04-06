// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs0BG8Jgru1upPOKdY-PGx2mS8ENg0S6w",
  authDomain: "netflix-app-b9f5d.firebaseapp.com",
  projectId: "netflix-app-b9f5d",
  storageBucket: "netflix-app-b9f5d.appspot.com",
  messagingSenderId: "245970970273",
  appId: "1:245970970273:web:edafd630303b5eff0772e0",
  measurementId: "G-V1N1L9W2H9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
