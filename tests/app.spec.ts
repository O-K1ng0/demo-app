import { test, expect } from '@playwright/test';

test('loads app and increments counter on interaction', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/demo-app/);

  const button = page.getByRole('button', { name: /count is/i });
  await expect(button).toBeVisible();
  await button.click();
  await expect(button).toHaveText(/count is 1/i);
});
