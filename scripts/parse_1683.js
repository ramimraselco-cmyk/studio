const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const line1683 = lines[1683];
console.log('=== Line 1683 text elements ===');
const matches = line1683.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>|<p[^>]*>[\s\S]*?<\/p>|<div class=\"[^\"]*body[^\"]*\"[^>]*>[\s\S]*?<\/div>/gi) || [];
matches.forEach((m, i) => {
  const t = m.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (t) console.log(`${i}: ${t}`);
});
console.log('FULL RAW 1683:');
console.log(line1683);
