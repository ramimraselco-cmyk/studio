/**

 * DEEDOX STUDIO — MASTER ANIMATION & SCROLL ENGINE

 * Faithfully reverse-engineered from Fantasy.co

 * Stack: Lenis Smooth Inertia Scroll, GSAP 3.12, ScrollTrigger, Smart Video Performance Manager

 */



(function () {

  'use strict';



  // Inject Lenis recommended smooth-scrolling CSS

  const styleEl = document.createElement('style');

  styleEl.id = 'deedox-engine-styles';

  styleEl.textContent = `

    html.lenis, html.lenis body {

      height: auto !important;

    }

    .lenis.lenis-smooth {

      scroll-behavior: auto !important;

    }

    .lenis.lenis-smooth [data-lenis-prevent] {

      overscroll-behavior: contain;

    }

    .lenis.lenis-stopped {

      overflow: hidden;

    }

    /* Ensure clean GPU rendering for videos without clipping */
    video:not(.media-hero video) {
      backface-visibility: hidden;
    }
    .media-hero__media video {
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      width: 100.2% !important;
      height: 100.2% !important;
      object-fit: cover !important;
      object-position: center center !important;
    }

    /* Mobile typography & layout fixes to eliminate messy/overflowing text */

    @media (max-width: 650px) {

      .h1 { font-size: clamp(3.2rem, 10vw, 4.8rem) !important; line-height: 1.05 !important; }

      .h2 { font-size: clamp(2.8rem, 8.5vw, 4.0rem) !important; line-height: 1.08 !important; }

      .h2-alt { font-size: clamp(2.2rem, 7vw, 3.2rem) !important; line-height: 1.12 !important; word-break: break-word !important; }

      .h3, .h3-alt { font-size: clamp(2.0rem, 6.2vw, 2.6rem) !important; line-height: 1.15 !important; }

      .h4 { font-size: clamp(1.8rem, 5.2vw, 2.2rem) !important; line-height: 1.25 !important; }

      .js-word, .grid-word, .js-t {

        word-break: normal !important;

        white-space: normal !important;

      }

      .sh .site-max {

        height: 7rem !important;

        padding-left: 2rem !important;

        padding-right: 2rem !important;

      }

      .sh-logo__text {

        height: 2.4rem !important;

      }

      .sh-toggle {

        height: 4.2rem !important;

        padding: 0 1.6rem !important;

      }

      .gallery-grid__media {

        width: 100% !important;

      }

    }

  `;

  document.head.appendChild(styleEl);



  // 1. INITIALIZE LENIS SMOOTH INERTIA SCROLL (MATCHING FANTASY.CO)

  let lenis = null;

  try {

    if (typeof Lenis !== 'undefined') {

      lenis = new Lenis({

        duration: 1.2,

        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

        orientation: 'vertical',

        gestureOrientation: 'vertical',

        smoothWheel: true,

        wheelMultiplier: 1.0,

        touchMultiplier: 1.5,

        infinite: false,

      });



      window.lenis = lenis;

      // Synchronize Lenis with GSAP Ticker for smooth 60 FPS
      if (typeof gsap !== 'undefined') {
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
      }

      // Handle in-page anchor links smoothly via Lenis
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
    }
  } catch (e) {
    console.warn('Lenis scroll init warning:', e);
  }



  // 2. SMART VIDEO PERFORMANCE & VIEWPORT MANAGER

  // STRICTLY pauses off-screen & hidden videos to eliminate GPU bottleneck, lag, and frame drops.

  function initVideoManager() {

    const videos = document.querySelectorAll('video');



    // Helper: forcefully play active hero video

    function playActiveHero() {

      const isMobile = window.innerWidth < 650;

      const heroDesktop = document.querySelector('.media-hero video.max-s\\:hidden');

      const heroMobile = document.querySelector('.media-hero video.s\\:hidden');

      if (isMobile && heroMobile) {

        heroMobile.muted = true;

        heroMobile.setAttribute('playsinline', '');

        heroMobile.setAttribute('autoplay', '');

        heroMobile.play().catch(() => {});

      } else if (!isMobile && heroDesktop) {

        heroDesktop.muted = true;

        heroDesktop.setAttribute('playsinline', '');

        heroDesktop.setAttribute('autoplay', '');

        heroDesktop.play().catch(() => {});

      }

      document.querySelectorAll('.media-hero video').forEach((v) => {

        v.muted = true;

        v.setAttribute('playsinline', '');

        v.setAttribute('autoplay', '');

        v.preload = 'auto';

        if (window.getComputedStyle(v).display !== 'none') {

          v.play().catch(() => {});

        }

      });

    }



    videos.forEach((v) => {

      if (v.id === 'test-video') return;

      v.muted = true;

      v.setAttribute('playsinline', '');

      v.setAttribute('loop', '');

      const isHero = v.closest('.media-hero') || (v.src && v.src.includes('hero'));

      const isCol2 = v.src && v.src.includes('08_col2_os');

      if (isHero || isCol2) {

        v.preload = 'auto';

        v.setAttribute('autoplay', '');

        v.play().catch(() => {});

      } else {

        v.preload = 'metadata';

        v.removeAttribute('autoplay');

      }

    });



    playActiveHero();

    window.addEventListener('load', playActiveHero);

    window.addEventListener('resize', playActiveHero);

    document.addEventListener('DOMContentLoaded', playActiveHero);

    function unlockMobileVideos() {
      playActiveHero();
      videos.forEach((v) => {
        if (v.id === 'test-video') return;
        v.muted = true;
        v.setAttribute('playsinline', '');
        v.setAttribute('webkit-playsinline', '');
      });
    }
    ['touchstart', 'touchend', 'click', 'scroll', 'pointerdown'].forEach((evt) => {
      window.addEventListener(evt, unlockMobileVideos, { once: true, passive: true });
    });



    if (!('IntersectionObserver' in window)) {

      playActiveHero();

      return;

    }



    const videoObserver = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          const video = entry.target;

          if (video.id === 'test-video') return;



          // NEVER pause hero videos under any circumstance!

          if (video.closest('.media-hero') || (video.src && video.src.includes('hero'))) {

            if (video.paused && window.getComputedStyle(video).display !== 'none') {

              video.play().catch(() => {});

            }

            return;

          }



          // Check if video or any ancestor is hidden

          const style = window.getComputedStyle(video);

          const isHidden =

            style.display === 'none' ||

            video.closest('[style*="display: none"]') !== null;



          if (entry.isIntersecting && !isHidden) {

            if (video.paused) {

              const p = video.play();

              if (p !== undefined) p.catch(() => {});

            }

          } else {

            // Keep 08_col2_os playing when in gallery grid

            if (video.src && video.src.includes('08_col2_os')) return;

            if (!video.paused) {

              video.pause();

            }

          }

        });

      },

      {

        rootMargin: '250px 0px 250px 0px',

        threshold: 0.02,

      }

    );



    videos.forEach((v) => {

      if (v.id !== 'test-video') {

        videoObserver.observe(v);

      }

    });



    playActiveHero();

  }



  // 3. GSAP SCROLLTRIGGER ANIMATIONS (FAITHFUL TO FANTASY.CO)

  function initScrollAnimations() {

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {

      console.warn('GSAP or ScrollTrigger not loaded, revealing static text.');

      document

        .querySelectorAll('div[style*="opacity: 0"], div[style*="opacity:0"]')

        .forEach((el) => {

          el.style.opacity = '1';

          el.style.filter = 'none';

          el.style.transform = 'none';

        });

      return;

    }

    if (typeof Flip !== 'undefined') {

      gsap.registerPlugin(ScrollTrigger, Flip);

    } else {

      gsap.registerPlugin(ScrollTrigger);

    }

    // --- A. TEXT BLUR REVEAL STAGGER ANIMATIONS (FANTASY "words" EFFECT) ---

    // Reverse-engineered from Fantasy: x:"4rem"->0, alpha:0->1, filter:blur(10px)->0, stagger:0.075

    const headings = document.querySelectorAll(

      'h1, h2, h3, .h1, .h2, .h2-alt, .h3, .h3-alt, .h4, .media-hero-exp__content h3, .col-span-6 .h4'

    );



    headings.forEach((container) => {

      if (container.closest('.case-list__cards')) return;

      if (container.closest('.gallery-grid')) return;

      if (container.id === 'velocity-heading' || container.closest('.media-hero-exp')) return;



      const words = container.querySelectorAll(

        'div[style*="opacity: 0"], div[style*="opacity:0"], div[style*="filter: blur"]'

      );

      if (words.length > 0) {

        gsap.fromTo(words, 

          { x: '4rem', opacity: 0, filter: 'blur(10px)' },

          {

            scrollTrigger: {

              trigger: container,

              start: 'top 85%',

              toggleActions: 'play none none none',

            },

            x: '0rem',

            opacity: 1,

            filter: 'blur(0px)',

            stagger: 0.05,

            duration: 0.85,

            ease: 'power3.out',

          }

        );

      }

    });



    // --- B. TOP HERO PIN & FADE OUT (FANTASY.CO EXACT TIMELINE) ---

    // Hero background video stays pinned via CSS sticky, visible and playing while Section 2 (#services) slides over it

    const heroSection = document.querySelector('.media-hero');

    const heroMedia = document.querySelector('.media-hero__media');

    const heroBottom = heroSection ? heroSection.querySelector('.bottom-0') : null;

    const heroTitle = heroSection ? heroSection.querySelector('.media-hero__title') : null;

    const servicesSection = document.querySelector('#services');



    if (heroSection) {

      // Ensure hero media is fully visible and opacity is 1 on page load

      if (heroMedia) {

        gsap.set(heroMedia, { opacity: 1, visibility: 'visible' });

      }



      // Fade out bottom text upwards as user starts scrolling so it doesn't linger

      if (heroBottom) {

        gsap.to(heroBottom, {

          scrollTrigger: {

            trigger: heroSection,

            start: 'top top',

            end: '35% top',

            scrub: true,

          },

          opacity: 0,

          y: -50,

          ease: 'power1.out',

        });

      }



      // Optical Liquid Glass Zoom Refraction:

      // As the liquid glass (#services) slides over the hero video, create a subtle optical magnifying

      // lens zoom on the underlying hero video (scale: 1.0 -> 1.065) so it physically feels like real liquid glass!

      if (heroMedia && servicesSection) {

        // Optical Liquid Glass Zoom Refraction:
        // As #services slides over the hero video, create a subtle magnifying zoom (scale: 1.0 -> 1.065)
        gsap.fromTo(heroMedia,
          { scale: 1.0 },
          {
            scrollTrigger: {
              trigger: servicesSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
            scale: 1.065,
            ease: 'none',
            transformOrigin: 'center center',
          }
        );

        // Hero media stays 100% visible and playing behind #services Liquid Glass!
        // Only when #services completely finishes scrolling out of view (entering gallery-grid), fade out heroMedia
        gsap.to(heroMedia, {
          scrollTrigger: {
            trigger: servicesSection,
            start: 'bottom top',
            end: 'bottom -50%',
            scrub: true,
          },
          opacity: 0,
          ease: 'power1.in',
        });
      }

    }



    // --- C. 3-COLUMN PARALLAX GALLERY GRID & CENTER VIDEO DOCKING (FAITHFUL TO FANTASY.CO) ---

    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryGrid) {

      const mediaContainer = galleryGrid.querySelector('.gallery-grid__media');

      const mediaFigure = mediaContainer ? mediaContainer.querySelector('figure') : null;

      const stickySection = galleryGrid.querySelector('.gallery-grid__sticky');

      const stickyTarget = galleryGrid.querySelector('.gallery-grid__target--sticky');

      const col2Target = galleryGrid.querySelector('.gallery-grid__target--col2');

      const tiles = galleryGrid.querySelector('.gallery-grid__tiles');



      if (tiles && mediaFigure && stickyTarget && col2Target && stickySection) {

        const cols = tiles.children;

        const col1 = cols[0]; // Left column

        const col3 = cols[2]; // Right column



        // Measure Column 2 slot width and set sticky target to match

        function syncTargetWidth() {

          const slotWidth = col2Target.offsetWidth || (tiles.offsetWidth - 40) / 3;

          const slotHeight = col2Target.offsetHeight || (window.innerWidth >= 1440 ? 400 : (window.innerWidth >= 650 ? 300 : 175));

          if (slotWidth > 0) {

            gsap.set(stickyTarget, {

              width: slotWidth,

              height: slotHeight

            });

          }

        }

        syncTargetWidth();



        if (typeof Flip !== 'undefined') {

          gsap.registerPlugin(Flip);



          syncTargetWidth();



          // 1. Capture initial full-width position before reparenting

          const state = Flip.getState(mediaFigure);



          // 2. Append figure into the STICKY target (matching Fantasy.co)

          stickyTarget.appendChild(mediaFigure);



          const vid = mediaFigure.querySelector('video');

          if (vid) {

            vid.style.width = '100%';

            vid.style.height = '100%';

            vid.style.objectFit = 'cover';

            vid.style.display = 'block';

            vid.play().catch(() => {});

          }



          // 3. Exact Fantasy.co Flip Docking Timeline

          const dockTl = gsap.timeline({

            scrollTrigger: {

              trigger: stickySection,

              start: 'top top',

              end: 'bottom bottom-=100%',

              scrub: true,

              invalidateOnRefresh: true,

              onRefresh: syncTargetWidth

            }

          });



          // Scrub Flip smoothly from initial full-width down to centered sticky target

          dockTl.add(Flip.from(state, {

            absolute: true,

            simple: true,

            ease: 'none',

            duration: 1

          }), 0);



          // Side columns slide inward from sides (-75% / 75% to 0)

          if (col1 && col3) {

            dockTl.fromTo([col1, col3], 

              { xPercent: gsap.utils.wrap([-75, 75]) }, 

              { xPercent: 0, duration: 0.875, ease: 'none' }, 

              0.125

            );

          }



          ScrollTrigger.addEventListener('refreshInit', syncTargetWidth);

        }

      }



      // Ensure all gallery-grid videos (especially 08_col2_os) are playing when gallery grid is approached

      ScrollTrigger.create({

        trigger: galleryGrid,

        start: 'top 95%',

        onEnter: () => {

          galleryGrid.querySelectorAll('video').forEach((vid) => {

            vid.play().catch(() => {});

          });

        },

      });



      // Grid background overlay scrub

      const bgOverlay = galleryGrid.querySelector('.gallery-grid__grid .bg-black');

      if (bgOverlay) {

        gsap.fromTo(bgOverlay, 

          { opacity: 0 },

          {

            scrollTrigger: {

              trigger: galleryGrid,

              start: 'top top',

              end: 'bottom bottom-=25%',

              scrub: true,

            },

            opacity: 0.85,

            ease: 'linear',

          }

        );

      }



      // Parallax text inside gallery grid

      const gridTitle = galleryGrid.querySelector('h3');

      if (gridTitle) {

        const gridWords = gridTitle.querySelectorAll('.grid-word');

        if (gridWords.length > 0) {

          gsap.timeline({

            scrollTrigger: {

              trigger: galleryGrid,

              start: 'top top',

              end: 'bottom bottom-=25%',

              scrub: true,

            },

            defaults: { duration: 0.25 }

          })

          .fromTo(gridWords, 

            { opacity: 0, filter: 'blur(10px)' },

            { opacity: 1, filter: 'blur(0px)', ease: 'linear', stagger: 0.025 },

            0.25

          )

          .to(gridWords, 

            { opacity: 0, filter: 'blur(10px)', ease: 'power2.in', stagger: 0.0125 },

            0.75

          );

        }

      }

    }



    // --- D. CORE PILLARS SECTION (CASE LIST SWITCHER) ---

    const caseList = document.querySelector('.case-list');

    if (caseList) {

      const cardSections = caseList.querySelectorAll('.case-list__cards > section');

      const backgroundLinks = caseList.querySelectorAll('a[href^="/services"], a[href^="/work"]');



      if (backgroundLinks.length > 0) {

        backgroundLinks.forEach((link, idx) => {

          link.style.display = idx === 0 ? 'block' : 'none';

          link.style.opacity = idx === 0 ? '1' : '0';

          link.style.transition = 'opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)';

          const vid = link.querySelector('video');

          if (vid && idx !== 0) {

            vid.pause();

          }

        });

      }



      cardSections.forEach((cardSec, idx) => {

        ScrollTrigger.create({

          trigger: cardSec,

          start: 'top 60%',

          end: 'bottom 40%',

          onEnter: () => activatePillar(idx),

          onEnterBack: () => activatePillar(idx),

        });



        // Animate pillar title words unblur

        const words = cardSec.querySelectorAll(

          'div[style*="opacity: 0"], div[style*="opacity:0"], div[style*="filter: blur"]'

        );

        if (words.length > 0) {

          gsap.fromTo(words,

            { x: '3rem', opacity: 0, filter: 'blur(10px)' },

            {

              scrollTrigger: {

                trigger: cardSec,

                start: 'top 80%',

                toggleActions: 'play none none none',

              },

              x: '0rem',

              opacity: 1,

              filter: 'blur(0px)',

              duration: 0.7,

              stagger: 0.03,

              ease: 'power3.out',

            }

          );

        }

      });



      function activatePillar(index) {

        if (!backgroundLinks.length) return;

        backgroundLinks.forEach((link, i) => {

          const allVideos = Array.from(link.querySelectorAll('video'));

          const visibleVideos = allVideos.filter(v => window.getComputedStyle(v).display !== 'none');

          if (i === index) {

            link.style.display = 'block';

            requestAnimationFrame(() => {

              link.style.opacity = '1';

            });

            visibleVideos.forEach(v => {

              v.muted = true;

              if (v.paused) {

                const p = v.play();

                if (p) p.catch(() => {});

              }

            });

            const desc = link.querySelector('.js-texts');

            if (desc) {

              desc.style.opacity = '1';

              desc.style.transition = 'opacity 0.4s ease-out 0.15s';

            }

          } else {

            link.style.opacity = '0';

            setTimeout(() => {

              if (i !== index) link.style.display = 'none';

            }, 500);

            allVideos.forEach(v => {

              if (!v.paused) v.pause();

            });

          }

        });

      }

    }



    // --- E. 25 YEARS CAROUSEL / EDITORIAL SECTION ---

    const expSection = document.querySelector('.media-hero-exp');

    if (expSection) {

      const expMedia = expSection.querySelector('.media-hero-exp__media');

      if (expMedia) {

        gsap.to(expMedia, {

          scrollTrigger: {

            trigger: expSection,

            start: 'top bottom',

            end: 'bottom top',

            scrub: 0.8,

          },

          scale: 1.04,

          opacity: 0.8,

          ease: 'none',

        });

      }

      // Dedicated Luxury Staggered Blur-Unmask Animation for "Built for velocity..."
      const velocityHeading = document.getElementById('velocity-heading') || expSection.querySelector('h3');
      if (velocityHeading) {
        const vWords = velocityHeading.querySelectorAll('.velocity-word, .js-word');
        if (vWords.length > 0) {
          gsap.set(vWords, { y: 36, opacity: 0, filter: 'blur(10px)' });

          ScrollTrigger.create({
            trigger: velocityHeading,
            start: 'top 85%',
            onEnter: () => {
              gsap.to(vWords, {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                stagger: 0.035,
                duration: 0.85,
                ease: 'power3.out',
                overwrite: 'auto'
              });
            },
            onLeaveBack: () => {
              gsap.to(vWords, {
                y: 36,
                opacity: 0,
                filter: 'blur(10px)',
                stagger: 0.02,
                duration: 0.45,
                ease: 'power2.in',
                overwrite: 'auto'
              });
            }
          });
        }
      }

    }



    // --- F. FULL-PAGE EXPANDING VIDEO SECTION (FANTASY.CO EXACT FORMULA) ---

    const expandSection = document.querySelector('.case-expand-section');

    const expandCard = document.querySelector('.case-expand-card');

    const expandBadge = document.querySelector('.case-expand-badge');

    const expandCaption = document.querySelector('.case-expand-caption');



    if (expandSection && expandCard) {

      ScrollTrigger.create({

        trigger: expandSection,

        start: 'top top',

        end: 'bottom bottom',

        scrub: 0.6,

        onUpdate: (self) => {

          const progress = self.progress; // 0 to 1

          

          const isMobile = window.innerWidth < 650;

          const startW = isMobile ? window.innerWidth * 0.88 : Math.min(420, window.innerWidth * 0.38);

          const startH = isMobile ? window.innerHeight * 0.65 : Math.min(520, window.innerHeight * 0.68);

          const endW = window.innerWidth;

          const endH = window.innerHeight;

          const startRadius = 24;

          const endRadius = 0;



          const curW = startW + (endW - startW) * progress;

          const curH = startH + (endH - startH) * progress;

          const curRadius = startRadius * (1 - progress);



          expandCard.style.width = `${curW}px`;

          expandCard.style.height = `${curH}px`;

          expandCard.style.maxWidth = '100vw';

          expandCard.style.maxHeight = '100vh';

          expandCard.style.borderRadius = `${curRadius}px`;



          // Fade out badges when expanding near full-screen

          if (expandBadge) {

            expandBadge.style.opacity = Math.max(0, 1 - progress * 2.5);

          }

          if (expandCaption) {

            expandCaption.style.opacity = Math.max(0, 1 - progress * 2.2);

          }

        }

      });

    }



    // --- G. PRICING MATRIX CATEGORY FILTERING ---

    const pricingTabs = document.querySelectorAll('.pricing-tab');

    const pricingCards = document.querySelectorAll('.pricing-card');



    pricingTabs.forEach(tab => {

      tab.addEventListener('click', () => {

        pricingTabs.forEach(t => {

          t.classList.remove('active', 'bg-white', 'text-black', 'font-semibold');

          t.classList.add('bg-white/5', 'text-white/70');

        });

        tab.classList.add('active', 'bg-white', 'text-black', 'font-semibold');

        tab.classList.remove('bg-white/5', 'text-white/70');



        const filter = tab.getAttribute('data-filter');

        pricingCards.forEach(card => {

          const cat = card.getAttribute('data-category');

          if (filter === 'all' || cat === filter) {

            card.style.display = 'flex';

            card.style.opacity = '1';

          } else {

            card.style.display = 'none';

            card.style.opacity = '0';

          }

        });

        ScrollTrigger.refresh();

      });

    });



    setTimeout(() => {

      ScrollTrigger.refresh();

    }, 300);

  }



  // 4. MENU TOGGLE & CLICK INTERACTIONS

  function initInteractions() {

    const menuEl = document.getElementById('deedox-menu');

    const menuToggles = document.querySelectorAll('.sh-toggle, #menu-close-btn');

    const menuLinks = document.querySelectorAll('.fantasy-nav-item, .fantasy-sub-item, .menu-nav-item, #deedox-menu a');



    function openMenu() {

      if (!menuEl) return;

      menuEl.classList.remove('pointer-events-none', 'invisible', 'opacity-0');

      menuEl.classList.add('pointer-events-auto', 'visible', 'opacity-100');

      document.body.classList.add('is-menu');

      if (lenis) lenis.stop();



      // Animate Fantasy.co navigation items

      const navItems = menuEl.querySelectorAll('.fantasy-nav-item, .fantasy-sub-links, .fantasy-menu-bottom');

      if (typeof gsap !== 'undefined' && navItems.length) {

        gsap.fromTo(navItems,

          { y: 32, opacity: 0 },

          { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'power3.out', overwrite: 'auto' }

        );

      }

    }



    function closeMenu() {

      if (!menuEl) return;

      menuEl.classList.add('opacity-0', 'pointer-events-none');

      menuEl.classList.remove('opacity-100', 'pointer-events-auto');

      document.body.classList.remove('is-menu');

      if (lenis) lenis.start();

      setTimeout(() => {

        menuEl.classList.add('invisible');

      }, 350);

    }



    // Note: Menu toggles are exclusively and reliably handled by fantasy-menu-controller.js
    // to prevent duplicate click/touch race conditions and instant re-closing.



    menuLinks.forEach(link => {

      link.addEventListener('click', function(e) {

        const href = this.getAttribute('href');

        if (href && href.startsWith('#')) {

          e.preventDefault();

          closeMenu();

          const target = document.querySelector(href);

          if (target && lenis) {

            setTimeout(() => {

              lenis.scrollTo(target, { duration: 1.3, offset: -20 });

            }, 250);

          }

        }

      });

    });



    // General in-page smooth anchor scrolling

    document.querySelectorAll('a[href^="#"]:not(.menu-nav-item)').forEach((anchor) => {

      anchor.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        if (href && href !== '#' && href.length > 1) {

          const target = document.querySelector(href);

          if (target && lenis) {

            e.preventDefault();

            lenis.scrollTo(target, { duration: 1.3, offset: -20 });

          }

        }

      });

    });

  }



  function startEngine() {

    initVideoManager();

    initScrollAnimations();

    initInteractions();

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', startEngine);

  } else {

    startEngine();

  }



  window.addEventListener('load', () => {

    if (typeof ScrollTrigger !== 'undefined') {

      ScrollTrigger.refresh();

    }

  });

})();

