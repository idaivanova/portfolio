import { test, expect, type Page, type Locator, type ConsoleMessage } from '@playwright/test';

/**
 * P0 Critical Tests for Ida Portfolio
 * These tests verify the most essential functionality of the application
 */

// Store console messages to check for errors
const consoleMessages: ConsoleMessage[] = [];

// Track console errors
function trackConsoleErrors(page: Page) {
  consoleMessages.length = 0; // Clear previous messages
  page.on('console', (msg) => {
    consoleMessages.push(msg);
  });
  page.on('pageerror', (error) => {
    console.log(`Page error: ${error.message}`);
  });
}

// Helper function to get all visible case study links from sidebar
async function getSidebarProjectLinks(page: Page) {
  const links = await page.locator('[data-testid="sidebar-link"], .sidebar-link, a[href^="/case-studies/"]').all();
  return links;
}

/**
 * The app reads `theme` and `ida-portfolio-language` out of localStorage on its
 * very first render and writes them back on every mount. A test that just calls
 * page.goto() therefore inherits whatever the browser reported — Chromium's
 * default prefers-color-scheme is "light", so "toggle to light" tests used to
 * toggle *away* from light. Seed both keys, then navigate: the next load starts
 * from a state the test chose.
 */
async function seedPrefs(
  page: Page,
  prefs: { theme?: 'dark' | 'light'; language?: 'en' | 'de' | 'bg' | 'da' }
) {
  await page.goto('/');
  await page.evaluate((next) => {
    if (next.theme) localStorage.setItem('theme', next.theme);
    if (next.language) localStorage.setItem('ida-portfolio-language', next.language);
  }, prefs);
}

// Bottom-bar button that opens the mobile project sheet. It is the only nav
// affordance below the `md` breakpoint, and it is `md:hidden` above it.
const MOBILE_PROJECTS_TRIGGER = 'button[aria-haspopup="dialog"][aria-controls="mobile-projects-dialog"]';

/**
 * Project navigation lives in the left rail at >=768px and in a bottom sheet
 * below that. Open whichever one this viewport actually renders and hand it
 * back, so assertions can be written once against "the project nav".
 */
async function openProjectsNav(page: Page): Promise<Locator> {
  const rail = page.locator('aside');
  if (await rail.first().isVisible()) return rail.first();

  await page.locator(MOBILE_PROJECTS_TRIGGER).click();
  const sheet = page.getByRole('dialog', { name: 'Projects menu' });
  await expect(sheet).toBeVisible();
  return sheet;
}

/** The language picker, opening the mobile sheet first when that is where it lives. */
async function languageToggle(page: Page): Promise<Locator> {
  const direct = page.getByRole('button', { name: 'Select language' }).first();
  if (await direct.isVisible()) return direct;

  const sheet = await openProjectsNav(page);
  const inSheet = sheet.getByRole('button', { name: 'Select language' });
  await expect(inSheet).toBeVisible();
  return inSheet;
}

/** The theme picker, opening the mobile sheet first when that is where it lives. */
async function themeToggle(page: Page): Promise<Locator> {
  const direct = page.locator('button[aria-label^="Switch to"]').first();
  if (await direct.isVisible()) return direct;

  const sheet = await openProjectsNav(page);
  const inSheet = sheet.locator('button[aria-label^="Switch to"]');
  await expect(inSheet).toBeVisible();
  return inSheet;
}

/** rgb triple of the painted page background — the app fills `min-h-screen` from --background. */
async function bodyBackground(page: Page): Promise<number[]> {
  const value = await page
    .locator('body')
    .evaluate((el) => window.getComputedStyle(el).backgroundColor);
  return (value.match(/\d+/g) ?? ['0', '0', '0']).map(Number);
}

/**
 * Nav labels are rendered by more than one surface (left rail, mobile bottom
 * bar, footer) and the hidden ones come first in DOM order, so `getByText()`
 * alone resolves to an invisible element below the `md` breakpoint. Narrow to
 * the links this viewport actually shows.
 */
function visibleNavLabel(page: Page, label: string): Locator {
  return page.locator('a:visible').filter({ hasText: new RegExp(`^${label}$`) }).first();
}

function brightness(rgb: number[]): number {
  return rgb[0] + rgb[1] + rgb[2];
}

/**
 * TC-001: Homepage loads correctly
 * Verify Hero, Stats, Features, CTA sections are visible
 */
test('TC-001: Homepage loads correctly - all key sections visible', async ({ page }) => {
  console.log('TC-001: Testing homepage load and key sections...');

  // Copy assertions below are written against the current copy (de-AI pass +
  // honest-numbers pass), so pin the language they were written in.
  await seedPrefs(page, { language: 'en', theme: 'light' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Verify page title
  await expect(page).toHaveTitle(/Ida|Portfolio|UX|Designer/i);
  console.log('✓ Page title verified');

  // Check Hero section - look for key elements
  const hero = page.locator('section').first();
  await expect(hero).toBeVisible();
  console.log('✓ Hero section is visible');

  // The H1 is built word-by-word (HeroWordReveal), so assert against the h1's
  // own text rather than a getByText() that would only see one word span.
  await expect(page.locator('h1')).toHaveText(/Hi, I'm Ida\. I design things people enjoy using/);
  console.log('✓ Hero headline verified');

  // Verify Stats section is present
  const statsSection = page.locator('section').nth(1);
  await expect(statsSection).toBeVisible();

  // Check for stats heading
  await expect(statsSection.getByRole('heading', { level: 2 })).toHaveText(/A few numbers, kept honest/);
  console.log('✓ Stats section with heading is visible');

  // Verify Features/Projects section is present
  const featuresSection = page.locator('#projects');
  await expect(featuresSection).toBeVisible();
  await expect(featuresSection.getByRole('heading', { level: 2 })).toHaveText(/Featured work/);
  // one card per case study, each linking at its own route
  await expect(featuresSection.locator('a[href^="/case-studies/"]')).toHaveCount(3);
  console.log('✓ Features/Projects section is visible');

  // Verify CTA section is present
  const ctaHeading = page.getByRole('heading', { level: 2, name: /Let.s work together/i });
  await expect(ctaHeading).toBeVisible();
  console.log('✓ CTA section is visible');

  // Take screenshot for documentation
  await page.screenshot({ path: 'test-results/tc-001-homepage.png', fullPage: true });
  console.log('✓ TC-001: Homepage all sections verified');
});

/**
 * TC-002: Language toggle to German
 * Click language toggle, select DE, verify text changes
 */
test('TC-002: Language toggle to German works correctly', async ({ page }) => {
  console.log('TC-002: Testing language toggle to German...');

  await seedPrefs(page, { language: 'en', theme: 'light' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Verify initial English text
  await expect(page.locator('h1')).toHaveText(/Hi, I'm Ida\./);
  console.log('Initial text: English');

  // The picker lives in the left rail at >=768px and inside the mobile project
  // sheet below it — resolve whichever one this viewport renders.
  const languageButton = await languageToggle(page);
  await languageButton.click();
  console.log('✓ Language toggle clicked');

  // Wait for language menu to appear and select German
  const germanOption = page.getByRole('option', { name: /Deutsch/ });
  await germanOption.click();
  console.log('✓ German language selected');

  // The choice is persisted, not just painted
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('ida-portfolio-language')))
    .toBe('de');

  // Verify German text appears
  await expect(page.locator('h1')).toHaveText(/ich bin Ida/);
  console.log('✓ German text verified');

  // Verify navigation text changed to German. Both nav surfaces render the
  // translated nav labels: the rail above 768px, the bottom bar below it.
  await expect(visibleNavLabel(page, 'STARTSEITE')).toBeVisible();
  await expect(visibleNavLabel(page, 'ÜBER MICH')).toBeVisible();
  console.log('✓ German navigation verified');

  await page.screenshot({ path: 'test-results/tc-002-german.png' });
  console.log('✓ TC-002: Language toggle to German verified');
});

/**
 * TC-003: Language toggle all languages
 * Cycle through EN → DE → BG → DA → EN and verify each
 */
test('TC-003: Language toggle cycles through all languages correctly', async ({ page }) => {
  console.log('TC-003: Testing language toggle through all languages...');

  await seedPrefs(page, { language: 'en', theme: 'light' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Define language test data — hero headline fragment + the nav home label
  // rendered by both the left rail and the mobile bottom bar.
  const languages = [
    { code: 'de', name: /Deutsch/, hero: /ich bin Ida/, nav: 'STARTSEITE' },
    { code: 'bg', name: /Български/, hero: /аз съм Ида/, nav: 'НАЧАЛО' },
    { code: 'da', name: /Dansk/, hero: /jeg er Ida/, nav: 'HJEM' },
    { code: 'en', name: /English/, hero: /Hi, I'm Ida/, nav: 'HOME' },
  ];

  for (const lang of languages) {
    console.log(`Testing ${lang.name} (${lang.code})...`);

    const languageButton = await languageToggle(page);
    await languageButton.click();

    // Select the language using role-based selector
    const option = page.getByRole('option', { name: lang.name });
    await option.click();

    await expect
      .poll(() => page.evaluate(() => localStorage.getItem('ida-portfolio-language')))
      .toBe(lang.code);

    // Verify language-specific content
    await expect(page.locator('h1')).toHaveText(lang.hero);
    await expect(visibleNavLabel(page, lang.nav)).toBeVisible();

    console.log(`✓ ${lang.name} content verified`);
  }

  await page.screenshot({ path: 'test-results/tc-003-all-languages.png' });
  console.log('✓ TC-003: All languages cycled and verified');
});

/**
 * TC-004: Theme toggle to light mode
 * Click theme button, verify background changes
 */
test('TC-004: Theme toggle to light mode changes background', async ({ page }) => {
  console.log('TC-004: Testing theme toggle to light mode...');

  // Start from dark explicitly — the browser default here is light, so the
  // old test was toggling light → dark and then asserting it got lighter.
  await seedPrefs(page, { theme: 'dark', language: 'en' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const html = page.locator('html');

  // Verify the seeded state actually took
  await expect(html).toHaveClass(/\bdark\b/);
  const initialBg = await bodyBackground(page);
  console.log(`Initial background: ${initialBg.join(', ')}`);
  expect(brightness(initialBg)).toBeLessThan(400);

  const themeButton = await themeToggle(page);
  await expect(themeButton).toHaveAttribute('aria-label', 'Switch to light mode');
  await themeButton.click();
  console.log('✓ Theme toggle clicked');

  // Verify the control now advertises the reverse action
  await expect(themeButton).toHaveAttribute('aria-label', 'Switch to dark mode');

  // Verify background color changed
  await expect.poll(async () => brightness(await bodyBackground(page))).toBeGreaterThan(400);
  const newBg = await bodyBackground(page);
  console.log(`New background: ${newBg.join(', ')}`);
  expect(brightness(newBg)).toBeGreaterThan(brightness(initialBg));
  console.log('✓ Background color changed to lighter (light mode)');

  // Verify light class is present
  await expect(html).toHaveClass(/\blight\b/);
  await expect(html).not.toHaveClass(/\bdark\b/);
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('theme')))
    .toBe('light');
  console.log('✓ Light mode class verified');

  await page.screenshot({ path: 'test-results/tc-004-light-mode.png' });
  console.log('✓ TC-004: Theme toggle to light mode verified');
});

/**
 * TC-005: Theme persistence
 * Toggle to light mode, navigate to /about, verify theme persists
 */
test('TC-005: Theme persists after navigation', async ({ page }) => {
  console.log('TC-005: Testing theme persistence across navigation...');

  await seedPrefs(page, { theme: 'dark', language: 'en' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const html = page.locator('html');
  await expect(html).toHaveClass(/\bdark\b/);

  // Toggle to light mode
  const themeButton = await themeToggle(page);
  await themeButton.click();
  await expect(html).toHaveClass(/\blight\b/);
  console.log('✓ Light mode toggled on homepage');

  // Navigate to About page
  await page.goto('/about');
  await page.waitForLoadState('networkidle');
  console.log('✓ Navigated to About page');

  // Verify light class persists
  await expect(html).toHaveClass(/\blight\b/);
  await expect(html).not.toHaveClass(/\bdark\b/);
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('theme')))
    .toBe('light');
  console.log('✓ Light mode persisted on About page');

  // Verify background is still light
  const bgColor = await bodyBackground(page);
  expect(brightness(bgColor)).toBeGreaterThan(400);
  console.log('✓ Light background verified on About page');

  await page.screenshot({ path: 'test-results/tc-005-theme-persist.png' });
  console.log('✓ TC-005: Theme persistence verified');
});

/**
 * TC-006: Projects navigation
 * The header dropdown is gone — navigation was consolidated into a single
 * left-rail system. Project navigation now lives in the rail at >=768px and in
 * a bottom sheet below it, grouped into Case Studies and Playground.
 */
test('TC-006: Projects navigation shows Case Studies and Playground', async ({ page }) => {
  console.log('TC-006: Testing Projects navigation...');

  await seedPrefs(page, { language: 'en', theme: 'light' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const nav = await openProjectsNav(page);

  // Every case study is reachable from the project nav
  const caseStudies = [
    '/case-studies/pimcore',
    '/case-studies/ergowork',
    '/case-studies/dermatik',
    '/case-studies/sdzrn',
  ];
  await expect(nav.locator('a[href^="/case-studies/"]')).toHaveCount(caseStudies.length);
  for (const href of caseStudies) {
    await expect(nav.locator(`a[href="${href}"]`)).toBeVisible();
  }
  console.log('✓ Case Studies entries visible in project nav');

  // Playground is reachable too
  await expect(nav.locator('a[href^="/playground/"]')).toHaveCount(1);
  await expect(nav.locator('a[href="/playground/theme-builder"]')).toBeVisible();
  console.log('✓ Playground entry visible in project nav');

  if (await page.locator('aside').first().isVisible()) {
    // The rail is the surface that labels the two groups
    await expect(nav.getByText('Case Studies', { exact: true })).toBeVisible();
    await expect(nav.getByText('Playground', { exact: true })).toBeVisible();
  } else {
    // The mobile sheet groups them under a single "Projects" heading
    await expect(nav).toHaveAttribute('aria-label', 'Projects menu');
  }
  console.log('✓ Group labels verified');

  await page.screenshot({ path: 'test-results/tc-006-projects-nav.png' });
  console.log('✓ TC-006: Projects navigation verified');
});

/**
 * TC-007: Project navigation from a case study page
 * Every project stays reachable while reading one. CaseStudyLayout no longer
 * renders its own <aside> — the rail (or the mobile sheet) is the nav.
 */
test('TC-007: Case study page keeps every project reachable from navigation', async ({ page }) => {
  console.log('TC-007: Testing project navigation on case study page...');

  await seedPrefs(page, { language: 'en', theme: 'light' });
  await page.goto('/case-studies/pimcore');
  await page.waitForLoadState('networkidle');

  // Verify page loaded
  await expect(page).toHaveURL(/\/case-studies\/pimcore$/);
  console.log('✓ Navigated to Pimcore case study');

  const nav = await openProjectsNav(page);
  console.log('✓ Project navigation is visible');

  // Verify all case study projects are listed
  const expectedProjects = ['Pimcore', 'ErgoWork', 'Dermatik'];

  for (const project of expectedProjects) {
    const projectLink = nav.getByRole('link', { name: new RegExp(project, 'i') }).first();
    await expect(projectLink).toBeVisible();
    console.log(`✓ ${project} link found in project navigation`);
  }

  // The project being read is the one marked as current
  await expect(nav.locator('a[href="/case-studies/pimcore"]').first()).toHaveClass(/accent/);
  console.log('✓ Current project is marked');

  await page.screenshot({ path: 'test-results/tc-007-project-nav.png' });
  console.log('✓ TC-007: Project navigation verified');
});

/**
 * TC-008: Pimcore case study loads
 * Verify Pimcore case study page content
 */
test('TC-008: Pimcore case study page loads correctly', async ({ page }) => {
  console.log('TC-008: Testing Pimcore case study page...');

  await page.goto('/case-studies/pimcore');
  await page.waitForLoadState('networkidle');

  // Verify URL
  await expect(page).toHaveURL(/case-studies\/pimcore/);
  console.log('✓ URL verified: /case-studies/pimcore');

  // Verify page has loaded with content - check for back button
  const backButton = page.getByRole('link', { name: /back to home/i });
  await expect(backButton).toBeVisible();
  console.log('✓ Back to Home link visible');

  // Verify case study header contains Pimcore
  const caseStudyHeading = page.getByRole('heading', { name: /Pimcore/i }).first();
  await expect(caseStudyHeading).toBeVisible();
  console.log('✓ Pimcore case study heading visible');

  // Verify case study content sections
  const projectScope = page.getByText(/Project Scope|Projektumfang|Обхват на проекта/);
  await expect(projectScope.first()).toBeVisible();
  console.log('✓ Project Scope section visible');

  const results = page.getByText(/Results|Ergebnisse|Резултати/);
  await expect(results.first()).toBeVisible();
  console.log('✓ Results section visible');

  const contribution = page.getByText(/Contribution|Beitrag|My role|Tools/i);
  await expect(contribution.first()).toBeVisible();
  console.log('✓ Contribution/My role section visible');

  await page.screenshot({ path: 'test-results/tc-008-pimcore.png', fullPage: true });
  console.log('✓ TC-008: Pimcore case study verified');
});

/**
 * TC-009: All real case studies load
 * pimcore, ergowork, dermatik, sdzrn
 */
test('TC-009: All real case study pages load correctly', async ({ page }) => {
  console.log('TC-009: Testing all real case study pages...');
  
  const caseStudies = [
    { path: '/case-studies/pimcore', name: 'Pimcore' },
    { path: '/case-studies/ergowork', name: 'ErgoWork' },
    { path: '/case-studies/dermatik', name: 'Dermatik' },
    { path: '/case-studies/sdzrn', name: 'SDZRN' },
  ];
  
  for (const study of caseStudies) {
    console.log(`Testing ${study.name} case study...`);
    
    await page.goto(study.path);
    await page.waitForLoadState('networkidle');
    
    // Verify URL
    await expect(page).toHaveURL(new RegExp(study.path.replace(/\//g, '\\/')));
    
    // Verify page loaded with content - check for back button
    const backButton = page.getByRole('link', { name: /back to home/i });
    await expect(backButton).toBeVisible();
    
    // Verify case study title/heading exists
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
    
    console.log(`✓ ${study.name} case study loaded successfully`);
    
    // Screenshot for each case study
    await page.screenshot({ path: `test-results/tc-009-${study.name.toLowerCase()}.png` });
  }
  
  console.log('✓ TC-009: All real case studies verified');
});

/**
 * TC-019: Keyboard navigation
 * Tab through the homepage and verify interactive elements are focusable.
 *
 * The old version deduplicated tab stops by "TAG-text" and stopped at the first
 * repeat. The three case-study cards all read "View Case Study", so the sweep
 * aborted after the first duplicate — on some viewports after two stops — and
 * the ">= 3 elements" bar passed or failed by luck of DOM order. This version
 * collects the whole reachable sequence and asserts what actually matters:
 * the primary navigation is reachable without a mouse, focus keeps advancing,
 * and every focusable link exposes a name.
 */
test('TC-019: Keyboard navigation - all interactive elements focusable', async ({ page }) => {
  console.log('TC-019: Testing keyboard navigation...');

  await seedPrefs(page, { language: 'en', theme: 'light' });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const stops: { tag: string; text: string; href: string }[] = [];
  const maxTabs = 40;

  for (let i = 0; i < maxTabs; i++) {
    await page.keyboard.press('Tab');

    const stop = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      return {
        tag: el.tagName,
        text: (el.textContent ?? '').trim(),
        href: el.getAttribute('href') ?? '',
      };
    });

    if (stop) stops.push(stop);
  }

  console.log(`✓ Collected ${stops.length} focus stops across ${maxTabs} tabs`);

  // Focus keeps advancing — no trap, and the sweep wrapped past the last stop.
  const distinct = new Set(stops.map((s) => `${s.tag}|${s.href}|${s.text}`));
  expect(distinct.size).toBeGreaterThanOrEqual(8);

  // Primary navigation is reachable by keyboard alone. The rail (>=768px) and
  // the mobile bottom bar both render these, and the hero CTA is on every view.
  const hrefs = stops.map((s) => s.href).filter(Boolean);
  for (const href of ['/', '/about', '/#projects']) {
    expect(hrefs).toContain(href);
  }

  // Both links and buttons take focus.
  expect(stops.some((s) => s.tag === 'A')).toBe(true);
  expect(stops.some((s) => s.tag === 'BUTTON')).toBe(true);

  // Every focusable link carries an accessible name.
  for (const stop of stops) {
    if (stop.tag === 'A') expect(stop.text).not.toBe('');
  }

  await page.screenshot({ path: 'test-results/tc-019-keyboard.png' });
  console.log('✓ TC-019: Keyboard navigation verified');
});

/**
 * TC-020: No console errors
 * Check console after load for any errors
 */
test('TC-020: No critical console errors on page load', async ({ page }) => {
  console.log('TC-020: Checking for console errors...');
  
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Listen to console messages
  page.on('console', (msg) => {
    const type = msg.type();
    const text = msg.text();
    
    if (type === 'error') {
      errors.push(text);
      console.log(`Console error: ${text}`);
    } else if (type === 'warning') {
      warnings.push(text);
      console.log(`Console warning: ${text}`);
    }
  });
  
  // Also capture page errors
  page.on('pageerror', (error) => {
    errors.push(error.message);
    console.log(`Page error: ${error.message}`);
  });
  
  // Navigate and wait
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  // Navigate to a case study
  await page.goto('/case-studies/pimcore');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  // Filter out non-critical errors (like React DevTools, analytics, etc.)
  const criticalErrors = errors.filter(error => {
    const nonCritical = [
      'react-devtools',
      'devtools',
      'Download the React DevTools',
      'favicon',
      'analytics',
      'ga.js',
      'gtag',
    ];
    return !nonCritical.some(ignored => error.toLowerCase().includes(ignored.toLowerCase()));
  });
  
  console.log(`Found ${errors.length} total errors, ${criticalErrors.length} critical`);
  console.log(`Found ${warnings.length} warnings`);
  
  // Expect no critical errors
  expect(criticalErrors).toHaveLength(0);
  console.log('✓ No critical console errors found');
  
  if (criticalErrors.length > 0) {
    console.log('Critical errors:', criticalErrors);
  }
  
  await page.screenshot({ path: 'test-results/tc-020-console-check.png' });
  console.log('✓ TC-020: Console error check verified');
});

/**
 * Additional smoke test: Navigation between pages
 */
test('Smoke test: Navigation flow between homepage and case studies', async ({ page }) => {
  console.log('Smoke test: Testing navigation flow...');
  
  // Start at homepage
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  console.log('✓ Homepage loaded');
  
  // Navigate to About
  await page.goto('/about');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL('/about');
  console.log('✓ About page loaded');
  
  // Navigate to case studies
  await page.goto('/case-studies/ergowork');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL('/case-studies/ergowork');
  console.log('✓ ErgoWork case study loaded');
  
  // Back to homepage
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL('/');
  console.log('✓ Returned to homepage');
  
  await page.screenshot({ path: 'test-results/smoke-navigation.png' });
  console.log('✓ Smoke test: Navigation flow verified');
});

/**
 * Test: Mobile responsive layout
 */
test('Responsive test: Homepage layout on mobile viewport', async ({ page }) => {
  console.log('Testing mobile responsive layout...');
  
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Verify content is visible and not overlapping
  const hero = page.locator('section').first();
  await expect(hero).toBeVisible();
  
  // Check that hamburger menu is visible on mobile
  const menuButton = page.locator('button:has([aria-label*="menu" i]), [data-testid="mobile-menu"]').first();
  // May or may not exist depending on implementation
  const menuExists = await menuButton.isVisible().catch(() => false);
  if (menuExists) {
    console.log('✓ Mobile menu button visible');
  }
  
  // Verify no horizontal overflow
  const body = page.locator('body');
  const overflow = await body.evaluate((el) => {
    return el.scrollWidth > el.clientWidth;
  });
  expect(overflow).toBe(false);
  console.log('✓ No horizontal overflow on mobile');
  
  await page.screenshot({ path: 'test-results/responsive-mobile.png', fullPage: true });
  console.log('✓ Mobile responsive layout verified');
});
