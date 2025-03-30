
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqxVlaGLe-_XG85bbcJGPnDVf2PGLGK8c",
    authDomain: "prepwise-84196.firebaseapp.com",
    projectId: "prepwise-84196",
    storageBucket: "prepwise-84196.firebasestorage.app",
    messagingSenderId: "304092018358",
    appId: "1:304092018358:web:8159773b05f9d7c3ff1817",
    measurementId: "G-VL4P7E1K04"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();


export const auth = getAuth(app);
export const firestore = getFirestore(app);