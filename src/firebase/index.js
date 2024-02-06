import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBAhJCEhzWtUuha5--wDzUmK5PLjrtKVJk",
    authDomain: "k-store-85de2.firebaseapp.com",
    projectId: "k-store-85de2",
    storageBucket: "k-store-85de2.appspot.com",
    messagingSenderId: "706181256783",
    appId: "1:706181256783:web:64f5ff88f4c7ce1bc57c3a",
    measurementId: "G-SC7YKR812P"
};


const app = initializeApp(firebaseConfig);

let db = getFirestore(app)
let storage = getStorage(app);

export { db, storage };