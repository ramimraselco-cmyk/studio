/**
 * DEEDOX / Fantasy Studio — Live Site CMS Client (Real-Time 60fps Engine)
 * Connects frontend DOM dynamically to Supabase / Local CMS API
 * Features real-time multi-tab localStorage broadcast and background auto-polling.
 */
(function() {
  'use strict';

  let lastHash = '';

  async function initSiteCMS() {
    try {
      const res = await fetch('/api/settings?_t=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) return;
      const settings = await res.json();
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

    // 1. WhatsApp floating action button & link updates
    const cleanPhone = (s.whatsapp_number || '+8801817296013').replace(/[^0-9]/g, '');
    const defaultMsg = s.whatsapp_message || 'Hello DEEDOX Team, I would like to discuss our project with your agency.';
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMsg)}`;

    window.deedoxWhatsAppNumber = cleanPhone;
    window.deedoxWhatsAppMessage = defaultMsg;

    // Ensure WhatsApp Concierge Flow is loaded
    if (!document.getElementById('deedox-wa-flow-script') && typeof window.openDeedoxWhatsAppFlow === 'undefined') {
      const waScript = document.createElement('script');
      waScript.id = 'deedox-wa-flow-script';
      waScript.src = '/assets/js/whatsapp-flow.js?v=2.0';
      document.body.appendChild(waScript);
    }

    // Intercept deedoxWhatsAppPill to open interactive Category & Details Flow
    const waBtn = document.getElementById('deedoxWhatsAppPill');
    if (waBtn) {
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

    // 2. Contact details & emails
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

    // 2b. Phone number
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

    // 2c. Studio Location
    if (s.studio_location) {
      document.querySelectorAll('[data-cms="location"], .cream-hub-city, .cream-hub-addr').forEach(el => {
        if (el.getAttribute('data-cms') === 'location') {
          el.textContent = s.studio_location;
        }
      });
    }

    // 2d. Social Links
    if (s.social_links) {
      if (s.social_links.twitter) {
        document.querySelectorAll('a[href*="twitter.com"], a[href*="x.com"]').forEach(a => a.href = s.social_links.twitter);
      }
      if (s.social_links.linkedin) {
        document.querySelectorAll('a[href*="linkedin.com"]').forEach(a => a.href = s.social_links.linkedin);
      }
      if (s.social_links.instagram) {
        document.querySelectorAll('a[href*="instagram.com"]').forEach(a => a.href = s.social_links.instagram);
      }
      if (s.social_links.github) {
        document.querySelectorAll('a[href*="github.com"]').forEach(a => a.href = s.social_links.github);
      }
    }

    // 3. Hero Subtitle / Label & Services Section Heading
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
      // Ensure the giant hero h1 is kept clean so it does not obstruct the hero phone mockup
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
