const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const lastScripts = html.split('<script');
console.log('Total script tags in pricing.html:', lastScripts.length);

// Print the last 3 scripts
for (let i = Math.max(0, lastScripts.length - 3); i < lastScripts.length; i++) {
  console.log(`\n--- SCRIPT ${i} ---`);
  console.log(lastScripts[i].substring(0, 500));
}
