import { test, expect } from '@playwright/test';

/**
 * Navigation is consolidated into one left-rail system: an <aside> rail at
 * >=768px (`md:`) and a fixed bottom bar below it. Tests naming a single
 * surface end up asserting against hidden DOM on the other breakpoint.
 */
const DESKTOP_NAV_MIN_WIDTH = 768;

test.describe('Interactive Elements', () => {
  
  test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
    });

    test('primary navigation is visible (rail on desktop, bottom bar on mobile)', async ({ page }) => {
      const width = page.viewportSize()?.width ?? 0;

      if (width >= DESKTOP_NAV_MIN_WIDTH) {
        const rail = page.locator('aside').first();
        await expect(rail).toBeVisible();

        // Check for navigation links in the rail (sole nav system)
        const navLinks = rail.locator('a').filter({ hasText: /HOME|ABOUT/i });
        await expect(navLinks.first()).toBeVisible();

        // The rail owns the project routes
        await expect(rail.locator('a[href="/case-studies/pimcore"]')).toBeVisible();
        await expect(rail.locator('a[href^="/playground/"]')).toBeVisible();
      } else {
        // Below md the rail is display:none and the bottom bar is the nav
        await expect(page.locator('aside').first()).toBeHidden();

        const bottomBar = page.locator('div.fixed.bottom-0').first();
        await expect(bottomBar).toBeVisible();
        await expect(bottomBar.locator('a[href="/"]')).toBeVisible();
        await expect(bottomBar.locator('a[href="/about"]')).toBeVisible();
        await expect(bottomBar.locator('a[href="/playground/theme-builder"]')).toBeVisible();
        await expect(bottomBar.locator('button[aria-haspopup="dialog"]')).toBeVisible();
      }
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
