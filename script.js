function squareClicked() {
    // Fire confetti burst
    confetti({
        particleCount: 200,
        spread: 145,
        origin: { y: 0.6 }
    });

    // Falling effect
    let duration = 2 * 1000; // 2 seconds
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
