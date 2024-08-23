function randnum() {
    function getRandomNumbers(count, min, max) {
        const numbers = new Set();
        while (numbers.size < count) {
            numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return Array.from(numbers);
    }

    const randomNumbers = getRandomNumbers(6, 1, 45);
    const balls = document.querySelectorAll('.lotto_ball .number');

    balls.forEach(ball => {
        const parent = ball.parentElement;
        parent.style.animation = 'none';
        // Reflow
        parent.offsetHeight;
        parent.style.animation = '';
    });

    balls.forEach((ball, index) => {
        ball.textContent = randomNumbers[index] || '?';
    });
}
