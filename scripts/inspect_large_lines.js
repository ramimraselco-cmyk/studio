const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

[1667, 1678, 1683, 1840].forEach(lineIdx => {
  const line = lines[lineIdx];
  console.log(`\n=================== LINE ${lineIdx} (length: ${line.length}) ===================`);
  // Print first 400 chars and last 200 chars
  console.log('START:', line.substring(0, 300));
  console.log('END:', line.substring(line.length - 200));
});
