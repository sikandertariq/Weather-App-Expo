// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKYAOWlm7RTZ6l8uP9PveEAhePit34Igs",
  authDomain: "weatherapp-823af.firebaseapp.com",
  projectId: "weatherapp-823af",
  storageBucket: "weatherapp-823af.appspot.com",
  messagingSenderId: "746265559671",
  appId: "1:746265559671:web:3a86a8fa7a50e33ce37c72"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem
        (key, value);
    }
    catch (e) {
        console.error("Failed to store data:", e);
    }
}