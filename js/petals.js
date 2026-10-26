/**
 * BẢN ĐỒ TẾT VIỆT - HIỆU ỨNG HOA XUÂN RƠI (CANVAS PETAL ENGINE)
 * Hiệu ứng cánh hoa đào thắm (hồng) và cánh hoa mai (vàng) rơi tự nhiên theo gió
 */

const PetalsEngine = {
  canvas: null,
  ctx: null,
  petals: [],
  maxPetals: 36,
  animationFrameId: null,
  isRunning: true,
  currentMode: 'mix', // 'mix', 'dao', 'mai'

  init() {
    this.canvas = document.getElementById('petals-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    window.addEventListener('resize', () => this.resize());
    this.createPetals();
    this.animate();

    // Toggle button listener
    const toggleBtn = document.getElementById('toggle-petals-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggle();
        toggleBtn.classList.toggle('active', this.isRunning);
        toggleBtn.title = this.isRunning ? "Tắt hiệu ứng hoa rơi" : "Bật hiệu ứng hoa rơi";
      });
    }
  },

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  createPetals() {
    this.petals = [];
    const count = window.innerWidth < 768 ? 20 : this.maxPetals;
    for (let i = 0; i < count; i++) {
      this.petals.push(this.generatePetal(true));
    }
  },

  generatePetal(isInitial = false) {
    // 50% Peach blossom (hoa đào - hồng đỏ), 50% Apricot blossom (hoa mai - vàng rực)
    const isPeach = this.currentMode === 'dao' ? true : (this.currentMode === 'mai' ? false : Math.random() > 0.45);
    
    return {
      x: Math.random() * (this.canvas ? this.canvas.width : window.innerWidth),
      y: isInitial ? Math.random() * (this.canvas ? this.canvas.height : window.innerHeight) : -20,
      size: Math.random() * 10 + 9, // 9px to 19px
      speedX: Math.random() * 1.5 - 0.75,
      speedY: Math.random() * 1.4 + 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.8,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.04 + 0.015,
      opacity: Math.random() * 0.35 + 0.65,
      isPeach: isPeach,
      color: isPeach 
        ? { main: 'rgba(255, 107, 129, ', inner: 'rgba(255, 182, 193, ', core: '#FFF0F5' }
        : { main: 'rgba(255, 204, 0, ', inner: 'rgba(255, 235, 59, ', core: '#FFFDE7' }
    };
  },

  drawPetal(p) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.scale(Math.sin(p.wobble), 1);

    ctx.beginPath();
    // Beautiful petal shape using bezier curves
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-p.size / 2, -p.size * 0.7, -p.size, p.size * 0.3, 0, p.size);
    ctx.bezierCurveTo(p.size, p.size * 0.3, p.size / 2, -p.size * 0.7, 0, 0);

    // Gradient fill for soft dimensional petals
    const grad = ctx.createRadialGradient(0, p.size * 0.4, 0, 0, p.size * 0.5, p.size);
    grad.addColorStop(0, p.color.inner + (p.opacity * 0.95) + ')');
    grad.addColorStop(1, p.color.main + p.opacity + ')');
    ctx.fillStyle = grad;
    ctx.fill();

    // Subtle edge highlight
    ctx.strokeStyle = p.color.core;
    ctx.lineWidth = 0.5;
    ctx.stroke();

    ctx.restore();
  },

  animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.wobble) * 0.8;
      p.rotation += p.rotationSpeed;
      p.wobble += p.wobbleSpeed;

      this.drawPetal(p);

      // Reset when falling out of bounds
      if (p.y > this.canvas.height + 25 || p.x < -30 || p.x > this.canvas.width + 30) {
        this.petals[i] = this.generatePetal(false);
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  },

  toggle() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.animate();
    } else {
      cancelAnimationFrame(this.animationFrameId);
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
    return this.isRunning;
  },

  setRegionBlossom(regionId) {
    if (regionId === 'bac') {
      this.currentMode = 'dao';
    } else if (regionId === 'nam') {
      this.currentMode = 'mai';
    } else {
      this.currentMode = 'mix';
    }
    // Smoothly convert existing petals
    this.petals.forEach(p => {
      const isPeach = this.currentMode === 'dao' ? true : (this.currentMode === 'mai' ? false : Math.random() > 0.5);
      p.isPeach = isPeach;
      p.color = isPeach 
        ? { main: 'rgba(255, 107, 129, ', inner: 'rgba(255, 182, 193, ', core: '#FFF0F5' }
        : { main: 'rgba(255, 204, 0, ', inner: 'rgba(255, 235, 59, ', core: '#FFFDE7' };
    });
  }
};
