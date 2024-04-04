
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqe3m1a0BbYPEFOn3Fi96dUT7PaJg0blo",
  authDomain: "realloyha.firebaseapp.com",
  databaseURL: "https://realloyha-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realloyha",
  storageBucket: "realloyha.appspot.com",
  messagingSenderId: "794896664760",
  appId: "1:794896664760:web:94acfded66433aced9cc4d",
  databaseURL:'https://realloyha-default-rtdb.asia-southeast1.firebasedatabase.app'
};


const app = initializeApp(firebaseConfig);

export  const db = getDatabase(app);