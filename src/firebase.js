import { app } from "./firebase-config";
import { getStorage } from "firebase/storage";

import {
  GoogleAuthProvider,
  getAuth,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
  localStorage.removeItem("id");
};

export { auth, storage, googleProvider, db, sendPasswordReset, logout };
