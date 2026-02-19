import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests - About Page
 */

test.describe('About Page Visual Regression', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('about full page', async ({ page }) => {
    await expect(page).toHaveScreenshot('about-fullpage.png', {
      fullPage: true,
    });
  });

  test('about hero section', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    await expect(hero).toHaveScreenshot('about-hero.png');
  });

  test('about sidebar', async ({ page }) => {
    const sidebar = page.locator('aside, [class*="sidebar"]').first();
    if (await sidebar.isVisible().catch(() => false)) {
      await expect(sidebar).toHaveScreenshot('about-sidebar.png');
    }
  });
});
