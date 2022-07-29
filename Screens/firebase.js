import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCpH7pSTl4-X41c1tOIo4wORNDwyTfCED0",
  authDomain: "chat-app-d0592.firebaseapp.com",
  projectId: "chat-app-d0592",
  storageBucket: "chat-app-d0592.appspot.com",
  messagingSenderId: "69885165251",
  appId: "1:69885165251:web:d0d0939a930de9c1e16c76",
  measurementId: "G-8561GNYTXC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };