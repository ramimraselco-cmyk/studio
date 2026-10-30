const fs = require('fs');

let html = fs.readFileSync('services.html', 'utf8');

// Title & Meta
html = html.replace(/<title>.*?<\/title>/i, '<title>Services & Capabilities | DEEDOX — Premier Digital, Software & AI Agency</title>');

// Hero Section
html = html.replace(
  '<span>AI-Native Engineering &amp; Creative Systems</span>',
  '<span>Full-Service Digital, Software &amp; AI Agency • Bangladesh HQ</span>'
);
html = html.replace(
  'Architected for Velocity. Engineered for Distinction.',
  'End-to-End Technology &amp; Growth Partner for Global Businesses.'
);
html = html.replace(
  'We partner with visionary founders and global enterprises to build market-defining web applications, multi-tenant SaaS platforms, autonomous AI agent pipelines, cinematic commercials, and scalable revenue engines.',
  'Based in Bangladesh and serving visionary companies worldwide, our agency builds high-converting websites with #1 SEO, tailor-made SaaS management systems (Hospital/Hotel/POS), iOS/Android mobile apps, PC software, AI video commercials, and 24/7 sales automations.'
);

// Card 01: Professional Website Design & Technical SEO
html = html.replace(
  '<h2 class="service-name">High-Performance Web Applications</h2>',
  '<h2 class="service-name">Professional Website Design, Development &amp; Technical SEO</h2>'
);
html = html.replace(
  `Bespoke, cinema-grade web platforms designed to captivate and convert. Built with ultra-smooth 60fps micro-interactions, custom WebGL visual shaders, responsive layout perfection across mobile and desktop, and sub-second page loads.`,
  `Custom-built, high-converting websites of all types—including Premium Authority Websites, Interactive/3D Animated Experiences, Corporate Platforms, and E-commerce Stores. Fully integrated with complete on-page, off-page, and technical SEO to rank #1 on Google and drive consistent organic traffic.`
);
html = html.replace(
  `<span class="service-tag">Next.js 15 / React / Vue 3</span>
            <span class="service-tag">Lenis Inertia Physics</span>
            <span class="service-tag">GSAP 3 ScrollTrigger</span>
            <span class="service-tag">Tailwind &amp; Vanilla CSS Tokens</span>
            <span class="service-tag">Mobile Responsive Perfection</span>`,
  `<span class="service-tag">Authority &amp; 3D Interactive Web</span>
            <span class="service-tag">Complete Technical &amp; On-Page SEO (Rank #1)</span>
            <span class="service-tag">High-Converting Corporate &amp; E-Commerce</span>
            <span class="service-tag">Sub-Second 98+ Core Web Vitals</span>
            <span class="service-tag">100% Mobile &amp; Desktop Perfection</span>`
);

// Card 02: Custom SaaS & Enterprise Management Systems
html = html.replace(
  '<h2 class="service-name">Scalable SaaS Architecture &amp; Engineering</h2>',
  '<h2 class="service-name">Custom SaaS &amp; Business Management Systems</h2>'
);
html = html.replace(
  `Full-stack multi-tenant web applications built to scale to millions of monthly active users. Features enterprise-grade authentication, role-based access control, Stripe billing pipelines, real-time analytics, and automated API backends.`,
  `Tailor-made cloud software and management tools engineered for specific operational workflows—including Hospital Management Systems, Hotel Management Systems, Retail POS &amp; Shop Management, ERP platforms, and custom business portals.`
);
html = html.replace(
  `<span class="service-tag">Multi-Tenant Database Design</span>
            <span class="service-tag">Stripe &amp; Paddle Subscriptions</span>
            <span class="service-tag">Supabase / PostgreSQL / Redis</span>
            <span class="service-tag">Automated Testing &amp; CI/CD</span>
            <span class="service-tag">Docker / AWS / Cloudflare</span>`,
  `<span class="service-tag">Hospital Management Systems</span>
            <span class="service-tag">Hotel &amp; Resort Management Suites</span>
            <span class="service-tag">Retail / POS &amp; Inventory Systems</span>
            <span class="service-tag">Custom Enterprise ERP &amp; Client Portals</span>
            <span class="service-tag">Secure Role-Based Access &amp; Billing</span>`
);

// Card 03: Mobile App Development
html = html.replace(
  '<h2 class="service-name">Autonomous AI Systems &amp; Multi-Agent Workflows</h2>',
  '<h2 class="service-name">End-to-End iOS, Android &amp; Cross-Platform Mobile Apps</h2>'
);
html = html.replace(
  `Next-generation autonomous agent clusters and generative AI systems that replace repetitive enterprise workflows. We integrate multi-modal LLM reasoning, real-time vector embeddings, self-correcting agent chains, and custom fine-tuning.`,
  `Native and cross-platform mobile applications engineered for fluid performance, delightful tactile gestures, and effortless conversion. From high-volume E-commerce apps and enterprise employee tools to breakthrough startup applications on the App Store and Google Play.`
);
html = html.replace(
  `<span class="service-tag">LangGraph &amp; AutoGen Swarms</span>
            <span class="service-tag">RAG Vector Pipelines (Pinecone/Qdrant)</span>
            <span class="service-tag">Claude 3.5 &amp; OpenAI GPT-4o</span>
            <span class="service-tag">Custom LoRA Fine-Tuning</span>
            <span class="service-tag">Local Privacy-Preserving LLMs</span>`,
  `<span class="service-tag">iOS (Swift / SwiftUI) &amp; Android (Kotlin)</span>
            <span class="service-tag">React Native &amp; Flutter Cross-Platform</span>
            <span class="service-tag">E-Commerce &amp; Marketplace Mobile Apps</span>
            <span class="service-tag">Real-Time Push Notifications &amp; Offline Sync</span>
            <span class="service-tag">App Store &amp; Play Store Deployment</span>`
);

// Card 04: PC & Desktop Software Engineering
html = html.replace(
  '<h2 class="service-name">Cinematic AI Commercials &amp; Creative Direction</h2>',
  '<h2 class="service-name">Custom PC &amp; Desktop Software (Windows &amp; Mac)</h2>'
);
html = html.replace(
  `Hollywood-caliber product commercials, cinematic 3D reveal teasers, and brand films generated using state-of-the-art diffusion models, custom camera tracking, spatial audio scoring, and broadcast-quality color grading.`,
  `Bespoke desktop software applications built for specialized business tasks, offline productivity, hardware interfacing, and intensive enterprise computation across Windows and macOS environments.`
);
html = html.replace(
  `<span class="service-tag">Runway Gen-3 &amp; Kling Motion</span>
            <span class="service-tag">Midjourney v6 Custom Aesthetic</span>
            <span class="service-tag">Custom Spatial Sound Design</span>
            <span class="service-tag">4K UHD Broadcast Master</span>
            <span class="service-tag">Storyboard &amp; Scripting</span>`,
  `<span class="service-tag">Windows (.NET / C# / Electron) &amp; macOS</span>
            <span class="service-tag">Local Database &amp; Offline-First Sync</span>
            <span class="service-tag">Hardware / Printer / Barcode Interfacing</span>
            <span class="service-tag">High-Performance Native Compute</span>
            <span class="service-tag">Enterprise Installer &amp; Auto-Updates</span>`
);

// Card 05: AI Video, UGC Ads & Creative Editing
html = html.replace(
  '<h2 class="service-name">Meta Ads &amp; Performance Creative Engines</h2>',
  '<h2 class="service-name">AI Video, UGC Ads &amp; Professional Creative Editing</h2>'
);
html = html.replace(
  `High-converting digital ad creative systems designed to lower customer acquisition costs (CAC) and scale ROAS across Facebook, Instagram, TikTok, and YouTube. Includes multivariate hook testing, UGC pipelines, and real-time conversion API integration.`,
  `End-to-end creative production powered by state-of-the-art AI tools and masterclass editing: AI-Generated Commercials, AI Website Promo Videos, high-converting AI UGC Ads, kinetic typography, and broadcast-grade color and audio post-production.`
);
html = html.replace(
  `<span class="service-tag">3-Second Hook Architecture</span>
            <span class="service-tag">Multivariate Creative Angles</span>
            <span class="service-tag">Conversion Rate Optimization</span>
            <span class="service-tag">Meta CAPI &amp; Pixel Setup</span>
            <span class="service-tag">Weekly Creative Refresh</span>`,
  `<span class="service-tag">AI-Generated Commercials &amp; Promos</span>
            <span class="service-tag">High-Converting AI UGC Video Ads</span>
            <span class="service-tag">Professional Video Editing &amp; Motion Graphics</span>
            <span class="service-tag">4K UHD Master Delivery &amp; Storyboarding</span>
            <span class="service-tag">Multi-Platform Aspect Ratios (9:16 &amp; 16:9)</span>`
);

// Card 06: Digital Advertising & Media Buying (Meta & Google Ads)
html = html.replace(
  '<h2 class="service-name">Enterprise AI &amp; Workflow Automation</h2>',
  '<h2 class="service-name">Digital Advertising &amp; Media Buying (Meta &amp; Google Ads)</h2>'
);
html = html.replace(
  `End-to-end operational automation connecting your CRM, lead generation, customer support, and financial pipelines. We design resilient webhook architectures, intelligent triage agents, and self-updating knowledge bases.`,
  `Data-driven, high-ROI paid media campaigns across Meta (Facebook &amp; Instagram Ads) and Google Search / YouTube / Display Ads. We handle the full funnel: strategy, ad creative design, copywriting, audience targeting, conversion tracking, and campaign scaling.`
);
html = html.replace(
  `<span class="service-tag">Make.com / n8n / Zapier Architecture</span>
            <span class="service-tag">HubSpot / Salesforce Integration</span>
            <span class="service-tag">Automated Email Lead Follow-up</span>
            <span class="service-tag">Slack / Discord Bot Controllers</span>
            <span class="service-tag">Error Resilience &amp; Alerts</span>`,
  `<span class="service-tag">Facebook &amp; Instagram Meta Ads Management</span>
            <span class="service-tag">Google Search, YouTube &amp; Display Ads</span>
            <span class="service-tag">Full Ad Creative &amp; Copywriting Production</span>
            <span class="service-tag">Meta CAPI, Pixel &amp; Google Tag Tracking</span>
            <span class="service-tag">Continuous ROAS Optimization &amp; Scaling</span>`
);

// Card 07: 24/7 Business & Sales Automation
html = html.replace(
  '<h2 class="service-name">High-Retention Video Editing &amp; Post-Production</h2>',
  '<h2 class="service-name">24/7 Business &amp; Sales Automation (WhatsApp, Messenger, CRM)</h2>'
);
html = html.replace(
  `Masterclass-level video editing calibrated for maximum retention, algorithmic watch time, and conversion. Includes bespoke motion graphics, dynamic kinetic subtitles, Foley sound design, and pacing engineered for modern digital audiences.`,
  `Complete end-to-end automation infrastructure that runs your sales and lead qualification around the clock: WhatsApp Automation, Facebook Messenger Automation, AI Chatbots, CRM &amp; Sales Funnel Automation, and custom webhook workflows to scale revenue 24/7.`
);
html = html.replace(
  `<span class="service-tag">Kinetic Typography Subtitling</span>
            <span class="service-tag">Algorithm Retention Pacing</span>
            <span class="service-tag">Spatial Foley &amp; SFX Design</span>
            <span class="service-tag">Multi-Platform Aspect Ratios</span>
            <span class="service-tag">Viral Hook Engineering</span>`,
  `<span class="service-tag">WhatsApp Business API Automation</span>
            <span class="service-tag">Facebook Messenger Automated Sales Bots</span>
            <span class="service-tag">AI Chatbots for 24/7 Instant Lead Qualification</span>
            <span class="service-tag">CRM &amp; Sales Funnel Pipeline Integration</span>
            <span class="service-tag">Multi-Channel Webhook &amp; Make/n8n Workflows</span>`
);

// Update Cream Footer in services.html
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
  console.log('[UPDATED] services.html hubs updated to Bangladesh Global HQ.');
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
  console.log('[UPDATED] services.html capabilities list updated to 4-tier hierarchy.');
}

fs.writeFileSync('services.html', html, 'utf8');
console.log('Successfully updated services.html copywriting.');
