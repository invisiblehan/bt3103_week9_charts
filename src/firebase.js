import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBxE03hlZ4YxR8FmVghwMS7CCBvjTaKzlU",
  authDomain: "bt3103-week9-4860d.firebaseapp.com",
  databaseURL: "https://bt3103-week9-4860d.firebaseio.com",
  projectId: "bt3103-week9-4860d",
  storageBucket: "bt3103-week9-4860d.appspot.com",
  messagingSenderId: "686284734208",
  appId: "1:686284734208:web:8e20d47dcb0775eff23de5",
  measurementId: "G-N5GMW4LGYT"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;

