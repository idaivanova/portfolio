import { test, expect } from '@playwright/test';

/**
 * Navigation Bug Test
 * Test: From case study -> about page navigation
 */

test('navigate from case study to about page', async ({ page }) => {
  // Start at case study page
  await page.goto('/case-studies/pimcore');
  await page.waitForLoadState('networkidle');
  
  console.log('Starting at:', page.url());
  
  // Find and click the About link in the sidebar
  const sidebarAbout = page.locator('aside a').filter({ hasText: /About/i }).first();
  
  if (await sidebarAbout.isVisible()) {
    const href = await sidebarAbout.getAttribute('href');
    console.log('Sidebar About href:', href);
    
    await sidebarAbout.click();
    await page.waitForLoadState('networkidle');
    console.log('After click, URL:', page.url());
    
    // Check if we're on the about page
    expect(page.url()).toContain('/about');
  } else {
    console.log('Sidebar About link not found, checking footer...');
    
    // Try footer
    const footerAbout = page.locator('footer a').filter({ hasText: /About/i }).first();
    if (await footerAbout.isVisible()) {
      const href = await footerAbout.getAttribute('href');
      console.log('Footer About href:', href);
      
      await footerAbout.click();
      await page.waitForLoadState('networkidle');
      console.log('After footer click, URL:', page.url());
    }
  }
});

test('navigate from homepage header to about', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Find About in header
  const headerAbout = page.locator('header a').filter({ hasText: /about/i }).first();
  
  if (await headerAbout.isVisible()) {
    const href = await headerAbout.getAttribute('href');
    console.log('Header About href:', href);
    
    await headerAbout.click();
    await page.waitForLoadState('networkidle');
    console.log('After click, URL:', page.url());
  }
});
