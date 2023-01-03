import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyC0QgzQRrNWLsm0_Fuot0S1DwsCLEfk5i4',
  authDomain: 'cn-coding-samurai.firebaseapp.com',
  projectId: 'cn-coding-samurai',
  storageBucket: 'cn-coding-samurai.appspot.com',
  messagingSenderId: '276434670975',
  appId: '1:276434670975:web:62d3f8f2c78d38dfe4364a',
  measurementId: 'G-LVBMJBKY5X',
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

