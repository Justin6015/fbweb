/// <reference types="vite/client" />
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Run only in the browser
if (typeof window !== "undefined") {
  const isFirebaseHosted =
    location.hostname.endsWith(".web.app") ||
    location.hostname.endsWith(".firebaseapp.com");

  // Initialize Analytics only in prod to avoid analytics collect in dev
  if (isFirebaseHosted) {
    getAnalytics(app);
  }
}
