// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvnkb2Ipmo0yL8IZ5yXwytGWdX6k1_rRM",
  authDomain: "portofoliolagi.firebaseapp.com",
  projectId: "portofoliolagi",
  storageBucket: "portofoliolagi.firebasestorage.app",
  messagingSenderId: "579875304815",
  appId: "1:579875304815:web:1fb4677f62618f50b2a49a",
  measurementId: "G-DTTG9Y3KJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };