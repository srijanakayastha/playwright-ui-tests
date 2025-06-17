// playwright.config.js
const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://example.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { open: 'on-failure' }]],
  retries: 1,
  timeout: 3000,
});