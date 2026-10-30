/**
 * sync_directory_indexes.js
 * Syncs the root HTML files to their clean-URL directory index.html copies.
 * e.g., about.html -> about/index.html
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const PAIRS = [
  ['about.html', 'about/index.html'],
  ['contact.html', 'contact/index.html'],
  ['pricing.html', 'pricing/index.html'],
  ['work.html', 'work/index.html'],
  ['work.html', 'portfolio/index.html'],
  ['services.html', 'services/index.html'],
];

for (const [src, dst] of PAIRS) {
  const srcPath = path.join(ROOT, src);
  const dstPath = path.join(ROOT, dst);
  if (!fs.existsSync(srcPath)) {
    console.log(`⚠️  SKIP (source not found): ${src}`);
    continue;
  }
  const dstDir = path.dirname(dstPath);
  if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, { recursive: true });
  fs.copyFileSync(srcPath, dstPath);
  console.log(`✅ Synced: ${src} → ${dst}`);
}

console.log('\nSync complete.');
