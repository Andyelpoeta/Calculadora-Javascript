document.addEventListener("DOMContentLoaded", function () {
    const bubbles = document.querySelectorAll(".bubble");

    bubbles.forEach(bubble => {
        moveBubble(bubble);
    });
});

function moveBubble(bubble) {
    const bubbleSize = parseFloat(getComputedStyle(bubble).width);
    const animationDuration = Math.random() * (20 - 10) + 10; // Duración de la animación entre 10 y 20 segundos

    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.bottom = -bubbleSize + "px";

    bubble.style.animation = `moveBubble ${animationDuration}s linear infinite`;

    bubble.addEventListener("animationiteration", () => {
        bubble.style.left = Math.random() * 100 + "vw";
    });
}