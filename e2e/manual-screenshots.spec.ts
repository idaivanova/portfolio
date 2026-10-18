import { test, expect } from '@playwright/test';

/**
 * Manual Screenshot Tests
 * 
 * Captures screenshots of specific pages for manual review.
 */

test.describe('Manual Screenshots', () => {
  
  test('homepage screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    // Take full page screenshot
    await page.screenshot({ 
      path: 'public/screenshots/test/homepage.png',
      fullPage: true 
    });
    
    console.log('✓ Homepage screenshot saved');
  });

  test('about page screenshot', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    await page.screenshot({ 
      path: 'public/screenshots/test/about.png',
      fullPage: true 
    });
    
    console.log('✓ About page screenshot saved');
  });

});
