const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
const line1668 = lines[1668];

console.log('Line 1668 total length:', line1668.length);

// Find all text between tags or interesting classes
const sectionMatches = line1668.match(/<section[\s\S]*?<\/section>/g) || [];
console.log('Total sections found:', sectionMatches.length);

sectionMatches.forEach((sec, idx) => {
  const textOnly = sec.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`\n=== SECTION ${idx} (Len: ${sec.length}) ===`);
  console.log(textOnly.substring(0, 300));
});

// Also check footer or other sections outside <section>
const footerMatch = line1668.match(/<footer[\s\S]*?<\/footer>/);
if (footerMatch) {
  const fText = footerMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('\n=== FOOTER ===');
  console.log(fText.substring(0, 500));
}
