/**
 * clean_menu_links_and_subpages.js
 * 1. Converts menu hrefs from .html to clean URLs (/work, /services, /pricing, /about, /contact).
 * 2. Injects deedox-menu markup and controller into service subpages if missing.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const FANTASY_MENU_HTML = `
<!-- DEEDOX FULL-SCREEN LUXURY NAVIGATION MENU -->
<aside id="deedox-menu">
  <div class="fantasy-menu-inner">
    <div class="fantasy-menu-header">
      <a href="/" class="fantasy-menu-logo" aria-label="DEEDOX Home">
        <span class="fantasy-menu-logo-text">DEEDOX</span>
        <span class="fantasy-menu-logo-pill">Studio &bull; AI Native</span>
      </a>
      <button id="menu-close-btn" type="button" aria-label="Close menu">
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6516 12.2801L11.0959 13.8358L6.65531 9.39515L2.11569 13.9348L0.602478 12.4216L5.1421 7.88194L0.687331 3.42717L2.24297 1.87154L6.69774 6.32631L11.2232 1.80083L12.7364 3.31403L8.21095 7.83952L12.6516 12.2801Z" fill="currentColor"/>
        </svg>
      </button>
    </div>

    <div class="fantasy-menu-center">
      <nav class="fantasy-nav-links" aria-label="Main navigation">
        <a href="/" class="fantasy-nav-item">Home</a>
        <a href="/work" class="fantasy-nav-item">Work</a>
        <a href="/services" class="fantasy-nav-item">Services</a>
        <a href="/pricing" class="fantasy-nav-item">Pricing</a>
        <a href="/about" class="fantasy-nav-item">About</a>
      </nav>

      <div class="fantasy-sub-links">
        <a href="/contact" class="fantasy-sub-item">Contact</a>
        <span class="fantasy-sub-dot">&bull;</span>
        <a href="mailto:deedoxteam@gmail.com" class="fantasy-sub-item">deedoxteam@gmail.com</a>
        <span class="fantasy-sub-dot">&bull;</span>
        <a href="tel:+8801817296013" class="fantasy-sub-item">+8801817296013</a>
      </div>
    </div>

    <div class="fantasy-menu-bottom">
      <div class="fantasy-menu-prompt">
        Ready to launch an intelligent digital product? <a href="/contact">Let's talk</a>
      </div>
      <a href="/work" class="fantasy-featured-card">
        <div class="featured-card-info">
          <span class="featured-card-tag">FEATURED CASE</span>
          <span class="featured-card-title">AUTONOMOUS AI SAAS</span>
        </div>
        <div class="featured-card-thumb">
          <video src="https://res.cloudinary.com/c075rrsz/video/upload/v1792666053/fantasy_studio/videos/08_col2_os.mp4" preload="none" loop muted playsinline></video>
        </div>
      </a>
    </div>
  </div>
</aside>
`;

const ALL_PAGES = [
  'index.html',
  'about.html',
  'contact.html',
  'pricing.html',
  'work.html',
  'services.html',
  'services/website-development.html',
  'services/saas-development.html',
  'services/app-development.html',
  'services/ai-automation-chatbots.html',
  'services/ai-video-ads-design.html',
];

ALL_PAGES.forEach(rel => {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, 'utf8');
  let changed = false;

  // 1. Replace menu links to clean URLs inside fantasy-menu
  const menuReplacements = [
    ['href="/work.html"', 'href="/work"'],
    ['href="/services.html"', 'href="/services"'],
    ['href="/pricing.html"', 'href="/pricing"'],
    ['href="/about.html"', 'href="/about"'],
    ['href="/contact.html"', 'href="/contact"'],
  ];
  menuReplacements.forEach(([from, to]) => {
    if (html.includes(from)) {
      html = html.split(from).join(to);
      changed = true;
    }
  });

  // 2. If missing fantasy-menu.css in head, inject it
  if (!html.includes('fantasy-menu.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/assets/css/fantasy-menu.css">\n</head>');
    changed = true;
  }

  // 3. If missing #deedox-menu, inject before </body>
  if (!html.includes('id="deedox-menu"')) {
    html = html.replace('</body>', FANTASY_MENU_HTML + '\n</body>');
    changed = true;
  }

  // 4. If missing fantasy-menu-controller.js, inject before </body>
  if (!html.includes('fantasy-menu-controller.js')) {
    html = html.replace('</body>', '  <script src="/assets/js/fantasy-menu-controller.js"></script>\n</body>');
    changed = true;
  }

  // 5. In service subpages, add menu button into .nav-links if not present
  if (rel.startsWith('services/') && rel !== 'services/index.html') {
    if (!html.includes('sh-menu-toggle')) {
      const target = '<a href="/contact" class="cta-btn">';
      const menuBtn = '<button class="sh-menu-toggle" type="button" aria-label="Open menu" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 999px; padding: 8px 18px; font-size: 0.88rem; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">Menu</button>\n        ';
      if (html.includes(target)) {
        html = html.replace(target, menuBtn + target);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(p, html, 'utf8');
    console.log(`✅ Cleaned & updated: ${rel}`);
  } else {
    console.log(`✔ OK: ${rel}`);
  }
});

console.log('\nAll pages updated.');
