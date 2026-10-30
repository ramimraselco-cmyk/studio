/**
 * DEEDOX Domain & Brand URL Synchronizer
 * Usage: node scripts/set_domain.js <your-domain.com>
 * Example: node scripts/set_domain.js deedox.agency
 */

const fs = require('fs');
const path = require('path');

const targetDomainInput = process.argv[2];

if (!targetDomainInput) {
  console.log(`
[USAGE] node scripts/set_domain.js <your-domain.com>
Example: node scripts/set_domain.js myagency.com
  `);
  process.exit(1);
}

// Clean input domain
let cleanDomain = targetDomainInput.trim().toLowerCase();
cleanDomain = cleanDomain.replace(/^https?:\/\//i, '');
cleanDomain = cleanDomain.replace(/\/+$/, '');

const fullUrl = `https://${cleanDomain}`;

console.log(`\n======================================================`);
console.log(`Setting website live domain to: ${fullUrl}`);
console.log(`======================================================\n`);

const filesToUpdate = [
  'robots.txt',
  'sitemap.xml',
  'index.html',
  'services.html',
  'work.html',
  'pricing.html',
  'about.html',
  'contact.html',
  'scripts/generate_all_seo.js'
];

let replacedCount = 0;

filesToUpdate.forEach(file => {
  const filePath = path.resolve(__dirname, '..', file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace occurrences of deedox.studio with user domain
  content = content.replace(/https:\/\/deedox\.studio/g, fullUrl);
  content = content.replace(/deedox\.studio/g, cleanDomain);

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    replacedCount++;
    console.log(`[UPDATED] ${file}`);
  } else {
    console.log(`[UNCHANGED] ${file}`);
  }
});

console.log(`\nDomain successfully synchronized across ${replacedCount} files!`);
