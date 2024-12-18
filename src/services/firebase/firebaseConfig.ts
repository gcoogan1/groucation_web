import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const getFirebaseConfig = () => {
  if (window.location.hostname === 'groupcation-web-prod-92d63.web.app/') {
    return {
      apiKey: import.meta.env.VITE_PROD_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_PROD_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_PROD_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_PROD_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_PROD_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_PROD_FIREBASE_APP_ID,
    };
  } else {
    return {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
  }
};

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
