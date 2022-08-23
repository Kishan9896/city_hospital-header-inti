// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgcS6GRL7F8xu9--LGJ5FbebXjwoKuUOI",
  authDomain: "city-hospital-583a6.firebaseapp.com",
  projectId: "city-hospital-583a6",
  storageBucket: "city-hospital-583a6.appspot.com",
  messagingSenderId: "686663175911",
  appId: "1:686663175911:web:db2dc13c02fb92f15f1c42",
  measurementId: "G-882BEB61CP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
