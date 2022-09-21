
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxLGh3i95peABOS_UKU3S_u1ISRVHjsRo",
  authDomain: "abre-cabezas-libros.firebaseapp.com",
  projectId: "abre-cabezas-libros",
  storageBucket: "abre-cabezas-libros.appspot.com",
  messagingSenderId: "185529835090",
  appId: "1:185529835090:web:284bb546f5cbd7fe43898b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);