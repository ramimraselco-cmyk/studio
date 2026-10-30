const fs = require('fs');

let html = fs.readFileSync('work.html', 'utf8');

// Title & Meta
html = html.replace(/<title>.*?<\/title>/i, '<title>Case Studies & Work | DEEDOX — Premier Digital, Software & AI Agency (Bangladesh HQ)</title>');

// Hero Section
html = html.replace(
  '<span>Selected Works &bull; 2024 &ndash; 2026</span>',
  '<span>Selected Agency Works • Bangladesh HQ &amp; Global Delivery</span>'
);
html = html.replace(
  '<h1 class="hero-title">Engineering Digital Products That Define Categories.</h1>',
  '<h1 class="hero-title">High-Converting Websites, Custom SaaS, Apps &amp; AI Systems.</h1>'
);
html = html.replace(
  `A curated selection of autonomous AI systems, high-growth SaaS applications, immersive web platforms, and viral creative campaigns engineered by DEEDOX for category leaders worldwide.`,
  `A curated portfolio of high-converting websites with #1 SEO, tailor-made hospital, hotel and retail management systems, mobile apps, desktop software, AI commercials, and 24/7 sales automations delivered by our agency.`
);

// Card 1: Hospital Management System
html = html.replace(
  '<span class="project-badge-pill">Autonomous FinTech</span>',
  '<span class="project-badge-pill">Hospital Management ERP</span>'
);
html = html.replace(
  '<div class="project-client">Amper Financial Systems</div>',
  '<div class="project-client">Aura Health Network</div>'
);
html = html.replace(
  '<h2 class="project-title">Autonomous Multi-Agent Asset Management Platform</h2>',
  '<h2 class="project-title">Aura Medical — Cloud Hospital &amp; Clinic Management ERP</h2>'
);
html = html.replace(
  `Engineered an autonomous agentic trading and portfolio risk modeling SaaS that executes real-time risk simulation across 14,000 tickers with sub-millisecond execution latency.`,
  `Tailor-made cloud hospital management system with patient EHR records, automated doctor appointment scheduling, lab report pipelines, and multi-counter pharmacy POS billing.`
);
html = html.replace(
  `<span class="project-tag">Next.js 15</span>
                <span class="project-tag">LangGraph</span>
                <span class="project-tag">FastAPI</span>
                <span class="project-tag">Supabase</span>`,
  `<span class="project-tag">Hospital ERP</span>
                <span class="project-tag">Multi-Branch Cloud</span>
                <span class="project-tag">Doctor &amp; Patient Portal</span>
                <span class="project-tag">HIPAA Compliant</span>`
);

// Card 2: Hotel & Resort Suite
html = html.replace(
  '<span class="project-badge-pill">Spatial Computing</span>',
  '<span class="project-badge-pill">Hotel &amp; Resort ERP</span>'
);
html = html.replace(
  '<div class="project-client">Kinetics Audio Global</div>',
  '<div class="project-client">Zenith Hospitality Group</div>'
);
html = html.replace(
  '<h2 class="project-title">Next-Gen Spatial Audio Controller &amp; Interactive WebGL</h2>',
  '<h2 class="project-title">Zenith Grand — Hotel Booking Engine &amp; Resort ERP Suite</h2>'
);
html = html.replace(
  `Architected an interactive 3D spatial sound customizer and device companion web app with real-time WebGL acoustic room rendering and lossless streaming sync.`,
  `Comprehensive hotel booking engine and guest management system featuring real-time room inventory, restaurant POS dining integration, housekeeping workflows, and automated guest billing.`
);
html = html.replace(
  `<span class="project-tag">Three.js</span>
                <span class="project-tag">WebGL 2</span>
                <span class="project-tag">Rust WASM</span>
                <span class="project-tag">Tailwind</span>`,
  `<span class="project-tag">Hotel Management</span>
                <span class="project-tag">Direct Booking Engine</span>
                <span class="project-tag">Restaurant POS</span>
                <span class="project-tag">24/7 Guest Automation</span>`
);

// Card 3: Custom Website & #1 Technical SEO
html = html.replace(
  '<span class="project-badge-pill">Media &amp; Streaming</span>',
  '<span class="project-badge-pill">Website &amp; Technical SEO</span>'
);
html = html.replace(
  '<div class="project-client">LIV Golf Digital</div>',
  '<div class="project-client">Lumina Luxury Brands</div>'
);
html = html.replace(
  '<h2 class="project-title">Interactive Live Telemetry &amp; 4K Streaming Experience</h2>',
  '<h2 class="project-title">Lumina Flagship — High-Converting Authority Website &amp; #1 SEO</h2>'
);
html = html.replace(
  `Designed and built the next-generation digital spectator interface, featuring concurrent player telemetry tracking, dynamic leaderboard overlays, and sub-second WebSockets.`,
  `Bespoke high-converting authority web platform built with 60fps micro-interactions, complete on-page and technical SEO architecture that ranked #1 on Google for high-intent keywords, driving 420% organic traffic growth.`
);
html = html.replace(
  `<span class="project-tag">Vue 3</span>
                <span class="project-tag">WebSockets</span>
                <span class="project-tag">Cloudflare Workers</span>
                <span class="project-tag">HLS 4K</span>`,
  `<span class="project-tag">Authority Website</span>
                <span class="project-tag">Technical SEO (Rank #1)</span>
                <span class="project-tag">Core Web Vitals 99</span>
                <span class="project-tag">High-Converting UX</span>`
);

// Card 4: Retail Omnichannel POS & Mobile App
html = html.replace(
  '<span class="project-badge-pill">Enterprise Commerce</span>',
  '<span class="project-badge-pill">Mobile App &amp; Retail POS</span>'
);
html = html.replace(
  '<div class="project-client">Kohler International</div>',
  '<div class="project-client">SwiftCart Retailers</div>'
);
html = html.replace(
  '<h2 class="project-title">Brand-Unifying Global E-Commerce &amp; 3D Configurator</h2>',
  '<h2 class="project-title">SwiftCart — Omnichannel POS, iOS/Android App &amp; Shop ERP</h2>'
);
html = html.replace(
  `Created a unified digital flagship experience across 32 international regional storefronts with an immersive 3D spatial product configurator and frictionless 1-click checkout.`,
  `Unified retail management solution combining native iOS and Android mobile shopping apps with desktop Windows/Mac barcode POS, multi-branch inventory tracking, and real-time sales reporting.`
);
html = html.replace(
  `<span class="project-tag">Headless Shopify</span>
                <span class="project-tag">Algolia Instant</span>
                <span class="project-tag">WebGL</span>
                <span class="project-tag">Stripe</span>`,
  `<span class="project-tag">iOS &amp; Android Apps</span>
                <span class="project-tag">Windows/Mac POS</span>
                <span class="project-tag">Real-Time Inventory</span>
                <span class="project-tag">Multi-Store ERP</span>`
);

// Update Cream Footer in work.html
const oldHubs = `<div class="cream-hub-city">San Francisco (HQ)</div>
              <div class="cream-hub-addr">548 Market St, Financial District, CA 94104</div>
            </div>
            <div class="cream-hub-item">
              <div class="cream-hub-city">London</div>
              <div class="cream-hub-addr">100 Bishopsgate, City of London EC2N 4AG</div>
            </div>
            <div class="cream-hub-item">
              <div class="cream-hub-city">Dubai</div>
              <div class="cream-hub-addr">DIFC Gate Precinct 4, Level 5, UAE</div>
            </div>
            <div class="cream-hub-item">
              <div class="cream-hub-city">Singapore &amp; Dhaka</div>
              <div class="cream-hub-addr">Marina Bay Financial Centre &amp; Gulshan Tech Hub</div>`;

const newHubs = `<div class="cream-hub-city">Dhaka, Bangladesh (Global HQ)</div>
              <div class="cream-hub-addr">Gulshan Tech Core • 24/7 Engineering &amp; Client Operations</div>
            </div>
            <div class="cream-hub-item">
              <div class="cream-hub-city">North America Delivery</div>
              <div class="cream-hub-addr">New York &amp; San Francisco • Timezone-Aligned Strategic Support</div>
            </div>
            <div class="cream-hub-item">
              <div class="cream-hub-city">Europe Delivery</div>
              <div class="cream-hub-addr">London &amp; Berlin • Dedicated Enterprise Engineering</div>
            </div>
            <div class="cream-hub-item">
              <div class="cream-hub-city">Middle East Delivery</div>
              <div class="cream-hub-addr">Dubai DIFC &amp; Riyadh • High-Growth Regional Solutions</div>`;

if (html.includes('San Francisco (HQ)')) {
  html = html.replace(oldHubs, newHubs);
  console.log('[UPDATED] work.html cream hubs updated.');
}

const oldCaps = `<ul class="cream-link-list">
            <li><a href="/services.html">High-Performance Web Apps</a></li>
            <li><a href="/services.html">Scalable SaaS Engineering</a></li>
            <li><a href="/services.html">Autonomous AI Systems</a></li>
            <li><a href="/services.html">Cinematic AI Commercials</a></li>
            <li><a href="/services.html">Meta Ads &amp; Growth</a></li>
            <li><a href="/services.html">Enterprise Automation</a></li>
            <li><a href="/services.html">Video Post-Production</a></li>
          </ul>`;

const newCaps = `<ul class="cream-link-list">
            <li><a href="/services.html">1. Professional Website Design &amp; Technical SEO</a></li>
            <li><a href="/services.html">2. Custom SaaS &amp; Management (Hospital/Hotel/POS)</a></li>
            <li><a href="/services.html">3. iOS, Android &amp; Cross-Platform Mobile Apps</a></li>
            <li><a href="/services.html">4. PC &amp; Desktop Software (Windows/Mac)</a></li>
            <li><a href="/services.html">5. AI Video Commercials &amp; UGC Creative Editing</a></li>
            <li><a href="/services.html">6. Digital Advertising (Meta &amp; Google Ads)</a></li>
            <li><a href="/services.html">7. 24/7 WhatsApp &amp; Messenger Sales Automation</a></li>
          </ul>`;

if (html.includes('High-Performance Web Apps')) {
  html = html.replace(oldCaps, newCaps);
  console.log('[UPDATED] work.html capabilities list updated to 4-tier hierarchy.');
}

fs.writeFileSync('work.html', html, 'utf8');
console.log('Successfully updated work.html copywriting.');
