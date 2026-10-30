/**
 * ===================================================================
 * DEEDOX STUDIO — CORE JAVASCRIPT & MOTION ENGINE
 * Reverse-Engineered from DEEDOX.co
 * Stack: Lenis Inertia Scroll, GSAP 3.12, Web Audio API, Canvas WebGL-like Particles
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. INERTIA SMOOTH SCROLLING (LENIS)
  let lenis;
  try {
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.8,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }
    }
  } catch (e) {
    console.warn('Lenis smooth scroll fallback:', e);
  }

  // 2. MAGNETIC INTERACTIVE CURSOR
  const cursor = document.getElementById('custom-cursor');
  const follower = document.getElementById('cursor-follower');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursor) {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    }
  });

  function updateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    if (follower) {
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
    }
    requestAnimationFrame(updateFollower);
  }
  updateFollower();

  // Hover states for cursor
  const interactiveElements = document.querySelectorAll('a, button, [data-magnetic], .choice-pill, .pillar-card');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      if (follower) follower.classList.add('is-hovered');
      playSound('hover');
    });
    el.addEventListener('mouseleave', () => {
      if (follower) {
        follower.classList.remove('is-hovered');
        follower.innerText = '';
      }
    });
  });

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      if (follower) {
        follower.classList.add('is-drag');
        follower.innerText = 'EXPLORE';
      }
      playSound('hover');
    });
    card.addEventListener('mouseleave', () => {
      if (follower) {
        follower.classList.remove('is-drag');
        follower.innerText = '';
      }
    });
  });

  // 3. AMBIENT FLUID CANVAS VISUALIZER
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 42;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? 'rgba(0, 240, 255, 0.45)' : 'rgba(123, 66, 255, 0.35)',
      });
    }

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Distance connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and move particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(renderCanvas);
    }
    renderCanvas();
  }

  // 4. WEB AUDIO SYNTHESIZER FOR AMBIENT SOUND
  let audioCtx = null;
  let audioEnabled = false;
  const audioBtn = document.getElementById('btn-audio');
  const iconOff = document.getElementById('audio-icon-off');
  const iconOn = document.getElementById('audio-icon-on');

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSound(type = 'click') {
    if (!audioEnabled || !audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.08);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      }
    } catch (e) {
      // Audio fallback silent
    }
  }

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      initAudio();
      audioEnabled = !audioEnabled;
      if (iconOff) iconOff.style.display = audioEnabled ? 'none' : 'block';
      if (iconOn) iconOn.style.display = audioEnabled ? 'block' : 'none';
      if (audioEnabled) playSound('success');
    });
  }

  // 5. GSAP SCROLL TRIGGER ANIMATIONS
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Fade and translate header on scroll
    let lastScroll = 0;
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 150 && currentScroll > lastScroll) {
        if (header) header.style.transform = 'translateY(-100%)';
      } else {
        if (header) header.style.transform = 'translateY(0%)';
      }
      lastScroll = currentScroll;
    });

    // Animate Pillars Cards on Scroll
    gsap.from('.pillar-card', {
      scrollTrigger: {
        trigger: '.pillars-grid',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    // Animate Projects on Scroll
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '#projects-container',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.18,
      duration: 1.1,
      ease: 'power3.out',
    });

    // Manifesto Text Lighting Scroll Effect
    const manifestoSpans = document.querySelectorAll('#manifesto-text span');
    manifestoSpans.forEach((span, i) => {
      gsap.to(span, {
        scrollTrigger: {
          trigger: span,
          start: 'top 85%',
          end: 'top 55%',
          scrub: true,
        },
        opacity: 1,
        color: '#ffffff',
        ease: 'none',
      });
    });
  }

  // 6. FULLSCREEN MENU OVERLAY
  const menuOverlay = document.getElementById('menu-overlay');
  const btnMenuOpen = document.getElementById('btn-menu-open');
  const btnMenuClose = document.getElementById('btn-menu-close');
  const menuNavLinks = document.querySelectorAll('.menu-nav-link');

  function openMenu() {
    if (menuOverlay) menuOverlay.classList.add('is-active');
    playSound('click');
  }

  function closeMenu() {
    if (menuOverlay) menuOverlay.classList.remove('is-active');
    playSound('click');
  }

  if (btnMenuOpen) btnMenuOpen.addEventListener('click', openMenu);
  if (btnMenuClose) btnMenuClose.addEventListener('click', closeMenu);

  menuNavLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      closeMenu();
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl && lenis) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -60, duration: 1.4 });
        }
      }
    });
  });

  // 7. PROJECT FILTER SYSTEM
  const filterBtns = document.querySelectorAll('.filter-btn');
  const allCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      playSound('click');

      const filter = btn.getAttribute('data-filter');

      allCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 8. PROJECT MODAL DETAIL VIEWER
  const projectDatabase = {
    'liv-golf': {
      title: 'LIV Golf — Next-Gen Interactive Telemetry',
      tags: ['SportsTech', 'WebGL', 'Radar Telemetry', 'Live Broadcast'],
      img: 'assets/liv-golf.jpg',
      desc: 'Reimagining real-time sports broadcasting through sub-second 3D shot tracing, live radar telemetry feeds, and synchronized interactive fan viewing across mobile, tablet, and spatial devices.',
      features: [
        { num: '01', title: 'Sub-200ms Latency', desc: 'Real-time telemetry streams from TrackMan units directly to millions of concurrent viewers.' },
        { num: '02', title: 'Interactive Course 3D', desc: 'WebGL 3D course elevation topography with contour reading and green slope analysis.' },
        { num: '03', title: 'Personalized Streams', desc: 'Spectators toggle custom camera angles, leaderboard brackets, and player biometric monitors.' }
      ]
    },
    'pulse-ai': {
      title: 'Quantum OS — Autonomous Multi-Agent Core',
      tags: ['Intelligent Systems', 'Enterprise AI', 'Agentic Workflows'],
      img: 'assets/pulse-ai.jpg',
      desc: 'An AI-native operations interface allowing Fortune 50 teams to coordinate, monitor, and deploy hundreds of specialized autonomous LLM agents in real-time with verified consensus verification.',
      features: [
        { num: '01', title: 'Autonomous Consensus', desc: 'Automated cross-agent verification achieving 98.4% decision consensus without human bottlenecks.' },
        { num: '02', title: 'Neural Topology Graph', desc: 'Live visual canvas tracking knowledge retrieval vectors, tool execution, and latency bottlenecks.' },
        { num: '03', title: 'Zero-Trust Sandboxing', desc: 'Isolated sandbox runtimes guaranteeing safe deterministic external tool calls and enterprise compliance.' }
      ]
    },
    'aura-spatial': {
      title: 'Aura Spatial — Mixed Reality Spatial OS',
      tags: ['Spatial Computing', 'VisionOS', 'Volumetric UI'],
      img: 'assets/aura-spatial.jpg',
      desc: 'Pioneering volumetric UI architecture for Apple Vision Pro, translating complex creative and entertainment workflows into translucent, responsive spatial canvases with intuitive eye and pinch gestures.',
      features: [
        { num: '01', title: 'Eye-Tracking Precision', desc: 'Micro-calibrated focus indicators providing tactile visual feedback without cognitive load.' },
        { num: '02', title: 'Dynamic Glass Refraction', desc: 'Physically based volumetric shaders mimicking luxury optical glass reflecting real-world lighting.' },
        { num: '03', title: 'Spatial Audio Anchors', desc: 'Directional 3D acoustic positioning anchored directly to active application windows in physical space.' }
      ]
    },
    'hyperion': {
      title: 'Hyperion — Next-Gen Autonomous Cockpit',
      tags: ['Automotive', 'HMI', 'Telemetry', 'Electric Hypercar'],
      img: 'https://www.datocms-assets.com/157026/1753982207-intelligent-experiences-deedox.jpg',
      desc: 'Curved OLED human-machine interface for luxury autonomous electric hypercars, harmonizing driver telemetry with predictive AI copilots and instantaneous biometric adjustment.',
      features: [
        { num: '01', title: '60 FPS HUD Telemetry', desc: 'Ultra-low latency CAN-bus data visualization rendered with zero frame drop at 200+ mph.' },
        { num: '02', title: 'Predictive Copilot', desc: 'Proactive route optimization, thermal battery staging, and contextual danger awareness.' },
        { num: '03', title: 'Adaptive Luxury Lighting', desc: 'Ambient cabin illumination synchronized to g-force curves and drive dynamics.' }
      ]
    }
  };

  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalTags = document.getElementById('modal-tags');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');

  function openProjectModal(id) {
    const data = projectDatabase[id];
    if (!data || !modal) return;

    if (modalImg) {
      modalImg.src = data.img;
      modalImg.alt = data.title;
    }
    if (modalTitle) modalTitle.innerText = data.title;
    if (modalDesc) modalDesc.innerText = data.desc;

    if (modalTags) {
      modalTags.innerHTML = data.tags
        .map((t) => `<span class="pillar-tag">${t}</span>`)
        .join('');
    }

    if (modalFeatures) {
      modalFeatures.innerHTML = data.features
        .map(
          (f) => `
          <div class="modal-feat-card">
            <div class="modal-feat-num">${f.num}</div>
            <div class="modal-feat-title">${f.title}</div>
            <div class="modal-feat-desc">${f.desc}</div>
          </div>
        `
        )
        .join('');
    }

    modal.classList.add('is-open');
    playSound('click');
    if (lenis) lenis.stop();
  }

  function closeProjectModal() {
    if (modal) modal.classList.remove('is-open');
    playSound('click');
    if (lenis) lenis.start();
  }

  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      if (id) openProjectModal(id);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeProjectModal();
    }
  });

  // 9. INTERACTIVE PROJECT PLANNER FORM
  const disciplinePills = document.querySelectorAll('#discipline-pills .choice-pill');
  const budgetPills = document.querySelectorAll('#budget-pills .choice-pill');
  const form = document.getElementById('project-form');
  const feedback = document.getElementById('form-feedback');

  function setupPillGroup(pills) {
    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('is-selected'));
        pill.classList.add('is-selected');
        playSound('click');
      });
    });
  }

  setupPillGroup(disciplinePills);
  setupPillGroup(budgetPills);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      playSound('success');

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Transmitting...</span>';
      }

      setTimeout(() => {
        if (submitBtn) submitBtn.style.display = 'none';
        if (feedback) feedback.style.display = 'block';
      }, 1000);
    });
  }

  // 10. REAL-TIME WORLD CLOCKS
  function updateWorldClocks() {
    const now = new Date();

    const optionsSF = { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const optionsNY = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const optionsLDN = { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    const clockSF = document.getElementById('clock-sf');
    const clockNY = document.getElementById('clock-ny');
    const clockLDN = document.getElementById('clock-ldn');

    if (clockSF) clockSF.innerText = new Intl.DateTimeFormat([], optionsSF).format(now);
    if (clockNY) clockNY.innerText = new Intl.DateTimeFormat([], optionsNY).format(now);
    if (clockLDN) clockLDN.innerText = new Intl.DateTimeFormat([], optionsLDN).format(now);
  }
  setInterval(updateWorldClocks, 1000);
  updateWorldClocks();

  // 11. BACK TO TOP BUTTON
  const backTopBtn = document.getElementById('btn-back-top');
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      playSound('click');
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  console.log('⚡ DEEDOX Studio interactive engine initialized.');
});
