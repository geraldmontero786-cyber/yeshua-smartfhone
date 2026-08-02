import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCguf7irNF5WB0Gh5r56fPIhQDB_2lLFzc",
  authDomain: "yeshua-smartfhone.firebaseapp.com",
  projectId: "yeshua-smartfhone",
  storageBucket: "yeshua-smartfhone.firebasestorage.app",
  messagingSenderId: "1045401912682",
  appId: "1:1045401912682:web:f26b3c2f516151785fd113"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Crear conexión con Firestore
const db = getFirestore(app);

// Exportar Firebase y la base de datos
export { app, db };