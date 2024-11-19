const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

// Create Particle
class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

// Generate Particles
function init() {
  for (let i = 0; i < 100; i++) {
    const size = Math.random() * 5 + 2;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = Math.random() * 3 - 1.5;
    const speedY = Math.random() * 3 - 1.5;
    particlesArray.push(new Particle(x, y, size, 'rgba(255, 255, 255, 0.8)', speedX, speedY));
  }
}

// Animate Particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((particle, index) => {
    if (particle.size <= 0.3) {
      particlesArray.splice(index, 1);
    }
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();
