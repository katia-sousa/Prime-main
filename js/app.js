
  // Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDDwSzDK1GHvEkl3Q7TWRhKVH1iuCs66Zg",
    authDomain: "form-prime.firebaseapp.com",
    projectId: "form-prime",
    storageBucket: "form-prime.firebasestorage.app",
    messagingSenderId: "1012298324459",
    appId: "1:1012298324459:web:a537c97637184f8c69e1ae",
    measurementId: "G-JFW1WM092D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  export default app
