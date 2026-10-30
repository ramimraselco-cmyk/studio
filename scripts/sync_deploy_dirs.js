const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DEPLOY_DIRS = [
  'dist_deploy',
  'dist_cloud_deploy',
  'DEEDOX_DIRECT_DEPLOY',
  'deedox-website-deploy-cloud'
];

const FILES_TO_SYNC = [
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  'browserconfig.xml',
  'favicon.svg',
  '404.html',
  'vercel.json',
  'index.html',
  'services.html',
  'work.html',
  'pricing.html',
  'about.html',
  'contact.html'
];

console.log('=== SYNCING SEO & CONFIG FILES TO DEPLOY DIRECTORIES ===\n');

DEPLOY_DIRS.forEach(dirName => {
  const targetDir = path.join(ROOT, dirName);
  if (!fs.existsSync(targetDir)) return;

  console.log(`[DIRECTORY] Syncing to ${dirName}...`);
  let count = 0;

  FILES_TO_SYNC.forEach(fileName => {
    const srcFile = path.join(ROOT, fileName);
    const destFile = path.join(targetDir, fileName);

    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, destFile);
      count++;
    }
  });

  // Sync services folder
  const srcServices = path.join(ROOT, 'services');
  const destServices = path.join(targetDir, 'services');
  if (fs.existsSync(srcServices)) {
    if (!fs.existsSync(destServices)) fs.mkdirSync(destServices, { recursive: true });
    fs.readdirSync(srcServices).forEach(f => {
      fs.copyFileSync(path.join(srcServices, f), path.join(destServices, f));
      count++;
    });
  }

  // Also sync assets/images/favicon.svg if assets folder exists
  const assetsImgDir = path.join(targetDir, 'assets', 'images');
  if (fs.existsSync(assetsImgDir)) {
    fs.copyFileSync(path.join(ROOT, 'favicon.svg'), path.join(assetsImgDir, 'favicon.svg'));
  }

  console.log(`  -> Synced ${count} files to ${dirName}`);
});

console.log('\n=== SYNC COMPLETE ===');
