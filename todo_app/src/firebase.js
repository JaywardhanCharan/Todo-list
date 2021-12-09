
import  firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6wdKZ8Xav8HXFIYzQ8cdtEHdRe_XdcdM",
    authDomain: "todo-app-fp-2ad4a.firebaseapp.com",
    projectId: "todo-app-fp-2ad4a",
    storageBucket: "todo-app-fp-2ad4a.appspot.com",
    messagingSenderId: "20097782840",
    appId: "1:20097782840:web:15964a04ad20b7539342cd",
    measurementId: "G-PK2CYQJBQQ"
  });

  const db = firebaseApp.firestore();

  export default db;
