const fs = require('fs');
const html = fs.readFileSync('pricing.html', 'utf8');

function showCard(id) {
  const start = html.indexOf(`id="${id}"`);
  if (start !== -1) {
    console.log(`\n================= CARD ${id} =================`);
    console.log(html.substring(start, start + 1600));
  }
}

showCard('cardStarter');
showCard('cardFlagship');
showCard('cardEnterprise');
