// Importando o Firestore junto com a inicialização do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDDwSzDK1GHvEkl3Q7TWRhKVH1iuCs66Zg",
    authDomain: "form-prime.firebaseapp.com",
    projectId: "form-prime",
    storageBucket: "form-prime.appspot.com",
    messagingSenderId: "1012298324459",
    appId: "1:1012298324459:web:a537c97637184f8c69e1ae",
    measurementId: "G-JFW1WM092D",
};

// Inicializando o Firebase e o Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportando o Firestore
export { app, db };
