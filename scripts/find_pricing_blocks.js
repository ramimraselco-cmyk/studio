const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const titles = [
  'Design Sprint / MVP',
  'Full Product Retainer',
  'Enterprise Innovation Lab',
  'Discipline Breakdown & Sub-Tiers'
];

titles.forEach(t => {
  const idx = html.indexOf(t);
  if (idx !== -1) {
    console.log(`\n=== FOUND "${t}" at pos ${idx} ===`);
    console.log(html.substring(idx - 100, idx + 400).replace(/\n/g, ' '));
  }
});
