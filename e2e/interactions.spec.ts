import { test, expect } from '@playwright/test';

/**
 * Interaction and Animation Tests
 * 
 */

test.describe('Interactive Elements', () => {
  
  test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
    });

    test('left rail navigation is visible', async ({ page }) => {
      const rail = page.locator('aside').first();
      await expect(rail).toBeVisible();

      // Check for navigation links in the rail (sole nav system)
      const navLinks = rail.locator('a').filter({ hasText: /HOME|ABOUT/i });
      await expect(navLinks.first()).toBeVisible();
    });

    test('mobile bottom navigation is visible on small screens', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(500);

      const homeLink = page.locator('a').filter({ hasText: /HOME/i }).last();
      await expect(homeLink).toBeVisible();
    });

    test('navigation links work', async ({ page }) => {
      // Test About link
      const aboutLink = page.locator('a').filter({ hasText: /ABOUT/i }).first();
      if (await aboutLink.isVisible().catch(() => false)) {
        await aboutLink.click();
        await page.waitForLoadState('networkidle');
        expect(page.url()).toContain('/about');
      }
    });
  });

  test.describe('CTA Buttons', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
    });

    test('primary CTA button is visible', async ({ page }) => {
      const ctaButton = page.locator('button, a').filter({ hasText: /See my projects|Say hi/i }).first();
      await expect(ctaButton).toBeVisible();
    });

    test('buttons have hover states', async ({ page }) => {
      const button = page.locator('button, a').filter({ hasText: /See my projects/i }).first();
      await button.hover();
      await page.waitForTimeout(300);
      
      // Screenshot to capture hover state
      await expect(button).toHaveScreenshot('button-hover-state.png');
    });
  });

  test.describe('Scroll Animations', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000); // Wait for initial animations
    });

    test('elements animate on scroll', async ({ page }) => {
      // Scroll down
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(500);
      
      // Take screenshot of scrolled state
      await expect(page).toHaveScreenshot('homepage-scrolled.png', {
        fullPage: false,
      });
    });

    test('stats section is visible after scroll', async ({ page }) => {
      // Scroll to stats section
      await page.evaluate(() => {
        const statsSection = document.querySelector('section');
        if (statsSection) {
          statsSection.scrollIntoView({ behavior: 'instant' });
        }
      });
      await page.waitForTimeout(500);
      
      const stats = page.locator('section').nth(1);
      await expect(stats).toBeVisible();
    });
  });

});
