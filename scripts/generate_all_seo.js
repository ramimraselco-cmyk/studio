const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://deedoxstudio.com';
const OG_IMAGE = 'https://res.cloudinary.com/c075rrsz/video/upload/so_2.5,f_jpg,q_auto,w_1200,h_630,c_fill,g_center/v1792567785/fantasy_studio/videos/01_hero_desktop.jpg';

const PAGES = [
  {
    file: 'index.html',
    slug: '/',
    title: 'DEEDOX | Premier Digital, Software & AI Agency (Bangladesh HQ & Global)',
    description: 'DEEDOX is a premier full-service Digital, Software & AI agency based in Bangladesh, scaling clients globally. We engineer high-converting websites, rank #1 with SEO, build custom SaaS & ERPs, mobile apps, and deploy 24/7 AI sales automations.',
    keywords: 'digital agency bangladesh, software development dhaka, web development agency, technical seo bangladesh, custom saas development, mobile app development dhaka, ai video commercials, full service digital agency, deedox, deedox studio',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${DOMAIN}/#organization`,
        "name": "DEEDOX",
        "legalName": "DEEDOX Studio",
        "url": DOMAIN,
        "logo": `${DOMAIN}/favicon.svg`,
        "image": OG_IMAGE,
        "description": "Premier full-service Digital, Software & AI Agency based in Bangladesh, scaling clients globally with custom web apps, mobile apps, SaaS, and AI automations.",
        "email": "deedoxteam@gmail.com",
        "telephone": "+8801817296013",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dhaka",
          "addressLocality": "Dhaka",
          "addressRegion": "Dhaka",
          "postalCode": "1200",
          "addressCountry": "BD"
        },
        "sameAs": [
          "https://github.com",
          "https://linkedin.com",
          "https://twitter.com"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        "url": DOMAIN,
        "name": "DEEDOX Studio",
        "publisher": { "@id": `${DOMAIN}/#organization` },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${DOMAIN}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${DOMAIN}/#service`,
        "name": "DEEDOX Digital, Software & AI Agency",
        "image": OG_IMAGE,
        "url": DOMAIN,
        "telephone": "+8801817296013",
        "email": "deedoxteam@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dhaka",
          "addressLocality": "Dhaka",
          "addressRegion": "Dhaka",
          "postalCode": "1200",
          "addressCountry": "BD"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.8103,
          "longitude": 90.4125
        },
        "areaServed": [
          { "@type": "Country", "name": "Bangladesh" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Global" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "22:00"
          }
        ]
      }
    ]
  },
  {
    file: 'services.html',
    slug: '/services',
    title: 'Services & Capabilities | DEEDOX — Full-Service Digital & AI Agency',
    description: 'Explore DEEDOX capabilities: High-converting Web Development, Technical SEO, Custom SaaS & Management Systems (Hospital/Hotel/ERP), Mobile Apps (iOS & Android), AI Commercials, and 24/7 Sales Automations.',
    keywords: 'web development services, custom saas engineering, enterprise erp systems, mobile app development, technical seo agency, ai automation services, commercial video production',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Services & Capabilities", "item": `${DOMAIN}/services` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": { "@id": `${DOMAIN}/#organization` },
        "serviceType": "Digital & Software Engineering",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "DEEDOX Core Agency Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Website & Technical SEO" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom SaaS & Management Systems (Hospital, Hotel, ERP)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development (iOS & Android)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PC & Desktop Software Engineering" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cinematic AI Video Commercials & UGC Ads" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Advertising (Meta & Google Ads)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Sales & Customer Support Automation" } }
          ]
        }
      }
    ]
  },
  {
    file: 'work.html',
    slug: '/work',
    title: 'Selected Works & Case Studies | DEEDOX Digital Studio',
    description: 'Explore client case studies, digital platforms, and software engineered by DEEDOX for global leaders across AI, SaaS, FinTech, E-Commerce, and Media.',
    keywords: 'digital agency portfolio, client case studies, saas platform design, high performance web apps, fintech ui ux, deedox work',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Selected Works", "item": `${DOMAIN}/work` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "DEEDOX Case Studies & Portfolio",
        "description": "Featured enterprise client case studies engineered by DEEDOX.",
        "url": `${DOMAIN}/work`
      }
    ]
  },
  {
    file: 'pricing.html',
    slug: '/pricing',
    title: 'Pricing & Packages | DEEDOX — Transparent Agency Pricing Matrix',
    description: 'Transparent, category-defining agency packages for Websites, SEO, Mobile Apps, Custom SaaS Management Systems, AI Commercials, and Monthly Retainers. View real-time pricing.',
    keywords: 'website design pricing, saas development cost bangladesh, mobile app development pricing, seo agency retainer cost, software agency rates, deedox pricing',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Pricing Matrix", "item": `${DOMAIN}/pricing` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in the DEEDOX website development package?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every DEEDOX website includes custom bespoke UI/UX, responsive mobile design, technical SEO architecture, high-speed performance optimization, SSL security, and CMS integration."
            }
          },
          {
            "@type": "Question",
            "name": "How does DEEDOX handle SaaS and custom management software development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build scalable, cloud-native applications tailored for hospitals, hotels, schools, POS, and ERPs with role-based access control, secure databases, automated backups, and API integrations."
            }
          },
          {
            "@type": "Question",
            "name": "What payment milestones does DEEDOX offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We typically operate on milestone-based structures: 40% initial deposit upon architecture sign-off, 30% upon staging review, and 30% upon final production deployment."
            }
          }
        ]
      }
    ]
  },
  {
    file: 'about.html',
    slug: '/about',
    title: 'About Our Agency & Philosophy | DEEDOX Digital Studio',
    description: 'Learn about DEEDOX, the AI-native software and digital product agency. Based in Dhaka, Bangladesh, we partner with ambitious founders to engineer market-defining platforms.',
    keywords: 'about deedox, bangladesh software agency, ai native agency, digital product design studio, tech founders partner',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "About Agency", "item": `${DOMAIN}/about` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About DEEDOX Agency",
        "description": "Learn about DEEDOX, the AI-native digital product and software engineering agency.",
        "url": `${DOMAIN}/about`,
        "mainEntity": { "@id": `${DOMAIN}/#organization` }
      }
    ]
  },
  {
    file: 'contact.html',
    slug: '/contact',
    title: 'Start an Engagement & Consultation | DEEDOX Studio',
    description: 'Initiate a partnership with DEEDOX. Submit your project brief for Web Applications, Custom SaaS, Mobile Apps, SEO, or AI Growth Systems. Guaranteed 12-hour response.',
    keywords: 'contact software agency, hire web developers bangladesh, project consultation, deedox contact, request proposal',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Contact & Discovery", "item": `${DOMAIN}/contact` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact DEEDOX Studio",
        "url": `${DOMAIN}/contact`,
        "mainEntity": {
          "@type": "ContactPoint",
          "telephone": "+8801817296013",
          "email": "deedoxteam@gmail.com",
          "contactType": "sales",
          "availableLanguage": ["English", "Bengali"],
          "areaServed": "Global"
        }
      }
    ]
  }
];

function buildHeadTags(page) {
  const canonicalUrl = `${DOMAIN}${page.slug === '/' ? '/' : page.slug}`;

  const schemasHtml = page.schemas
    .map(s => `  <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n  </script>`)
    .join('\n');

  return `  <!-- Primary Meta Tags -->
  <title>${page.title}</title>
  <meta name="title" content="${page.title}"/>
  <meta name="description" content="${page.description}"/>
  <meta name="keywords" content="${page.keywords}"/>
  <meta name="author" content="DEEDOX Studio"/>
  <meta name="publisher" content="DEEDOX Studio"/>
  <link rel="canonical" href="${canonicalUrl}"/>

  <!-- Search Engine Crawlers & Indexing -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>

  <!-- Google Search Console & Bing Webmaster Verification -->
  <!-- Replace content value with your Search Console verification token -->
  <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE"/>
  <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE_HERE"/>

  <!-- Geographic & Local Agency SEO (Bangladesh HQ) -->
  <meta name="geo.region" content="BD-13"/>
  <meta name="geo.placename" content="Dhaka, Bangladesh"/>
  <meta name="geo.position" content="23.8103;90.4125"/>
  <meta name="ICBM" content="23.8103, 90.4125"/>

  <!-- Open Graph / WhatsApp / Facebook Link Preview -->
  <meta property="og:type" content="website"/>
  <meta property="og:site_name" content="DEEDOX Studio"/>
  <meta property="og:locale" content="en_US"/>
  <meta property="og:title" content="${page.title}"/>
  <meta property="og:description" content="${page.description}"/>
  <meta property="og:url" content="${canonicalUrl}"/>
  <meta property="og:image" content="${OG_IMAGE}"/>
  <meta property="og:image:secure_url" content="${OG_IMAGE}"/>
  <meta property="og:image:type" content="image/jpeg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:image:alt" content="DEEDOX — Premier Digital, Software &amp; AI Agency"/>

  <!-- Twitter / X Card Preview -->
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@deedoxstudio"/>
  <meta name="twitter:creator" content="@deedoxstudio"/>
  <meta name="twitter:title" content="${page.title}"/>
  <meta name="twitter:description" content="${page.description}"/>
  <meta name="twitter:image" content="${OG_IMAGE}"/>
  <meta name="twitter:image:alt" content="DEEDOX — Premier Digital, Software &amp; AI Agency"/>

  <!-- Favicon & PWA Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
  <link rel="apple-touch-icon" href="/favicon.svg"/>
  <link rel="manifest" href="/site.webmanifest"/>

  <!-- Mobile Browser Theme Color -->
  <meta name="theme-color" content="#000000"/>
  <meta name="msapplication-navbutton-color" content="#000000"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
  <meta name="apple-mobile-web-app-title" content="DEEDOX"/>

  <!-- Structured Data / JSON-LD (Schema.org) for Google Rich Results -->
${schemasHtml}`;
}

function processFile(page) {
  const filePath = path.resolve(__dirname, '..', page.file);
  if (!fs.existsSync(filePath)) {
    console.error(`[SKIP] File not found: ${filePath}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Remove old conflicting canonical / schema-org / duplicate metadata blocks
  // 1. Clean out the top existing metadata block (between <head> and first <style> or <link>)
  // In our pages, <head> begins with <meta charset="utf-8"/> followed by viewport, then old metadata.
  
  // Replace the title
  html = html.replace(/<title>.*?<\/title>/is, '');

  // Remove existing <meta name="description" ...>
  html = html.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+content="[^"]*"\s+name=["']description["'][^>]*>/gi, '');

  // Remove existing Open Graph tags
  html = html.replace(/<meta\s+(?:property|name)=["']og:[^"']+["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+content="[^"]*"\s+(?:property|name)=["']og:[^"']+["'][^>]*>/gi, '');

  // Remove existing Twitter tags
  html = html.replace(/<meta\s+(?:property|name)=["']twitter:[^"']+["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+content="[^"]*"\s+(?:property|name)=["']twitter:[^"']+["'][^>]*>/gi, '');

  // Remove existing canonicals
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
  html = html.replace(/<link\s+href="[^"]*"\s+rel=["']canonical["'][^>]*>/gi, '');

  // Remove existing robots / verification meta
  html = html.replace(/<meta\s+name=["']robots["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']googlebot["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']bingbot["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']keywords["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']google-site-verification["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']msvalidate\.01["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']geo\.[^"']+["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']ICBM["'][^>]*>/gi, '');

  // Remove old DatoCMS favicon
  html = html.replace(/<link\s+href="https:\/\/www\.datocms-assets\.com\/[^"]*"\s+rel=["']icon["'][^>]*>/gi, '');
  html = html.replace(/<link\s+rel=["']icon["'][^>]*>/gi, '');
  html = html.replace(/<link\s+rel=["']apple-touch-icon["'][^>]*>/gi, '');
  html = html.replace(/<link\s+rel=["']manifest["'][^>]*>/gi, '');

  // Remove theme-color / mobile status bar
  html = html.replace(/<meta\s+name=["']theme-color["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']msapplication-navbutton-color["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']apple-mobile-web-app-[^"']+["'][^>]*>/gi, '');

  // Remove old schema-org / schema-page scripts
  html = html.replace(/<script\s+data-hid=["']schema-org["'][^>]*>.*?<\/script>/gis, '');
  html = html.replace(/<script\s+data-hid=["']schema-page["'][^>]*>.*?<\/script>/gis, '');

  // Remove old third party tracking scripts from DatoCMS template (Claritiy, LinkedIn, GTM duplicate, Leadfeeder)
  html = html.replace(/<script[^>]*>\s*\(function\(ss,ex\)\{\s*window\.ldfdr.*?<\/script>/gis, '');
  html = html.replace(/<noscript><img\s+alt=""\s+height="1"\s+src="https:\/\/px\.ads\.linkedin\.com.*?<\/noscript>/gis, '');
  html = html.replace(/<noscript><iframe\s+height="0"\s+src="https:\/\/www\.googletagmanager\.com\/ns\.html\?id=GTM-KM6VNLWT".*?<\/noscript>/gis, '');
  html = html.replace(/<script[^>]*>.*?GTM-KM6VNLWT.*?<\/script>/gis, '');

  // Clean empty meta comments or excess blank lines in head
  html = html.replace(/<!--\s*Open Graph \/ WhatsApp \/ Facebook Link Preview\s*-->/gi, '');
  html = html.replace(/<!--\s*Twitter Card\s*-->/gi, '');
  html = html.replace(/<!--\s*Theme & Mobile Colors\s*-->/gi, '');

  // Inject new comprehensive head block right after <head>
  const newHead = buildHeadTags(page);

  // Strip existing viewport & charset tags so we have exactly one clean pair
  html = html.replace(/<meta\s+charset="utf-8"\s*\/?>/gi, '');
  html = html.replace(/<meta\s+[^>]*name=["']viewport["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+[^>]*http-equiv=["']X-UA-Compatible["'][^>]*>/gi, '');

  if (html.includes('<head>')) {
    html = html.replace('<head>', `<head>\n  <meta charset="utf-8"/>\n  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"/>\n  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>\n${newHead}`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`[SUCCESS] SEO and Metadata generated for: ${page.file} (${page.slug})`);
}

console.log('=== STARTING COMPLETE SEO GENERATION ===');
PAGES.forEach(processFile);
console.log('=== SEO GENERATION FINISHED ===');
