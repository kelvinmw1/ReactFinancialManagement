// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmb8Io42Fna43lmAxsh2cKVII_Oy3HXR4",
  authDomain: "rect-finance.firebaseapp.com",
  projectId: "rect-finance",
  storageBucket: "rect-finance.appspot.com",
  messagingSenderId: "90138211068",
  appId: "1:90138211068:web:45a71186ebe27f03ec5d79",
  measurementId: "G-BYY9MESEEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Db = getFirestore();

//export

export{app};
export{analytics};
export{Db};