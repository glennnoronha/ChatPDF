import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBwDYEJKYVIMdGKafdGM4XrSXNv06DBcPs",
    authDomain: "chatpdf-e6a52.firebaseapp.com",
    projectId: "chatpdf-e6a52",
    storageBucket: "chatpdf-e6a52.firebasestorage.app",
    messagingSenderId: "620954889660",
    appId: "1:620954889660:web:fabb0174836781e6844fb9",
    measurementId: "G-5QLXNWRT8D"
};
  
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };