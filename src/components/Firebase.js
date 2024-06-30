// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA669vGcm3OpGQt8x64YxbPpVDUoqNh4D8",
  authDomain: "fir-5b232.firebaseapp.com",
  projectId: "fir-5b232",
  storageBucket: "fir-5b232.appspot.com",
  messagingSenderId: "381391245150",
  appId: "1:381391245150:web:37f62d9608de20b710c9cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db = getFirestore(app)
// export const txtDB = getFirestore(app)

export default app