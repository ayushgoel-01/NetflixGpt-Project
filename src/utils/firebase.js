// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAekA_cV5AR5mfz9Wjca5_JAJ1NRAYNDVg",
  authDomain: "netflixgpt-project-45d43.firebaseapp.com",
  projectId: "netflixgpt-project-45d43",
  storageBucket: "netflixgpt-project-45d43.appspot.com",
  messagingSenderId: "185127144754",
  appId: "1:185127144754:web:0793af82f7c52eda085b2b",
  measurementId: "G-6GB2XDEW9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();