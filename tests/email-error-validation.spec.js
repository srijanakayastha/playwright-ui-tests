const { test, expect } = require('@playwright/test');

test('should show error for invalid email login', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');

  await page.fill('#userEmail', 'invalidemail@example.com');
  await page.fill('#userPassword', 'wrongpassword');
  await page.click('#login');
  await page.waitForTimeout(3000);

  const errorMessage = page.locator('text=Incorrect email or password.');
  await expect(errorMessage).toBeVisible();
});