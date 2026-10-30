const fs = require('fs');

let html = fs.readFileSync('contact.html', 'utf8');

// Title & Meta
html = html.replace(/<title>.*?<\/title>/i, '<title>Start an Engagement | DEEDOX — Premier Digital, Software & AI Agency</title>');

// Hero Eyebrow & Subtitle
html = html.replace(
  '<span>Start an Engagement</span>',
  '<span>Partner With Our Agency • Bangladesh HQ &amp; Global Delivery</span>'
);
html = html.replace(
  'Whether you have a fully formed RFP or an early-stage concept, our partners review incoming briefs daily and respond with an architectural roadmap within 12 hours.',
  'Whether you need a high-converting website with #1 SEO, a custom hospital or hotel SaaS management platform, a mobile app, AI video commercials, or 24/7 sales automations—our engineering partners review every brief and respond with an actionable proposal within 12 hours.'
);

// Form Chips: Update to 4-tier hierarchy
const oldChips = `<div class="chip-group" id="services-chips">
            <span class="service-chip" data-val="Web Applications">Web Applications</span>
            <span class="service-chip" data-val="SaaS Engineering">SaaS Engineering</span>
            <span class="service-chip" data-val="Autonomous AI Systems">Autonomous AI</span>
            <span class="service-chip" data-val="Cinematic AI Video">Cinematic AI Video</span>
            <span class="service-chip" data-val="Meta Ads Growth">Meta Ads Growth</span>
            <span class="service-chip" data-val="AI Automation">AI Automation</span>
            <span class="service-chip" data-val="Video Post-Production">Video Post-Production</span>
          </div>`;

const newChips = `<div class="chip-group" id="services-chips">
            <span class="service-chip selected" data-val="Website & SEO">1. Professional Website &amp; Technical SEO</span>
            <span class="service-chip" data-val="Custom SaaS & Management Systems">2. Custom SaaS (Hospital / Hotel / POS / ERP)</span>
            <span class="service-chip" data-val="Mobile App Development">3. Mobile App (iOS, Android &amp; Cross-Platform)</span>
            <span class="service-chip" data-val="Desktop Software">4. PC &amp; Desktop Software (Windows / Mac)</span>
            <span class="service-chip" data-val="AI Video & UGC Ads">5. AI Video Commercials &amp; UGC Ads</span>
            <span class="service-chip" data-val="Meta & Google Ads">6. Digital Advertising (Meta &amp; Google Ads)</span>
            <span class="service-chip" data-val="24/7 Sales Automation">7. 24/7 WhatsApp &amp; Messenger Automation</span>
          </div>`;

if (html.includes('id="services-chips"')) {
  html = html.replace(oldChips, newChips);
  console.log('[UPDATED] contact.html chips updated.');
}

// Client-side validation & security hardening in submission script
const oldSubmitHandler = `      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const urlInput = form.querySelector('input[type="url"]');
        const url = urlInput ? urlInput.value.trim() : '';
        const brief = form.querySelector('textarea').value.trim();
        const budget = document.querySelector('.budget-btn.selected')?.textContent?.trim() || 'Flexible Scope';
        const selectedServices = Array.from(document.querySelectorAll('.service-chip.selected')).map(c => c.textContent.trim()).join(', ') || 'Custom Digital Product Engineering';`;

const newSubmitHandler = `      function sanitizeClient(str) {
        if (!str) return '';
        return String(str).replace(/[<>]/g, '').trim();
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const rawName = form.querySelector('input[type="text"]').value.trim();
        const rawEmail = form.querySelector('input[type="email"]').value.trim();
        const urlInput = form.querySelector('input[type="url"]');
        const rawUrl = urlInput ? urlInput.value.trim() : '';
        const rawBrief = form.querySelector('textarea').value.trim();

        // Validation: Required fields and realistic formats
        if (!rawName || rawName.length < 2) {
          alert('Please provide your name (at least 2 characters).');
          return;
        }
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(rawEmail)) {
          alert('Please enter a valid work email address.');
          return;
        }
        if (!rawBrief || rawBrief.length < 8) {
          alert('Please tell us a few details about your project objectives (at least 8 characters).');
          return;
        }

        const name = sanitizeClient(rawName);
        const email = sanitizeClient(rawEmail);
        const url = sanitizeClient(rawUrl);
        const brief = sanitizeClient(rawBrief);
        const budget = sanitizeClient(document.querySelector('.budget-btn.selected')?.textContent?.trim() || 'Flexible Scope');
        const selectedServices = Array.from(document.querySelectorAll('.service-chip.selected')).map(c => sanitizeClient(c.textContent)).join(', ') || 'Website & Software Engineering';`;

if (html.includes("form.addEventListener('submit'")) {
  html = html.replace(oldSubmitHandler, newSubmitHandler);
  console.log('[UPDATED] contact.html form validation & sanitization injected.');
}

// Window.open security hardening
html = html.replace(
  `window.open(waUrl, '_blank');`,
  `const newWin = window.open(waUrl, '_blank', 'noopener,noreferrer'); if (newWin) newWin.opener = null;`
);

// Update Cream Footer in contact.html
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
  console.log('[UPDATED] contact.html cream hubs updated.');
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
  console.log('[UPDATED] contact.html capabilities list updated to 4-tier hierarchy.');
}

fs.writeFileSync('contact.html', html, 'utf8');
console.log('Successfully updated contact.html copywriting and security hardening.');
