import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests - Case Studies
 * 
 * Tests for all case study pages to ensure consistent layout and design.
 */

test.describe('Case Studies Visual Regression', () => {
  
  test.describe('Pimcore Case Study', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/case-studies/pimcore');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
    });

    test('pimcore full page', async ({ page }) => {
      await expect(page).toHaveScreenshot('pimcore-fullpage.png', {
        fullPage: true,
      });
    });

    test('pimcore sidebar navigation', async ({ page }) => {
      const sidebar = page.locator('aside, [class*="sidebar"]').first();
      if (await sidebar.isVisible().catch(() => false)) {
        await expect(sidebar).toHaveScreenshot('pimcore-sidebar.png');
      }
    });

    test('pimcore hero section', async ({ page }) => {
      const hero = page.locator('section').first();
      await expect(hero).toBeVisible();
      await expect(hero).toHaveScreenshot('pimcore-hero.png');
    });
  });

  test.describe('ErgoWork Case Study', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/case-studies/ergowork');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
    });

    test('ergowork full page', async ({ page }) => {
      await expect(page).toHaveScreenshot('ergowork-fullpage.png', {
        fullPage: true,
      });
    });

    test('ergowork sidebar navigation', async ({ page }) => {
      const sidebar = page.locator('aside, [class*="sidebar"]').first();
      if (await sidebar.isVisible().catch(() => false)) {
        await expect(sidebar).toHaveScreenshot('ergowork-sidebar.png');
      }
    });

    test('ergowork hero section', async ({ page }) => {
      const hero = page.locator('section').first();
      await expect(hero).toBeVisible();
      await expect(hero).toHaveScreenshot('ergowork-hero.png');
    });
  });

  test.describe('Dermatik Case Study', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/case-studies/dermatik');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
    });

    test('dermatik full page', async ({ page }) => {
      await expect(page).toHaveScreenshot('dermatik-fullpage.png', {
        fullPage: true,
      });
    });

    test('dermatik sidebar navigation', async ({ page }) => {
      const sidebar = page.locator('aside, [class*="sidebar"]').first();
      if (await sidebar.isVisible().catch(() => false)) {
        await expect(sidebar).toHaveScreenshot('dermatik-sidebar.png');
      }
    });

    test('dermatik hero section', async ({ page }) => {
      const hero = page.locator('section').first();
      await expect(hero).toBeVisible();
      await expect(hero).toHaveScreenshot('dermatik-hero.png');
    });
  });
});
