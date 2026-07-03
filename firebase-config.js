import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js";

// Reemplazar estos datos por la configuracion web del proyecto Firebase nuevo.
const firebaseConfig = {
  apiKey: "AIzaSyBVFkhipiYu1OOge_vE5tBQQM2cFsZRY2Q",
  authDomain: "seniorflow-d9d7c.firebaseapp.com",
  projectId: "seniorflow-d9d7c",
  storageBucket: "seniorflow-d9d7c.firebasestorage.app",
  messagingSenderId: "502516601983",
  appId: "1:502516601983:web:09e93cbc9d2f9bfba29b4a",
  measurementId: "G-H328WXB1T1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, firebaseConfig };
