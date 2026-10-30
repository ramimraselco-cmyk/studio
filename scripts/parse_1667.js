const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const line1667 = lines[1667];
console.log('=== Line 1667 text elements ===');
const matches = line1667.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>|<p[^>]*>[\s\S]*?<\/p>|<div class=\"[^\"]*body[^\"]*\"[^>]*>[\s\S]*?<\/div>|<div class=\"[^\"]*js-word[^\"]*\"[^>]*>[\s\S]*?<\/div>/gi) || [];
matches.forEach((m, i) => {
  const t = m.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (t) console.log(`${i}: ${t}`);
});
console.log('FULL RAW 1667:');
console.log(line1667);
