import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN
  // apiKey: "AIzaSyARNwATEGJ02ikOl4pe5LXG6BJuQs-LChw",
  // authDomain: "solving-for-india-381319.firebaseapp.com",
  // projectId: "solving-for-india-381319",
  // storageBucket: "solving-for-india-381319.appspot.com",
  // messagingSenderId: "819073826445",
  // appId: "1:819073826445:web:52c61545cc6415146f6cc4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
