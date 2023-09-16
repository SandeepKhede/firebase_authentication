
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDel8-Rr6jOGRqP_h9htBPH7ZVPAsS1RAs",
  authDomain: "react-http-ba72a.firebaseapp.com",
  databaseURL: "https://react-http-ba72a-default-rtdb.firebaseio.com",
  projectId: "react-http-ba72a",
  storageBucket: "react-http-ba72a.appspot.com",
  messagingSenderId: "100293565749",
  appId: "1:100293565749:web:c91b7052b76c0817f8c07c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}