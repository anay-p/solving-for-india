import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHK0o3Vv3eCr0vMYzNlPL8fZDGwlgDH0o",
  authDomain: "solving-for-india-381319.firebaseapp.com"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
