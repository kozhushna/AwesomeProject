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
  apiKey: 'AIzaSyAC7jauvGIgwsWn8Xj4VPqvvzoIVFxui2U',
  authDomain: 'awesome-app-d4ca1.firebaseapp.com',
  projectId: 'awesome-app-d4ca1',
  storageBucket: 'awesome-app-d4ca1.appspot.com',
  messagingSenderId: '387210597308',
  appId: '1:387210597308:web:970c753d31be7283ad51b9',
  measurementId: 'G-XDN6H7H0EV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
