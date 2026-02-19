import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests - Homepage
 * 
 * These tests capture baseline screenshots of the homepage
 * at different viewport sizes for visual regression testing.
 */

test.describe('Homepage Visual Regression', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Wait for animations to settle
    await page.waitForTimeout(1000);
  });

  test('homepage full page - desktop', async ({ page }) => {
    await expect(page).toHaveScreenshot('homepage-desktop.png', {
      fullPage: true,
    });
  });

  test('homepage hero section', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    await expect(hero).toHaveScreenshot('homepage-hero.png');
  });

  test('homepage stats section', async ({ page }) => {
    const stats = page.locator('text=/\\d+\\+?/').first().locator('..').locator('..');
    if (await stats.isVisible().catch(() => false)) {
      await expect(stats).toHaveScreenshot('homepage-stats.png');
    }
  });

  test('homepage features section', async ({ page }) => {
    const features = page.locator('h2:has-text("Featured Projects")');
    if (await features.isVisible().catch(() => false)) {
      await expect(features.locator('..')).toHaveScreenshot('homepage-features.png');
    }
  });

  test('homepage CTA section', async ({ page }) => {
    const cta = page.locator('text=/Get in touch/i').first().locator('..').locator('..').locator('..');
    if (await cta.isVisible().catch(() => false)) {
      await expect(cta).toHaveScreenshot('homepage-cta.png');
    }
  });

  test('homepage footer', async ({ page }) => {
    const footer = page.locator('footer').last();
    await expect(footer).toBeVisible();
    await expect(footer).toHaveScreenshot('homepage-footer.png');
  });
});
