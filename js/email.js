document.addEventListener("DOMContentLoaded", () => {
    if (window.emailjs) {
        window.emailjs.init("bSZiLXe7RauRv-xUD");
        console.log("✅ EmailJS inicializado correctamente");
    } else {
        console.error("❌ EmailJS no está disponible. Asegúrate de que el script se cargó en el HTML.");
    }
});

export function sendWelcomeEmail(userEmail, userName = "Reportero Desconocido") {
    if (!userEmail || userEmail.trim() === "") {
        console.error("❌ Error: No se proporcionó una dirección de correo.");
        return;
    }

    console.log(`📩 Intentando enviar correo a: ${userEmail}, Nombre: ${userName}`);

    const templateParams = {
        user_name: userName,
        user_email: userEmail
    };

    window.emailjs.send("service_vtpw3ej", "template_3p363vz", templateParams)
        .then(response => {
            console.log(`✅ Correo enviado con éxito a ${userEmail}`);
        })
        .catch(error => {
            console.error("❌ Error al enviar el correo:", error);
        });
}
