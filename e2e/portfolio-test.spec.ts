import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Comprehensive Portfolio Website Test
 * 
 * Tests:
 * 1. Homepage screenshot
 * 3. About page
 * 5. Project card navigation
 * 6. Console error checking
 */

// Create screenshots directory
const screenshotsDir = path.join(process.cwd(), 'public', 'screenshots', 'test');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const APP_ORIGIN = 'http://localhost:3000';

// Only errors the app itself authored should fail the console check.
// `msg.location().url` carries a console error's source, so a cross-origin entry
// came from something the page *embedded* — today the YouTube player on
// /case-studies/pimcore/studio-extensions, which reaches out to
// googleads.g.doubleclick.net and static.doubleclick.net/instream. That is
// environmental third-party noise, not an app defect.
// Not a blanket "ignore console errors" filter: errors from the app origin still
// fail, and so do uncaught exceptions, which carry no source URL at all.
function isAppAuthored(sourceUrl: string | undefined): boolean {
  if (!sourceUrl) return true; // no source -> an exception in app code
  return sourceUrl.startsWith(APP_ORIGIN);
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
        // See isAppAuthored — third-party embeds are logged, not failed on.
        if (isAppAuthored(msg.location().url)) {
          consoleErrors.push(text);
          console.log(`❌ Console Error: ${text}`);
        } else {
          console.log(`⚠️ Ignored third-party error (${msg.location().url}): ${text}`);
        }
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

  test('6. Project card navigation test', async ({ page }) => {
    console.log('\n🔗 Testing project card navigation...');

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Target the real project cards in the #projects section. A bare
    // `a[href*="/case-studies/"]` also matches the left-rail nav links, and
    // below `md` the rail is hidden — so index 0 was an invisible link on
    // mobile and the click hung.
    const cards = page.locator('#projects a[href^="/case-studies/"]');
    const cardCount = await cards.count();
    console.log(`   Found ${cardCount} project cards in #projects`);
    expect(cardCount).toBeGreaterThanOrEqual(3);

    for (let i = 0; i < cardCount; i++) {
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const card = cards.nth(i);
      const href = await card.getAttribute('href');
      console.log(`   Testing card ${i + 1}: href=${href}`);

      // Card is reachable and not covered by anything
      await expect(card).toBeVisible();
      await card.click();
      await page.waitForURL((url) => url.pathname.startsWith('/case-studies/'));
      await page.waitForLoadState('networkidle');

      const newUrl = page.url();
      console.log(`   ✅ Navigation successful to: ${newUrl}`);
      // Landed on the route the card advertised, with real content
      expect(newUrl).toContain(href!);
      await expect(page.locator('h1').first()).toBeVisible();
    }

    expect(cardCount).toBeGreaterThanOrEqual(3);
    console.log(`   Total cards tested: ${cardCount}`);
  });

  test('7. Console error check', async ({ page }) => {
    console.log('\n🔍 Checking for console errors...');
    
    // Navigate through all main pages to collect errors
    const pages = ['/', '/about', '/case-studies/pimcore', '/case-studies/pimcore/studio-extensions'];
    
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
