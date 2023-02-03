// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdGh_tqaTgrH1_-I6LrNDoOegv0t2akzk",
  authDomain: "ebazar-b8516.firebaseapp.com",
  databaseURL: "https://ebazar-b8516-default-rtdb.firebaseio.com",
  projectId: "ebazar-b8516",
  storageBucket: "ebazar-b8516.appspot.com",
  messagingSenderId: "347353986132",
  appId: "1:347353986132:web:7340503052732ccf0ea9c1",
  measurementId: "G-SGJ9CWL90Y"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;