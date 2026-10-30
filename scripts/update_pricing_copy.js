const fs = require('fs');

let html = fs.readFileSync('pricing.html', 'utf8');

// Title & Meta
html = html.replace(/<title>.*?<\/title>/i, '<title>Pricing & Packages | DEEDOX — Premier Digital, Software & AI Agency (Bangladesh HQ)</title>');

// Static Card 1
html = html.replace(
  '<h2 class="card-plan-name" id="tierStarterName">Design Sprint / MVP</h2>',
  '<h2 class="card-plan-name" id="tierStarterName">Professional Website &amp; SEO Launch</h2>'
);
html = html.replace(
  'id="tierStarterBadge">Tier 01 &bull; Agile Velocity</span>',
  'id="tierStarterBadge">Primary Focus &bull; Website &amp; SEO</span>'
);
html = html.replace(
  'id="tierStarterDesc">Essential product architecture, interactive prototypes, and production-ready MVP code shipped in 2 weeks. Validates market demand with real users. Full code ownership.</p>',
  'id="tierStarterDesc">Custom-built high-converting website architecture, full on-page &amp; technical SEO setup to rank #1, responsive mobile experience, and speed optimization.</p>'
);

// Static Card 2
html = html.replace(
  '<h2 class="card-plan-name" id="tierFlagshipName">Full Product Retainer</h2>',
  '<h2 class="card-plan-name" id="tierFlagshipName">Custom SaaS, Software &amp; Apps</h2>'
);
html = html.replace(
  'id="tierFlagshipBadge">Most Popular &bull; Liquid Glass</span>',
  'id="tierFlagshipBadge">Most Popular &bull; Software &amp; SaaS</span>'
);
html = html.replace(
  'id="tierFlagshipDesc">Comprehensive end-to-end product design, scalable multi-tenant SaaS engineering, autonomous AI agent pipelines, and continuous deployment for market leaders.</p>',
  'id="tierFlagshipDesc">Bespoke SaaS platform engineering, tailored business management systems (Hospital/Hotel/POS/ERP), cross-platform mobile apps, and dedicated ongoing support.</p>'
);

// Static Card 3
html = html.replace(
  '<h2 class="card-plan-name" id="tierEnterpriseName">Enterprise Innovation Lab</h2>',
  '<h2 class="card-plan-name" id="tierEnterpriseName">Enterprise AI, Media &amp; Automation</h2>'
);
html = html.replace(
  'id="tierEnterpriseBadge">Tier 03 &bull; Enterprise Scale</span>',
  'id="tierEnterpriseBadge">Tier 03 &bull; All-in-One Enterprise</span>'
);
html = html.replace(
  'id="tierEnterpriseDesc">Custom AI models, proprietary multi-agent workflows, bespoke enterprise cloud architecture, dedicated partner squad, white-glove onboarding, and custom SLA.</p>',
  'id="tierEnterpriseDesc">Full-scale agency partnership: custom web &amp; software, AI-generated commercials, high-ROI Meta &amp; Google ads, and 24/7 WhatsApp/Messenger sales automations.</p>'
);

fs.writeFileSync('pricing.html', html, 'utf8');
console.log('Successfully updated pricing.html static cards.');
