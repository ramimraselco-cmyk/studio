const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/i, '<title>DEEDOX | Premier Digital, Software & AI Agency (Bangladesh HQ)</title>');
html = html.replace(/<meta content="Design &amp; innovation partner[^"]*" name="description"\/>/g, '<meta content="Premier Digital, Software &amp; AI Agency based in Bangladesh, serving clients locally &amp; globally. High-converting websites, #1 SEO, custom SaaS, apps &amp; 24/7 automation." name="description"/>');
html = html.replace(/<meta content="DEEDOX \| AI-Native Digital Product Design Agency" property="og:title"\/>/g, '<meta content="DEEDOX | Premier Digital, Software &amp; AI Agency" property="og:title"/>');
html = html.replace(/<meta content="Design &amp; innovation partner[^"]*" property="og:description"\/>/g, '<meta content="Premier Digital, Software &amp; AI Agency based in Bangladesh, serving clients locally &amp; globally. High-converting websites, #1 SEO, custom SaaS, apps &amp; 24/7 automation." property="og:description"/>');
html = html.replace(/<meta content="DEEDOX \| AI-Native Digital Product Design Agency" name="twitter:title"\/>/g, '<meta content="DEEDOX | Premier Digital, Software &amp; AI Agency" name="twitter:title"/>');
html = html.replace(/<meta content="Design &amp; innovation partner[^"]*" name="twitter:description"\/>/g, '<meta content="Premier Digital, Software &amp; AI Agency based in Bangladesh, serving clients locally &amp; globally." name="twitter:description"/>');

// 2. Update Pillar descriptions
html = html.replace(
  'Deploying autonomous AI agents, generative workflows, and custom LLM infrastructure.',
  'Professional website design, 3D interactive platforms, and complete technical SEO to rank #1.'
);
html = html.replace(
  'Architecting high-speed web apps, cloud SaaS platforms, and native mobile applications.',
  'Tailor-made SaaS & management systems (Hospital/Hotel/POS), iOS/Android apps, and desktop software.'
);
html = html.replace(
  'Producing cinematic generative AI ads, performance marketing funnels, and high-retention video assets.',
  'AI video commercials, viral UGC ads, creative editing, and high-ROI Meta & Google media buying.'
);
html = html.replace(
  'Engineered, launched, and scaled with full-stack speed to dominate global digital markets.',
  '24/7 WhatsApp & Messenger sales automation, AI chatbots, and automated CRM sales funnels.'
);

// 3. Update Cream Footer subtext in index.html
html = html.replace(
  /Whether you are engineering a high-growth SaaS platform[\s\S]*?scaling performance marketing—our team is ready\./,
  'Whether you need a high-converting website with #1 SEO, custom hospital or hotel SaaS management systems, mobile apps, AI video commercials, or 24/7 sales automations—our agency is ready.'
);

// 4. Update Hubs in Cream Footer
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
  console.log('[UPDATED] Cream footer hubs updated to Bangladesh Global HQ.');
}

// 5. Update Capabilities list in Cream Footer
const oldCaps = `<ul class="cream-link-list">
          <li><a href="/services.html">Custom Website Design &amp; Built</a></li>
          <li><a href="/services.html">Mobile App Engineering (iOS &amp; Android)</a></li>
          <li><a href="/services.html">SaaS Architecture &amp; Engineering</a></li>
          <li><a href="/services.html">Cinematic AI Commercials</a></li>
          <li><a href="/services.html">Meta Ads &amp; Performance Growth</a></li>
          <li><a href="/services.html">AI Automation &amp; Agent Workflows</a></li>
          <li><a href="/services.html">High-Retention Video Post-Production</a></li>
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

if (html.includes('Custom Website Design &amp; Built')) {
  html = html.replace(oldCaps, newCaps);
  console.log('[UPDATED] Cream footer capabilities updated to 4-tier hierarchy.');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html copywriting and security links.');
