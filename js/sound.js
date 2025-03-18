document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("./assets/heart.wav"); // Ruta del audio
    audio.loop = true; // Reproducir en bucle
    audio.volume = 0.05; // Volumen inicial bajo
    let audioStarted = false; // Para evitar múltiples activaciones

    // Lista de velocidades lentas para el heartbeat
    const slowVariations = [0.7, 0.75, 0.8, 0.85, 0.78, 0.82]; 
    let currentSpeedIndex = 0;

    function adjustHeartbeat() {
        currentSpeedIndex = (currentSpeedIndex + 1) % slowVariations.length;
        audio.playbackRate = slowVariations[currentSpeedIndex];

        // Cambia el tempo cada 20-30 segundos
        setTimeout(adjustHeartbeat, Math.random() * 10000 + 20000);
    }

    // Aumenta el volumen de manera gradual (hasta un máximo de 0.25)
    setInterval(() => {
        if (audio.volume < 0.25) {
            audio.volume += 0.005;
        }
    }, 30000);

    // Activar el sonido cuando el usuario pase el mouse sobre el Hero
    document.getElementById("hero-section").addEventListener("mouseenter", () => {
        if (!audioStarted) {
            audio.play().then(() => {
                adjustHeartbeat();
                audioStarted = true; // Solo se activa una vez
            }).catch(err => console.log("Error al iniciar audio:", err));
        }
    });
});
