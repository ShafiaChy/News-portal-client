// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN6Z76v-izuV3LxNDAzev5b3HFAibuV94",
  authDomain: "news-portal-test.firebaseapp.com",
  projectId: "news-portal-test",
  storageBucket: "news-portal-test.appspot.com",
  messagingSenderId: "82467436370",
  appId: "1:82467436370:web:eba1f554af6a489e22ac8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;