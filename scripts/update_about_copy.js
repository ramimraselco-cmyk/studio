const fs = require('fs');

let html = fs.readFileSync('about.html', 'utf8');

// Title & Meta
html = html.replace(/<title>.*?<\/title>/i, '<title>About Our Agency | DEEDOX — Premier Digital, Software & AI Agency (Bangladesh HQ)</title>');

// Hero Section
html = html.replace(
  '<span>The AI-Native Design Agency</span>',
  '<span>Premier Digital, Software &amp; AI Agency • Bangladesh HQ</span>'
);
html = html.replace(
  '<h1 class="hero-title">We build digital ecosystems for the autonomous age.</h1>',
  '<h1 class="hero-title">We engineer high-converting digital products, software &amp; AI systems.</h1>'
);
html = html.replace(
  `DEEDOX was founded on a singular conviction: the next decade of digital category kings will not be built by bloated traditional agencies, but by elite product designers and autonomous AI engineers moving at lightspeed.`,
  `DEEDOX is a premier, full-service Digital, Software &amp; AI Agency based in Bangladesh, serving clients locally and globally. We operate as an end-to-end technology and growth partner—delivering custom web engineering, enterprise SaaS systems, mobile apps, desktop software, AI video commercials, and 24/7 sales automations.`
);

// Story Section
html = html.replace(
  'Crafting distinction in a world of algorithmic sameness.',
  'Your complete technology &amp; growth partner from concept to scale.'
);
html = html.replace(
  `As generative models commoditize mediocre software and cookie-cutter designs, true artistic craft and deep systems architecture have become the ultimate competitive advantage.`,
  `In an era where cookie-cutter templates and generic solutions fall short, our agency delivers tailored engineering and high-authority brand distinction. We build custom websites that rank #1 on Google, engineer mission-critical cloud management systems (including Hospital, Hotel, POS and ERP platforms), develop native iOS and Android apps, and build custom desktop software.`
);
html = html.replace(
  `At DEEDOX, we combine cinema-grade visual aesthetics, physics-based inertial interaction engines, and robust cloud architectures with cutting-edge autonomous AI agents. We don't just design interfaces—we engineer living, intelligent platforms that drive exponential revenue.`,
  `Beyond software engineering, our specialized creative and automation teams produce broadcast-quality AI commercials, viral UGC ads, execute high-ROI Meta and Google advertising campaigns, and deploy 24/7 WhatsApp and Messenger sales funnels. We provide reliable, end-to-end support so businesses can scale without technical friction.`
);

// 3 Pillars
html = html.replace(
  '<h3 class="pillar-name">Radical Craftsmanship</h3>',
  '<h3 class="pillar-name">End-to-End Technology Partnership</h3>'
);
html = html.replace(
  `Every cubic centimeter of layout, typography kerning, 60fps micro-interaction, and shader transition is obsessive. If it doesn't evoke wonder, we don't ship it.`,
  `We manage your entire digital lifecycle in-house—from custom website development and technical SEO to SaaS management platforms, mobile apps, and paid advertising campaigns.`
);

html = html.replace(
  '<h3 class="pillar-name">AI-Native Engineering</h3>',
  '<h3 class="pillar-name">Engineering Rigor &amp; AI Innovation</h3>'
);
html = html.replace(
  `We operate multi-agent developer swarms alongside human architects. Tasks that previously took enterprise teams six months are deployed in six weeks.`,
  `We combine state-of-the-art modern software stacks with cutting-edge AI creative pipelines and 24/7 sales automations to deliver enterprise reliability at incredible velocity.`
);

html = html.replace(
  '<h3 class="pillar-name">100% Client Ownership</h3>',
  '<h3 class="pillar-name">100% Client Ownership &amp; Transparency</h3>'
);
html = html.replace(
  `No proprietary lock-in. Full GitHub repository transfer, complete Figma design system source files, and direct developer communication from Day 1.`,
  `Zero proprietary lock-in. Full GitHub code transfer, Figma design files, commercial licensing, clear milestone deliverables, and direct 24/7 WhatsApp hotline support.`
);

// Hubs Section
const oldHubsGrid = `<div class="hub-box">
            <div class="hub-city">San Francisco</div>
            <div class="hub-role">HQ &bull; AI Innovation</div>
            <div class="hub-desc">Product architecture, foundation model research, and executive client partnerships.</div>
          </div>
          <div class="hub-box">
            <div class="hub-city">London</div>
            <div class="hub-role">Brand &bull; Strategy</div>
            <div class="hub-desc">Cinematic brand direction, European enterprise delivery, and spatial computing.</div>
          </div>
          <div class="hub-box">
            <div class="hub-city">Dubai</div>
            <div class="hub-role">Venture &bull; Enterprise</div>
            <div class="hub-desc">Next-generation fintech platforms and high-velocity GCC market expansion.</div>
          </div>
          <div class="hub-box">
            <div class="hub-city">Dhaka</div>
            <div class="hub-role">Engineering &bull; Core</div>
            <div class="hub-desc">High-concurrency full-stack engineering, 24/7 deployment pipelines, and QA automation.</div>
          </div>`;

const newHubsGrid = `<div class="hub-box">
            <div class="hub-city">Dhaka, Bangladesh</div>
            <div class="hub-role">Global Agency HQ &bull; Core Engineering</div>
            <div class="hub-desc">Central engineering headquarters, SaaS architecture, AI labs, and 24/7 client operations.</div>
          </div>
          <div class="hub-box">
            <div class="hub-city">North America Delivery</div>
            <div class="hub-role">US &amp; Canada &bull; Strategic Accounts</div>
            <div class="hub-desc">Timezone-aligned client management, enterprise delivery, and strategic product roadmaps.</div>
          </div>
          <div class="hub-box">
            <div class="hub-city">Europe Delivery</div>
            <div class="hub-role">UK &amp; EU &bull; Technology Partners</div>
            <div class="hub-desc">Corporate platforms, high-converting authority websites, and European enterprise solutions.</div>
          </div>
          <div class="hub-box">
            <div class="hub-city">Middle East &amp; Global</div>
            <div class="hub-role">GCC &amp; Worldwide &bull; Growth Operations</div>
            <div class="hub-desc">Hospital and hotel management ERPs, retail POS solutions, and high-ROI digital media campaigns.</div>
          </div>`;

if (html.includes('San Francisco')) {
  html = html.replace(oldHubsGrid, newHubsGrid);
  console.log('[UPDATED] about.html hubs grid updated.');
}

// Update Cream Footer in about.html
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
  console.log('[UPDATED] about.html cream hubs updated.');
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
  console.log('[UPDATED] about.html capabilities list updated to 4-tier hierarchy.');
}

fs.writeFileSync('about.html', html, 'utf8');
console.log('Successfully updated about.html copywriting.');
