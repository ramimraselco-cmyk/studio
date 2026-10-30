const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, idx) => {
  if (l.length > 500) {
    console.log(`Line ${idx}: length ${l.length}`);
  }
});
