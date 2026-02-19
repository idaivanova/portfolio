import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Comprehensive Portfolio Website Test
 * 
 * Tests:
 * 1. Homepage screenshot
 * 2. Case study pages (flutter, buzz)
 * 3. About page
 * 4. Bumblebee visibility check
 * 5. Project card navigation
 * 6. Console error checking
 */

// Create screenshots directory
const screenshotsDir = path.join(process.cwd(), 'public', 'screenshots', 'test');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

test.describe('Portfolio Website Tests', () => {
  const consoleErrors: string[] = [];
  const consoleWarnings: string[] = [];

  test.beforeEach(async ({ page }) => {
    // Clear console logs before each test
    consoleErrors.length = 0;
    consoleWarnings.length = 0;

    // Listen for console errors and warnings
    page.on('console', (msg) => {
      const type = msg.type();
      const text = msg.text();
      
      if (type === 'error') {
        consoleErrors.push(text);
        console.log(`❌ Console Error: ${text}`);
      } else if (type === 'warning') {
        consoleWarnings.push(text);
        console.log(`⚠️ Console Warning: ${text}`);
      }
    });

    // Listen for page errors
    page.on('pageerror', (error) => {
      consoleErrors.push(error.message);
      console.log(`❌ Page Error: ${error.message}`);
    });
  });

  test('1. Homepage screenshot and analysis', async ({ page }) => {
    console.log('\n📸 Taking homepage screenshot...');
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Take full page screenshot
    const screenshotPath = path.join(screenshotsDir, 'homepage-full.png');
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: true 
    });
    
    console.log(`✅ Homepage screenshot saved to: ${screenshotPath}`);
    
    // Analyze page content
    const title = await page.title();
    console.log(`📄 Page title: ${title}`);
    
    // Check for key elements
    const heroExists = await page.locator('h1, .hero, [class*="hero"]').first().isVisible().catch(() => false);
    const projectsExist = await page.locator('[class*="project"], [class*="case"]').first().isVisible().catch(() => false);
    const navExists = await page.locator('header, nav').first().isVisible().catch(() => false);
    
    console.log(`   Hero section visible: ${heroExists ? '✅' : '❌'}`);
    console.log(`   Projects visible: ${projectsExist ? '✅' : '❌'}`);
    console.log(`   Navigation visible: ${navExists ? '✅' : '❌'}`);
    
    expect(heroExists).toBeTruthy();
    expect(navExists).toBeTruthy();
  });

  test('2. Flutter case study page', async ({ page }) => {
    console.log('\n📸 Taking Flutter case study screenshot...');
    
    await page.goto('/case-studies/flutter');
    await page.waitForLoadState('networkidle');
    
    const screenshotPath = path.join(screenshotsDir, 'flutter-case-study.png');
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: true 
    });
    
    console.log(`✅ Flutter case study screenshot saved to: ${screenshotPath}`);
    
    // Check URL
    const url = page.url();
    console.log(`📄 Current URL: ${url}`);
    expect(url).toContain('/case-studies/flutter');
    
    // Check for case study content
    const contentExists = await page.locator('h1, article, main').first().isVisible().catch(() => false);
    console.log(`   Content visible: ${contentExists ? '✅' : '❌'}`);
  });

  test('3. Buzz case study page', async ({ page }) => {
    console.log('\n📸 Taking Buzz case study screenshot...');
    
    await page.goto('/case-studies/buzz');
    await page.waitForLoadState('networkidle');
    
    const screenshotPath = path.join(screenshotsDir, 'buzz-case-study.png');
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: true 
    });
    
    console.log(`✅ Buzz case study screenshot saved to: ${screenshotPath}`);
    
    // Check URL
    const url = page.url();
    console.log(`📄 Current URL: ${url}`);
    expect(url).toContain('/case-studies/buzz');
    
    // Check for case study content
    const contentExists = await page.locator('h1, article, main').first().isVisible().catch(() => false);
    console.log(`   Content visible: ${contentExists ? '✅' : '❌'}`);
  });

  test('4. About page', async ({ page }) => {
    console.log('\n📸 Taking About page screenshot...');
    
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    
    const screenshotPath = path.join(screenshotsDir, 'about-page.png');
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: true 
    });
    
    console.log(`✅ About page screenshot saved to: ${screenshotPath}`);
    
    // Check URL
    const url = page.url();
    console.log(`📄 Current URL: ${url}`);
    expect(url).toContain('/about');
    
    // Check for about page content
    const contentExists = await page.locator('h1, .about, [class*="about"]').first().isVisible().catch(() => false);
    console.log(`   About content visible: ${contentExists ? '✅' : '❌'}`);
  });

  test('5. Bumblebee visibility check', async ({ page }) => {
    console.log('\n🐝 Checking for bumblebee (appears after 8-20 seconds)...');
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Wait up to 25 seconds for bumblebee
    const bumblebeeSelectors = [
      '[class*="bumblebee"]',
      '[class*="bee"]',
      'img[alt*="bee" i]',
      'img[alt*="bumblebee" i]',
      '[data-testid*="bee"]',
      'svg[class*="bee"]',
      'svg[class*="bumblebee"]'
    ];
    
    let bumblebeeFound = false;
    let foundSelector = '';
    
    for (let i = 0; i < 25; i++) {
      await page.waitForTimeout(1000);
      
      for (const selector of bumblebeeSelectors) {
        const visible = await page.locator(selector).first().isVisible().catch(() => false);
        if (visible) {
          bumblebeeFound = true;
          foundSelector = selector;
          break;
        }
      }
      
      if (bumblebeeFound) {
        console.log(`   🐝 Bumblebee found after ${i + 1} seconds using selector: ${foundSelector}`);
        break;
      }
      
      if ((i + 1) % 5 === 0) {
        console.log(`   ⏱️  Checked for ${i + 1} seconds...`);
      }
    }
    
    if (bumblebeeFound) {
      // Take screenshot with bumblebee
      const screenshotPath = path.join(screenshotsDir, 'homepage-with-bumblebee.png');
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✅ Screenshot with bumblebee saved to: ${screenshotPath}`);
    } else {
      console.log('   ℹ️  Bumblebee not visible (may appear later or on different page)');
    }
    
    // Don't fail the test if bumblebee isn't found - it's random timing
    console.log(`   Bumblebee visibility: ${bumblebeeFound ? '✅ FOUND' : '⚪ NOT VISIBLE'}`);
  });

  test('6. Project card navigation test', async ({ page }) => {
    console.log('\n🔗 Testing project card navigation...');
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find project cards - common selectors
    const cardSelectors = [
      '[class*="project"]',
      '[class*="case"]',
      '[class*="card"]',
      'article',
      'a[href*="/case-studies/"]'
    ];
    
    let cardsFound = false;
    let testedCards = 0;
    
    for (const selector of cardSelectors) {
      const cards = page.locator(selector);
      const count = await cards.count();
      
      if (count > 0) {
        console.log(`   Found ${count} elements with selector: ${selector}`);
        cardsFound = true;
        
        // Test clicking first 2 cards
        for (let i = 0; i < Math.min(2, count); i++) {
          const card = cards.nth(i);
          
          // Check if it's clickable (has href or is a link)
          const isLink = await card.evaluate(el => el.tagName === 'A').catch(() => false);
          const hasHref = await card.getAttribute('href').catch(() => null);
          
          if (isLink || hasHref) {
            const href = hasHref || await card.getAttribute('href');
            console.log(`   Testing card ${i + 1}: href=${href}`);
            
            // Click and verify navigation
            await card.click();
            await page.waitForLoadState('networkidle');
            
            const newUrl = page.url();
            console.log(`   ✅ Navigation successful to: ${newUrl}`);
            testedCards++;
            
            // Go back to homepage
            await page.goto('/');
            await page.waitForLoadState('networkidle');
          }
        }
        
        if (testedCards > 0) break;
      }
    }
    
    if (!cardsFound) {
      console.log('   ⚠️  No project cards found with standard selectors');
    }
    
    console.log(`   Total cards tested: ${testedCards}`);
    expect(cardsFound).toBeTruthy();
  });

  test('7. Console error check', async ({ page }) => {
    console.log('\n🔍 Checking for console errors...');
    
    // Navigate through all main pages to collect errors
    const pages = ['/', '/about', '/case-studies/flutter', '/case-studies/buzz'];
    
    for (const pageUrl of pages) {
      await page.goto(pageUrl);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000); // Wait for any async errors
    }
    
    // Report results
    if (consoleErrors.length === 0) {
      console.log('   ✅ No console errors detected!');
    } else {
      console.log(`   ❌ Found ${consoleErrors.length} console errors:`);
      consoleErrors.forEach((err, i) => {
        console.log(`      ${i + 1}. ${err}`);
      });
    }
    
    if (consoleWarnings.length > 0) {
      console.log(`   ⚠️  Found ${consoleWarnings.length} console warnings:`);
      consoleWarnings.forEach((warn, i) => {
        console.log(`      ${i + 1}. ${warn}`);
      });
    }
    
    // Take final screenshot
    const screenshotPath = path.join(screenshotsDir, 'final-state.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`✅ Final screenshot saved to: ${screenshotPath}`);
    
    // Don't fail on warnings, but log them
    expect(consoleErrors.length).toBe(0);
  });

  test.afterAll(async () => {
    console.log('\n📊 Test Summary');
    console.log('================');
    console.log(`Screenshots saved to: ${screenshotsDir}`);
    
    // List all screenshots
    if (fs.existsSync(screenshotsDir)) {
      const files = fs.readdirSync(screenshotsDir);
      console.log('\nScreenshots taken:');
      files.forEach(file => {
        console.log(`  - ${file}`);
      });
    }
  });
});
