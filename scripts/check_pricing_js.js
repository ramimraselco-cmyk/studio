const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

const scriptStart = html.indexOf('<script>');
if (scriptStart !== -1) {
  console.log(html.substring(scriptStart, scriptStart + 2500));
}
