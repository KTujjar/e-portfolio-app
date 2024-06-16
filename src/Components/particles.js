export function initParticles(canvasId, particleLinks) {
    const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const particles = [];
  const particleCount = 100;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor() {
      this.radius = Math.random() * 20 + 10; // Random radius between 10 and 30
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height + canvas.height;
      this.dy = -Math.random() * 1 - 1; // Speed in the upward direction
      const blueShade = Math.floor(Math.random() * 86) + 20;
      this.color = `rgba(${blueShade}, ${blueShade}, 255, 0.7)`;
    }

    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = this.color;
      context.fill();
    }

    update() {
      this.y += this.dy;

      // If the bubble goes off the top of the screen, reset its position
      if (this.y < -this.radius) {
        this.y = canvas.height + this.radius;
      }

      this.draw();
    }
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation loop
  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => particle.update());

    requestAnimationFrame(animate);
  }

  animate();
}
