const { test, expect } = require('@playwright/test');

test('Handle JavaScript Prompt Dialog', async ({ page }) => {
  await page.goto('file://' + __dirname + '/prompt.html');

  // Handle the prompt popup
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('What is your name?');
    await dialog.accept('Srijana'); // Simulate typing "Srijana" and clicking OK
  });

  await page.click('button'); // Triggers the prompt

  // Verify the text output on the page
  const resultText = await page.textContent('#result');
  expect(resultText).toBe('Hello, Srijana');
});