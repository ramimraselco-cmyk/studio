/**
 * DEEDOX Studio — Interactive WhatsApp Concierge Flow
 * Intercepts WhatsApp clicks to guide visitors through Category selection,
 * Basic project details, and generates a structured WhatsApp redirect.
 */
(function() {
  'use strict';

  const WA_PHONE = '8801817296013';

  // Inject Concierge Modal HTML & CSS into DOM once
  function initWhatsAppFlow() {
    if (document.getElementById('deedox-wa-modal')) return;

    // 1. Create Modal Container
    const modalWrap = document.createElement('div');
    modalWrap.id = 'deedox-wa-modal';
    modalWrap.innerHTML = `
      <div class="deedox-wa-backdrop" id="deedoxWaBackdrop"></div>
      <div class="deedox-wa-card" id="deedoxWaCard" role="dialog" aria-modal="true" aria-labelledby="deedoxWaTitle">
        <!-- Card Header -->
        <div class="deedox-wa-header">
          <div class="deedox-wa-header-left">
            <div class="deedox-wa-avatar-wrap">
              <div class="deedox-wa-avatar">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#FFFFFF">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.196 8.196 0 0 1-5.82 2.42c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                </svg>
              </div>
              <span class="deedox-wa-pulse-dot"></span>
            </div>
            <div>
              <div class="deedox-wa-name-row">
                <span id="deedoxWaTitle" class="deedox-wa-title">DEEDOX Agency Concierge</span>
                <span class="deedox-wa-badge">Verified</span>
              </div>
              <div class="deedox-wa-status">
                <span class="deedox-wa-status-dot"></span>
                <span>Online • Replies within 5 minutes</span>
              </div>
            </div>
          </div>
          <button type="button" class="deedox-wa-close-btn" id="deedoxWaCloseBtn" aria-label="Close WhatsApp Concierge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Card Body -->
        <div class="deedox-wa-body">
          <!-- Step 1: Select Category -->
          <div class="deedox-wa-step-label">
            <span class="deedox-wa-step-num">1</span>
            <span>Select Service Category</span>
          </div>

          <div class="deedox-wa-cat-grid" id="deedoxWaCatGrid">
            <button type="button" class="deedox-wa-cat-btn active" data-cat="Website Design & SEO">
              <span class="deedox-wa-cat-icon">🌐</span>
              <div class="deedox-wa-cat-text">
                <div class="deedox-wa-cat-title">Website Design &amp; #1 SEO</div>
                <div class="deedox-wa-cat-desc">Custom, 3D, Corporate, E-commerce, Rank #1 SEO</div>
              </div>
            </button>

            <button type="button" class="deedox-wa-cat-btn" data-cat="Mobile App Development">
              <span class="deedox-wa-cat-icon">📱</span>
              <div class="deedox-wa-cat-text">
                <div class="deedox-wa-cat-title">Mobile App Development</div>
                <div class="deedox-wa-cat-desc">iOS, Android &amp; Cross-Platform (App Store &amp; Play Store)</div>
              </div>
            </button>

            <button type="button" class="deedox-wa-cat-btn" data-cat="Custom SaaS & Management Systems">
              <span class="deedox-wa-cat-icon">⚙️</span>
              <div class="deedox-wa-cat-text">
                <div class="deedox-wa-cat-title">Custom SaaS &amp; ERP Systems</div>
                <div class="deedox-wa-cat-desc">Hospital, Hotel, POS/Shop, Inventory &amp; Custom Portals</div>
              </div>
            </button>

            <button type="button" class="deedox-wa-cat-btn" data-cat="PC & Desktop Software">
              <span class="deedox-wa-cat-icon">💻</span>
              <div class="deedox-wa-cat-text">
                <div class="deedox-wa-cat-title">PC &amp; Desktop Software</div>
                <div class="deedox-wa-cat-desc">Custom Enterprise Software for Windows &amp; Mac</div>
              </div>
            </button>

            <button type="button" class="deedox-wa-cat-btn" data-cat="AI Video & UGC Ads">
              <span class="deedox-wa-cat-icon">🎬</span>
              <div class="deedox-wa-cat-text">
                <div class="deedox-wa-cat-title">AI Video &amp; UGC Creative Ads</div>
                <div class="deedox-wa-cat-desc">AI Commercials, Website Promo Videos, Viral UGC Ads</div>
              </div>
            </button>

            <button type="button" class="deedox-wa-cat-btn" data-cat="Meta & Google Ads">
              <span class="deedox-wa-cat-icon">📈</span>
              <div class="deedox-wa-cat-text">
                <div class="deedox-wa-cat-title">Meta &amp; Google Advertising</div>
                <div class="deedox-wa-cat-desc">High-ROI Facebook, Instagram &amp; Google Ad Campaigns</div>
              </div>
            </button>

            <button type="button" class="deedox-wa-cat-btn" data-cat="24/7 Sales Automation">
              <span class="deedox-wa-cat-icon">🤖</span>
              <div class="deedox-wa-cat-text">
                <div class="deedox-wa-cat-title">24/7 WhatsApp &amp; Sales Automation</div>
                <div class="deedox-wa-cat-desc">WhatsApp Bots, Messenger Automation &amp; CRM Funnels</div>
              </div>
            </button>
          </div>

          <!-- Step 2: Basic Questions -->
          <div class="deedox-wa-step-label" style="margin-top: 20px;">
            <span class="deedox-wa-step-num">2</span>
            <span>Quick Project Details</span>
          </div>

          <!-- Budget Chips -->
          <div class="deedox-wa-field-group">
            <label class="deedox-wa-field-label">Estimated Project Budget</label>
            <div class="deedox-wa-budget-chips" id="deedoxWaBudgetChips">
              <button type="button" class="deedox-wa-budget-chip" data-budget="$1,000 – $5,000">$1k – $5k</button>
              <button type="button" class="deedox-wa-budget-chip active" data-budget="$5,000 – $15,000">$5k – $15k</button>
              <button type="button" class="deedox-wa-budget-chip" data-budget="$15,000 – $50,000">$15k – $50k</button>
              <button type="button" class="deedox-wa-budget-chip" data-budget="$50,000+ Enterprise">$50k+ Enterprise</button>
              <button type="button" class="deedox-wa-budget-chip" data-budget="Flexible Scope">Flexible Scope</button>
            </div>
          </div>

          <!-- Name & Details Inputs -->
          <div class="deedox-wa-field-group">
            <label class="deedox-wa-field-label" for="deedoxWaName">Your Name / Business</label>
            <input type="text" id="deedoxWaName" class="deedox-wa-input" placeholder="e.g. Alex Morgan / Apex Group" />
          </div>

          <div class="deedox-wa-field-group">
            <label class="deedox-wa-field-label" for="deedoxWaDetails">Brief Goals / Requirement (Optional)</label>
            <input type="text" id="deedoxWaDetails" class="deedox-wa-input" placeholder="e.g. Need a custom hospital ERP or authority website with SEO" />
          </div>

          <!-- Send Action Button -->
          <button type="button" class="deedox-wa-send-btn" id="deedoxWaSendBtn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.196 8.196 0 0 1-5.82 2.42c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
            </svg>
            <span>Start WhatsApp Chat &rarr;</span>
          </button>

          <!-- Skip / Direct Link -->
          <div class="deedox-wa-direct-row">
            <button type="button" class="deedox-wa-skip-btn" id="deedoxWaSkipBtn">
              Or skip questions &amp; chat directly on WhatsApp &rarr;
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalWrap);

    // 2. Inject CSS Styles
    const style = document.createElement('style');
    style.id = 'deedox-wa-style';
    style.textContent = `
      #deedox-wa-modal {
        position: fixed;
        inset: 0;
        z-index: 99999999;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 24px;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      #deedox-wa-modal.is-active {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      .deedox-wa-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 1;
      }

      .deedox-wa-card {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 440px;
        max-height: 86vh;
        background: #0D0E12;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 24px;
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(37, 211, 102, 0.15);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: translateY(24px) scale(0.96);
        transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
      }
      #deedox-wa-modal.is-active .deedox-wa-card {
        transform: translateY(0) scale(1);
      }

      @media (max-width: 600px) {
        #deedox-wa-modal {
          padding: 0;
          align-items: flex-end;
        }
        .deedox-wa-card {
          max-width: 100%;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          max-height: 90vh;
        }
      }

      /* Header */
      .deedox-wa-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 20px;
        background: #13141B;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .deedox-wa-header-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .deedox-wa-avatar-wrap {
        position: relative;
      }
      .deedox-wa-avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #25D366;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 16px rgba(37, 211, 102, 0.45);
      }
      .deedox-wa-pulse-dot {
        position: absolute;
        bottom: 1px;
        right: 1px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #22c55e;
        border: 2px solid #0D0E12;
      }
      .deedox-wa-name-row {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .deedox-wa-title {
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
        letter-spacing: -0.01em;
      }
      .deedox-wa-badge {
        font-size: 9px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        padding: 2px 6px;
        border-radius: 999px;
        background: rgba(37, 211, 102, 0.18);
        color: #25D366;
        border: 1px solid rgba(37, 211, 102, 0.35);
      }
      .deedox-wa-status {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 2px;
      }
      .deedox-wa-status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #25D366;
      }
      .deedox-wa-close-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: rgba(255, 255, 255, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
      }
      .deedox-wa-close-btn:hover {
        background: rgba(255, 255, 255, 0.18);
        color: #FFFFFF;
        transform: rotate(90deg);
      }

      /* Body */
      .deedox-wa-body {
        padding: 20px;
        overflow-y: auto;
        overscroll-behavior: contain;
      }

      .deedox-wa-step-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        font-family: monospace;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: rgba(255, 255, 255, 0.65);
        margin-bottom: 12px;
      }
      .deedox-wa-step-num {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #25D366;
        color: #070709;
        font-weight: 700;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Category Grid */
      .deedox-wa-cat-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .deedox-wa-cat-btn {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 10px 14px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.09);
        color: #FFFFFF;
        cursor: pointer;
        text-align: left;
        transition: all 0.22s ease;
      }
      .deedox-wa-cat-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.22);
        transform: translateX(3px);
      }
      .deedox-wa-cat-btn.active {
        background: rgba(37, 211, 102, 0.14);
        border-color: #25D366;
        box-shadow: 0 0 15px rgba(37, 211, 102, 0.2);
      }
      .deedox-wa-cat-icon {
        font-size: 18px;
        line-height: 1.2;
        flex-shrink: 0;
      }
      .deedox-wa-cat-title {
        font-size: 13px;
        font-weight: 600;
        color: #FFFFFF;
      }
      .deedox-wa-cat-desc {
        font-size: 11px;
        color: rgba(255, 255, 255, 0.55);
        margin-top: 2px;
        line-height: 1.35;
      }

      /* Budget Chips */
      .deedox-wa-field-group {
        margin-top: 14px;
      }
      .deedox-wa-field-label {
        display: block;
        font-size: 11px;
        font-family: monospace;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.55);
        margin-bottom: 8px;
      }
      .deedox-wa-budget-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .deedox-wa-budget-chip {
        padding: 6px 12px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 500;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        transition: all 0.2s;
      }
      .deedox-wa-budget-chip:hover {
        background: rgba(255, 255, 255, 0.12);
        color: #FFFFFF;
      }
      .deedox-wa-budget-chip.active {
        background: #25D366;
        color: #070709;
        font-weight: 700;
        border-color: #25D366;
        box-shadow: 0 0 12px rgba(37, 211, 102, 0.35);
      }

      /* Input Fields */
      .deedox-wa-input {
        width: 100%;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 10px;
        padding: 10px 14px;
        font-size: 13px;
        color: #FFFFFF;
        outline: none;
        box-sizing: border-box;
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .deedox-wa-input:focus {
        border-color: #25D366;
        box-shadow: 0 0 12px rgba(37, 211, 102, 0.25);
      }
      .deedox-wa-input::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }

      /* Big Action Button */
      .deedox-wa-send-btn {
        width: 100%;
        margin-top: 18px;
        padding: 14px 20px;
        border-radius: 999px;
        background: #25D366;
        color: #070709;
        font-size: 14px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .deedox-wa-send-btn:hover {
        background: #2bf075;
        transform: translateY(-2px);
        box-shadow: 0 12px 30px rgba(37, 211, 102, 0.55);
      }

      /* Direct Skip Link */
      .deedox-wa-direct-row {
        text-align: center;
        margin-top: 12px;
      }
      .deedox-wa-skip-btn {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.45);
        font-size: 11px;
        cursor: pointer;
        text-decoration: underline;
        transition: color 0.2s;
      }
      .deedox-wa-skip-btn:hover {
        color: #25D366;
      }
    `;
    document.head.appendChild(style);

    // 3. Bind Event Handlers
    const modal = document.getElementById('deedox-wa-modal');
    const backdrop = document.getElementById('deedoxWaBackdrop');
    const closeBtn = document.getElementById('deedoxWaCloseBtn');
    const sendBtn = document.getElementById('deedoxWaSendBtn');
    const skipBtn = document.getElementById('deedoxWaSkipBtn');

    let selectedCategory = 'Website Design & SEO';
    let selectedBudget = '$5,000 – $15,000';

    // Category button selection
    document.querySelectorAll('.deedox-wa-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.deedox-wa-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCategory = btn.getAttribute('data-cat') || 'Website Design & SEO';
      });
    });

    // Budget chip selection
    document.querySelectorAll('.deedox-wa-budget-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.deedox-wa-budget-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedBudget = chip.getAttribute('data-budget') || '$5,000 – $15,000';
      });
    });

    // Close handlers
    function closeModal() {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    // Escape key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeModal();
      }
    });

    // Send Formatted Message to WhatsApp
    sendBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('deedoxWaName');
      const detailsInput = document.getElementById('deedoxWaDetails');

      const name = nameInput ? nameInput.value.trim() : '';
      const details = detailsInput ? detailsInput.value.trim() : '';

      let msg = `👋 *HELLO DEEDOX TEAM!*\n`;
      msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `📌 *Required Service:* ${selectedCategory}\n`;
      msg += `💰 *Estimated Budget:* ${selectedBudget}\n`;
      if (name) msg += `👤 *Client / Company:* ${name}\n`;
      if (details) msg += `📝 *Project Details:* ${details}\n`;
      msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `⚡ *Sent from DEEDOX Agency Website Hotline*`;

      const targetUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
      closeModal();
      const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (win) win.opener = null;
    });

    // Skip directly to WhatsApp
    skipBtn.addEventListener('click', () => {
      const defaultIntro = `👋 Hello DEEDOX Team, I would like to discuss a project regarding ${selectedCategory}.`;
      const targetUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(defaultIntro)}`;
      closeModal();
      const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (win) win.opener = null;
    });
  }

  // Open Concierge Modal
  window.openDeedoxWhatsAppFlow = function() {
    initWhatsAppFlow();
    const modal = document.getElementById('deedox-wa-modal');
    if (modal) {
      modal.classList.add('is-active');
    }
  };

  // Intercept all clicks on deedoxWhatsAppPill and any floating WhatsApp triggers
  function bindTriggers() {
    initWhatsAppFlow();

    // Hook deedoxWhatsAppPill
    const pill = document.getElementById('deedoxWhatsAppPill');
    if (pill) {
      pill.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.openDeedoxWhatsAppFlow();
      });
    }

    // Hook any links with wa-trigger class or wa-concierge attribute
    document.querySelectorAll('.js-open-whatsapp, [data-wa-trigger]').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.openDeedoxWhatsAppFlow();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindTriggers);
  } else {
    bindTriggers();
  }
})();
