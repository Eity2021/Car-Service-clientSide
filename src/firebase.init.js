// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr5q7RsDwG1_nfNSO56kT0MJT14cnd80s",
  authDomain: "car-services-b6b72.firebaseapp.com",
  projectId: "car-services-b6b72",
  storageBucket: "car-services-b6b72.appspot.com",
  messagingSenderId: "297224503308",
  appId: "1:297224503308:web:8f94ac26ba6d24b76d2e29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;