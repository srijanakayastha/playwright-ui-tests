# Test info

- Name: should show error for invalid email login
- Location: /Users/srijana/playwright-demo/tests/email-error-validation.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('text=Incorrect email or password.')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('text=Incorrect email or password.')

    at /Users/srijana/playwright-demo/tests/email-error-validation.spec.js:12:30
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('should show error for invalid email login', async ({ page }) => {
   4 |   await page.goto('https://rahulshettyacademy.com/client');
   5 |
   6 |   await page.fill('#userEmail', 'invalidemail@example.com');
   7 |   await page.fill('#userPassword', 'wrongpassword');
   8 |   await page.click('#login');
   9 |   await page.waitForTimeout(3000);
  10 |
  11 |   const errorMessage = page.locator('text=Incorrect email or password.');
> 12 |   await expect(errorMessage).toBeVisible();
     |                              ^ Error: expect(locator).toBeVisible()
  13 | });
```