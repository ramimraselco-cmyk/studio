const http = require('http');

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const reqOptions = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname + parsed.search,
      method: options.method || 'GET',
      headers: options.headers || {}
    };

    const req = http.request(reqOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });

    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function run() {
  console.log('=== SYSTEM & SECURITY AUDIT TEST ===\n');

  const pages = [
    '/',
    '/services.html',
    '/about.html',
    '/contact.html',
    '/pricing.html',
    '/work.html',
    '/deedoxahmed7070',
    '/admin'
  ];

  for (const page of pages) {
    try {
      const res = await fetchUrl(`http://localhost:3005${page}`);
      console.log(`[PAGE] ${page.padEnd(20)} -> Status: ${res.status}`);
      if (page === '/admin') {
        if (res.status === 404) {
          console.log('  -> PASS: Obsolete /admin is correctly blocked with HTTP 404.');
        } else {
          console.warn('  -> FAIL: /admin was not blocked!');
        }
      } else if (page === '/deedoxahmed7070') {
        if (res.status === 200 && res.body.includes('deedoxahmed7070')) {
          console.log('  -> PASS: Secure admin portal active at secret endpoint.');
        }
      }
    } catch (err) {
      console.error(`[PAGE] ${page} ERROR:`, err.message);
    }
  }

  console.log('\n=== TESTING CMS API ENDPOINTS ===');
  for (const ep of ['/api/settings', '/api/pricing', '/api/works']) {
    try {
      const res = await fetchUrl(`http://localhost:3005${ep}`);
      console.log(`[API] ${ep.padEnd(16)} -> Status: ${res.status}, Len: ${res.body.length}`);
    } catch (err) {
      console.error(`[API] ${ep} ERROR:`, err.message);
    }
  }

  console.log('\n=== TESTING INQUIRY SUBMISSION & XSS SANITIZATION ===');
  try {
    const maliciousPayload = JSON.stringify({
      name: '<script>alert("xss")</script>Test User',
      email: 'test@deedox.studio',
      brief: '<img src=x onerror=alert(1)>We need a hospital management ERP and SEO website.',
      budget: '$25,000 – $50,000',
      services: 'Website & SEO, Hospital Management'
    });

    const res = await fetchUrl('http://localhost:3005/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(maliciousPayload) },
      body: maliciousPayload
    });

    console.log(`[XSS TEST] POST /api/inquiries -> Status: ${res.status}`);
    const json = JSON.parse(res.body);
    console.log('Response:', json);

    // Verify sanitized entry in data/inquiries.json
    const fs = require('fs');
    const inquiries = JSON.parse(fs.readFileSync('data/inquiries.json', 'utf8'));
    const last = inquiries[inquiries.length - 1];
    console.log('\nStored in database:');
    console.log('Name:', last.name);
    console.log('Brief:', last.brief);

    if (!last.name.includes('<script>') && !last.brief.includes('<img')) {
      console.log('-> PASS: XSS tags were completely sanitized and disarmed!');
    } else {
      console.warn('-> FAIL: XSS tags were not disarmed!');
    }
  } catch (err) {
    console.error('Inquiry test error:', err.message);
  }

  console.log('\n=== AUDIT COMPLETE ===');
}

run();
