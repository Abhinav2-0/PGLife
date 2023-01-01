import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOFjh8hWbmminijw_2_WyRB5QtQ7khtdQ",
  authDomain: "disneyhotstar-8394d.firebaseapp.com",
  projectId: "disneyhotstar-8394d",
  storageBucket: "disneyhotstar-8394d.appspot.com",
  messagingSenderId: "972237205300",
  appId: "1:972237205300:web:25342691fad3a02a67ff61"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
