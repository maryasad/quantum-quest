// Game Mechanics and Level Management
class QuantumQuestGame {
    constructor(canvas) {
        this.canvas = canvas;
        this.quantumSystem = new QuantumSystem();
        this.particleSystem = new ParticleSystem(canvas);
        this.currentLevel = 1;
        this.score = 0;
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('superposition-btn').addEventListener('click', () => this.triggerSuperposition());
        document.getElementById('tunnel-btn').addEventListener('click', () => this.triggerQuantumTunnel());
        document.getElementById('entangle-btn').addEventListener('click', () => this.triggerEntanglement());
    }

    triggerSuperposition() {
        const state = this.quantumSystem.superposition();
        const particle = this.particleSystem.createParticle(
            this.canvas.width / 2, 
            this.canvas.height / 2
        );
        particle.changeState(state);

        document.getElementById('state-display').textContent = state;
        document.getElementById('probability-display').textContent = 
            (this.quantumSystem.probability * 100).toFixed(2) + '%';
    }

    triggerQuantumTunnel() {
        const barrierHeight = Math.random() * 10;
        const tunnelSuccess = this.quantumSystem.quantumTunnel(barrierHeight);

        if (tunnelSuccess) {
            this.score += 10;
            this.updateTutorial('Quantum Tunneling Successful!');
        } else {
            this.updateTutorial('Tunneling Failed. Try Again!');
        }
    }

    triggerEntanglement() {
        const particle1 = this.particleSystem.createParticle(
            this.canvas.width / 3, 
            this.canvas.height / 2
        );
        const particle2 = this.particleSystem.createParticle(
            2 * this.canvas.width / 3, 
            this.canvas.height / 2
        );

        particle1.changeState('up');
        particle2.changeState('up');

        const entanglementIndex = this.quantumSystem.entangle(particle1, particle2);
        
        if (this.quantumSystem.measureEntanglement(entanglementIndex)) {
            this.updateTutorial('Particles Entangled Successfully!');
        }
    }

    updateTutorial(message) {
        const tutorialOverlay = document.getElementById('tutorial-overlay');
        const tutorialText = document.getElementById('tutorial-text');
        
        tutorialText.textContent = message;
        tutorialOverlay.classList.remove('hidden');
    }

    startGame() {
        this.canvas.width = window.innerWidth * 0.8;
        this.canvas.height = window.innerHeight * 0.6;

        const gameLoop = () => {
            this.particleSystem.updateAndRender();
            requestAnimationFrame(gameLoop);
        };

        gameLoop();
    }
}

// Export for use in other modules
window.QuantumQuestGame = QuantumQuestGame;
