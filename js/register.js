import { registerUser, registerWithGoogle } from "../js/auth.js";
import { sendWelcomeEmail } from "../js/email.js";

document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("registerBtn");
    const googleBtn = document.getElementById("googleBtn");
    const modal = document.getElementById("successModal"); // Modal de confirmación
    const modalText = document.getElementById("modalText");
    const closeModalBtn = document.getElementById("closeModal");

    if (registerBtn) {
        registerBtn.addEventListener("click", async () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email && password) {
                // ✅ Activamos loader y deshabilitamos botón
                registerBtn.innerHTML = "⏳ Registrando...";
                registerBtn.disabled = true;

                try {
                    const user = await registerUser(email, password);
                    sendWelcomeEmail(email, user.displayName || "Reportero Desconocido");

                    // ✅ Mostrar modal de éxito
                    modalText.innerHTML = `Registro exitoso, bienvenido ${email}`;
                    modal.classList.remove("hidden");
                } catch (error) {
                    console.error("❌ Error en el registro:", error);
                } finally {
                    // ✅ Restauramos botón
                    registerBtn.innerHTML = "Registrarse";
                    registerBtn.disabled = false;
                }
            } else {
                console.warn("⚠ Introduce correo y contraseña.");
            }
        });
    }

    if (googleBtn) {
        googleBtn.addEventListener("click", async () => {
            googleBtn.innerHTML = "⏳ Conectando...";
            googleBtn.disabled = true;

            try {
                const user = await registerWithGoogle();
                sendWelcomeEmail(user.email, user.displayName || "Reportero Desconocido");

                // ✅ Mostrar modal de éxito
                modalText.innerHTML = `Registro exitoso con Google, bienvenido ${user.email}`;
                modal.classList.remove("hidden");
            } catch (error) {
                console.error("❌ Error con Google:", error);
            } finally {
                googleBtn.innerHTML = "Conectar con Google";
                googleBtn.disabled = false;
            }
        });
    }

    // ✅ Cerrar modal al hacer clic en el botón de cerrar
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }
});
