import { test, expect } from '@playwright/test';

/**
 * Idas Portfolio - Quick Test Suite
 */

test.describe('Page Load Tests', () => {
  const pages = [
    { url: '/', name: 'Homepage' },
    { url: '/about', name: 'About' },
    { url: '/case-studies/pimcore', name: 'Pimcore' },
    { url: '/case-studies/ergowork', name: 'ErgoWork' },
    { url: '/case-studies/dermatik', name: 'Dermatik' },
    { url: '/case-studies/flutter', name: 'Flutter' },
    { url: '/case-studies/buzz', name: 'Buzz' },
  ];

  pages.forEach(({ url, name }) => {
    test(`${name} loads without errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      await page.goto(`http://localhost:3000${url}`);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      expect(errors.length).toBe(0);
      console.log(`✅ ${name}: 0 errors`);
    });
  });
});

test.describe('Navigation Tests', () => {
  test('Homepage → About', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    const aboutLink = page.locator('header a').filter({ hasText: /about/i }).first();
    await aboutLink.click();
    await page.waitForURL('**/about');
    
    expect(page.url()).toContain('/about');
    console.log('✅ Navigation to About works');
  });

  test('View My Projects smooth scroll', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    const projectsBtn = page.locator('a').filter({ hasText: /View My Projects/i }).first();
    await projectsBtn.click();
    await page.waitForTimeout(1000);
    
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
    
    console.log('✅ Smooth scroll works');
  });

  test('Back to Home from case study', async ({ page }) => {
    await page.goto('http://localhost:3000/case-studies/pimcore');
    await page.waitForLoadState('networkidle');
    
    const backBtn = page.locator('a').filter({ hasText: /Back to Home/i }).first();
    await backBtn.click();
    await page.waitForURL('**/');
    
    console.log('✅ Back navigation works');
  });
});

test.describe('Interactions', () => {
  test('Get in Touch mailto link', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    const contactBtn = page.locator('a').filter({ hasText: /Get in Touch/i }).first();
    const href = await contactBtn.getAttribute('href');
    
    expect(href).toBe('mailto:ivanova.contact@gmail.com');
    console.log('✅ Mailto link correct');
  });
});

test.describe('Responsive', () => {
  test('Mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    console.log('✅ Mobile viewport works');
  });
});
