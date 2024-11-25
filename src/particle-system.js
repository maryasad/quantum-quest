// Particle Visualization and Interaction
class QuantumParticle {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.color = 'rgba(74, 144, 226, 0.7)';
        this.state = 'undefined';
        this.waveAmplitude = 0;
    }

    // Draw particle with wave-like properties
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        // Wave-like visualization
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'rgba(74, 144, 226, 0.3)';
        this.ctx.arc(this.x, this.y, this.radius + this.waveAmplitude, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    // Simulate wave-particle duality
    updateWaveProperties() {
        this.waveAmplitude = Math.sin(Date.now() * 0.01) * 5;
    }

    // Change particle state
    changeState(newState) {
        this.state = newState;
        this.color = newState === 'up' 
            ? 'rgba(74, 144, 226, 0.7)' 
            : 'rgba(156, 39, 176, 0.7)';
    }
}

// Particle System Manager
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
    }

    createParticle(x, y) {
        const particle = new QuantumParticle(this.canvas, x, y);
        this.particles.push(particle);
        return particle;
    }

    updateAndRender() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.updateWaveProperties();
            particle.draw();
        });
    }
}

// Export for use in other modules
window.QuantumParticle = QuantumParticle;
window.ParticleSystem = ParticleSystem;
