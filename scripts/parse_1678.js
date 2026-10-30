const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const line1678 = lines[1678];
console.log('=== Line 1678 text elements ===');
// Search for text in line 1678
const matches = line1678.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>|<p[^>]*>[\s\S]*?<\/p>|<div class=\"[^\"]*body[^\"]*\"[^>]*>[\s\S]*?<\/div>/gi) || [];
matches.forEach((m, i) => {
  const t = m.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (t) console.log(`${i}: ${t}`);
});
