/**
 * BẢN ĐỒ TẾT VIỆT - MAP INTERACTION ENGINE
 * Quản lý tương tác bản đồ SVG: hover, click, tooltip, đồng bộ dữ liệu ba miền
 */

const MapEngine = {
  activeRegion: 'bac',
  callbacks: [],

  init() {
    this.bindSvgEvents();
    this.bindQuickSelectButtons();
    this.highlightRegion(this.activeRegion, false);
  },

  onRegionChange(callback) {
    if (typeof callback === 'function') {
      this.callbacks.push(callback);
    }
  },

  notifyRegionChange(regionId) {
    this.activeRegion = regionId;
    this.callbacks.forEach(cb => cb(regionId));
  },

  bindSvgEvents() {
    const regionPaths = document.querySelectorAll('.vn-region');
    const tooltip = document.getElementById('map-tooltip');

    regionPaths.forEach(path => {
      path.addEventListener('mouseenter', (e) => {
        const regionId = path.getAttribute('data-region');
        const regionData = TET_DATA.regions[regionId];
        if (!regionData) return;

        path.classList.add('hovered');
        if (tooltip) {
          tooltip.innerHTML = `
            <div class="tooltip-header">
              <span class="tooltip-icon">${regionData.flowerIcon}</span>
              <strong>${regionData.name}</strong>
            </div>
            <div class="tooltip-body">
              <p>🌸 <strong>Hoa đặc trưng:</strong> ${regionData.flower}</p>
              <p>🌤️ <strong>Thời tiết:</strong> ${regionData.climate}</p>
              <p class="tooltip-tip">👉 <em>Nhấn để xem chi tiết phong tục & ẩm thực</em></p>
            </div>
          `;
          tooltip.classList.add('visible');
        }
      });

      path.addEventListener('mousemove', (e) => {
        if (!tooltip) return;
        const container = document.querySelector('.map-wrapper');
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left + 15;
        const y = e.clientY - rect.top + 15;

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
      });

      path.addEventListener('mouseleave', () => {
        path.classList.remove('hovered');
        if (tooltip) tooltip.classList.remove('visible');
      });

      path.addEventListener('click', () => {
        const regionId = path.getAttribute('data-region');
        if (regionId) {
          this.selectRegion(regionId);
          // Play click sound if enabled
          if (window.AudioEngine) {
            AudioEngine.playChime();
          }
        }
      });
    });

    // Also support clicking city pins
    const cityPins = document.querySelectorAll('.city-pin');
    cityPins.forEach(pin => {
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        const regionId = pin.getAttribute('data-region');
        if (regionId) {
          this.selectRegion(regionId);
          if (window.AudioEngine) AudioEngine.playChime();
        }
      });
    });
  },

  bindQuickSelectButtons() {
    const buttons = document.querySelectorAll('.region-tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const regionId = btn.getAttribute('data-region');
        if (regionId) {
          this.selectRegion(regionId);
          if (window.AudioEngine) AudioEngine.playChime();
        }
      });
    });
  },

  selectRegion(regionId) {
    if (!TET_DATA.regions[regionId]) return;
    this.activeRegion = regionId;
    this.highlightRegion(regionId, true);
    this.notifyRegionChange(regionId);
  },

  highlightRegion(regionId, scrollToDetails = false) {
    // Highlight SVG paths
    document.querySelectorAll('.vn-region').forEach(el => {
      if (el.getAttribute('data-region') === regionId) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Highlight Buttons
    document.querySelectorAll('.region-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-region') === regionId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update active label indicator on map
    const labelBadge = document.getElementById('map-active-region-label');
    if (labelBadge && TET_DATA.regions[regionId]) {
      const r = TET_DATA.regions[regionId];
      labelBadge.innerHTML = `Đang chọn: <strong>${r.name}</strong> (${r.flowerIcon} ${r.flower})`;
    }

    if (scrollToDetails) {
      const detailsSection = document.getElementById('region-showcase');
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
};
