const http = require('http');
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

// Load .env file if available
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envLines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const rawLine of envLines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const eqIdx = line.indexOf('=');
      if (eqIdx !== -1) {
        const key = line.slice(0, eqIdx).trim();
        const val = line.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
        if (key && !process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
} catch (e) {
  // Silent fallback
}

let PORT = parseInt(process.env.PORT, 10) || 3005;
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ==========================================
// Cloudinary Configuration
// ==========================================
const CLOUDINARY_CONFIG = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'c075rrsz',
  api_key: process.env.CLOUDINARY_API_KEY || '365818411267529',
  api_secret: process.env.CLOUDINARY_API_SECRET || '',
  secure: true
};
cloudinary.config(CLOUDINARY_CONFIG);

// ==========================================
// Supabase Configuration
// ==========================================
const SUPABASE_CONFIG = {
  url: process.env.SUPABASE_URL || 'https://ucrcswxdzrfphvkvrpiz.supabase.co',
  secretKey: process.env.SUPABASE_SECRET_KEY || '',
  publishableKey: process.env.SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_bEGfsOvpV_UAxkm3ePafXg_Hs85XhCt'
};

// Supabase REST Helper
async function supabaseRequest(endpoint, method = 'GET', body = null) {
  try {
    const url = `${SUPABASE_CONFIG.url}/rest/v1/${endpoint}`;
    const preferHeader = method === 'POST'
      ? 'resolution=merge-duplicates,return=representation'
      : 'return=representation';

    const headers = {
      'apikey': SUPABASE_CONFIG.secretKey,
      'Authorization': `Bearer ${SUPABASE_CONFIG.secretKey}`,
      'Content-Type': 'application/json',
      'Prefer': preferHeader
    };

    const options = { method, headers };
    if (body) {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);
    if (!res.ok) {
      const errText = await res.text();
      return { ok: false, status: res.status, error: errText };
    }
    const data = await res.json().catch(() => null);
    return { ok: true, data };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

// Local File Data Helpers
function readJsonFile(filename, defaultValue) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), 'utf-8');
    return defaultValue;
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (e) {
    return defaultValue;
  }
}

function writeJsonFile(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Input Sanitization for Security & XSS Prevention
function sanitizeInput(val, maxLen = 1500) {
  if (typeof val !== 'string') return '';
  return val
    .trim()
    .slice(0, maxLen)
    .replace(/<[^>]*>?/gm, '') // Strip all HTML tags
    .replace(/[<>'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c] || c));
}

// MIME Types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8'
};

// Request Parser Helper
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const contentType = req.headers['content-type'] || '';
      if (contentType.includes('application/json')) {
        try {
          resolve(JSON.parse(buffer.toString('utf-8')));
        } catch (e) {
          resolve({});
        }
      } else {
        resolve(buffer);
      }
    });
    req.on('error', reject);
  });
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

// Main Request Handler
async function handleRequest(req, res) {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey'
    });
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // ==========================================
  // API ROUTING
  // ==========================================

  // Admin Login Authentication
  if (pathname === '/api/admin/login' && req.method === 'POST') {
    const body = await parseBody(req);
    const authConfig = readJsonFile('admin_auth.json', {
      username: 'deedoxahmed',
      password: 'deedoxahmed7070'
    });

    const inputUser = (body.username || '').trim();
    const inputPass = (body.password || '').trim();

    const isValidUser = (inputUser === authConfig.username || inputUser === 'deedoxahmed' || inputUser === 'admin');
    const isValidPass = (inputPass === authConfig.password);

    if (isValidUser && isValidPass) {
      const token = 'deedox_auth_' + Buffer.from(`${authConfig.username}:${Date.now()}`).toString('base64');
      return sendJson(res, 200, {
        success: true,
        message: 'Login successful',
        token,
        username: authConfig.username
      });
    } else {
      return sendJson(res, 401, {
        success: false,
        message: 'Invalid User ID or Password! Please check your credentials.'
      });
    }
  }

  // Update Admin Credentials
  if (pathname === '/api/admin/update-credentials' && req.method === 'POST') {
    const body = await parseBody(req);
    if (!body.username || !body.password) {
      return sendJson(res, 400, { success: false, message: 'Username and password required' });
    }
    const newAuth = {
      username: body.username.trim(),
      password: body.password.trim()
    };
    writeJsonFile('admin_auth.json', newAuth);
    return sendJson(res, 200, { success: true, message: 'Credentials updated successfully', data: { username: newAuth.username } });
  }

  // 1. Status & Health
  if (pathname === '/api/status' && req.method === 'GET') {
    const sbCheck = await supabaseRequest('site_settings?select=key&limit=1');
    const worksData = readJsonFile('works.json', []);
    const settingsData = readJsonFile('site_settings.json', {});
    return sendJson(res, 200, {
      status: 'online',
      cloudinary: {
        connected: true,
        cloud_name: CLOUDINARY_CONFIG.cloud_name
      },
      supabase: {
        connected: sbCheck.ok,
        url: SUPABASE_CONFIG.url,
        has_tables: sbCheck.ok,
        message: sbCheck.ok ? 'Connected & tables ready' : 'Connected to project (run supabase_schema.sql in dashboard)'
      },
      stats: {
        works_count: worksData.length,
        has_settings: Object.keys(settingsData).length > 0
      }
    });
  }

  // 2. Site Settings (GET)
  if (pathname === '/api/settings' && req.method === 'GET') {
    // Try Supabase first
    const sb = await supabaseRequest('site_settings?key=eq.global');
    if (sb.ok && sb.data && sb.data.length > 0) {
      return sendJson(res, 200, sb.data[0].value);
    }
    // Fallback to local
    const local = readJsonFile('site_settings.json', {});
    return sendJson(res, 200, local);
  }

  // 3. Site Settings (POST / Save)
  if (pathname === '/api/settings' && req.method === 'POST') {
    const body = await parseBody(req);
    // Write local
    writeJsonFile('site_settings.json', body);
    // Sync to Supabase
    const sb = await supabaseRequest('site_settings', 'POST', {
      key: 'global',
      value: body,
      updated_at: new Date().toISOString()
    });
    return sendJson(res, 200, {
      success: true,
      message: 'Settings saved successfully',
      supabase_synced: sb.ok,
      data: body
    });
  }

  // 3b. Pricing Matrix (GET)
  if (pathname === '/api/pricing' && req.method === 'GET') {
    const sb = await supabaseRequest('site_settings?key=eq.pricing_matrix');
    if (sb.ok && sb.data && sb.data.length > 0 && sb.data[0].value) {
      return sendJson(res, 200, sb.data[0].value);
    }
    const local = readJsonFile('pricing.json', {});
    return sendJson(res, 200, local);
  }

  // 3c. Pricing Matrix (POST / Save)
  if (pathname === '/api/pricing' && req.method === 'POST') {
    const body = await parseBody(req);
    writeJsonFile('pricing.json', body);
    const sb = await supabaseRequest('site_settings', 'POST', {
      key: 'pricing_matrix',
      value: body,
      updated_at: new Date().toISOString()
    });
    return sendJson(res, 200, {
      success: true,
      message: 'Pricing matrix saved successfully',
      supabase_synced: sb.ok,
      data: body
    });
  }

  // 3d. Project Inquiries & Form Leads (GET & POST)
  if (pathname === '/api/inquiries' && req.method === 'GET') {
    const inquiries = readJsonFile('inquiries.json', []);
    return sendJson(res, 200, inquiries);
  }

  if (pathname === '/api/inquiries' && req.method === 'POST') {
    const body = await parseBody(req);
    const name = sanitizeInput(body.name || '', 120);
    const email = sanitizeInput(body.email || '', 160);
    const url = sanitizeInput(body.url || '', 250);
    const budget = sanitizeInput(body.budget || '', 100);
    const services = sanitizeInput(body.services || '', 300);
    const brief = sanitizeInput(body.brief || '', 3000);

    if (!name || !email) {
      return sendJson(res, 400, { success: false, message: 'Name and email are required fields.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return sendJson(res, 400, { success: false, message: 'Please provide a valid email address.' });
    }

    const inquiryRecord = {
      id: 'inq-' + Date.now(),
      created_at: new Date().toISOString(),
      name,
      email,
      url,
      budget,
      services,
      brief,
      source: sanitizeInput(body.source || 'web_form', 50)
    };
    let inquiries = readJsonFile('inquiries.json', []);
    inquiries.unshift(inquiryRecord);
    if (inquiries.length > 500) inquiries = inquiries.slice(0, 500);
    writeJsonFile('inquiries.json', inquiries);

    // Sync to Supabase inquiries table if exists
    supabaseRequest('inquiries', 'POST', inquiryRecord).catch(() => {});

    console.log(`[Inquiry] Validated discovery brief received from ${inquiryRecord.name} (${inquiryRecord.email})`);
    return sendJson(res, 200, {
      success: true,
      message: 'Inquiry registered successfully',
      id: inquiryRecord.id
    });
  }

  // 4. Works / Projects (GET)
  if (pathname === '/api/works' && req.method === 'GET') {
    const sb = await supabaseRequest('works?select=*&order=sort_order.asc');
    if (sb.ok && sb.data && sb.data.length > 0) {
      return sendJson(res, 200, sb.data);
    }
    const localWorks = readJsonFile('works.json', []);
    return sendJson(res, 200, localWorks);
  }

  // 5. Works / Projects (POST / Create or Update)
  if (pathname === '/api/works' && req.method === 'POST') {
    const item = await parseBody(req);
    if (!item.title) {
      return sendJson(res, 400, { error: 'Work title is required' });
    }
    if (!item.id) {
      item.id = 'work-' + Date.now();
      item.created_at = new Date().toISOString();
    }
    item.updated_at = new Date().toISOString();

    // Update local works
    let works = readJsonFile('works.json', []);
    const existingIndex = works.findIndex(w => w.id === item.id);
    if (existingIndex >= 0) {
      works[existingIndex] = { ...works[existingIndex], ...item };
    } else {
      works.push(item);
    }
    writeJsonFile('works.json', works);

    // Sync to Supabase
    const sb = await supabaseRequest('works', 'POST', item);

    return sendJson(res, 200, {
      success: true,
      work: item,
      supabase_synced: sb.ok
    });
  }

  // 6. Works / Projects (DELETE)
  if (pathname.startsWith('/api/works/') && req.method === 'DELETE') {
    const id = pathname.replace('/api/works/', '');
    let works = readJsonFile('works.json', []);
    works = works.filter(w => w.id !== id);
    writeJsonFile('works.json', works);

    // Supabase delete
    const sb = await supabaseRequest(`works?id=eq.${encodeURIComponent(id)}`, 'DELETE');

    return sendJson(res, 200, {
      success: true,
      deleted_id: id,
      supabase_synced: sb.ok
    });
  }

  // 7. Media Library (GET - All videos from Supabase + Local)
  if (pathname === '/api/media' && req.method === 'GET') {
    // Try Supabase first
    const sb = await supabaseRequest('media_library?select=*&order=created_at.desc');
    if (sb.ok && sb.data && sb.data.length > 0) {
      return sendJson(res, 200, {
        source: 'supabase',
        media: sb.data
      });
    }

    // Fallback local
    const catalogPath = path.join(ROOT_DIR, 'cloudinary_videos.json');
    let catalog = {};
    if (fs.existsSync(catalogPath)) {
      try {
        catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
      } catch (e) {}
    }
    const extraMedia = readJsonFile('extra_media.json', []);
    const items = [];
    Object.keys(catalog).forEach(k => {
      items.push({
        id: 'media-' + k.replace('.mp4', ''),
        name: k,
        public_id: catalog[k].public_id,
        secure_url: catalog[k].secure_url,
        optimized_url: catalog[k].optimized_url,
        format: catalog[k].format || 'mp4',
        bytes: catalog[k].bytes,
        duration: catalog[k].duration,
        created_at: new Date().toISOString()
      });
    });
    return sendJson(res, 200, {
      source: 'local',
      media: [...extraMedia, ...items]
    });
  }

  // 7b. Add or Update Video Manually in Media Hub (POST /api/media)
  if (pathname === '/api/media' && req.method === 'POST') {
    const item = await parseBody(req);
    if (!item.name || (!item.secure_url && !item.optimized_url)) {
      return sendJson(res, 400, { error: 'Video name and URL are required' });
    }
    if (!item.id) {
      item.id = 'media-' + Date.now();
      item.created_at = new Date().toISOString();
    }
    if (!item.optimized_url && item.secure_url) {
      item.optimized_url = item.secure_url.includes('/upload/') 
        ? item.secure_url.replace('/upload/', '/upload/f_auto,q_auto/') 
        : item.secure_url;
    }
    if (!item.secure_url && item.optimized_url) {
      item.secure_url = item.optimized_url;
    }

    // Local save
    let extra = readJsonFile('extra_media.json', []);
    const idx = extra.findIndex(m => m.id === item.id);
    if (idx >= 0) {
      extra[idx] = { ...extra[idx], ...item };
    } else {
      extra.unshift(item);
    }
    writeJsonFile('extra_media.json', extra);

    // Supabase upsert
    const sb = await supabaseRequest('media_library', 'POST', item);

    return sendJson(res, 200, {
      success: true,
      media: item,
      supabase_synced: sb.ok
    });
  }

  // 7c. Edit Video Metadata (PUT /api/media/:id)
  if (pathname.startsWith('/api/media/') && req.method === 'PUT') {
    const id = pathname.replace('/api/media/', '');
    const updates = await parseBody(req);

    // Update in local extra_media
    let extra = readJsonFile('extra_media.json', []);
    const idx = extra.findIndex(m => m.id === id);
    if (idx >= 0) {
      extra[idx] = { ...extra[idx], ...updates };
      writeJsonFile('extra_media.json', extra);
    }

    // Update in Supabase
    const sb = await supabaseRequest(`media_library?id=eq.${encodeURIComponent(id)}`, 'PATCH', updates);

    return sendJson(res, 200, {
      success: true,
      id,
      updates,
      supabase_synced: sb.ok
    });
  }

  // 7d. Delete Video from Media Hub & Cloudinary CDN (DELETE /api/media/:id)
  if (pathname.startsWith('/api/media/') && req.method === 'DELETE') {
    const id = pathname.replace('/api/media/', '');
    const urlParams = parsedUrl.searchParams;
    const publicId = urlParams.get('public_id');

    // 1. Delete from Cloudinary CDN if public_id provided
    let cloudDeleted = false;
    if (publicId) {
      try {
        console.log(`[Cloudinary] Deleting video ${publicId}...`);
        await cloudinary.uploader.destroy(publicId, { resource_type: 'video' });
        cloudDeleted = true;
      } catch (err) {
        console.warn(`[Cloudinary] Failed to delete video: ${err.message}`);
      }
    }

    // 2. Delete from local extra_media.json
    let extra = readJsonFile('extra_media.json', []);
    extra = extra.filter(m => m.id !== id);
    writeJsonFile('extra_media.json', extra);

    // 3. Delete from local cloudinary_videos.json if matching
    const catalogPath = path.join(ROOT_DIR, 'cloudinary_videos.json');
    if (fs.existsSync(catalogPath)) {
      try {
        let catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
        let changed = false;
        for (const [k, v] of Object.entries(catalog)) {
          if ('media-' + k.replace('.mp4', '') === id || v.public_id === publicId) {
            delete catalog[k];
            changed = true;
          }
        }
        if (changed) {
          fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf-8');
        }
      } catch (e) {}
    }

    // 4. Delete from Supabase media_library
    const sb = await supabaseRequest(`media_library?id=eq.${encodeURIComponent(id)}`, 'DELETE');

    return sendJson(res, 200, {
      success: true,
      deleted_id: id,
      cloudinary_deleted: cloudDeleted,
      supabase_synced: sb.ok
    });
  }

  // 8. Upload Video / File Direct to Cloudinary (POST)
  if (pathname === '/api/upload-video' && req.method === 'POST') {
    try {
      const buffer = await parseBody(req);
      const filename = req.headers['x-file-name'] ? decodeURIComponent(req.headers['x-file-name']) : `upload_${Date.now()}.mp4`;
      const cleanName = path.parse(filename).name.replace(/[^a-zA-Z0-9_-]/g, '_');
      const publicId = `fantasy_studio/user_uploads/${Date.now()}_${cleanName}`;

      console.log(`[Upload] Processing video upload: ${cleanName} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)...`);

      // Upload stream to Cloudinary
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'video',
            public_id: publicId,
            chunk_size: 6000000,
            overwrite: true
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        stream.end(buffer);
      });

      const rawUrl = uploadResult.secure_url;
      // Preserve pristine Full-HD 1080p resolution and avoid aggressive q_auto compression blur
      const optimizedUrl = rawUrl;

      const mediaRecord = {
        id: 'media-' + Date.now(),
        name: filename,
        public_id: uploadResult.public_id,
        secure_url: rawUrl,
        optimized_url: optimizedUrl,
        format: uploadResult.format,
        bytes: uploadResult.bytes,
        duration: uploadResult.duration,
        created_at: new Date().toISOString()
      };

      // Save to local extra media
      let extra = readJsonFile('extra_media.json', []);
      extra.unshift(mediaRecord);
      writeJsonFile('extra_media.json', extra);

      // Save to Supabase media_library
      await supabaseRequest('media_library', 'POST', mediaRecord);

      console.log(`[Upload] Success! ${optimizedUrl}`);
      return sendJson(res, 200, {
        success: true,
        media: mediaRecord
      });
    } catch (err) {
      console.error('[Upload] Error:', err);
      return sendJson(res, 500, {
        error: 'Upload to Cloudinary failed: ' + err.message
      });
    }
  }

  // 9. Pages Content (GET & POST)
  if (pathname === '/api/pages-content' && req.method === 'GET') {
    const content = readJsonFile('pages_content.json', {
      hero_title: 'Lead by Design',
      hero_subtitle: 'We design category-defining AI products, mobile platforms, and immersive spatial computing experiences.',
      ai_heading: 'AI Transformation at Scale',
      ai_body: 'Deploying autonomous design agents and high-performance digital systems.'
    });
    return sendJson(res, 200, content);
  }

  if (pathname === '/api/pages-content' && req.method === 'POST') {
    const body = await parseBody(req);
    writeJsonFile('pages_content.json', body);
    supabaseRequest('pages_content', 'POST', {
      page_id: 'global_pages',
      data: body,
      updated_at: new Date().toISOString()
    }).catch(() => {});
    return sendJson(res, 200, { success: true, data: body });
  }

  // ==========================================
  // STATIC FILE SERVING
  // ==========================================
  // Block deprecated or insecure /admin URLs
  if (pathname === '/admin' || pathname === '/admin/' || pathname === '/admin.html') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('404 Not Found');
  }

  let filePath = pathname;
  if (filePath === '/' || filePath === '') {
    filePath = '/index.html';
  } else if (filePath === '/deedoxahmed7070' || filePath === '/deedoxahmed7070/') {
    filePath = '/deedoxahmed7070.html';
  } else {
    const cleanRoutes = {
      '/work': '/work.html',
      '/portfolio': '/work.html',
      '/services': '/services.html',
      '/services/website-development': '/services/website-development.html',
      '/services/saas-development': '/services/saas-development.html',
      '/services/app-development': '/services/app-development.html',
      '/services/ai-automation-chatbots': '/services/ai-automation-chatbots.html',
      '/services/ai-video-ads-design': '/services/ai-video-ads-design.html',
      '/pricing': '/pricing.html',
      '/about': '/about.html',
      '/contact': '/contact.html'
    };
    const trimmed = filePath.replace(/\/+$/, '');
    if (cleanRoutes[trimmed]) {
      filePath = cleanRoutes[trimmed];
    }
  }

  // Safe file resolve
  const safePath = path.normalize(path.join(ROOT_DIR, filePath));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    return res.end('Access Denied');
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 Not Found');
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Video byte-range streaming support
    if (ext === '.mp4' || ext === '.webm') {
      const range = req.headers.range;
      const fileSize = stats.size;

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(safePath, { start, end });
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType
        });
        file.pipe(res);
      } else {
        res.writeHead(200, {
          'Content-Length': fileSize,
          'Content-Type': contentType,
          'Accept-Ranges': 'bytes'
        });
        fs.createReadStream(safePath).pipe(res);
      }
      return;
    }

    // Standard file response with strict anti-cache headers so edits load instantly
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store'
    });
    fs.createReadStream(safePath).pipe(res);
  });
}

const server = http.createServer(handleRequest);

function startServer(portToTry) {
  server.listen(portToTry, '0.0.0.0', () => {
    PORT = portToTry;
    console.log(`=================================================`);
    console.log(`🚀 Fantasy Studio / DEEDOX Server with CMS & CDN`);
    console.log(`📡 Website:  http://localhost:${PORT}`);
    console.log(`🎛️  Dashboard: http://localhost:${PORT}/deedoxahmed7070`);
    console.log(`☁️  Cloudinary: Configured (Cloud: ${CLOUDINARY_CONFIG.cloud_name})`);
    console.log(`⚡ Supabase:   Configured (Project: ucrcswxdzrfphvkvrpiz)`);
    console.log(`=================================================`);
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`⚠️ Port ${PORT} in use, trying port ${PORT + 1}...`);
    PORT = PORT + 1;
    startServer(PORT);
  } else {
    console.error('Server error:', err);
  }
});

if (require.main === module) {
  startServer(PORT);
}

module.exports = handleRequest;
module.exports.server = server;
