/**
 * inject_animation_engine.js
 * Adds animation-engine.js to all HTML pages that are missing it.
 * Also ensures lenis.min.js is loaded before animation-engine.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Pages to process (relative to ROOT)
const PAGES = [
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

// Scripts to inject before </body> (if not already present)
const SCRIPTS_TO_INJECT = [
  '<script src="/assets/js/lenis.min.js"></script>',
  '<script src="/assets/js/animation-engine.js?v=20261031_mobile_fix"></script>',
];

let fixed = 0;

for (const rel of PAGES) {
  const filePath = path.join(ROOT, rel);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  SKIP (not found): ${rel}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  let toInject = [];

  // Check which scripts are missing
  for (const scriptTag of SCRIPTS_TO_INJECT) {
    // Extract src value for check
    const srcMatch = scriptTag.match(/src="([^"]+)"/);
    const srcBase = srcMatch ? srcMatch[1].split('?')[0] : null;
    const alreadyPresent = srcBase
      ? html.includes(srcBase)
      : html.includes(scriptTag);

    if (!alreadyPresent) {
      toInject.push(scriptTag);
    }
  }

  if (toInject.length > 0) {
    // Inject before </body>
    const injectBlock = '\n' + toInject.join('\n') + '\n';
    if (html.includes('</body>')) {
      html = html.replace('</body>', injectBlock + '</body>');
      changed = true;
    } else {
      html += injectBlock;
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ FIXED: ${rel} — injected: ${toInject.join(', ')}`);
    fixed++;
  } else {
    console.log(`✔  OK (already has scripts): ${rel}`);
  }
}

console.log(`\nDone. ${fixed} file(s) updated.`);
