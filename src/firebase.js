import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDlg2wUjEsj-gUB_PHN6_c2567bZPErZMI",
    authDomain: "web-chat-8a47e.firebaseapp.com",
    projectId: "web-chat-8a47e",
    storageBucket: "web-chat-8a47e.appspot.com",
    messagingSenderId: "824353574171",
    appId: "1:824353574171:web:b1f341f0c8b276e6cb17be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();