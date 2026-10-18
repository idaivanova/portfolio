import { test, expect, type Page } from '@playwright/test';

/**
 * P2 Extended Tests for Ida Portfolio
 * 
 * These tests verify:
 * - Playground pages load correctly
 * - Additional case study pages
 */

// Helper function to wait for page to be fully loaded
async function waitForPageReady(page: Page) {
  await page.waitForLoadState('networkidle');
  // Additional wait for any animations to settle
  await page.waitForTimeout(500);
}

/**
 */
/**
 * Wait 15-30 seconds, verify bee flies from edge to edge
 * 
 * at 30-90s intervals. This test waits and monitors for the flight animation.
 */
/**
 */
/**
 */
/**
 */
/**
 * TC-024: All playground pages load without errors
 * Test all playground pages load successfully
 */
test('TC-024: All playground pages load successfully', async ({ page }) => {
  console.log('TC-024: Testing all playground pages...');
  
  const playgroundPages = [
    { path: '/playground/theme-builder', name: 'Theme Builder' },
    { path: '/case-studies/sdzrn', name: 'SDZRN' },
  ];
  
  for (const playground of playgroundPages) {
    console.log(`Testing ${playground.name} playground...`);
    
    await page.goto(playground.path);
    await waitForPageReady(page);
    
    // Verify URL contains the path
    await expect(page).toHaveURL(new RegExp(playground.path.replace(/\//g, '\\/')));
    
    // Verify main content is visible
    const mainContent = page.locator('main, article, section').first();
    await expect(mainContent).toBeVisible();
    
    // Verify heading exists
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
    
    console.log(`✓ ${playground.name} playground loaded successfully`);
  }
  
  console.log('✓ TC-024: All playground pages verified');
});
