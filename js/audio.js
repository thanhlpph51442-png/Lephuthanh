/**
 * BẢN ĐỒ TẾT VIỆT - WEB AUDIO ENGINE
 * Tạo hiệu ứng chuông khánh đồng & giai điệu ngũ cung truyền thống bằng Web Audio API
 * Hoạt động 100% offline, không phụ thuộc file âm thanh ngoài
 */

const AudioEngine = {
  ctx: null,
  isMuted: true, // Default muted for smooth browser autoplay policies
  isPlayingMelody: false,
  melodyTimeout: null,
  noteIndex: 0,

  // Vietnamese Pentatonic Scale (Điệu Ngũ Cung Nam/Bắc: C, D, F, G, A hoặc C, D, E, G, A)
  // Tần số nốt đàn tranh (Hz)
  pentatonicNotes: [
    261.63, // C4 (Hò)
    293.66, // D4 (Xự)
    329.63, // E4 (Xang)
    392.00, // G4 (Xê)
    440.00, // A4 (Cống)
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00  // A5
  ],

  // Spring folk pattern (Giai điệu vui tươi ngày Tết)
  melodyPattern: [
    0, 2, 3, 4, 3, 2, 0,
    3, 4, 5, 4, 3, 2,
    4, 5, 7, 5, 4, 3,
    5, 4, 3, 2, 0
  ],

  init() {
    const soundBtn = document.getElementById('toggle-sound-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        this.toggleSound();
        soundBtn.classList.toggle('active', !this.isMuted);
        const iconSpan = soundBtn.querySelector('.btn-icon');
        const textSpan = soundBtn.querySelector('.btn-text');
        if (iconSpan) iconSpan.textContent = this.isMuted ? '🔇' : '🔔';
        if (textSpan) textSpan.textContent = this.isMuted ? 'Bật âm thanh' : 'Tắt âm thanh';
        soundBtn.title = this.isMuted ? "Bật âm thanh không khí Tết" : "Tắt âm thanh";
      });
    }

    // Initialize context on first user click anywhere
    document.addEventListener('click', () => {
      this.ensureContext();
    }, { once: true });
  },

  ensureContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  toggleSound() {
    this.ensureContext();
    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.playChime();
      this.startAmbientMelody();
    } else {
      this.stopAmbientMelody();
    }
    return !this.isMuted;
  },

  // Hiệu ứng tiếng chuông khánh đồng / lộc xuân khi nhấn nút
  playChime(pitchMultiplier = 1.0) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // Primary oscillator (Sine bell)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();

      // Harmonizer oscillator (for traditional bronze chime shimmer)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();

      const baseFreq = 880 * pitchMultiplier; // A5 note

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(baseFreq, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(baseFreq * 2.76, now); // Metallic chime harmonic

      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      gain2.gain.setValueAtTime(0.08, now);
      gain2.gain.exponentialRampToValueAtTime(0.0005, now + 0.8);

      osc1.connect(gain1);
      osc2.connect(gain2);

      gain1.connect(this.ctx.destination);
      gain2.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);

      osc1.stop(now + 1.3);
      osc2.stop(now + 0.9);
    } catch (e) {
      console.warn("Web Audio chime playback:", e);
    }
  },

  // Giai điệu Đàn Tranh ngũ cung thanh tao phát nền nhẹ nhàng
  playZitherNote(freq, duration = 1.0) {
    if (this.isMuted || !this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle'; // Gives a plucked zither-like string timbre
      osc.frequency.setValueAtTime(freq, now);

      // Fast pluck attack, gentle decay
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch (e) {}
  },

  startAmbientMelody() {
    if (this.isPlayingMelody) return;
    this.isPlayingMelody = true;
    this.noteIndex = 0;
    this.scheduleNextNote();
  },

  scheduleNextNote() {
    if (!this.isPlayingMelody || this.isMuted) return;

    const patternIdx = this.melodyPattern[this.noteIndex % this.melodyPattern.length];
    const freq = this.pentatonicNotes[patternIdx];
    this.playZitherNote(freq, 1.4);

    this.noteIndex++;
    // Relaxed tempo (khoảng 700ms - 900ms mỗi nốt thanh tịnh)
    const delay = Math.random() * 200 + 750;
    this.melodyTimeout = setTimeout(() => {
      this.scheduleNextNote();
    }, delay);
  },

  stopAmbientMelody() {
    this.isPlayingMelody = false;
    if (this.melodyTimeout) {
      clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
  }
};
