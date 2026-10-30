const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

// Search for headings or tier names
const headings = html.match(/<h[1-3][^>]*>[\s\S]*?<\/h[1-3]>/gi) || [];
console.log('Headings in pricing.html:');
headings.forEach((h, i) => {
  console.log(`${i}: ${h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`);
});

// Search for Cream footer in pricing.html
console.log('Includes cream-hub-city:', html.includes('cream-hub-city'));
console.log('Includes San Francisco:', html.includes('San Francisco'));
