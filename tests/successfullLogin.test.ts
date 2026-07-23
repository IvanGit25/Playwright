import { test, expect } from '@playwright/test';

test('successfull login', async ({ page }) => {
  await page.goto('');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]'))
  .toContainText('Sauce Labs Bike Light');
});