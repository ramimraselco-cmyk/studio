/**
 * DEEDOX Real-Time CMS & Supabase Synchronization Engine
 * Automatically synchronizes prices, WhatsApp hotlines, content headings,
 * and media across index.html, pricing.html, services.html, work.html, about.html, contact.html.
 */
(function() {
  'use strict';

  let lastSettingsHash = '';
  let lastPricingHash = '';

  function hashObject(obj) {
    try {
      return JSON.stringify(obj);
    } catch (e) {
      return '';
    }
  }

  // 1. Sync Site Settings (WhatsApp, Email, Hero Text, Footer)
  async function syncSiteSettings() {
    try {
      const res = await fetch('/api/settings', { cache: 'no-store' });
      if (!res.ok) return;
      const settings = await res.json();
      if (!settings || typeof settings !== 'object') return;

      const currentHash = hashObject(settings);
      if (currentHash === lastSettingsHash) return;
      lastSettingsHash = currentHash;

      // A. Update WhatsApp Links & Phone Numbers
      const rawPhone = (settings.whatsapp_number || '').replace(/[^0-9]/g, '') || '8801817296013';
      const defaultMsg = settings.whatsapp_message || 'Hello DEEDOX Team, I would like to discuss a new digital product project.';

      window.deedoxWhatsAppNumber = rawPhone;
      window.deedoxWhatsAppMessage = defaultMsg;

      // Update all wa.me links
      document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        try {
          const currentUrl = new URL(link.href);
          const currentText = currentUrl.searchParams.get('text') || defaultMsg;
          link.href = `https://wa.me/${rawPhone}?text=${encodeURIComponent(currentText)}`;
        } catch (err) {
          link.href = `https://wa.me/${rawPhone}?text=${encodeURIComponent(defaultMsg)}`;
        }
      });

      // Update visible phone numbers
      document.querySelectorAll('.js-cms-phone, [data-cms="phone"]').forEach(el => {
        el.textContent = settings.whatsapp_number || '+8801817296013';
      });

      // B. Update Contact Email
      if (settings.contact_email) {
        document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
          link.href = `mailto:${settings.contact_email}`;
        });
        document.querySelectorAll('.js-cms-email, [data-cms="email"]').forEach(el => {
          el.textContent = settings.contact_email;
        });
      }

      // C. Update Hero Text (if customized in admin)
      if (settings.hero && settings.hero.heading) {
        const heroHeadingEl = document.querySelector('.media-hero__title h1, [data-cms="hero-heading"]');
        if (heroHeadingEl && heroHeadingEl.textContent.trim() !== settings.hero.heading) {
          heroHeadingEl.textContent = settings.hero.heading;
        }
      }

      if (settings.hero && settings.hero.subheading) {
        const heroSubEl = document.querySelector('.media-hero p.font-mono, [data-cms="hero-subheading"]');
        if (heroSubEl && heroSubEl.textContent.trim() !== settings.hero.subheading) {
          heroSubEl.textContent = settings.hero.subheading;
        }
      }

      // D. Update Footer Texts
      if (settings.footer_copyright) {
        document.querySelectorAll('.js-cms-copyright, [data-cms="copyright"]').forEach(el => {
          el.textContent = settings.footer_copyright;
        });
      }

      if (settings.footer_text) {
        document.querySelectorAll('.js-cms-footer-text, [data-cms="footer-text"]').forEach(el => {
          el.textContent = settings.footer_text;
        });
      }

    } catch (e) {
      // Graceful fallback
    }
  }

  // 2. Sync Pricing Data
  async function syncPricing() {
    if (typeof window.loadDynamicPricing === 'function') {
      try {
        await window.loadDynamicPricing();
      } catch (e) {}
    }
  }

  // 3. Combined Sync Trigger
  async function syncAll() {
    await Promise.all([
      syncSiteSettings(),
      syncPricing()
    ]);
  }

  // Initial Run
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncAll);
  } else {
    syncAll();
  }

  // Real-Time Polling & Event Triggers
  setInterval(syncAll, 3000);
  window.addEventListener('focus', syncAll);
  window.addEventListener('storage', (e) => {
    if (e.key === 'deedox_cms_updated') {
      syncAll();
    }
  });

  // Expose globally for instant manual invocation
  window.deedoxSyncAll = syncAll;

})();
