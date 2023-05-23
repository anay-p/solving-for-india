import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "solving-for-india-381319",
  storageBucket: "solving-for-india-381319.appspot.com",
  messagingSenderId: "819073826445",
  appId: "1:819073826445:web:52c61545cc6415146f6cc4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const createUserDocument = async (uid, userx) => {
  // const snapshot=await userRef.get();
  // if(!snapshot.exists){
  //   const {email}=userx.Email;
  //   const {displayName}=userx.Name;
  // }
  setDoc(doc(db, "users", uid), userx)
  .then(() => {
    console.log("User data added successfully");
  })
  .catch(error => {
    console.log(error);
  });
};
