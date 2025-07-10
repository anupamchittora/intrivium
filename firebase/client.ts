import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC56WMQtXafCHG0zmRp4-skMIqcY_zgCc0",
  authDomain: "prepwise-58989.firebaseapp.com",
  projectId: "prepwise-58989",
  storageBucket: "prepwise-58989.firebasestorage.app",
  messagingSenderId: "996187243661",
  appId: "1:996187243661:web:e3e13596cac227bdb8cec4",
  measurementId: "G-MSYR77XMNF"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);