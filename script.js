let score = 0

function squareClicked() {
    confetti({
        particleCount: 200,
        spread: 145,
        origin: { y: 0.4 }
    });

    score += 1
    document.querySelector(".score-text").textContent = score;

    let duration = 2 * 1000;
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 10,
            angle: 120,
            spread: 1200,
            origin: { x: Math.random(), y: 0 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
