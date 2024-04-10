import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB5W4fzKmVag4sIWDmnw8Umx9qnObCb_Kc",
  authDomain: "vr-site-37bb8.firebaseapp.com",
  databaseURL: "https://vr-site-37bb8-default-rtdb.firebaseio.com",
  projectId: "vr-site-37bb8",
  storageBucket: "vr-site-37bb8.appspot.com",
  messagingSenderId: "219259525101",
  appId: "1:219259525101:web:7e7bf1127c89e59417b9e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };