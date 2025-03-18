document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.getElementById("typing-text");

    const normalPhrases = [
        "No debiste continuar...",
        "¿Escuchas esto?",
        "Ellos están observando...",
        "La verdad no es lo que crees...",
        "¿Por qué sigues aquí?"
    ];

    const glitchSymbols = ["☠", "✞", "✵", "ᛉ", "₪", "☤", "⛧", "⌖", "█", "░", "▒"];

    function typeEffect(text, callback) {
        let i = 0;
        typingText.innerHTML = ""; // Limpia el texto antes de escribir
        function type() {
            if (i < text.length) {
                typingText.innerHTML += text[i];
                i++;
                setTimeout(type, Math.random() * 100 + 50); // Velocidad aleatoria
            } else {
                setTimeout(() => addGlitch(callback), 1000); // Espera antes de glitch
            }
        }
        type();
    }

    function addGlitch(callback) {
        let symbols = "";
        for (let i = 0; i < 5; i++) {
            symbols += glitchSymbols[Math.floor(Math.random() * glitchSymbols.length)];
        }
        typingText.innerHTML += ` <span class="text-red-600">${symbols}</span>`;
        setTimeout(callback, 2000); // Espera antes de cambiar de frase
    }

    function startGlitchTyping() {
        const randomIndex = Math.floor(Math.random() * normalPhrases.length);
        const text = normalPhrases[randomIndex];

        typeEffect(text, startGlitchTyping);
    }

    startGlitchTyping();
});

document.addEventListener("DOMContentLoaded", () => {
    const instructionsText = document.querySelector(".typing-instructions");

    const instructions = [
        "Procede con precaución.",
        "Nada es lo que parece.",
        "No confíes en la señal.",
        "Las respuestas no están donde crees.",
        "Ellos siempre observan."
    ];

    const glitchWords = ["ERROR", "▓▓▓▓", "████", "INTERFERENCIA", "ᛉ"];

    function typeInstructions(text, callback) {
        let i = 0;
        instructionsText.innerHTML = "";
        
        function type() {
            if (i < text.length) {
                instructionsText.innerHTML += text[i];
                i++;
                setTimeout(type, Math.random() * 100 + 50);
            } else {
                setTimeout(() => addGlitch(callback), 2000);
            }
        }
        type();
    }

    function addGlitch(callback) {
        let words = instructionsText.innerHTML.split(" ");
        const randomIndex = Math.floor(Math.random() * words.length);

        words[randomIndex] = `<span class="glitch-word">${glitchWords[Math.floor(Math.random() * glitchWords.length)]}</span>`;
        instructionsText.innerHTML = words.join(" ");

        setTimeout(callback, 3000);
    }

    function startTypingInstructions() {
        const randomIndex = Math.floor(Math.random() * instructions.length);
        typeInstructions(instructions[randomIndex], startTypingInstructions);
    }

    startTypingInstructions();
});
document.addEventListener("DOMContentLoaded", () => {
    const prologueText = document.getElementById("prologue-text");
    const typingSound = new Audio("./assets/typewriter.wav"); // Ruta del sonido de tipeo
    typingSound.volume = 0.1; // Volumen bajo para no ser molesto

    const prologueLines = [
        "Mi nombre es Alejandro Vargas, pero eso ya no importa.",
        "Si estás leyendo esto, significa que lograste llegar hasta aquí.",
        "Algo no está bien... Las señales, los patrones... todo se repite.",
        "No soy el primero en notar esto. Otros lo han intentado antes.",
        "Pero ellos desaparecieron.",
        "Intenté avisar, intenté detenerme... pero es demasiado tarde.",
        `Lo que estamos viendo no es un simple error. Es una ...`,
        "No sigas. No preguntes.",
        `Corre... mientras puedas.`
    ];

    let currentLine = 0;
    let i = 0;
    let newParagraph = null;
    let isTyping = false; // Controla si está escribiendo o no

    function typeLine() {
        if (!isTyping || currentLine >= prologueLines.length) return;

        if (!newParagraph) {
            newParagraph = document.createElement("p");
            prologueText.appendChild(newParagraph);
        }

        if (i < prologueLines[currentLine].length) {
            newParagraph.innerHTML += prologueLines[currentLine][i];

            // Reproducir el sonido de tipeo con un pequeño retraso aleatorio
            setTimeout(() => {
                typingSound.currentTime = 0; 
                typingSound.play().catch(err => console.log("Autoplay bloqueado:", err));
            }, Math.random() * 100);

            i++;

            // Simula pausas humanas (a veces más rápido, a veces más lento)
            let typingSpeed = Math.random() * 120 + 50; // Velocidad entre 50ms y 170ms
            if (prologueLines[currentLine][i - 1] === "," || prologueLines[currentLine][i - 1] === ".") {
                typingSpeed += 300; // Pausas más largas en comas y puntos
            }

            setTimeout(typeLine, typingSpeed);
        } else {
            currentLine++;
            i = 0;
            newParagraph = null; // Reseteamos para la siguiente línea

            // Introduce una pausa más larga entre frases para hacerlo más realista
            setTimeout(typeLine, Math.random() * 2000 + 1000);
        }
    }

    // Iniciar escritura en hover
    document.getElementById("prologue-container").addEventListener("mouseenter", () => {
        isTyping = true;
        typeLine(); // Iniciar el tipeo si no estaba en ejecución
    });

    // Pausar escritura si deja de hacer hover
    document.getElementById("prologue-container").addEventListener("mouseleave", () => {
        isTyping = false;
    });
});
