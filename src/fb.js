// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmSi1JeS7xRVTDaRPdtTFZ9krrRwIxArw",
    authDomain: "neaper-cf688.firebaseapp.com",
    projectId: "neaper-cf688",
    storageBucket: "neaper-cf688.appspot.com",
    messagingSenderId: "785667927677",
    appId: "1:785667927677:web:ed314af0143285ac3ecb14",
    measurementId: "G-ZKZV81EQ9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };