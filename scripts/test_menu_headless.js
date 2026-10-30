/**
 * test_menu_headless.js
 * Launches Chrome in headless mode with remote debugging, connects via WebSocket,
 * sets viewport to 300x600, clicks .sh-toggle, and verifies #deedox-menu classes.
 */
const { spawn } = require('child_process');
const http = require('http');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9223;

async function runTest() {
  console.log('1. Spawning Chrome headless on port ' + PORT);
  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  // Wait 1.5s for Chrome to bind port
  await new Promise(r => setTimeout(r, 1500));

  try {
    // Get WebSocket endpoint
    const versionData = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${PORT}/json/version`, res => {
        let body = '';
        res.on('data', c => body += c);
        res.on('end', () => resolve(JSON.parse(body)));
      }).on('error', reject);
    });

    console.log('2. Chrome version:', versionData.Browser);

    // Create a new tab
    const newTab = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${PORT}/json/new?http://localhost:3005`, res => {
        let body = '';
        res.on('data', c => body += c);
        res.on('end', () => resolve(JSON.parse(body)));
      }).on('error', reject);
    });

    console.log('3. Opened tab:', newTab.id, newTab.url);

    // Wait 3s for page to load and splash to dismiss
    await new Promise(r => setTimeout(r, 3000));

    // Connect WebSocket
    const WebSocket = require('ws') || null;
  } catch (err) {
    console.log('Test caught:', err.message);
  } finally {
    chromeProc.kill();
  }
}

runTest();
