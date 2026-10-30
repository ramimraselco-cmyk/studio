# DEEDOX Digital Studio & Agency - Live Deployment Guide

This guide explains how to deploy the **DEEDOX** web application live to production across multiple hosting platforms with 100% video streaming stability, real-time dynamic pricing CMS, and zero black seams.

---

## 🚀 Option 1: Vercel (Recommended — 1-Click Zero Config)

Vercel provides automatic global CDN edge caching, free SSL, and instant live preview.

### Step 1: Push to GitHub
If you haven't pushed your repository to GitHub yet:
```bash
git init
git add .
git commit -m "feat: DEEDOX production-ready live build"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Import on Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** &rarr; **"Import"** your GitHub repository.
3. Keep the default settings (the included `vercel.json` and `package.json` handle everything automatically).
4. Click **Deploy**.
5. Your website will be live at `https://your-project.vercel.app` in under 60 seconds!

---

## 🌐 Option 2: Render.com (Free Node.js Web Service)

Render runs the native Node server (`server.js`) with persistent APIs and live Cloudinary streaming.

1. Sign up or log in at [https://render.com](https://render.com).
2. Click **"New +"** &rarr; **"Web Service"**.
3. Connect your GitHub repository.
4. Set the configuration:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **"Create Web Service"**.
6. Render will assign you a live HTTPS URL (e.g., `https://deedox-studio.onrender.com`).

---

## ⚡ Option 3: Railway.app

1. Go to [https://railway.app](https://railway.app).
2. Click **"New Project"** &rarr; **"Deploy from GitHub repo"**.
3. Select this repository.
4. Railway will automatically detect Node.js, run `npm install` and `npm start`.
5. Under **Settings &rarr; Networking**, click **"Generate Domain"** to get your public live URL.

---

## 🖥️ Option 4: VPS / Ubuntu / DigitalOcean / AWS EC2

To host on your own Linux server:

1. Clone your repo onto the server:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git /var/www/deedox
   cd /var/www/deedox
   npm install
   ```

2. Run with **PM2** (Process Manager):
   ```bash
   npm install -g pm2
   pm2 start server.js --name "deedox-studio"
   pm2 startup
   pm2 save
   ```

3. Configure **Nginx** reverse proxy to port `3005`:
   ```nginx
   server {
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3005;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
4. Issue free SSL with Certbot:
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## 🔑 Cloud Integrations Included

- **Cloudinary CDN**: High-performance video streaming is pre-configured with Cloudinary CDN so you don't need heavy video hosting on your server.
- **Supabase Cloud Sync**: The `/api/pricing` and `/api/settings` endpoints sync directly to Supabase cloud tables with local JSON backup fallback.
- **WhatsApp Dispatch Hotline**: Configured to direct lead briefs straight to WhatsApp (`+8801817296013`).

---

## 📦 Downloadable Source Archive
A clean, complete zip archive of the production source code without heavy dependencies is saved as:
`deedox-production-ready.zip` in your root project folder.
