// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC19IQta_KRV2mPpYRy92bF_8dnPzhcRoA",
    authDomain: "cici-bubble-tea.firebaseapp.com",
    projectId: "cici-bubble-tea",
    storageBucket: "cici-bubble-tea.appspot.com",
    messagingSenderId: "833436203730",
    appId: "1:833436203730:web:a96d3d10f244dbaa098b0b",
    measurementId: "G-MGEG92L1XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()