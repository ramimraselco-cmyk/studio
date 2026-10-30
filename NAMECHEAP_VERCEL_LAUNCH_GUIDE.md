# DEEDOX Website Launch & SEO Setup Guide (Namecheap + Vercel)

আপনার ওয়েবসাইট লাইভ করার জন্য এবং Google Search Engine-এ দ্রুত র‍্যাংক করানোর জন্য নিচের স্টেপগুলো ফলো করুন:

---

## 🚀 Step 1: Vercel-এ Namecheap Domain কানেক্ট করার নিয়ম

1. **Vercel ড্যাশবোর্ডে যান**:
   - [vercel.com](https://vercel.com) এ লগইন করে আপনার প্রজেক্টটি ওপেন করুন।
   - **Settings** &rarr; **Domains** এ যান।
   - আপনার ডোমেইনটি লিখুন (যেমন: `deedox.studio` বা আপনার কেনা ডোমেইন) এবং **Add** এ ক্লিক করুন।
   - Vercel আপনাকে `yourdomain.com` এবং `www.yourdomain.com` দুটোই অ্যাড করতে বলবে, `Recommended` অপশনটি সিলেক্ট করে Add করুন।

2. **Namecheap ড্যাশবোর্ডে DNS সেট করুন**:
   - [namecheap.com](https://namecheap.com) এ লগইন করুন।
   - **Domain List** থেকে আপনার ডোমেইনের পাশে **Manage** বাটনে ক্লিক করুন।
   - **Advanced DNS** ট্যাবে ক্লিক করুন।
   - **Host Records** সেকশনে নিচের ২টি রেকর্ড যুক্ত করুন (যদি আগের কোনো Parking/Default A বা CNAME রেকর্ড থাকে তা ডিলিট করে দিন):

   | Type | Host | Value / Target | TTL |
   | :--- | :--- | :--- | :--- |
   | **A Record** | `@` | `76.76.21.21` | Automatic (বা 1 min) |
   | **CNAME Record** | `www` | `cname.vercel-dns.com.` | Automatic (বা 1 min) |

   > **Note:** DNS আপডেট হতে সাধারণত ৫ মিনিট থেকে সর্বোচ্চ ১-২ ঘণ্টা সময় লাগতে পারে। আপডেট হলেই Vercel-এ **Valid Configuration** এবং সবুজ টিকচিহ্ন আসবে।

---

## ⚡ Step 2: যদি আপনার ডোমেইন `deedox.studio` বা অন্য কিছু হয়

যদি আপনি Namecheap থেকে `deedox.studio` ছাড়া অন্য কোনো ডোমেইন কিনে থাকেন (যেমন: `myagency.com`), তাহলে নিচের ১টি কমান্ড রান করলেই আপনার পুরো ওয়েবসাইটের মেটা ট্যাগ, ক্যানোনিকাল লিঙ্ক, সাইটম্যাপ ও রোবট ফাইল এক সেকেন্ডে আপডেট হয়ে যাবে:

```bash
npm run set-domain yourdomain.com
```

---

## 🔍 Step 3: Google Search Console-এ ওয়েবসাইট যুক্ত ও ভেরিফাই করা

1. [search.google.com/search-console](https://search.google.com/search-console) এ যান।
2. **Add Property** বাটনে ক্লিক করুন।
3. **Domain** অপশনে আপনার ডোমেইন নাম লিখুন (যেমন: `deedox.studio`).
4. Google আপনাকে একটি **TXT Record** দেবে (যেমন: `google-site-verification=xxxxxxxxx...`).
5. এটি কপি করে Namecheap-এর **Advanced DNS**-এ গিয়ে একটি নতুন রেকর্ড যোগ করুন:
   - **Type**: `TXT Record`
   - **Host**: `@`
   - **Value**: Google-এর দেওয়া পুরো কোডটি পেস্ট করুন।
   - **TTL**: Automatic
6. কয়েক মিনিট পর Google Search Console-এ এসে **Verify** বাটনে ক্লিক করুন। সাথে সাথে ওনারশিপ ভেরিফাই হয়ে যাবে!

> বিকল্প পদ্ধতি: HTML Meta Tag ভেরিফিকেশনও আপনার সব পেজে রেডি রাখা আছে (`<meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE"/>`)।

---

## 🗺️ Step 4: Google-এ Sitemap সাবমিট করা

1. Google Search Console-এর বামপাশের মেনু থেকে **Sitemaps**-এ ক্লিক করুন।
2. **Add a new sitemap** বক্সে লিখুন:
   ```text
   sitemap.xml
   ```
3. **Submit** এ ক্লিক করুন।
4. Google আপনার সাইটের সব পেইজ (`/`, `/services`, `/work`, `/pricing`, `/about`, `/contact`) ক্রল করে ইনডেক্স করা শুরু করবে।

---

## 📊 Step 5: Google Analytics 4 (GA4) যুক্ত করা (ঐচ্ছিক কিন্তু বাঞ্ছনীয়)

1. [analytics.google.com](https://analytics.google.com) এ একটি ফ্রি প্রপার্টি তৈরি করে আপনার `Measurement ID` (যেমন `G-XXXXXXXXXX`) কপি করুন।
2. আপনার HTML ফাইলগুলোর কমেন্ট করা অংশে আইডিটি বসিয়ে দিন।

---

## 🛠️ ফাইল ও SEO সামারি

| ফাইল | ভূমিকা |
| :--- | :--- |
| **`robots.txt`** | Googlebot, Bingbot ও সব সার্চ ইঞ্জিন ক্রলারকে নির্দেশ করে এবং সাইটম্যাপের লোকেশন দেয়। |
| **`sitemap.xml`** | ইমেজ এক্সটেনশন ও পেজ প্রায়োরিটি সহ সমস্ত রুট ডিরেক্টরি। |
| **`favicon.svg`** | প্রিমিয়াম আর্কিটেকচারাল মনোগ্রাম ফ্যাভিকন (ডেস্কটপ ও মোবাইল ব্রাউজার)। |
| **`site.webmanifest`** | অ্যান্ড্রয়েড ক্রোম এবং PWA অ্যাপের জন্য ওয়েব ম্যানিফেস্ট। |
| **`browserconfig.xml`** | মাইক্রোসফট এজ / উইন্ডোজ টাইল মেটাডেটা। |
| **`vercel.json`** | ক্লিন ইউআরএল (`/pricing`, `/work`), সিকিউরিটি হেডার এবং সিডিএন ক্যাশিং। |
| **Schema.org (JSON-LD)** | গুগল রিচ রেজাল্টস ও নলেজ গ্রাফের জন্য Organization, LocalBusiness, FAQPage, BreadcrumbList ডেটা। |
