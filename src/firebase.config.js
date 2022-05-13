// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYRXlbnQzOCMCY3wjUzD2Bj6VYcPNOMUE",
    authDomain: "cici-tea.firebaseapp.com",
    projectId: "cici-tea",
    storageBucket: "cici-tea.appspot.com",
    messagingSenderId: "510573684371",
    appId: "1:510573684371:web:f7a99b7a6b2609eb554f66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
