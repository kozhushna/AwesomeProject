// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC18cMACPSiUnD5dLPn773MT8bMc5gPDNE',
  authDomain: 'auth-app-c0d41.firebaseapp.com',
  projectId: 'auth-app-c0d41',
  storageBucket: 'auth-app-c0d41.appspot.com',
  messagingSenderId: '297501883090',
  appId: '1:297501883090:web:9101760b7525e2f5914b0b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
