import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDltE4aRJgJE6wJ6ar5YEfFo4CCVr5bgMA",
  authDomain: "arghorrorgame.firebaseapp.com",
  projectId: "arghorrorgame",
  storageBucket: "arghorrorgame.firebasestorage.app",
  messagingSenderId: "191005752501",
  appId: "1:191005752501:web:9bc8840144e9c1f8f292fc",
  measurementId: "G-50TTYSS3NW"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Exportar funciones de autenticación
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registro exitoso! 🎉");
      console.log("Usuario:", userCredential.user);
      return userCredential.user;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Error al registrarse: " + error.message);
      throw error;
    });
}

export function registerWithGoogle() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      alert("Registro con Google exitoso! 🚀");
      console.log("Usuario:", result.user);
      return result.user;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Error con Google: " + error.message);
      throw error;
    });
}
