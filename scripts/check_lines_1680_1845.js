const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

console.log('--- Lines 1680 to 1840 overview ---');
for (let i = 1680; i <= 1845; i++) {
  if (lines[i]) {
    console.log(`Line ${i} (len: ${lines[i].length}): ${lines[i].substring(0, 120)}`);
  }
}
