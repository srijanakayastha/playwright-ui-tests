const { test, expect } = require('@playwright/test');

test('Handle JavaScript Confirm Dialog', async ({ page }) => {
  await page.goto('file://' + __dirname + '/confirm.html');

  // Listen for the confirm popup
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('Are you sure?');
    await dialog.accept(); // Click "OK"
    // Or use dialog.dismiss(); to simulate "Cancel"
  });

  await page.click('button'); // Triggers the confirm
});