const fs = require('fs');

const files = ['index.html', 'services.html', 'about.html', 'contact.html', 'pricing.html', 'work.html', 'deedoxahmed7070.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let count = 0;
  let fixed = 0;

  // Find all <a> tags with target="_blank"
  const updatedContent = content.replace(/<a\b([^>]*?)target=(["'])_blank\2([^>]*?)>/gi, (match, before, quote, after) => {
    count++;
    const fullTag = match;
    // Check if rel is already present
    if (/rel=(["']).*?\1/i.test(fullTag)) {
      // Check if it includes noopener and noreferrer
      if (!/noopener/i.test(fullTag) || !/noreferrer/i.test(fullTag)) {
        fixed++;
        return fullTag.replace(/rel=(["'])(.*?)\1/i, 'rel=$1noopener noreferrer $2$1');
      }
      return fullTag;
    } else {
      fixed++;
      return `<a${before}target="_blank" rel="noopener noreferrer"${after}>`;
    }
  });

  if (fixed > 0) {
    fs.writeFileSync(file, updatedContent, 'utf8');
    console.log(`[FIXED] ${file}: Fixed ${fixed} links with missing rel="noopener noreferrer" (out of ${count} total)`);
  } else {
    console.log(`[OK] ${file}: All ${count} target="_blank" links already have proper rel attribute.`);
  }
});
