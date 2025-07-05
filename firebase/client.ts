
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgrCXECTzQlJzvvqyETadxNEEqHZfnSiE",
    authDomain: "intrivium.firebaseapp.com",
    projectId: "intrivium",
    storageBucket: "intrivium.firebasestorage.app",
    messagingSenderId: "626347636074",
    appId: "1:626347636074:web:e4e0394a66bb53537de113",
    measurementId: "G-69ZS7FMDBB"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)