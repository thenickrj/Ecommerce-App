// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvWvhAij00vh-Wm8cDfWgNd6_Vdeu9t-Q",
  authDomain: "clone-9b18d.firebaseapp.com",
  projectId: "clone-9b18d",
  storageBucket: "clone-9b18d.appspot.com",
  messagingSenderId: "111452542699",
  appId: "1:111452542699:web:47a7047212c176bab350ae",
  measurementId: "G-HFGX2C633S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
