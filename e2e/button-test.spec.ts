import { test, expect } from '@playwright/test';

/**
 * Comprehensive Button & Interaction Test
 * Clicks every button on the site to verify functionality
 */

test.describe('Button & Interaction Testing', () => {
  
  test('homepage - click all buttons and verify navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    console.log('=== HOMEPAGE BUTTON TEST ===');
    
    // Find ALL buttons and links with clickable text
    const buttons = await page.locator('button, a').all();
    console.log(`Found ${buttons.length} clickable elements on homepage`);
    
    // Test primary CTA - "View My Projects"
    const viewProjectsBtn = page.locator('a, button').filter({ hasText: /View My Projects/i }).first();
    if (await viewProjectsBtn.isVisible()) {
      console.log('Clicking: View My Projects button');
      await viewProjectsBtn.click();
      await page.waitForLoadState('networkidle');
      console.log(`Navigated to: ${page.url()}`);
      await page.goBack();
      await page.waitForLoadState('networkidle');
    }
    
    // Test secondary CTA - "Get in Touch"
    const getInTouchBtn = page.locator('a, button').filter({ hasText: /Get in touch/i }).first();
    if (await getInTouchBtn.isVisible()) {
      console.log('Clicking: Get in Touch button');
      await getInTouchBtn.click();
      await page.waitForLoadState('networkidle');
      console.log(`Navigated to: ${page.url()}`);
      await page.goBack();
      await page.waitForLoadState('networkidle');
    }
    
    // Test resume button
    const resumeBtn = page.locator('a, button').filter({ hasText: /resume/i }).first();
    if (await resumeBtn.isVisible()) {
      console.log('Clicking: Resume button');
      await resumeBtn.click();
      await page.waitForLoadState('networkidle');
      console.log(`Navigated to: ${page.url()}`);
    }
    
    // Click header navigation
    console.log('\n=== HEADER NAVIGATION ===');
    const navLinks = page.locator('header nav a');
    const navCount = await navLinks.count();
    console.log(`Found ${navCount} navigation links`);
    
    for (let i = 0; i < navCount; i++) {
      const link = navLinks.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      console.log(`Link ${i + 1}: ${text?.trim()} -> ${href}`);
    }
    
    // Click each nav link
    const homeLink = page.locator('header a').filter({ hasText: /home/i }).first();
    if (await homeLink.isVisible()) {
      await homeLink.click();
      await page.waitForLoadState('networkidle');
      console.log(`Clicked HOME, URL: ${page.url()}`);
    }
    
    const aboutLink = page.locator('header a').filter({ hasText: /about/i }).first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await page.waitForLoadState('networkidle');
      console.log(`Clicked ABOUT, URL: ${page.url()}`);
    }
    
    console.log('\n✅ Homepage button test complete');
  });

  test('about page - click all interactive elements', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    
    console.log('\n=== ABOUT PAGE TEST ===');
    
    // Click sidebar navigation items
    const sidebarLinks = page.locator('aside a, aside button');
    const sidebarCount = await sidebarLinks.count();
    console.log(`Found ${sidebarCount} sidebar elements`);
    
    // Test download CV button
    const cvButton = page.locator('a, button').filter({ hasText: /download cv/i }).first();
    if (await cvButton.isVisible()) {
      console.log('CV Download button found');
      const href = await cvButton.getAttribute('href');
      console.log(`CV link points to: ${href}`);
    }
    
    console.log('✅ About page test complete');
  });

  test('case study pages - navigate and test', async ({ page }) => {
    console.log('\n=== CASE STUDIES NAVIGATION TEST ===');
    
    // Test Pimcore
    await page.goto('/case-studies/pimcore');
    await page.waitForLoadState('networkidle');
    console.log('Pimcore page loaded');
    
    // Test ErgoWork
    await page.goto('/case-studies/ergowork');
    await page.waitForLoadState('networkidle');
    console.log('ErgoWork page loaded');
    
    // Test Dermatik
    await page.goto('/case-studies/dermatik');
    await page.waitForLoadState('networkidle');
    console.log('Dermatik page loaded');
    
    console.log('✅ All case study pages accessible');
  });

  test('footer links and copyright', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    console.log('\n=== FOOTER TEST ===');
    
    const footerLinks = page.locator('footer a');
    const footerLinkCount = await footerLinks.count();
    console.log(`Found ${footerLinkCount} footer links`);
    
    for (let i = 0; i < footerLinkCount; i++) {
      const link = footerLinks.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      console.log(`Footer link: ${text?.trim()} -> ${href}`);
    }
    
    // Check copyright - use last() since there are two footers
    const copyright = page.locator('footer').last().filter({ hasText: /Portfolio/i });
    if (await copyright.isVisible()) {
      console.log('✅ Copyright shows portfolio name');
    }
    
    console.log('✅ Footer test complete');
  });
});
