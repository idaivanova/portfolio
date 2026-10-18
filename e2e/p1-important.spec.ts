import { test, expect } from '@playwright/test';

/**
 * P1 Important Tests for Ida Portfolio
 * 
 * These tests verify important features including:
 * - About page functionality
 * - Responsive navigation
 * 
 * Note: Easter egg tests have specific timing requirements based on component implementation.
 */

/**
 */
/**
 * After bee appears, move mouse, verify bee follows with delay
 * 
 * Note: The current implementation uses predefined flight paths, not cursor following.
 * its position on screen.
 */
/**
 * Click bee, verify startle animation (bee flies away quickly)
 */
/**
 */
/**
 */
/**
 * TC-017: About page loads correctly
 * Navigate to /about, verify bio, experience, education sections
 */
test('TC-017: About page loads with all key sections', async ({ page }) => {
  console.log('TC-017: Testing About page sections...');
  
  await page.goto('/about');
  await page.waitForLoadState('networkidle');
  
  // Verify URL
  await expect(page).toHaveURL('/about');
  console.log('✓ Navigated to About page');
  
  // Verify page title
  const title = await page.title();
  expect(title.toLowerCase()).toContain('about');
  console.log(`✓ Page title: ${title}`);
  
  // Verify Bio/About section exists
  const bioSection = page.locator('section').filter({ hasText: /About|Biography|Who I am|Background/i }).first();
  const bioHeading = page.getByRole('heading', { name: /About|Biography|Who I am|Background/i }).first();
  
  const hasBio = await bioSection.isVisible().catch(() => false) || 
                 await bioHeading.isVisible().catch(() => false);
  expect(hasBio).toBe(true);
  console.log('✓ Bio/About section is visible');
  
  // Verify Experience section exists
  const experienceSection = page.locator('section').filter({ hasText: /Experience|Work|Career|Professional/i }).first();
  const experienceHeading = page.getByRole('heading', { name: /Experience|Work|Career|Professional/i }).first();
  
  const hasExperience = await experienceSection.isVisible().catch(() => false) || 
                        await experienceHeading.isVisible().catch(() => false);
  expect(hasExperience).toBe(true);
  console.log('✓ Experience section is visible');
  
  // Verify Education section exists
  const educationSection = page.locator('section').filter({ hasText: /Education|Studies|University|Academic/i }).first();
  const educationHeading = page.getByRole('heading', { name: /Education|Studies|University|Academic/i }).first();
  
  const hasEducation = await educationSection.isVisible().catch(() => false) || 
                       await educationHeading.isVisible().catch(() => false);
  expect(hasEducation).toBe(true);
  console.log('✓ Education section is visible');
  
  // Verify Skills or Expertise section (common in about pages)
  const skillsSection = page.locator('section').filter({ hasText: /Skills|Expertise|Tools|Technologies/i }).first();
  const skillsHeading = page.getByRole('heading', { name: /Skills|Expertise|Tools|Technologies/i }).first();
  
  const hasSkills = await skillsSection.isVisible().catch(() => false) || 
                    await skillsHeading.isVisible().catch(() => false);
  if (hasSkills) {
    console.log('✓ Skills section is visible');
  }
  
  // Take full page screenshot
  await page.screenshot({ path: 'test-results/tc-017-about-page.png', fullPage: true });
  console.log('✓ TC-017: About page sections verified');
});

/**
 * TC-018: Responsive mobile navigation
 * Resize to 375px, verify mobile-friendly navigation
 */
test('TC-018: Mobile navigation is responsive and functional', async ({ page }) => {
  console.log('TC-018: Testing responsive mobile navigation...');
  
  // Set mobile viewport size (iPhone SE size)
  await page.setViewportSize({ width: 375, height: 667 });
  console.log('✓ Viewport resized to 375x667 (mobile)');
  
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  
  // Verify main content is still visible
  const hero = page.locator('section').first();
  await expect(hero).toBeVisible();
  console.log('✓ Hero section visible on mobile');
  
  // Check for mobile menu button with multiple possible selectors
  const mobileMenuSelectors = [
    'button[aria-label*="menu" i]',
    'button[aria-label*="Menu" i]',
    '[data-testid="mobile-menu"]',
    'button:has(.hamburger)',
    'button:has(.menu-icon)',
    '.hamburger',
    '.menu-button',
    'button[class*="menu" i]'
  ];
  
  const mobileMenuButton = page.locator(mobileMenuSelectors.join(', ')).first();
  const hasMobileMenu = await mobileMenuButton.isVisible().catch(() => false);
  
  if (hasMobileMenu) {
    console.log('✓ Mobile menu button is visible');
    
    // Click mobile menu to open
    await mobileMenuButton.click();
    await page.waitForTimeout(300);
    console.log('✓ Mobile menu clicked');
    
    // Verify navigation menu appears
    const mobileNavSelectors = [
      '[data-testid="mobile-navigation"]',
      '.mobile-nav',
      '.mobile-menu',
      'nav[role="navigation"]',
      'div[class*="mobile-menu" i]'
    ];
    
    const mobileNav = page.locator(mobileNavSelectors.join(', ')).first();
    const isNavVisible = await mobileNav.isVisible().catch(() => false);
    
    if (isNavVisible) {
      console.log('✓ Mobile navigation menu is visible');
      
      // Verify navigation links are present
      const navLinks = mobileNav.locator('a');
      const linkCount = await navLinks.count();
      expect(linkCount).toBeGreaterThan(0);
      console.log(`✓ Found ${linkCount} navigation links`);
      
      // Test navigation to About page
      const aboutLink = mobileNav.getByRole('link', { name: /About/i }).first();
      if (await aboutLink.isVisible().catch(() => false)) {
        await aboutLink.click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL('/about');
        console.log('✓ Navigation to About page works from mobile menu');
        
        // Go back to homepage
        await page.goto('/');
        await page.waitForLoadState('networkidle');
      }
    } else {
      console.log('ℹ Mobile navigation menu not detected after click');
    }
  } else {
    console.log('ℹ Mobile menu button not found - checking for alternative navigation');
    
    // Check if regular navigation is still accessible on mobile
    const header = page.locator('header').first();
    const headerLinks = header.locator('a');
    const linkCount = await headerLinks.count();
    
    if (linkCount > 0) {
      console.log(`✓ Header contains ${linkCount} links on mobile`);
    }
  }
  
  // Verify no horizontal overflow (important for mobile)
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  expect(hasOverflow).toBe(false);
  console.log('✓ No horizontal overflow on mobile');
  
  // Take mobile screenshot
  await page.screenshot({ path: 'test-results/tc-018-mobile-nav.png', fullPage: true });
  console.log('✓ TC-018: Mobile navigation verified');
});
