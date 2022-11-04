// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2cvG_9pzHy2rrBoubWs4iqHvwNxrsSlI",
    authDomain: "house-marketplace-app-d1fde.firebaseapp.com",
    projectId: "house-marketplace-app-d1fde",
    storageBucket: "house-marketplace-app-d1fde.appspot.com",
    messagingSenderId: "1040400378476",
    appId: "1:1040400378476:web:d2010500a4b6a63ca38649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore()