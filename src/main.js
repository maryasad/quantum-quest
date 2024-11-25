// Main Game Initialization
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('quantum-canvas');
    const game = new QuantumQuestGame(canvas);

    // Tutorial Next Button
    document.getElementById('tutorial-next').addEventListener('click', (e) => {
        document.getElementById('tutorial-overlay').classList.add('hidden');
    });

    // Start the game
    game.startGame();

    // Responsive Canvas Resizing
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.6;
    });
});
