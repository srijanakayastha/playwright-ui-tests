const { test, expect } = require('@playwright/test');

test('Handle JavaScript Alert', async ({ page }) => {
  await page.goto('file://' + __dirname + '/alert.html');

  // Listen for the alert dialog
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('Hello QA');
    await dialog.accept(); // Click OK
  });

  // Click the button to trigger the alert
  await page.click('button');
});