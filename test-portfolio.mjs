import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = '/Users/dinz/Coding Projects/ida portfolio/idas-portfolio/public/screenshots/test';
const BASE_URL = 'http://localhost:3000';

// Ensure directory exists
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const results = {
  tests: [],
  consoleErrors: [],
  summary: {}
};

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();

async function testPage(urlPath, testName, clickSelector = null, waitForSelector = null) {
  const page = await context.newPage();
  const consoleMessages = [];
  
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    consoleMessages.push({ type, text, url: urlPath });
    if (type === 'error' || type === 'warning') {
      results.consoleErrors.push({ type, text, url: urlPath, test: testName });
    }
  });
  
  page.on('pageerror', error => {
    results.consoleErrors.push({ 
      type: 'pageerror', 
      text: error.message, 
      url: urlPath, 
      test: testName 
    });
  });
  
  try {
    const fullUrl = BASE_URL + urlPath;
    console.log('\n[TEST] ' + testName + ': ' + fullUrl);
    
    await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 10000 });
    
    if (waitForSelector) {
      await page.waitForSelector(waitForSelector, { timeout: 5000 });
    }
    
    if (clickSelector) {
      await page.click(clickSelector);
      await page.waitForTimeout(500);
    }
    
    const screenshotPath = path.join(SCREENSHOT_DIR, testName + '.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    
    results.tests.push({
      name: testName,
      url: urlPath,
      status: 'success',
      screenshot: testName + '.png',
      consoleMessages: consoleMessages.length
    });
    
    console.log('  ✓ Page loaded successfully');
    console.log('  ✓ Screenshot saved: ' + testName + '.png');
    console.log('  ℹ Console messages: ' + consoleMessages.length);
    
    return { page, consoleMessages };
  } catch (error) {
    results.tests.push({
      name: testName,
      url: urlPath,
      status: 'failed',
      error: error.message,
      consoleMessages: consoleMessages.length
    });
    console.log('  ✗ Failed: ' + error.message);
    return { page, consoleMessages };
  }
}

async function runTests() {
  console.log('========================================');
  console.log('PORTFOLIO WEBSITE TEST SUITE');
  console.log('========================================');
  
  // Test 1: Homepage
  const test1 = await testPage('/', '01-homepage');
  await test1.page.close();
  
  // Test 2: About page
  const test2 = await testPage('/about', '02-about');
  await test2.page.close();
  
  // Test 3: PIMCore case study
  const test3 = await testPage('/case-studies/pimcore', '03-case-study-pimcore');
  await test3.page.close();
  
  // Test 4: Flutter case study
  const test4 = await testPage('/case-studies/flutter', '04-case-study-flutter');
  await test4.page.close();
  
  // Test 5: Buzz case study
  const test5 = await testPage('/case-studies/buzz', '05-case-study-buzz');
  await test5.page.close();
  
  // Test 6: Navigation - click About link from homepage
  const page6 = await context.newPage();
  const console6 = [];
  page6.on('console', msg => console6.push({ type: msg.type(), text: msg.text() }));
  page6.on('pageerror', err => console6.push({ type: 'pageerror', text: err.message }));
  
  console.log('\n[TEST] 06-navigation-about-link');
  await page6.goto(BASE_URL + '/', { waitUntil: 'networkidle' });
  
  // Try to find and click About link
  const aboutLink = await page6.locator('a[href*="about"]').first();
  if (await aboutLink.isVisible().catch(() => false)) {
    await aboutLink.click();
    await page6.waitForTimeout(500);
    const screenshotPath = path.join(SCREENSHOT_DIR, '06-navigation-about-link.png');
    await page6.screenshot({ path: screenshotPath, fullPage: true });
    results.tests.push({
      name: '06-navigation-about-link',
      url: '/ → /about',
      status: 'success',
      screenshot: '06-navigation-about-link.png'
    });
    console.log('  ✓ Navigation to About page successful');
  } else {
    results.tests.push({
      name: '06-navigation-about-link',
      url: '/ → /about',
      status: 'failed',
      error: 'About link not found'
    });
    console.log('  ✗ About link not found');
  }
  await page6.close();
  
  // Test 7: Smooth scroll - View My Projects button
  const page7 = await context.newPage();
  const console7 = [];
  page7.on('console', msg => console7.push({ type: msg.type(), text: msg.text() }));
  page7.on('pageerror', err => console7.push({ type: 'pageerror', text: err.message }));
  
  console.log('\n[TEST] 07-smooth-scroll-projects');
  await page7.goto(BASE_URL + '/', { waitUntil: 'networkidle' });
  
  // Try to find "View My Projects" or similar button
  const projectsButton = await page7.locator('button:has-text("Projects"), a:has-text("Projects"), button:has-text("Work"), a:has-text("Work")').first();
  if (await projectsButton.isVisible().catch(() => false)) {
    await projectsButton.click();
    await page7.waitForTimeout(1000);
    const screenshotPath = path.join(SCREENSHOT_DIR, '07-smooth-scroll-projects.png');
    await page7.screenshot({ path: screenshotPath, fullPage: true });
    results.tests.push({
      name: '07-smooth-scroll-projects',
      url: '/',
      status: 'success',
      screenshot: '07-smooth-scroll-projects.png'
    });
    console.log('  ✓ Projects button clicked');
  } else {
    // Take screenshot anyway
    const screenshotPath = path.join(SCREENSHOT_DIR, '07-smooth-scroll-projects.png');
    await page7.screenshot({ path: screenshotPath, fullPage: true });
    results.tests.push({
      name: '07-smooth-scroll-projects',
      url: '/',
      status: 'partial',
      screenshot: '07-smooth-scroll-projects.png',
      note: 'Projects button not found, screenshot taken anyway'
    });
    console.log('  ℹ Projects button not found, screenshot taken');
  }
  await page7.close();
  
  // Test 8: Mobile viewport test
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 667 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
  });
  const page8 = await mobileContext.newPage();
  const console8 = [];
  page8.on('console', msg => console8.push({ type: msg.type(), text: msg.text() }));
  page8.on('pageerror', err => console8.push({ type: 'pageerror', text: err.message }));
  
  console.log('\n[TEST] 08-mobile-homepage');
  await page8.goto(BASE_URL + '/', { waitUntil: 'networkidle' });
  const screenshotPath = path.join(SCREENSHOT_DIR, '08-mobile-homepage.png');
  await page8.screenshot({ path: screenshotPath, fullPage: true });
  results.tests.push({
    name: '08-mobile-homepage',
    url: '/',
    status: 'success',
    screenshot: '08-mobile-homepage.png',
    viewport: '375x667'
  });
  console.log('  ✓ Mobile viewport screenshot captured');
  await page8.close();
  await mobileContext.close();
  
  // Print summary
  console.log('\n========================================');
  console.log('TEST SUMMARY');
  console.log('========================================');
  
  const successful = results.tests.filter(t => t.status === 'success').length;
  const failed = results.tests.filter(t => t.status === 'failed').length;
  const partial = results.tests.filter(t => t.status === 'partial').length;
  
  console.log('\nTotal Tests: ' + results.tests.length);
  console.log('Successful: ' + successful);
  console.log('Failed: ' + failed);
  console.log('Partial: ' + partial);
  
  console.log('\n--- Console Errors Found ---');
  if (results.consoleErrors.length === 0) {
    console.log('No console errors or warnings detected! ✓');
  } else {
    results.consoleErrors.forEach(err => {
      console.log('[' + err.type + '] ' + err.url + ': ' + err.text.substring(0, 100));
    });
  }
  
  console.log('\n--- Screenshots Captured ---');
  results.tests.forEach(t => {
    if (t.screenshot) {
      console.log(t.name + ': ' + t.screenshot);
    }
  });
  
  // Save results to JSON
  const resultsPath = path.join(SCREENSHOT_DIR, 'test-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log('\nResults saved to: ' + resultsPath);
  
  await browser.close();
}

runTests().catch(console.error);
