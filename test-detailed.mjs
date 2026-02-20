import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = '/Users/dinz/Coding Projects/ida portfolio/idas-portfolio/public/screenshots/test';
const BASE_URL = 'http://localhost:3000';

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const results = {
  tests: [],
  consoleErrors: [],
  pagesAnalysis: []
};

const browser = await chromium.launch({ headless: true });

async function analyzePage(urlPath, testName, options = {}) {
  const context = await browser.newContext(options.viewport || {});
  const page = await context.newPage();
  const consoleMessages = [];
  const networkErrors = [];
  
  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text(), url: urlPath });
  });
  
  page.on('pageerror', error => {
    consoleMessages.push({ type: 'pageerror', text: error.message, url: urlPath });
  });
  
  page.on('response', response => {
    if (response.status() >= 400) {
      networkErrors.push({
        url: response.url(),
        status: response.status(),
        page: urlPath
      });
    }
  });
  
  try {
    const fullUrl = BASE_URL + urlPath;
    console.log('\n[TEST] ' + testName);
    console.log('URL: ' + fullUrl);
    
    await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 15000 });
    
    // Wait for React to render
    await page.waitForTimeout(2000);
    
    // Get page info
    const title = await page.title().catch(() => 'No title');
    const bodyText = await page.locator('body').textContent().catch(() => '');
    const hasRootContent = bodyText.length > 100;
    const hasNav = await page.locator('nav, header').count() > 0;
    const hasLinks = await page.locator('a').count() > 0;
    
    // Get all links
    const links = await page.locator('a').all();
    const linkTexts = [];
    for (const link of links.slice(0, 10)) {
      const text = await link.textContent().catch(() => '');
      const href = await link.getAttribute('href').catch(() => '');
      if (text.trim()) linkTexts.push({ text: text.trim().substring(0, 30), href });
    }
    
    const screenshotPath = path.join(SCREENSHOT_DIR, testName + '.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    
    const result = {
      name: testName,
      url: urlPath,
      status: hasRootContent ? 'success' : 'empty',
      title,
      hasContent: hasRootContent,
      hasNav,
      hasLinks,
      linkCount: links.length,
      links: linkTexts,
      screenshot: testName + '.png',
      consoleMessages: consoleMessages.length,
      networkErrors: networkErrors.length,
      viewport: options.viewport?.viewport?.width + 'x' + options.viewport?.viewport?.height || 'default'
    };
    
    results.pagesAnalysis.push(result);
    results.tests.push(result);
    
    // Add to consoleErrors
    consoleMessages.forEach(msg => {
      if (msg.type === 'error' || msg.type === 'pageerror') {
        results.consoleErrors.push(msg);
      }
    });
    
    console.log('✓ Title: ' + title);
    console.log('✓ Has content: ' + hasRootContent + ' (' + bodyText.length + ' chars)');
    console.log('✓ Has nav: ' + hasNav);
    console.log('✓ Links found: ' + links.length);
    console.log('✓ Console messages: ' + consoleMessages.length);
    console.log('✓ Network errors: ' + networkErrors.length);
    console.log('✓ Screenshot: ' + testName + '.png');
    
    await context.close();
    return { page: null, result, links };
    
  } catch (error) {
    const result = {
      name: testName,
      url: urlPath,
      status: 'failed',
      error: error.message,
      consoleMessages: consoleMessages.length,
      networkErrors: networkErrors.length
    };
    results.tests.push(result);
    console.log('✗ Failed: ' + error.message);
    await context.close();
    return { page: null, result, links: [] };
  }
}

async function runTests() {
  console.log('========================================');
  console.log('DETAILED PORTFOLIO TEST SUITE');
  console.log('========================================');
  
  // Test 1-5: Basic page loads
  const pages = [
    { path: '/', name: '01-homepage' },
    { path: '/about', name: '02-about' },
    { path: '/case-studies/pimcore', name: '03-pimcore' },
    { path: '/case-studies/flutter', name: '04-flutter' },
    { path: '/case-studies/buzz', name: '05-buzz' }
  ];
  
  let homepageLinks = [];
  
  for (const { path, name } of pages) {
    const { links } = await analyzePage(path, name);
    if (path === '/') {
      homepageLinks = links;
    }
  }
  
  // Test 6: Navigation test - click About link
  console.log('\n[TEST] 06-nav-click-about');
  const ctx6 = await browser.newContext();
  const page6 = await ctx6.newPage();
  await page6.goto(BASE_URL + '/', { waitUntil: 'networkidle' });
  await page6.waitForTimeout(2000);
  
  const aboutLink = await page6.locator('a[href*="about" i]').first();
  if (await aboutLink.isVisible().catch(() => false)) {
    await aboutLink.click();
    await page6.waitForTimeout(1500);
    await page6.screenshot({ path: path.join(SCREENSHOT_DIR, '06-nav-click-about.png'), fullPage: true });
    const url = page6.url();
    results.tests.push({
      name: '06-nav-click-about',
      status: url.includes('about') ? 'success' : 'partial',
      currentUrl: url,
      screenshot: '06-nav-click-about.png'
    });
    console.log('✓ Clicked About, navigated to: ' + url);
  } else {
    results.tests.push({
      name: '06-nav-click-about',
      status: 'failed',
      error: 'About link not visible'
    });
    console.log('✗ About link not visible');
  }
  await ctx6.close();
  
  // Test 7: Mobile viewport
  await analyzePage('/', '07-mobile', {
    viewport: {
      viewport: { width: 375, height: 667 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
    }
  });
  
  // Print summary
  console.log('\n========================================');
  console.log('TEST SUMMARY');
  console.log('========================================');
  
  const successful = results.tests.filter(t => t.status === 'success').length;
  const failed = results.tests.filter(t => t.status === 'failed').length;
  const empty = results.tests.filter(t => t.status === 'empty').length;
  
  console.log('\nTotal Tests: ' + results.tests.length);
  console.log('Successful: ' + successful);
  console.log('Failed: ' + failed);
  console.log('Empty (no content): ' + empty);
  
  console.log('\n--- Pages Analysis ---');
  results.pagesAnalysis.forEach(p => {
    console.log('\n' + p.name + ':');
    console.log('  Title: ' + p.title);
    console.log('  Has content: ' + p.hasContent);
    console.log('  Has nav: ' + p.hasNav);
    console.log('  Links: ' + p.linkCount);
    if (p.links && p.links.length > 0) {
      console.log('  Link texts: ' + p.links.map(l => l.text).join(', '));
    }
  });
  
  console.log('\n--- Console Errors ---');
  if (results.consoleErrors.length === 0) {
    console.log('No console errors! ✓');
  } else {
    results.consoleErrors.forEach((err, i) => {
      if (i < 10) {
        console.log('[' + err.type + '] ' + err.url + ': ' + err.text.substring(0, 80));
      }
    });
    if (results.consoleErrors.length > 10) {
      console.log('... and ' + (results.consoleErrors.length - 10) + ' more');
    }
  }
  
  console.log('\n--- Screenshots ---');
  results.tests.filter(t => t.screenshot).forEach(t => {
    console.log(t.name + ': ' + t.screenshot);
  });
  
  fs.writeFileSync(
    path.join(SCREENSHOT_DIR, 'detailed-results.json'),
    JSON.stringify(results, null, 2)
  );
  
  await browser.close();
  console.log('\n✓ All tests completed!');
}

runTests().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
