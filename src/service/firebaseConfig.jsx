// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDU9iIoBbv35xK7BjdW4RJwq96rhF4_-c",
  authDomain: "ai-travel-planner-1c662.firebaseapp.com",
  projectId: "ai-travel-planner-1c662",
  storageBucket: "ai-travel-planner-1c662.firebasestorage.app",
  messagingSenderId: "1066598729013",
  appId: "1:1066598729013:web:7a6b75000012e21c84787c",
  measurementId: "G-1TMBRD7XE9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);