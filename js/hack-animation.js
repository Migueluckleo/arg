document.addEventListener("DOMContentLoaded", () => {
    const typewriter = document.getElementById("typewriter");
    const registerContainer = document.getElementById("register-container");

    const hackLines = [
        "Iniciando protocolo de acceso...",
        "Estableciendo conexión segura...",
        "Decodificando registros encriptados...",
        "Verificando credenciales...",
        "ACCESO PARCIAL CONCEDIDO.",
        "█████████████████████████",
        "Se requiere identificación."
    ];

    const fakeCommands = [
        ">> 0xDEADBEEF // Packet Inject",
        ">> if(auth==true){init_connect();}",
        ">> load -m secure_bridge --force",
        ">> crypt_key[session_id] = rand()",
        ">> exec -p bypass_secure_layer()",
        ">> hex_dump /sys/protocol/logs",
        ">> start_decrypt_sequence()",
        ">> // SHA256 HASH AUTH //",
        ">> verify(checksum) == TRUE",
        ">> bridge.create_tunnel(port=8080)"
    ];

    let i = 0; // Línea actual del sistema
    let j = 0; // Caracter actual en la línea
    let isTyping = true;
    let isFakeCommand = true; // Alternamos entre código falso y respuestas del sistema

    function typeNextCharacter() {
        if (!isTyping) return;

        let currentText = isFakeCommand ? getRandomFakeCommand() : hackLines[i];

        if (j < currentText.length) {
            typewriter.innerHTML += currentText[j];
            j++;

            // Simula velocidad humana (aleatoria entre 50ms y 100ms)
            setTimeout(typeNextCharacter, Math.random() * 50 + 50);
        } else {
            // Línea completa, alternamos entre usuario y sistema
            typewriter.innerHTML += "<br>";
            j = 0;
            isFakeCommand = !isFakeCommand; // Alternamos

            if (!isFakeCommand) {
                i++; // Solo avanzamos la validación si es la respuesta del sistema
            }

            if (i < hackLines.length) {
                setTimeout(typeNextCharacter, 500); // Pausa antes del próximo bloque
            } else {
                // Cuando termine de escribir todas las líneas, mostramos el formulario
                setTimeout(() => {
                    typewriter.innerHTML += "<br>🟢 Autorizado.";
                    setTimeout(() => {
                        typewriter.classList.add("hidden");
                        registerContainer.classList.remove("hidden");
                        registerContainer.classList.add("show-glitch");
                    }, 1000);
                }, 1500);
            }
        }
    }

    function getRandomFakeCommand() {
        return fakeCommands[Math.floor(Math.random() * fakeCommands.length)];
    }

    // Iniciar el tipeo
    typeNextCharacter();
});
