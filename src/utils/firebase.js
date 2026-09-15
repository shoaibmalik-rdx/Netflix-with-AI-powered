// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4I4gIZqsAtjZHtnVFa5IQbDrYKHcLk8s",
  authDomain: "netflix-with-gpt-dd78c.firebaseapp.com",
  projectId: "netflix-with-gpt-dd78c",
  storageBucket: "netflix-with-gpt-dd78c.firebasestorage.app",
  messagingSenderId: "700471544424",
  appId: "1:700471544424:web:c79848886cf81091f4c9dd",
  measurementId: "G-7DYDNZK68Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
