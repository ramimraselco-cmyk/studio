/**
 * DEEDOX STUDIO — UNIVERSAL FANTASY MENU CONTROLLER
 * Ensures 100% reliable fullscreen navigation across all pages (Home, Work, Services, Pricing, About, Contact).
 * Supports desktop and mobile touch devices with zero latency.
 */
(function() {
  'use strict';

  function initUniversalMenu() {
    const menuEl = document.getElementById('deedox-menu');
    if (!menuEl) return;

    // All possible open toggles across index, work, services, pricing, about, contact
    const openSelectors = [
      '.sh-toggle',
      '.sh-menu-toggle',
      '#menuToggleBtn',
      '.sh-toggle-btn',
      '[data-action="open-menu"]'
    ];
    const openButtons = document.querySelectorAll(openSelectors.join(', '));

    // All possible close buttons
    const closeSelectors = [
      '#menu-close-btn',
      '#menuCloseBtn',
      '.fantasy-menu-close',
      '[data-action="close-menu"]'
    ];
    const closeButtons = document.querySelectorAll(closeSelectors.join(', '));

    function openMenu() {
      menuEl.classList.remove('pointer-events-none', 'invisible', 'opacity-0');
      menuEl.classList.add('pointer-events-auto', 'visible', 'opacity-100', 'is-open');
      document.body.classList.add('is-menu');
      document.body.style.overflow = 'hidden';

      // Lenis pause if present
      if (window.lenis && typeof window.lenis.stop === 'function') {
        window.lenis.stop();
      }

      // Smooth stagger reveal of menu items if GSAP is available
      if (typeof gsap !== 'undefined') {
        const navItems = menuEl.querySelectorAll('.fantasy-nav-item, .fantasy-sub-links, .fantasy-menu-bottom');
        if (navItems.length) {
          gsap.fromTo(navItems,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.04, duration: 0.45, ease: 'power3.out', overwrite: 'auto' }
          );
        }
      }
    }

    function closeMenu() {
      menuEl.classList.remove('opacity-100', 'pointer-events-auto', 'is-open');
      menuEl.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('is-menu');
      document.body.style.overflow = '';

      if (window.lenis && typeof window.lenis.start === 'function') {
        window.lenis.start();
      }

      setTimeout(() => {
        if (!menuEl.classList.contains('opacity-100') && !menuEl.classList.contains('is-open')) {
          menuEl.classList.add('invisible');
        }
      }, 350);
    }

    // Bind open toggle buttons
    openButtons.forEach(btn => {
      // Avoid double-binding
      if (btn.dataset.menuBound) return;
      btn.dataset.menuBound = 'true';

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = menuEl.classList.contains('opacity-100') || menuEl.classList.contains('is-open');
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    });

    // Bind close buttons
    closeButtons.forEach(btn => {
      if (btn.dataset.menuCloseBound) return;
      btn.dataset.menuCloseBound = 'true';

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    // Handle clicks inside menu navigation links
    const menuLinks = menuEl.querySelectorAll('a');
    menuLinks.forEach(link => {
      if (link.dataset.linkBound) return;
      link.dataset.linkBound = 'true';

      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href) return;

        // In-page anchor link
        if (href.startsWith('#')) {
          e.preventDefault();
          closeMenu();
          const target = document.querySelector(href);
          if (target) {
            if (window.lenis && typeof window.lenis.scrollTo === 'function') {
              setTimeout(() => {
                window.lenis.scrollTo(target, { duration: 1.2, offset: -20 });
              }, 200);
            } else {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } else {
          // Navigating to another page
          closeMenu();
          // Allow default navigation to proceed
        }
      });
    });

    // Ensure Logo button clicks navigate to Home
    const logoBtns = document.querySelectorAll('.sh-logo, button[aria-label="DEEDOX"]');
    logoBtns.forEach(btn => {
      if (btn.tagName.toLowerCase() === 'button' && !btn.dataset.homeBound) {
        btn.dataset.homeBound = 'true';
        btn.addEventListener('click', () => {
          window.location.href = '/';
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUniversalMenu);
  } else {
    initUniversalMenu();
  }

  // Fallback re-init after dynamic loads
  window.addEventListener('load', initUniversalMenu);
})();
