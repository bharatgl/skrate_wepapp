import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDY9UrZ7u9HwAU_7MkZjlUjHQYuoX3fSaM",
  authDomain: "skrate-1f6bb.firebaseapp.com",
  databaseURL: "https://skrate-1f6bb-default-rtdb.firebaseio.com",
  projectId: "skrate-1f6bb",
  storageBucket: "skrate-1f6bb.appspot.com",
  messagingSenderId: "868401064755",
  appId: "1:868401064755:web:13be191443b1bcd30bac46",
  measurementId: "G-KD570HTP60",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getStorage(app);
const storage = getStorage(app);
// const storage = getFirestore.storage();

export { app, firestore, storage };
