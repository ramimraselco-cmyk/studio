// Standalone, crash-proof Vercel Serverless Handler
// 100% read-only filesystem compatible (no disk writes, no process crashes)

let siteSettings = {};
let pricingData = {};
let worksData = [];

try {
  siteSettings = require('../data/site_settings.json');
} catch (e) {
  siteSettings = { hero: { heading: "Lead by Design", subheading: "DEEDOX Studio" } };
}

try {
  pricingData = require('../data/pricing.json');
} catch (e) {
  pricingData = {};
}

try {
  worksData = require('../data/works.json');
} catch (e) {
  worksData = [];
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve) => {
    let chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      try {
        const buffer = Buffer.concat(chunks);
        resolve(JSON.parse(buffer.toString('utf-8')));
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

module.exports = async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey'
    });
    return res.end();
  }

  try {
    const host = (req.headers && req.headers.host) ? req.headers.host : 'localhost';
    const parsedUrl = new URL(req.url, `https://${host}`);
    const pathname = parsedUrl.pathname;

    // 1. Settings Endpoint
    if (pathname === '/api/settings') {
      return sendJson(res, 200, siteSettings);
    }

    // 2. Pricing Endpoint
    if (pathname === '/api/pricing') {
      return sendJson(res, 200, pricingData);
    }

    // 3. Works / Portfolio Endpoint
    if (pathname === '/api/works' || pathname.startsWith('/api/works')) {
      return sendJson(res, 200, worksData);
    }

    // 4. Contact Form Inquiries
    if (pathname === '/api/inquiries') {
      if (req.method === 'POST') {
        const body = (req.body && typeof req.body === 'object') ? req.body : await parseBody(req);
        
        // Forward lead to Supabase if configured
        const supabaseUrl = process.env.SUPABASE_URL || 'https://ucrcswxdzrfphvkvrpiz.supabase.co';
        const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_bEGfsOvpV_UAxkm3ePafXg_Hs85XhCt';
        
        if (supabaseUrl && supabaseKey) {
          try {
            await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
              method: 'POST',
              headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
              },
              body: JSON.stringify({
                name: body.name || '',
                email: body.email || '',
                budget: body.budget || '',
                services: body.services || '',
                brief: body.brief || '',
                url: body.url || '',
                source: body.source || 'contact_portal',
                created_at: new Date().toISOString()
              })
            }).catch(() => {});
          } catch (e) {
            // Non-fatal
          }
        }
        return sendJson(res, 200, { success: true, message: 'Inquiry received' });
      }
      return sendJson(res, 200, { success: true, inquiries: [] });
    }

    // 5. Health & Status Check
    if (pathname === '/api/status') {
      return sendJson(res, 200, {
        status: 'online',
        service: 'DEEDOX Studio API',
        timestamp: new Date().toISOString()
      });
    }

    // 6. Default Fallback
    return sendJson(res, 200, {
      status: 'active',
      route: pathname,
      message: 'DEEDOX Cloud Edge API is operational'
    });
  } catch (err) {
    console.error('API Error:', err);
    return sendJson(res, 500, {
      error: 'Internal Server Error',
      details: err && err.message ? err.message : String(err)
    });
  }
};
