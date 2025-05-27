test('Fill and submit contact form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.fill('#userName', 'Abc');
  await page.fill('#userEmail', 'abc@example.com');
  await page.fill('#currentAddress', '123 Main St');
  await page.click('#submit');
  await expect(page.locator('#output')).toBeVisible();
});