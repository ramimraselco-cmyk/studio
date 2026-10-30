/**
 * DEEDOX / Fantasy Studio — Live Site CMS Client
 * Connects frontend DOM dynamically to Supabase / Local CMS API
 */
(function() {
  'use strict';

  async function initSiteCMS() {
    try {
      const res = await fetch('/api/settings');
      if (!res.ok) return;
      const settings = await res.json();
      applySettings(settings);
    } catch (err) {
      console.log('[CMS] Running with static defaults');
    }
  }

  function applySettings(s) {
    if (!s) return;

    // 1. WhatsApp floating action button & link updates
    if (s.whatsapp_number) {
      const cleanPhone = s.whatsapp_number.replace(/[^0-9]/g, '');
      const msg = encodeURIComponent(s.whatsapp_message || 'Hello DEEDOX Team, I would like to discuss our project with your agency.');
      const waUrl = `https://wa.me/${cleanPhone}?text=${msg}`;

      // Purge any stale or cached old buttons immediately
      const oldBtn = document.getElementById('floatingWhatsAppBtn');
      if (oldBtn) oldBtn.remove();
      document.querySelectorAll('[title*="WhatsApp"]').forEach(el => {
        if (el.id !== 'deedoxWhatsAppPill') el.removeAttribute('title');
      });

      // Update any existing whatsapp links
      document.querySelectorAll('a[href*="whatsapp"], a[href*="wa.me"]').forEach(a => {
        a.href = waUrl;
      });

      // Check for deedoxWhatsAppPill or inject if missing
      let waBtn = document.getElementById('deedoxWhatsAppPill');
      if (waBtn) {
        waBtn.href = waUrl;
      } else {
        waBtn = document.createElement('a');
        waBtn.id = 'deedoxWhatsAppPill';
        waBtn.href = waUrl;
        waBtn.target = '_blank';
        waBtn.rel = 'noopener noreferrer';
        waBtn.setAttribute('aria-label', 'WhatsApp');
        
        // Pure WhatsApp Vector SVG Icon Only (No Text, No Tooltips)
        waBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" style="display: block; flex-shrink: 0;">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.196 8.196 0 0 1-5.82 2.42c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
          </svg>
        `;
        
        // DEEDOX Footer Cream Theme: Warm Cream #F5F4F0 background, Obsidian #111111 icon
        const baseStyle = `
          position: fixed !important;
          bottom: 28px !important;
          right: 28px !important;
          width: 56px !important;
          height: 56px !important;
          border-radius: 50% !important;
          background: #F5F4F0 !important;
          color: #111111 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-decoration: none !important;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.42), 0 3px 10px rgba(0, 0, 0, 0.15) !important;
          border: 1px solid rgba(17, 17, 17, 0.14) !important;
          z-index: 999999 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          transform: translateY(24px) scale(0.85) !important;
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
          cursor: pointer !important;
        `;
        waBtn.style.cssText = baseStyle;

        // Hover Effect: Invert to Obsidian #111111 background & Cream #F5F4F0 icon
        waBtn.onmouseenter = () => {
          waBtn.style.background = '#111111';
          waBtn.style.color = '#F5F4F0';
          waBtn.style.borderColor = 'rgba(245, 244, 240, 0.3)';
          waBtn.style.transform = 'translateY(-4px) scale(1.08)';
          waBtn.style.boxShadow = '0 18px 45px rgba(0, 0, 0, 0.65)';
        };
        waBtn.onmouseleave = () => {
          waBtn.style.background = '#F5F4F0';
          waBtn.style.color = '#111111';
          waBtn.style.borderColor = 'rgba(17, 17, 17, 0.14)';
          waBtn.style.transform = 'translateY(0) scale(1)';
          waBtn.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.42), 0 3px 10px rgba(0, 0, 0, 0.15)';
        };

        // Scroll listener: Strictly HIDE on Hero page, REVEAL only when scrolled past Hero
        function handleScrollVisibility() {
          const scrollPos = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
          // Must hide completely on the Hero screen (minimum 550px or 75% of screen height)
          const heroThreshold = Math.max(window.innerHeight * 0.75, 550);

          if (scrollPos > heroThreshold) {
            waBtn.style.opacity = '1';
            waBtn.style.visibility = 'visible';
            waBtn.style.pointerEvents = 'auto';
            if (!waBtn.matches(':hover')) {
              waBtn.style.transform = 'translateY(0) scale(1)';
            }
          } else {
            waBtn.style.opacity = '0';
            waBtn.style.visibility = 'hidden';
            waBtn.style.pointerEvents = 'none';
            waBtn.style.transform = 'translateY(24px) scale(0.85)';
          }
        }

        window.addEventListener('scroll', handleScrollVisibility, { passive: true });
        window.addEventListener('resize', handleScrollVisibility, { passive: true });
        document.addEventListener('scroll', handleScrollVisibility, { passive: true });
        
        handleScrollVisibility();
        document.body.appendChild(waBtn);
      }
    }


    // 2. Contact details & emails
    if (s.contact_email) {
      document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
        a.href = `mailto:${s.contact_email}`;
        if (a.textContent.includes('@')) {
          a.textContent = s.contact_email;
        }
      });
    }

    // 3. Footer text & Copyright
    if (s.footer_text) {
      const footerDesc = document.querySelector('.site-footer p, footer p, [data-cms="footer-text"]');
      if (footerDesc) footerDesc.textContent = s.footer_text;
    }
    if (s.footer_copyright) {
      const copyright = document.querySelector('[data-cms="copyright"]');
      if (copyright) copyright.textContent = s.footer_copyright;
    }
  }

  // Optimize all video tags on page for smooth streaming
  function optimizeVideos() {
    document.querySelectorAll('video').forEach(video => {
      video.setAttribute('playsinline', '');
      video.setAttribute('preload', 'metadata');
      // Ensure smooth autoplay
      if (video.hasAttribute('autoplay')) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented, will play on first user interaction
            const onInteract = () => {
              video.play();
              window.removeEventListener('scroll', onInteract);
              window.removeEventListener('click', onInteract);
            };
            window.addEventListener('scroll', onInteract, { once: true, passive: true });
            window.addEventListener('click', onInteract, { once: true });
          });
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initSiteCMS();
      optimizeVideos();
    });
  } else {
    initSiteCMS();
    optimizeVideos();
  }
})();
