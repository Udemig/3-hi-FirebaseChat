// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDuPLFhyJ6Cwikhi7kwlVd2nZnMn9yx8ic',
  authDomain: 'chatodalari-3b67d.firebaseapp.com',
  projectId: 'chatodalari-3b67d',
  storageBucket: 'chatodalari-3b67d.appspot.com',
  messagingSenderId: '375510625603',
  appId: '1:375510625603:web:3b58727fc7ec9c6fc893f6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
