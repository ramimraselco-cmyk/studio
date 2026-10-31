/**
 * DEEDOX / Fantasy Studio — Live Site CMS Client (Real-Time 60fps Engine)
 * Connects frontend DOM dynamically to Supabase / Local CMS API
 * Features real-time multi-tab localStorage broadcast and background auto-polling.
 */
(function() {
  'use strict';

  let lastHash = '';
  const SUPABASE_URL = 'https://ucrcswxdzrfphvkvrpiz.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_bEGfsOvpV_UAxkm3ePafXg_Hs85XhCt';

  // Minimal Vector SVG Icons Library (Luxury 1.5px stroke & geometric precision)
  const MINIMAL_ICONS = {
    facebook: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03.36-1.75 1.75-1.75H17.5V2.14C17.07 2.08 15.93 2 14.61 2 11.85 2 10 3.69 10 6.78v2.72H7v4h3V22h4v-8.5z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66s-.74-1.66-1.66-1.66c-.92 0-1.66.74-1.66 1.66s.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    dribbble: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.26-.05-.98-.18-1.96-.18-1.31 0-2.88.25-4.38.74-.06-.14-.12-.28-.19-.43-.45-1.01-.98-2.02-1.57-2.97 2.62-1.03 4.88-1.99 6.2-2.474zm-7.79-2.32c2.09 0 4.02.73 5.56 1.95-.98.39-3.12 1.3-5.65 2.3-1.01-1.78-1.92-3.3-2.58-4.14.86-.07 1.75-.11 2.67-.11zm-4.71 1.77c.65.82 1.55 2.31 2.54 4.06-2.58.8-5.32 1.25-6.69 1.35.34-2.18 1.93-4.01 4.15-5.41zm-2.05 7.64c1.17-.08 3.65-.48 6.06-1.22.42.79.8 1.58 1.15 2.36-3.32 1.05-6.44 3.73-7.16 4.39a8.528 8.528 0 0 1-.05-5.53zm8.79 7.91c-.88-.78-3.48-3.13-6.52-4.19 1.36-2.9 2.51-6.19 2.92-7.85 1.33-.42 2.74-.64 3.93-.64.81 0 1.45.1 1.72.15-.31 4.31-2.99 9.38-2.05 12.53zm2.34-1.1c-.69-2.73 1.62-6.9 2.06-7.85a8.498 8.498 0 0 1-2.06 7.85z"/></svg>`,
    behance: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-2.029 3-4.976 3-3.401 0-4.75-2.562-4.75-4.978 0-2.882 1.839-5.022 4.977-5.022 3.033 0 4.671 2.08 4.671 4.664v1.336h-7.14c.05 1.5 1.04 2.4 2.45 2.4 1.13 0 1.89-.58 2.2-1.4h2.568zm-4.95-4.2c-.89 0-1.63.48-1.89 1.4h3.76c-.05-.88-.78-1.4-1.87-1.4zM2 4h6.056c2.094 0 4.094.887 4.094 3.447 0 1.354-.707 2.383-1.826 2.887 1.492.42 2.342 1.678 2.342 3.332C12.666 16.59 10.635 18 8.16 18H2V4zm3.033 4.793h2.648c.959 0 1.687-.419 1.687-1.396 0-.965-.728-1.385-1.687-1.385H5.033v2.781zm0 6.275h2.91c1.077 0 1.942-.483 1.942-1.554 0-1.082-.865-1.579-1.942-1.579h-2.91v3.133z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.75 1.15-.05 2.22-.64 2.82-1.61.42-.64.63-1.41.62-2.18.03-4.57.01-9.15.01-13.72z"/></svg>`,
    discord: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    arrow: `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`
  };

  // Real-Time Online Fetcher: Supabase Cloud Direct -> Local API Fallback
  async function fetchSettingsOnline() {
    // 1. Try Supabase REST Direct (Zero-delay cloud sync for any live visitor)
    try {
      const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/site_settings?key=eq.global&select=value`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        cache: 'no-store'
      });
      if (sbRes.ok) {
        const rows = await sbRes.json();
        if (rows && rows.length > 0 && rows[0].value) {
          return rows[0].value;
        }
      }
    } catch (sbErr) {
      // Supabase direct failed, fallback to local server
    }

    // 2. Try Local / Vercel API
    try {
      const res = await fetch('/api/settings?_t=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {}

    // 3. Fallback to static JSON file
    try {
      const res = await fetch('/data/site_settings.json?_t=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {}

    return null;
  }

  async function initSiteCMS() {
    try {
      const settings = await fetchSettingsOnline();
      if (!settings) return;
      const newHash = JSON.stringify(settings);
      if (newHash !== lastHash) {
        lastHash = newHash;
        applySettings(settings);
      }
    } catch (err) {
      // Fallback silently to static HTML
    }
  }

  function applySettings(s) {
    if (!s) return;

    // ========================================================
    // 1. FLOATING WHATSAPP CUSTOMIZER (FULL DYNAMIC CONTROL)
    // ========================================================
    const wa = s.whatsapp || {};
    const waEnabled = wa.enabled !== false;
    const cleanPhone = (wa.phone || s.whatsapp_number || '+8801817296013').replace(/[^0-9]/g, '');
    const defaultMsg = wa.message || s.whatsapp_message || 'Hello DEEDOX Team, I would like to discuss our project with your agency.';
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMsg)}`;
    const waPosition = wa.position || 'bottom-right';
    const waTheme = wa.theme || 'cream';
    const waTooltip = wa.tooltip || 'Chat with DEEDOX Studio';
    const waBadgeText = wa.badge_text || 'Online Now • Instant Reply';

    window.deedoxWhatsAppNumber = cleanPhone;
    window.deedoxWhatsAppMessage = defaultMsg;
    window.deedoxWhatsAppConfig = wa;

    // Ensure floating pill exists on page
    let waBtn = document.getElementById('deedoxWhatsAppPill');
    if (!waBtn) {
      waBtn = document.createElement('a');
      waBtn.id = 'deedoxWhatsAppPill';
      waBtn.target = '_blank';
      waBtn.rel = 'noopener noreferrer';
      waBtn.setAttribute('aria-label', 'WhatsApp');
      waBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" style="display: block; flex-shrink: 0;">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.196 8.196 0 0 1-5.82 2.42c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
        </svg>
      `;
      document.body.appendChild(waBtn);
    }

    if (!waEnabled) {
      waBtn.style.setProperty('display', 'none', 'important');
      waBtn.classList.remove('is-visible');
    } else {
      waBtn.style.removeProperty('display');
      waBtn.classList.add('is-visible');

      // Positioning: Left vs Right
      if (waPosition === 'bottom-left') {
        waBtn.style.setProperty('left', '28px', 'important');
        waBtn.style.setProperty('right', 'auto', 'important');
      } else {
        waBtn.style.setProperty('right', '28px', 'important');
        waBtn.style.setProperty('left', 'auto', 'important');
      }

      // Aesthetic Theme application
      if (waTheme === 'dark') {
        waBtn.style.setProperty('background', 'rgba(15, 17, 23, 0.95)', 'important');
        waBtn.style.setProperty('color', '#38bdf8', 'important');
        waBtn.style.setProperty('border', '1px solid rgba(56, 189, 248, 0.4)', 'important');
        waBtn.style.setProperty('box-shadow', '0 12px 35px rgba(6, 182, 212, 0.35)', 'important');
      } else if (waTheme === 'emerald') {
        waBtn.style.setProperty('background', '#25D366', 'important');
        waBtn.style.setProperty('color', '#ffffff', 'important');
        waBtn.style.setProperty('border', '1px solid rgba(37, 211, 102, 0.5)', 'important');
        waBtn.style.setProperty('box-shadow', '0 12px 35px rgba(37, 211, 102, 0.45)', 'important');
      } else {
        // Cream luxury
        waBtn.style.setProperty('background', '#F5F4F0', 'important');
        waBtn.style.setProperty('color', '#111111', 'important');
        waBtn.style.setProperty('border', '1px solid rgba(17, 17, 17, 0.15)', 'important');
        waBtn.style.setProperty('box-shadow', '0 12px 35px rgba(0, 0, 0, 0.42)', 'important');
      }

      // Floating minimal hover tooltip
      let waTooltipEl = document.getElementById('deedoxWaFloatingTooltip');
      if (!waTooltipEl) {
        waTooltipEl = document.createElement('div');
        waTooltipEl.id = 'deedoxWaFloatingTooltip';
        waTooltipEl.style.cssText = `
          position: fixed;
          bottom: 35px;
          ${waPosition === 'bottom-left' ? 'left: 95px;' : 'right: 95px;'};
          background: rgba(18, 20, 26, 0.92);
          color: #f8fafc;
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: -0.01em;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          pointer-events: none;
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 999998;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
        `;
        document.body.appendChild(waTooltipEl);

        waBtn.addEventListener('mouseenter', () => {
          waTooltipEl.style.opacity = '1';
          waTooltipEl.style.transform = 'translateY(0)';
        });
        waBtn.addEventListener('mouseleave', () => {
          waTooltipEl.style.opacity = '0';
          waTooltipEl.style.transform = 'translateY(6px)';
        });
      }
      waTooltipEl.innerHTML = `<span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e;"></span> ${waTooltip}`;

      // Update link URL & flow
      waBtn.href = waUrl;
      if (!waBtn.dataset.flowBound) {
        waBtn.dataset.flowBound = 'true';
        waBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (typeof window.openDeedoxWhatsAppFlow === 'function') {
            window.openDeedoxWhatsAppFlow();
          } else {
            window.open(waUrl, '_blank', 'noopener,noreferrer');
          }
        });
      }
    }

    // Ensure WhatsApp Concierge Flow is loaded
    if (!document.getElementById('deedox-wa-flow-script') && typeof window.openDeedoxWhatsAppFlow === 'undefined') {
      const waScript = document.createElement('script');
      waScript.id = 'deedox-wa-flow-script';
      waScript.src = '/assets/js/whatsapp-flow.js?v=2.0';
      document.body.appendChild(waScript);
    }

    // ========================================================
    // 2. CONTACT DETAILS & EMAILS
    // ========================================================
    if (s.contact_email) {
      document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
        a.href = `mailto:${s.contact_email}`;
        if (a.textContent.includes('@')) {
          a.textContent = s.contact_email;
        }
      });
      document.querySelectorAll('.js-cms-email, [data-cms="email"]').forEach(el => {
        el.textContent = s.contact_email;
      });
    }

    if (s.contact_phone) {
      const cleanTel = s.contact_phone.replace(/[^0-9+]/g, '');
      document.querySelectorAll('a[href^="tel:"]').forEach(a => {
        a.href = `tel:${cleanTel}`;
        a.textContent = s.contact_phone;
      });
      document.querySelectorAll('[data-cms="phone"]').forEach(el => {
        el.textContent = s.contact_phone;
      });
    }

    if (s.studio_location) {
      document.querySelectorAll('[data-cms="location"], .cream-hub-city, .cream-hub-addr').forEach(el => {
        if (el.getAttribute('data-cms') === 'location') {
          el.textContent = s.studio_location;
        }
      });
    }

    // ========================================================
    // 3. SOCIAL MEDIA ECOSYSTEM & MINIMAL SVG ICONS ENGINE
    // ========================================================
    const soc = s.social_links || {};
    const platformDisplayNames = {
      facebook: 'Facebook',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      twitter: 'X / Twitter',
      x: 'X / Twitter',
      youtube: 'YouTube',
      github: 'GitHub',
      dribbble: 'Dribbble',
      behance: 'Behance',
      telegram: 'Telegram',
      tiktok: 'TikTok',
      discord: 'Discord'
    };

    // Filter populated social channels
    const activeSocials = Object.entries(soc).filter(([k, v]) => Boolean(v && typeof v === 'string' && v.trim().length > 0));

    // Dynamically populate footer social column (e.g. .cream-social-item containers)
    const footerSocialContainers = document.querySelectorAll('.cream-col-title + div, .footer-social-list, [data-cms="social-list"]');
    if (activeSocials.length > 0 && footerSocialContainers.length > 0) {
      footerSocialContainers.forEach(container => {
        // Verify this is indeed a social links container
        if (container.querySelector('.cream-social-item') || container.getAttribute('data-cms') === 'social-list') {
          container.innerHTML = activeSocials.map(([platform, url]) => {
            const iconSvg = MINIMAL_ICONS[platform] || MINIMAL_ICONS.arrow;
            const label = platformDisplayNames[platform] || platform.charAt(0).toUpperCase() + platform.slice(1);
            return `
              <a href="${url}" target="_blank" rel="noopener noreferrer" class="cream-social-item" style="display: flex; justify-content: space-between; align-items: center; gap: 8px; text-decoration: none; padding: 6px 0; border-bottom: 1px solid rgba(0,0,0,0.06); transition: all 0.2s ease;">
                <span style="display: flex; align-items: center; gap: 8px;">
                  <span class="minimal-soc-icon" style="display: inline-flex; align-items: center; opacity: 0.85;">${iconSvg}</span>
                  <span style="font-size: 14.5px;">${label}</span>
                </span>
                <span class="minimal-soc-arrow" style="opacity: 0.5;">${MINIMAL_ICONS.arrow}</span>
              </a>
            `;
          }).join('');
        }
      });
    }

    // Also update any direct platform anchors across the site
    activeSocials.forEach(([platform, url]) => {
      const matchQueries = {
        facebook: 'a[href*="facebook.com"]',
        instagram: 'a[href*="instagram.com"]',
        linkedin: 'a[href*="linkedin.com"]',
        twitter: 'a[href*="twitter.com"], a[href*="x.com"]',
        x: 'a[href*="x.com"], a[href*="twitter.com"]',
        youtube: 'a[href*="youtube.com"]',
        github: 'a[href*="github.com"]',
        dribbble: 'a[href*="dribbble.com"]',
        behance: 'a[href*="behance.net"]',
        telegram: 'a[href*="t.me"], a[href*="telegram.me"]',
        tiktok: 'a[href*="tiktok.com"]',
        discord: 'a[href*="discord.gg"], a[href*="discord.com"]'
      };
      const query = matchQueries[platform];
      if (query) {
        document.querySelectorAll(query).forEach(a => {
          a.href = url;
          // If anchor doesn't have minimal SVG icon, add it
          if (!a.querySelector('.minimal-soc-icon') && MINIMAL_ICONS[platform]) {
            const span = document.createElement('span');
            span.className = 'minimal-soc-icon';
            span.style.cssText = 'display: inline-flex; align-items: center; margin-right: 6px; vertical-align: middle;';
            span.innerHTML = MINIMAL_ICONS[platform];
            a.prepend(span);
          }
        });
      }
    });

    // 4. Hero Subtitle / Label & Services Section Heading
    if (s.hero) {
      if (s.hero.heading) {
        const heroLabel = document.querySelector('.media-hero p, [data-cms="hero-label"]');
        if (heroLabel && heroLabel.textContent.trim() !== s.hero.heading) {
          heroLabel.textContent = s.hero.heading;
        }
      }
      if (s.hero.subheading) {
        const servicesH2 = document.querySelector('#services h2.h4, [data-cms="services-heading"]');
        if (servicesH2 && servicesH2.textContent.trim() !== s.hero.subheading) {
          servicesH2.textContent = s.hero.subheading;
        }
      }
      const heroH1 = document.querySelector('.media-hero__title h1');
      if (heroH1) {
        heroH1.innerHTML = '';
      }
    }

    // 3b. AI Transformation Section
    if (s.ai_transformation) {
      if (s.ai_transformation.title) {
        document.querySelectorAll('[data-cms="ai-title"]').forEach(el => {
          el.textContent = s.ai_transformation.title;
        });
      }
      if (s.ai_transformation.description) {
        document.querySelectorAll('[data-cms="ai-desc"]').forEach(el => {
          el.textContent = s.ai_transformation.description;
        });
      }
    }

    // 4. Footer text & Copyright
    if (s.footer_text) {
      const footerDesc = document.querySelector('.site-footer p, footer p, [data-cms="footer-text"]');
      if (footerDesc) footerDesc.textContent = s.footer_text;
    }
    if (s.footer_copyright) {
      const copyright = document.querySelector('[data-cms="copyright"]');
      if (copyright) copyright.textContent = s.footer_copyright;
      document.querySelectorAll('.cream-bottom-bar p').forEach(el => {
        if (el.textContent.includes('©') || el.textContent.includes('DEEDOX')) {
          el.textContent = s.footer_copyright;
        }
      });
    }

    // Broadcast custom event for other scripts (e.g. pricing.html)
    window.dispatchEvent(new CustomEvent('deedox:settings-updated', { detail: s }));
  }

  // Universal Smart Viewport Video Optimization (Zero-Lag Play/Pause for all sub-pages)
  function optimizeVideos() {
    // If animation-engine is present, let it handle index.html lifecycle
    const hasMasterEngine = document.getElementById('deedox-engine-styles') !== null || typeof Lenis !== 'undefined';
    
    document.querySelectorAll('video').forEach(video => {
      if (video.id === 'test-video') return;
      video.setAttribute('playsinline', '');
      video.muted = true;
      if (video.closest('.media-hero')) {
        video.style.transform = '';
      }
    });

    if (hasMasterEngine) return;

    if (!('IntersectionObserver' in window)) return;

    const subObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (vid.id === 'test-video') return;
        const isHidden = vid.offsetParent === null || window.getComputedStyle(vid).display === 'none';

        if (entry.isIntersecting && !isHidden) {
          vid.preload = 'auto';
          if (vid.paused) {
            const p = vid.play();
            if (p !== undefined) p.catch(() => {});
          }
        } else {
          if (!vid.paused) {
            vid.pause();
          }
        }
      });
    }, {
      rootMargin: '200px 0px 200px 0px',
      threshold: 0.05
    });

    document.querySelectorAll('video').forEach(video => {
      if (video.id !== 'test-video') {
        video.preload = 'metadata';
        subObserver.observe(video);
      }
    });
  }

  // 4. Darkroom Engineering Lenis Smooth Inertia Scroll (https://github.com/darkroomengineering/lenis)
  function initLenisSmoothScroll() {
    if (window.lenis) return;

    function activateLenis() {
      if (typeof Lenis === 'undefined' || window.lenis) return;
      try {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.5,
          autoRaf: true
        });
        window.lenis = lenis;

        // In-page anchor links smooth scroll
        document.addEventListener('click', (e) => {
          const link = e.target.closest('a[href^="#"]');
          if (!link) return;
          const href = link.getAttribute('href');
          if (href && href.length > 1 && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              lenis.scrollTo(target, { offset: 0, duration: 1.2 });
            }
          }
        });
      } catch (err) {
        console.warn('Lenis smooth scroll error:', err);
      }
    }

    if (typeof Lenis !== 'undefined') {
      activateLenis();
    } else {
      const script = document.createElement('script');
      script.src = '/assets/js/lenis.min.js';
      script.onload = activateLenis;
      document.head.appendChild(script);
    }
  }

  // Real-Time Execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initSiteCMS();
      optimizeVideos();
      initLenisSmoothScroll();
    });
  } else {
    initSiteCMS();
    optimizeVideos();
    initLenisSmoothScroll();
  }

  // Real-Time Sync: tab focus, storage broadcast, and smooth 30s background poll
  setInterval(initSiteCMS, 30000);
  window.addEventListener('focus', initSiteCMS);
  window.addEventListener('storage', (e) => {
    if (e.key === 'deedox_cms_updated') {
      initSiteCMS();
    }
  });

  window.deedoxInitCMS = initSiteCMS;
})();
