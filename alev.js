const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 2;
        this.speedX = (Math.random() * 3 - 1.5) + 0.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + (Math.random() * 20 + 10) + ', 100%, ' + (50 + Math.random() * 20) + '%)';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.1;
        this.size = Math.max(0, this.size);
        this.color = this.color.replace(/[^,]+(?=\))/, (match) => (parseFloat(match) - 1).toString());
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'rgba(255, 69, 0, 1 )';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}

function createParticles(event) {
    const xPos = event.x;
    const yPos = event.y;

    for (let i = 0; i < Math.random() * 20 + 1; i++) {
        particles.push(new Particle(xPos, yPos));
    }
}
function handleMouseClick(event) {
  const xPos = event.clientX;
  const yPos = event.clientY;
  createParticles(xPos, yPos);

  // Canvas üzerinde bir tıklama olduğunda yapılacak işlemler
}
function animateParticles() {
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }

    requestAnimationFrame(animateParticles);
}

window.addEventListener('mousemove', (event) => {
    createParticles(event);
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].x > canvas.width || particles[i].y > canvas.height) {
            particles.splice(i, 1);
        }
    }
});

animateParticles();