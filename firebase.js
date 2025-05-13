// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDlqwKCLoNbuohMlhCTfMYQq5MT0A9enw",
  authDomain: "safe-spot-app-85107.firebaseapp.com",
  projectId: "safe-spot-app-85107",
  storageBucket: "safe-spot-app-85107.appspot.com",
  messagingSenderId: "1071289318819",
  appId: "1:1071289318819:web:db33419482c585178bae16",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
