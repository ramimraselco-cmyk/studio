const fs = require('fs');

const files = ['index.html', 'services.html', 'about.html', 'contact.html', 'pricing.html', 'work.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Replace default message in deedoxWhatsAppPill href if old text exists
  if (content.includes('new%20digital%20product%20project')) {
    content = content.replace(/new%20digital%20product%20project/g, 'our%20project');
    modified = true;
  }

  // Ensure whatsapp-flow.js is included
  if (!content.includes('whatsapp-flow.js')) {
    content = content.replace('</body>', '  <script src="/assets/js/whatsapp-flow.js?v=2.0"></script>\n</body>');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[UPDATED] ${file} connected to whatsapp-flow.js`);
  } else {
    console.log(`[OK] ${file} already updated`);
  }
});
