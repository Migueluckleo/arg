import { registerUser, registerWithGoogle } from "./auth.js";

// 🚀 Conectar botones con las funciones de autenticación
document.getElementById("registerBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  registerUser(email, password).then((user) => {
    console.log("Usuario registrado:", user);
  });
});

document.getElementById("googleBtn").addEventListener("click", () => {
  registerWithGoogle().then((user) => {
    console.log("Usuario registrado con Google:", user);
  });
});
