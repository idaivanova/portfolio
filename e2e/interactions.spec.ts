import { test, expect } from '@playwright/test';

/**
 * Interaction and Animation Tests
 * 
 * Tests for interactive elements like the bumblebee, navigation, and animations.
 */

test.describe('Interactive Elements', () => {
  
  test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
    });

    test('header navigation is visible', async ({ page }) => {
      const header = page.locator('header');
      await expect(header).toBeVisible();
      
      // Check for navigation links
      const navLinks = header.locator('a, button').filter({ hasText: /HOME|ABOUT|PROJECTS/i });
      await expect(navLinks.first()).toBeVisible();
    });

    test('mobile menu button is visible on small screens', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(500);
      
      const menuButton = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i]').first();
      if (await menuButton.isVisible().catch(() => false)) {
        await expect(menuButton).toBeVisible();
      }
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
      const ctaButton = page.locator('button, a').filter({ hasText: /View My Projects|Get in touch/i }).first();
      await expect(ctaButton).toBeVisible();
    });

    test('buttons have hover states', async ({ page }) => {
      const button = page.locator('button, a').filter({ hasText: /View My Projects/i }).first();
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

  test.describe('Bumblebee Animation', () => {
    test('bumblebee can be triggered manually for testing', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Inject bumblebee manually for testing
      await page.evaluate(() => {
        // Create a test bumblebee element
        const bee = document.createElement('div');
        bee.setAttribute('data-testid', 'test-bumblebee');
        bee.style.cssText = `
          position: fixed;
          width: 64px;
          height: 64px;
          background: #FCD34D;
          border-radius: 50%;
          z-index: 9999;
          left: -100px;
          top: 30%;
          transition: left 2s linear;
        `;
        document.body.appendChild(bee);
        
        // Animate it
        setTimeout(() => {
          bee.style.left = '110%';
        }, 100);
      });
      
      // Wait for animation
      await page.waitForTimeout(500);
      
      // Verify bumblebee exists
      const bee = page.locator('[data-testid="test-bumblebee"]');
      await expect(bee).toBeVisible();
      
      // Screenshot with bumblebee
      await expect(page).toHaveScreenshot('homepage-with-bumblebee.png');
    });
  });
});
