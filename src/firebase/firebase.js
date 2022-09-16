// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB4KTBFRrjm1pr52YpfySMVQy2NnyjAfrs",
    authDomain: "vidyasagar-institute.firebaseapp.com",
    projectId: "vidyasagar-institute",
    storageBucket: "vidyasagar-institute.appspot.com",
    messagingSenderId: "359668955039",
    appId: "1:359668955039:web:8a29393adff61103736faa",
    databaseURL:"http://vidyasagar-institute.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
