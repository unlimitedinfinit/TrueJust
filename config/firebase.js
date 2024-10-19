import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// add firebase config with the actual values from google-services.json
const firebaseConfig = {
  apiKey: "AIzaSyDl97QQAYqYPzZbMzO2rGCKQKdHJOZJRl8",  // Your API key
  authDomain: "truevote-86420.firebaseapp.com",       // Firebase auth domain
  projectId: "truevote-86420",                        // Firebase project ID
  storageBucket: "truevote-86420.appspot.com",        // Firebase storage bucket
  messagingSenderId: "840578627229",                  // Messaging sender ID
  appId: "1:840578627229:android:a99084fda01b94bd7ac674", // App ID from google-services.json
  databaseURL: "https://truevote-86420-default-rtdb.firebaseio.com" // Firebase Realtime Database URL (if needed)
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth; only for native platforms (Android and iOS)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
