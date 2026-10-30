/**
 * add_inline_menu_fallbacks.js
 * Injects direct inline onclick="window.toggleDeedoxMenu()" onto all menu toggle buttons,
 * and onclick="window.closeDeedoxMenu()" onto all menu close buttons across all pages.
 * Also changes header z-10 pointer-events-none to z-[9999] pointer-events-auto.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

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

  // 1. Header z-index and pointer-events in index.html
  if (html.includes('header class="sh fixed top-0 left-0 w-full z-10 pointer-events-none')) {
    html = html.replace(
      'header class="sh fixed top-0 left-0 w-full z-10 pointer-events-none',
      'header class="sh fixed top-0 left-0 w-full z-[9999] pointer-events-auto'
    );
    changed = true;
  }

  // 2. Open toggle buttons
  // sh-toggle in index.html
  if (html.includes('class="sh-toggle') && !html.includes('onclick="window.toggleDeedoxMenu')) {
    html = html.replace(
      'class="sh-toggle relative inline-flex items-center justify-center gap-x-12 h-50 body-normal pointer-events-auto" type="button"',
      'class="sh-toggle relative inline-flex items-center justify-center gap-x-12 h-50 body-normal pointer-events-auto" type="button" onclick="window.toggleDeedoxMenu &amp;&amp; window.toggleDeedoxMenu()"'
    );
    changed = true;
  }

  // sh-menu-toggle in other pages
  if (html.includes('class="sh-toggle-btn sh-menu-toggle" type="button"') && !html.includes('onclick="window.toggleDeedoxMenu')) {
    html = html.replace(
      'class="sh-toggle-btn sh-menu-toggle" type="button"',
      'class="sh-toggle-btn sh-menu-toggle" type="button" onclick="window.toggleDeedoxMenu &amp;&amp; window.toggleDeedoxMenu()"'
    );
    changed = true;
  }

  // Subpages menu button
  if (html.includes('class="sh-menu-toggle" type="button"') && !html.includes('onclick="window.toggleDeedoxMenu')) {
    html = html.replace(
      'class="sh-menu-toggle" type="button"',
      'class="sh-menu-toggle" type="button" onclick="window.toggleDeedoxMenu &amp;&amp; window.toggleDeedoxMenu()"'
    );
    changed = true;
  }

  // 3. Close button in menu
  if (html.includes('id="menu-close-btn" type="button"') && !html.includes('onclick="window.closeDeedoxMenu')) {
    html = html.replace(
      'id="menu-close-btn" type="button"',
      'id="menu-close-btn" type="button" onclick="window.closeDeedoxMenu &amp;&amp; window.closeDeedoxMenu()"'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(p, html, 'utf8');
    console.log(`✅ Injected onclick fallbacks: ${rel}`);
  } else {
    console.log(`✔ Already updated: ${rel}`);
  }
});

console.log('\nInline fallbacks complete.');
