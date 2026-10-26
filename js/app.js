/**
 * BẢN ĐỒ TẾT VIỆT - MAIN APPLICATION CONTROLLER
 * Điều phối render giao diện, bộ lọc, modal chi tiết, so sánh, bốc quẻ lì xì & trắc nghiệm
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  currentFilter: 'all',
  searchQuery: '',
  openedEnvelopeId: null,
  quizAnswers: {},
  currentQuizStep: 0,

  init() {
    // Khởi tạo các module con
    if (window.AudioEngine) AudioEngine.init();
    if (window.PetalsEngine) PetalsEngine.init();
    if (window.MapEngine) {
      MapEngine.init();
      MapEngine.onRegionChange((regionId) => {
        this.renderRegionShowcase(regionId);
        if (window.PetalsEngine) PetalsEngine.setRegionBlossom(regionId);
      });
    }

    // Render các khu vực chính
    this.renderRegionShowcase(MapEngine ? MapEngine.activeRegion : 'bac');
    this.renderCustomsGallery();
    this.renderComparisonTable();
    this.renderLuckyEnvelopes();
    this.renderQuizStep(0);

    // Bắt sự kiện người dùng
    this.bindNavigation();
    this.bindFilterEvents();
    this.bindSearchEvents();
    this.bindModalEvents();
    this.bindBackToTop();
  },

  // 1. RENDER KHU VỰC THÔNG TIN VÙNG MIỀN ĐƯỢC CHỌN
  renderRegionShowcase(regionId) {
    const data = TET_DATA.regions[regionId];
    if (!data) return;

    const showcaseContainer = document.getElementById('region-details-container');
    if (!showcaseContainer) return;

    // Fade out and re-render with animation
    showcaseContainer.classList.add('updating');

    setTimeout(() => {
      showcaseContainer.innerHTML = `
        <div class="region-hero-card" style="border-top: 5px solid ${data.color}">
          <div class="region-hero-content">
            <div class="region-badge" style="background: ${data.color}">
              <span>${data.flowerIcon} ${data.name}</span>
            </div>
            <h2 class="region-title">${data.title}</h2>
            <p class="region-greeting">🏮 <em>"${data.greeting}"</em></p>
            <p class="region-desc">${data.description}</p>
            
            <div class="region-quick-meta">
              <div class="meta-pill">
                <span class="meta-icon">🌸</span>
                <div>
                  <span class="meta-label">Hoa Biểu Trưng</span>
                  <strong class="meta-val">${data.flower}</strong>
                </div>
              </div>
              <div class="meta-pill">
                <span class="meta-icon">🌤️</span>
                <div>
                  <span class="meta-label">Khí Hậu Ngày Tết</span>
                  <strong class="meta-val">${data.climate}</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="region-hero-media">
            <img src="${data.bannerImage}" alt="${data.name}" class="region-banner-img" />
            <div class="media-overlay">
              <span>Hương Sắc ${data.name}</span>
            </div>
          </div>
        </div>

        <!-- 3 CỘT: PHONG TỤC - MÓN ĂN - ĐIỀU KIÊNG KỴ -->
        <div class="region-pillars-grid">
          <!-- Cột 1: Phong Tục Đặc Trưng -->
          <div class="pillar-card customs-pillar">
            <div class="pillar-header" style="background: rgba(211, 47, 47, 0.12); color: #B91C1C;">
              <span class="pillar-icon">🎋</span>
              <h3>Phong Tục Tiêu Biểu</h3>
            </div>
            <div class="pillar-body">
              <ul class="customs-list">
                ${data.customs.map(c => `
                  <li class="custom-item" onclick="App.openCustomDetail('${c.id}', '${regionId}', 'custom')">
                    <span class="custom-icon">${c.icon}</span>
                    <div class="custom-text">
                      <strong>${c.name}</strong>
                      <span class="custom-sub">${c.date || 'Tết Cổ Truyền'}</span>
                      <p>${c.meaning}</p>
                    </div>
                    <span class="item-arrow">👉</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <!-- Cột 2: Món Ăn Truyền Thống -->
          <div class="pillar-card foods-pillar">
            <div class="pillar-header" style="background: rgba(245, 124, 0, 0.12); color: #EA580C;">
              <span class="pillar-icon">🍲</span>
              <h3>Ẩm Thực Ngày Tết</h3>
            </div>
            <div class="pillar-body">
              <ul class="foods-list">
                ${data.foods.map(f => `
                  <li class="food-item" onclick="App.openFoodDetail('${f.name}', '${regionId}')">
                    <span class="food-icon">${f.icon}</span>
                    <div class="food-text">
                      <strong>${f.name}</strong>
                      <span class="food-taste">Vị: ${f.taste}</span>
                      <p>${f.meaning}</p>
                    </div>
                    <span class="item-arrow">👉</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <!-- Cột 3: Những Điều Kiêng Kỵ -->
          <div class="pillar-card taboos-pillar">
            <div class="pillar-header" style="background: rgba(185, 28, 28, 0.12); color: #991B1B;">
              <span class="pillar-icon">⚠️</span>
              <h3>Điều Kiêng Kỵ Ngày Đầu Năm</h3>
            </div>
            <div class="pillar-body">
              <ul class="taboos-list">
                ${data.taboos.map(t => `
                  <li class="taboo-item">
                    <div class="taboo-head">
                      <span class="taboo-badge">${t.severity}</span>
                      <strong>${t.rule}</strong>
                    </div>
                    <p class="taboo-reason">${t.reason}</p>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;

      showcaseContainer.classList.remove('updating');
    }, 180);
  },

  // 2. RENDER BỘ SƯU TẬP THẺ PHONG TỤC & MÓN ĂN (CÓ FILTER & SEARCH)
  renderCustomsGallery() {
    const gallery = document.getElementById('customs-cards-grid');
    if (!gallery) return;

    let items = [...TET_DATA.allCustoms];

    // Filter theo vùng
    if (this.currentFilter !== 'all') {
      items = items.filter(item => item.regionId === this.currentFilter || item.regionId === 'all');
    }

    // Filter theo tìm kiếm
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      items = items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.region.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      gallery.innerHTML = `
        <div class="empty-results">
          <span class="empty-icon">🔍</span>
          <h4>Không tìm thấy nội dung phù hợp với từ khóa "${this.searchQuery}"</h4>
          <p>Hãy thử tìm kiếm với các từ khóa như: <em>bánh chưng, lì xì, hoa mai, ông Táo, quét nhà...</em></p>
          <button class="btn btn-secondary" onclick="App.resetFilters()">Xóa bộ lọc</button>
        </div>
      `;
      return;
    }

    gallery.innerHTML = items.map(c => `
      <div class="custom-card-box" data-id="${c.id}">
        <div class="card-media">
          <img src="${c.image}" alt="${c.name}" class="card-img" loading="lazy" />
          <span class="card-region-tag">${c.region}</span>
          <span class="card-icon-floating">${c.icon}</span>
        </div>
        <div class="card-info">
          <h3 class="card-title">${c.name}</h3>
          <p class="card-quote"><em>"${c.quote}"</em></p>
          <div class="card-meaning">
            <strong>Ý nghĩa văn hóa:</strong> ${c.meaning}
          </div>
          <p class="card-desc">${c.desc}</p>
          <div class="card-action">
            <button class="btn-card-more" onclick="App.openCustomCardModal('${c.id}')">
              <span>Khám Phá Chi Tiết</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  // 3. RENDER BẢNG SO SÁNH BA MIỀN
  renderComparisonTable() {
    const tableBody = document.getElementById('comparison-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = TET_DATA.comparison.map((row, idx) => `
      <tr class="compare-row" onclick="App.toggleCompareRow(this)">
        <td class="col-aspect">
          <span class="aspect-icon">${row.icon}</span>
          <strong>${row.category}</strong>
        </td>
        <td class="col-bac">
          <div class="cell-content">
            <span class="region-badge-mini north">Miền Bắc</span>
            <p>${row.bac}</p>
          </div>
        </td>
        <td class="col-trung">
          <div class="cell-content">
            <span class="region-badge-mini central">Miền Trung</span>
            <p>${row.trung}</p>
          </div>
        </td>
        <td class="col-nam">
          <div class="cell-content">
            <span class="region-badge-mini south">Miền Nam</span>
            <p>${row.nam}</p>
          </div>
        </td>
        <td class="col-insight">
          <div class="insight-pill">
            💡 <em>${row.insight}</em>
          </div>
        </td>
      </tr>
    `).join('');
  },

  toggleCompareRow(row) {
    row.classList.toggle('highlighted');
    if (window.AudioEngine) AudioEngine.playChime(1.1);
  },

  // 4. RENDER BỐC QUẺ LÌ XÌ ĐẦU NĂM
  renderLuckyEnvelopes() {
    const container = document.getElementById('lucky-envelopes-grid');
    if (!container) return;

    container.innerHTML = TET_DATA.luckyEnvelopes.map(env => `
      <div class="envelope-item ${this.openedEnvelopeId === env.id ? 'opened' : ''}" 
           id="envelope-${env.id}" 
           onclick="App.openEnvelope(${env.id})">
        <div class="envelope-flipper">
          <!-- MẶT TRƯỚC BAO LÌ XÌ -->
          <div class="envelope-front">
            <div class="env-motif-corner top-left"></div>
            <div class="env-motif-corner top-right"></div>
            <div class="env-center-circle">
              <span class="env-chinese-char">福</span>
              <span class="env-sub-word">PHÚC</span>
            </div>
            <div class="env-ribbon">
              <span>Bao Lì Xì Số ${env.id}</span>
            </div>
            <p class="env-click-hint">Chạm để nhận lộc xuân</p>
          </div>

          <!-- MẶT SAU (QUẺ MAY MẮN) -->
          <div class="envelope-back">
            <span class="lucky-gift-icon">${env.giftIcon}</span>
            <h4 class="lucky-title">${env.title}</h4>
            <div class="lucky-number-badge">Số may mắn: <strong>${env.luckyNum}</strong></div>
            <p class="lucky-verse">"${env.verse}"</p>
            <p class="lucky-wish">${env.wish}</p>
            <button class="btn btn-sm btn-gold" onclick="event.stopPropagation(); App.resetEnvelopes()">Bốc lại quẻ khác</button>
          </div>
        </div>
      </div>
    `).join('');
  },

  openEnvelope(id) {
    this.openedEnvelopeId = id;
    if (window.AudioEngine) AudioEngine.playChime(1.25);

    const envElem = document.getElementById(`envelope-${id}`);
    if (envElem) {
      envElem.classList.add('opened');
      this.fireConfetti();
    }
  },

  resetEnvelopes() {
    this.openedEnvelopeId = null;
    this.renderLuckyEnvelopes();
    if (window.AudioEngine) AudioEngine.playChime(0.9);
  },

  fireConfetti() {
    // Lightweight festive particle burst on lucky draw
    const container = document.getElementById('confetti-container');
    if (!container) return;

    container.innerHTML = '';
    const colors = ['#FFD700', '#FF1744', '#FF9100', '#00E676', '#E040FB', '#FFF'];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-particle';
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 20}%`;
      p.style.animationDelay = `${Math.random() * 0.4}s`;
      p.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(p);
    }

    setTimeout(() => {
      container.innerHTML = '';
    }, 2500);
  },

  // 5. TRẮC NGHIỆM: BẠN HỢP VỚI TẾT MIỀN NÀO?
  renderQuizStep(stepIndex) {
    const quizContainer = document.getElementById('quiz-box');
    if (!quizContainer) return;

    const questions = TET_DATA.quizQuestions;

    if (stepIndex >= questions.length) {
      // Show Quiz Result
      this.calculateQuizResult();
      return;
    }

    this.currentQuizStep = stepIndex;
    const q = questions[stepIndex];

    quizContainer.innerHTML = `
      <div class="quiz-step-progress">
        <span>Câu hỏi ${stepIndex + 1} / ${questions.length}</span>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${((stepIndex + 1) / questions.length) * 100}%"></div>
        </div>
      </div>

      <h3 class="quiz-question">${q.question}</h3>

      <div class="quiz-options-list">
        ${q.options.map((opt, i) => `
          <button class="quiz-option-btn" onclick="App.chooseQuizOption(${stepIndex}, '${opt.region}')">
            <span class="opt-num">${String.fromCharCode(65 + i)}</span>
            <span class="opt-text">${opt.text}</span>
          </button>
        `).join('')}
      </div>
    `;
  },

  chooseQuizOption(stepIndex, region) {
    this.quizAnswers[stepIndex] = region;
    if (window.AudioEngine) AudioEngine.playChime(1.1);
    this.renderQuizStep(stepIndex + 1);
  },

  calculateQuizResult() {
    const scores = { bac: 0, trung: 0, nam: 0 };
    Object.values(this.quizAnswers).forEach(reg => {
      if (scores[reg] !== undefined) scores[reg]++;
    });

    let topRegion = 'bac';
    let maxScore = -1;
    for (const [reg, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        topRegion = reg;
      }
    }

    const regData = TET_DATA.regions[topRegion];
    const quizContainer = document.getElementById('quiz-box');
    if (!quizContainer) return;

    this.fireConfetti();
    if (window.AudioEngine) AudioEngine.playChime(1.3);

    quizContainer.innerHTML = `
      <div class="quiz-result-card animate-fade-in">
        <div class="result-header">
          <span class="result-badge">✨ KẾT QUẢ PHÂN TÍCH TÂM HỒN TẾT</span>
          <h2>Bạn hợp 100% với không khí <strong>${regData.name}</strong>!</h2>
        </div>

        <div class="result-body">
          <div class="result-media">
            <img src="${regData.bannerImage}" alt="${regData.name}" />
          </div>
          <div class="result-text">
            <p>🌸 <strong>Hoa định mệnh:</strong> ${regData.flower}</p>
            <p>🌤️ <strong>Tiết trời lý tưởng:</strong> ${regData.climate}</p>
            <p>🏮 <strong>Phong cách của bạn:</strong> ${regData.description}</p>
            <div class="result-recommendation">
              <strong>Gợi ý cho bạn vào dịp Tết này:</strong>
              Hãy cùng người thân thưởng thức món đặc sản ${regData.foods[0].name} và tận hưởng trọn vẹn văn hóa ${regData.name}!
            </div>
          </div>
        </div>

        <div class="result-actions">
          <button class="btn btn-primary" onclick="MapEngine.selectRegion('${topRegion}'); document.getElementById('map-section').scrollIntoView({behavior: 'smooth'})">
            Khám phá trọn vẹn ${regData.name} trên bản đồ →
          </button>
          <button class="btn btn-secondary" onclick="App.restartQuiz()">
            Làm lại trắc nghiệm
          </button>
        </div>
      </div>
    `;
  },

  restartQuiz() {
    this.quizAnswers = {};
    this.renderQuizStep(0);
  },

  // 6. MODAL XEM CHI TIẾT PHONG TỤC & MÓN ĂN
  openCustomCardModal(customId) {
    const item = TET_DATA.allCustoms.find(c => c.id === customId);
    if (!item) return;

    this.showModal({
      title: `${item.icon} ${item.name}`,
      tag: item.region,
      image: item.image,
      quote: item.quote,
      meaning: item.meaning,
      content: `
        <div class="modal-section">
          <h4>Văn Hóa & Phong Tục Dân Gian</h4>
          <p>${item.desc}</p>
        </div>
        <div class="modal-section tips-box">
          <h4>💡 Mẹo chuẩn bị Tết trọn vẹn:</h4>
          <ul>
            <li>Chuẩn bị lễ nghi hoặc nguyên liệu từ sớm với tâm thế hoan hỷ, thành kính.</li>
            <li>Giữ gìn không khí hòa thuận, nói lời hay ý đẹp với gia đình và khách đến thăm.</li>
            <li>Ghi nhớ và lưu truyền nét đẹp truyền thống cho thế hệ trẻ tiếp nối.</li>
          </ul>
        </div>
      `
    });
  },

  openCustomDetail(customId, regionId, type) {
    const r = TET_DATA.regions[regionId];
    if (!r) return;
    const c = r.customs.find(item => item.id === customId);
    if (!c) return;

    this.showModal({
      title: `${c.icon} ${c.name} (${r.name})`,
      tag: c.date || 'Tết Cổ Truyền',
      image: c.image || r.bannerImage,
      quote: `Nét đẹp tâm linh thiêng liêng đất ${r.name}`,
      meaning: c.meaning,
      content: `
        <div class="modal-section">
          <h4>Chi Tiết Hoạt Động</h4>
          <p>${c.description}</p>
        </div>
        <div class="modal-section tags-wrap">
          ${(c.tags || []).map(t => `<span class="tag-pill">#${t}</span>`).join(' ')}
        </div>
      `
    });
  },

  openFoodDetail(foodName, regionId) {
    const r = TET_DATA.regions[regionId];
    if (!r) return;
    const f = r.foods.find(item => item.name === foodName);
    if (!f) return;

    this.showModal({
      title: `${f.icon} ${f.name} - Đặc Sản ${r.name}`,
      tag: 'Ẩm Thực Tết',
      image: f.image || r.bannerImage,
      quote: f.taste,
      meaning: f.meaning,
      content: `
        <div class="modal-section">
          <h4>Hương Vị & Cách Thưởng Thức</h4>
          <p>${f.description}</p>
        </div>
        <div class="modal-section tips-box">
          <h4>🍽️ Thưởng thức đúng điệu:</h4>
          <p>Món ăn ngon nhất khi được dâng cúng tổ tiên trong mâm cỗ đầu năm, sau đó cả đại gia đình cùng quây quần thưởng thức trong tiếng cười rộn rã.</p>
        </div>
      `
    });
  },

  showModal(data) {
    const modal = document.getElementById('details-modal');
    if (!modal) return;

    document.getElementById('modal-title').innerHTML = data.title;
    document.getElementById('modal-tag').textContent = data.tag;
    document.getElementById('modal-img').src = data.image;
    document.getElementById('modal-quote').textContent = data.quote ? `"${data.quote}"` : '';
    document.getElementById('modal-meaning').innerHTML = `<strong>Ý nghĩa:</strong> ${data.meaning}`;
    document.getElementById('modal-body-content').innerHTML = data.content;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.AudioEngine) AudioEngine.playChime();
  },

  closeModal() {
    const modal = document.getElementById('details-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  },

  // 7. SỰ KIỆN ĐIỀU HƯỚNG & LỌC
  bindNavigation() {
    // Smooth scroll for nav anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile drawer if open
        const mobileMenu = document.getElementById('mobile-nav-drawer');
        if (mobileMenu) mobileMenu.classList.remove('open');
      });
    });

    // Mobile hamburger menu toggle
    const menuToggle = document.getElementById('menu-toggle-btn');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    if (menuToggle && mobileDrawer) {
      menuToggle.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
      });
    }
  },

  bindFilterEvents() {
    const filterButtons = document.querySelectorAll('.filter-chip');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.currentFilter = btn.getAttribute('data-filter') || 'all';
        this.renderCustomsGallery();
        if (window.AudioEngine) AudioEngine.playChime(1.1);
      });
    });
  },

  bindSearchEvents() {
    const searchInput = document.getElementById('customs-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderCustomsGallery();
      });
    }
  },

  resetFilters() {
    this.currentFilter = 'all';
    this.searchQuery = '';
    const searchInput = document.getElementById('customs-search-input');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.filter-chip').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
    });

    this.renderCustomsGallery();
  },

  bindModalEvents() {
    const closeBtn = document.getElementById('modal-close-btn');
    const modalBackdrop = document.getElementById('details-modal');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) this.closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  },

  bindBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};
