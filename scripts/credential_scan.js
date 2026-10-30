const fs = require('fs');
const path = require('path');

const secretPatterns = [
  /api[_-]?key\s*[:=]\s*['"][a-zA-Z0-9_\-]{16,}['"]/i,
  /secret\s*[:=]\s*['"][a-zA-Z0-9_\-]{16,}['"]/i,
  /private[_-]?key/i,
  /bearer\s+[a-zA-Z0-9_\-\.]{20,}/i,
  /ghp_[a-zA-Z0-9]{20,}/,
  /sk_live_[a-zA-Z0-9]{20,}/,
  /AIza[0-9A-Za-z-_]{35}/
];

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        scanDir(fullPath);
      }
    } else if (/\.(html|js|json)$/i.test(entry.name)) {
      if (entry.name === 'admin_auth.json') continue; // backend storage file
      const content = fs.readFileSync(fullPath, 'utf8');
      secretPatterns.forEach((pat, i) => {
        if (pat.test(content)) {
          console.warn(`[WARN] Potential secret pattern #${i} matched in ${fullPath}`);
        }
      });
    }
  }
}

console.log('Scanning for leaked credentials in client codebase...');
scanDir('.');
console.log('Credential scan completed.');
