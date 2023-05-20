import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, query,collection, addDoc,getDoc,getDocs} from 'firebase/firestore';
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
const db = getFirestore(app);
export default app;
 export const createUserDocument= async(userx)=>{
  if(!userx) return;
  const userRef=collection(db, 'users');
  // const snapshot=await userRef.get();
  // if(!snapshot.exists){
  //   const {email}=userx.Email;
  //   const {displayName}=userx.Name;
  // }
  addDoc(userRef,userx)
  .then(docRef => {
    console.log("Document has been added successfully");
})
.catch(error => {
    console.log(error);
})
 };
 export const getAllData=async(email)=>{
   const q= query(collection(db,'users'),where("email","==",email))
  //  const querySnapshot= await getDocs(q);
  var userprof=[];
  await getDocs(q).then((res)=>{
    res.forEach(user=>{
      userprof.push(doc.data());
  })
  }).then(()=>{return userprof;})
  //  querySnapshot.forEach(user=>{
  //      userprof.push(doc.data());
  //  })
   
 };