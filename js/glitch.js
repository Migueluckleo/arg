document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".glitch");
    
    setInterval(() => {
        text.style.opacity = Math.random() > 0.8 ? 0.6 : 1;
    }, 200);
});
