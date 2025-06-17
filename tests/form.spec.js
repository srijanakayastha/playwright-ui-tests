import { test, expect } from '@playwright/test';

test('should fill and submit the form successfully', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.fill('#userName', 'Srijana Kayastha');
  await page.fill('#userEmail', 'srijana@gmail.com');
  await page.fill('#currentAddress', 'This is a test message.');
  await page.click('#submit');

  await expect(page.locator('#output')).toContainText('Srijana Kayastha');
});