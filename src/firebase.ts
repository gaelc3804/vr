import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBBEZ2Qz8IvefFgWK_VyPtyfqECnmvJsP4",
  authDomain: "seg-vr.firebaseapp.com",
  databaseURL: "https://seg-vr-default-rtdb.firebaseio.com",
  projectId: "seg-vr",
  storageBucket: "seg-vr.appspot.com",
  messagingSenderId: "839283204894",
  appId: "1:839283204894:web:778e9d7d3e132880dd5f0f",
  measurementId: "G-7FW0REJYGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };