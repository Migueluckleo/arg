import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { sendWelcomeEmail } from "./email.js"; 

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDltE4aRJgJE6wJ6ar5YEfFo4CCVr5bgMA",
  authDomain: "arghorrorgame.firebaseapp.com",
  projectId: "arghorrorgame",
  storageBucket: "arghorrorgame.appspot.com",
  messagingSenderId: "191005752501",
  appId: "1:191005752501:web:9bc8840144e9c1f8f292fc",
  measurementId: "G-50TTYSS3NW"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🚀 Función para Registrar usuario con Email y Contraseña
const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sendWelcomeEmail(user.email, user.displayName || "Reportero Desconocido");
            return user;
        })
        .catch((error) => {
            console.error("Error:", error.message);
            throw error;
        });
};

// 🚀 Función para Registro con Google
const registerWithGoogle = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            sendWelcomeEmail(user.email, user.displayName || "Reportero Desconocido");
            return user;
        })
        .catch((error) => {
            console.error("Error:", error.message);
            throw error;
        });
};

// ✅ Exportamos las funciones correctamente
export { registerUser, registerWithGoogle };
