/**
 * DEEDOX STUDIO — UNIVERSAL FANTASY MENU CONTROLLER
 * 100% Guaranteed Fullscreen Navigation across Mobile & Desktop.
 * Exposes window.openDeedoxMenu(), window.closeDeedoxMenu(), window.toggleDeedoxMenu().
 */
(function() {
  'use strict';

  // Guarantee critical z-index and interaction CSS rules
  const menuStyle = document.createElement('style');
  menuStyle.id = 'deedox-menu-priority-styles';
  menuStyle.textContent = `
    header.sh, .site-header, .site-nav {
      z-index: 9999 !important;
      pointer-events: auto !important;
    }
    .sh-toggle, .sh-menu-toggle, #menuToggleBtn {
      pointer-events: auto !important;
      cursor: pointer !important;
      z-index: 10000 !important;
      -webkit-tap-highlight-color: transparent !important;
      touch-action: manipulation !important;
    }
    #deedox-menu {
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      height: 100dvh !important;
      z-index: 999999 !important;
      background-color: rgba(5, 5, 8, 0.98) !important;
      backdrop-filter: blur(40px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
      display: flex !important;
      flex-direction: column !important;
      box-sizing: border-box !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s ease !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
    }
    #deedox-menu.is-open,
    #deedox-menu.opacity-100 {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }
    body.is-menu {
      overflow: hidden !important;
    }
  `;
  document.head.appendChild(menuStyle);

  function getMenu() {
    return document.getElementById('deedox-menu');
  }

  function openMenu() {
    const menuEl = getMenu();
    if (!menuEl) return;

    menuEl.classList.remove('pointer-events-none', 'invisible', 'opacity-0');
    menuEl.classList.add('pointer-events-auto', 'visible', 'opacity-100', 'is-open');
    document.body.classList.add('is-menu');
    document.body.style.overflow = 'hidden';

    // Lenis pause if present
    if (window.lenis && typeof window.lenis.stop === 'function') {
      window.lenis.stop();
    }

    // Stagger reveal of menu items if GSAP is available
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
    const menuEl = getMenu();
    if (!menuEl) return;

    menuEl.classList.remove('opacity-100', 'pointer-events-auto', 'is-open');
    menuEl.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('is-menu');
    document.body.style.overflow = '';

    if (window.lenis && typeof window.lenis.start === 'function') {
      window.lenis.start();
    }

    setTimeout(() => {
      if (!menuEl.classList.contains('is-open')) {
        menuEl.classList.add('invisible');
      }
    }, 350);
  }

  function toggleMenu() {
    const menuEl = getMenu();
    if (!menuEl) return;
    if (menuEl.classList.contains('is-open') || menuEl.classList.contains('opacity-100')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Expose global methods
  window.openDeedoxMenu = openMenu;
  window.closeDeedoxMenu = closeMenu;
  window.toggleDeedoxMenu = toggleMenu;

  function initUniversalMenu() {
    const menuEl = getMenu();
    if (!menuEl) return;

    // Specific open selectors (strictly avoiding generic buttons)
    const openSelectors = [
      '.sh-toggle',
      '.sh-menu-toggle',
      '#menuToggleBtn',
      '[data-action="open-menu"]'
    ];
    const openButtons = document.querySelectorAll(openSelectors.join(', '));

    const closeSelectors = [
      '#menu-close-btn',
      '#menuCloseBtn',
      '.fantasy-menu-close',
      '[data-action="close-menu"]'
    ];
    const closeButtons = document.querySelectorAll(closeSelectors.join(', '));

    // Universal trigger binder supporting both click and fast touch
    function bindTrigger(el, handler) {
      if (!el || el.dataset.menuBound) return;
      el.dataset.menuBound = 'true';

      let touchMoved = false;
      el.addEventListener('touchstart', () => { touchMoved = false; }, { passive: true });
      el.addEventListener('touchmove', () => { touchMoved = true; }, { passive: true });
      el.addEventListener('touchend', (e) => {
        if (!touchMoved) {
          e.preventDefault();
          e.stopPropagation();
          handler(e);
        }
      });

      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        handler(e);
      });
    }

    openButtons.forEach(btn => bindTrigger(btn, () => toggleMenu()));
    closeButtons.forEach(btn => bindTrigger(btn, () => closeMenu()));

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Handle clicks inside menu navigation links
    const menuLinks = menuEl.querySelectorAll('a');
    menuLinks.forEach(link => {
      if (link.dataset.linkBound) return;
      link.dataset.linkBound = 'true';

      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href) return;

        if (href.startsWith('#')) {
          e.preventDefault();
          closeMenu();
          const target = document.querySelector(href);
          if (target) {
            if (window.lenis && typeof window.lenis.scrollTo === 'function') {
              setTimeout(() => {
                window.lenis.scrollTo(target, { duration: 1.2, offset: -20 });
              }, 150);
            } else {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } else {
          closeMenu();
        }
      });
    });

    // Ensure Logo clicks navigate to Home
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

  window.addEventListener('load', initUniversalMenu);
})();
