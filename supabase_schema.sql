-- ==============================================================================
-- DEEDOX STUDIO / FANTASY CMS — SUPABASE MASTER DATABASE SCHEMA
-- Real-time Cloud Backend for Settings, Pricing Matrix, Works, Inquiries & Media
-- ==============================================================================

-- 1. SITE SETTINGS TABLE (Global Configuration, Social Links, WhatsApp Customizer)
CREATE TABLE IF NOT EXISTS public.site_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Drop previous policies if any to avoid errors
DROP POLICY IF EXISTS "Allow public read on site_settings" ON public.site_settings;
DROP POLICY IF EXISTS "Allow full access on site_settings" ON public.site_settings;

-- Public can read all settings in real-time
CREATE POLICY "Allow public read on site_settings"
  ON public.site_settings FOR SELECT
  USING (true);

-- Allow upsert/update (via anon/authenticated or secret key)
CREATE POLICY "Allow full access on site_settings"
  ON public.site_settings FOR ALL
  USING (true)
  WITH CHECK (true);

-- 2. WORKS / CASE STUDIES TABLE
CREATE TABLE IF NOT EXISTS public.works (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  client TEXT,
  category TEXT,
  tag TEXT,
  description TEXT,
  media_url TEXT,
  thumbnail_url TEXT,
  badge TEXT,
  results JSONB,
  featured BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW())
);

ALTER TABLE public.works ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read on works" ON public.works;
DROP POLICY IF EXISTS "Allow full access on works" ON public.works;

CREATE POLICY "Allow public read on works" ON public.works FOR SELECT USING (true);
CREATE POLICY "Allow full access on works" ON public.works FOR ALL USING (true) WITH CHECK (true);

-- 3. INQUIRIES & LEAD CAPTURE TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  service TEXT,
  budget TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW())
);

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public insert on inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "Allow full access on inquiries" ON public.inquiries;

CREATE POLICY "Allow public insert on inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow full access on inquiries" ON public.inquiries FOR ALL USING (true) WITH CHECK (true);

-- 4. MEDIA LIBRARY (Cloudinary Video/Image Records)
CREATE TABLE IF NOT EXISTS public.media_library (
  id TEXT PRIMARY KEY,
  name TEXT,
  public_id TEXT,
  secure_url TEXT NOT NULL,
  optimized_url TEXT,
  format TEXT,
  bytes BIGINT,
  duration NUMERIC,
  category TEXT DEFAULT 'general',
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW())
);

ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read on media_library" ON public.media_library;
DROP POLICY IF EXISTS "Allow full access on media_library" ON public.media_library;

CREATE POLICY "Allow public read on media_library" ON public.media_library FOR SELECT USING (true);
CREATE POLICY "Allow full access on media_library" ON public.media_library FOR ALL USING (true) WITH CHECK (true);

-- ==============================================================================
-- INITIAL SEED DATA (Populates default settings & pricing matrix automatically)
-- ==============================================================================

INSERT INTO public.site_settings (key, value, updated_at)
VALUES (
  'global',
  '{
    "hero": {
      "heading": "Premier Digital, Software & AI Agency",
      "subheading": "We design high-converting websites, rank #1 with SEO, engineer custom SaaS & management systems, build mobile apps, produce AI commercials, and deploy 24/7 sales automations."
    },
    "contact_email": "deedoxteam@gmail.com",
    "contact_phone": "+8801817296013",
    "studio_location": "Dhaka, Bangladesh (HQ) • Serving Clients Globally",
    "footer_text": "DEEDOX — Premier Full-Service Digital, Software & AI Agency based in Bangladesh, scaling clients locally and globally.",
    "footer_copyright": "© 2026 DEEDOX Studio. All rights reserved.",
    "whatsapp": {
      "enabled": true,
      "phone": "+8801817296013",
      "message": "Hello DEEDOX Team, I would like to discuss our project with your agency.",
      "position": "bottom-right",
      "tooltip": "Chat with us",
      "badge_text": "Online",
      "theme": "cream"
    },
    "social_links": {
      "facebook": "https://facebook.com/deedoxstudio",
      "instagram": "https://instagram.com/deedoxstudio",
      "linkedin": "https://linkedin.com/company/deedoxstudio",
      "twitter": "https://x.com/deedoxstudio",
      "youtube": "https://youtube.com/@deedoxstudio",
      "github": "https://github.com/ramimraselco-cmyk",
      "dribbble": "https://dribbble.com/deedoxstudio",
      "behance": "https://behance.net/deedoxstudio",
      "telegram": "https://t.me/deedoxstudio"
    }
  }'::jsonb,
  NOW()
)
ON CONFLICT (key) DO UPDATE
SET value = EXCLUDED.value, updated_at = NOW();

-- Enable Realtime broadcasting on site_settings
ALTER PUBLICATION supabase_realtime ADD TABLE public.site_settings;
