// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAhGwaVX4c0ScGK_PG_bdMeZ7YSwEubgM",
  authDomain: "rumor-spreader.firebaseapp.com",
  projectId: "rumor-spreader",
  storageBucket: "rumor-spreader.firebasestorage.app",
  messagingSenderId: "104525040463",
  appId: "1:104525040463:web:10061aacdfdeb5c0b5933a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
