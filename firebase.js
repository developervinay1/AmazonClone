import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIQiIP2yCtMj_-JPnJJMQSYuix0bLpeBk",
  authDomain: "clone-88675.firebaseapp.com",
  projectId: "clone-88675",
  storageBucket: "clone-88675.appspot.com",
  messagingSenderId: "157548681977",
  appId: "1:157548681977:web:f5c8cc2ddf5e843f50a028",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
