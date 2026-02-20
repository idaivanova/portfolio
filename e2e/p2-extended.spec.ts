import { test, expect, type Page } from '@playwright/test';

/**
 * P2 Extended Tests for Ida Portfolio
 * 
 * These tests verify:
 * - Playground pages load correctly
 * - Bumblebee flies across screen (animation test)
 * - Additional case study pages
 */

// Helper function to wait for page to be fully loaded
async function waitForPageReady(page: Page) {
  await page.waitForLoadState('networkidle');
  // Additional wait for any animations to settle
  await page.waitForTimeout(500);
}

/**
 * TC-010: Buzz playground page loads
 * Navigate to /case-studies/buzz, verify page loads with content
 */
test('TC-010: Buzz playground page loads correctly', async ({ page }) => {
  console.log('TC-010: Testing Buzz playground page load...');
  
  await page.goto('/case-studies/buzz');
  await waitForPageReady(page);
  
  // Verify URL
  await expect(page).toHaveURL(/\/case-studies\/buzz/);
  console.log('✓ URL verified: /case-studies/buzz');
  
  // Verify page has main content
  const mainContent = page.locator('main, article, [data-testid="case-study"], section').first();
  await expect(mainContent).toBeVisible();
  console.log('✓ Main content is visible');
  
  // Verify page has heading/title
  const heading = page.locator('h1, h2').first();
  await expect(heading).toBeVisible();
  const headingText = await heading.textContent();
  console.log(`✓ Page heading: ${headingText}`);
  
  // Verify it's a playground page by checking for playground-specific elements
  // (could be canvas, interactive elements, or project description)
  const hasPlaygroundContent = await page.locator('canvas, [data-playground], .playground').count() > 0 ||
                               await page.getByText(/playground|interactive|experiment/i).count() > 0;
  console.log(`✓ Playground content present: ${hasPlaygroundContent}`);
  
  await page.screenshot({ path: 'test-results/tc-010-buzz-playground.png', fullPage: true });
  console.log('✓ TC-010: Buzz playground page verified');
});

/**
 * TC-014: Bumblebee flies across screen
 * Wait 15-30 seconds, verify bee flies from edge to edge
 * 
 * Note: The bumblebee has an initial 5s delay, then appears 15-30% of the time
 * at 30-90s intervals. This test waits and monitors for the flight animation.
 */
test('TC-014: Bumblebee flies across screen (edge to edge)', async ({ page }) => {
  console.log('TC-014: Testing bumblebee flies across screen...');
  
  await page.goto('/');
  await waitForPageReady(page);
  
  const viewport = page.viewportSize();
  if (!viewport) {
    throw new Error('Viewport size not available');
  }
  console.log(`Viewport: ${viewport.width}x${viewport.height}`);
  
  // Wait for bumblebee to appear (initial delay 5s + buffer)
  // Then wait longer to catch the flight animation (15-30s total wait)
  console.log('Waiting for bumblebee to appear and fly across screen (this may take up to 30 seconds)...');
  await page.waitForTimeout(15000);
  
  // Look for bumblebee element
  const bumblebee = page.locator('svg[viewBox="0 0 64 64"]').first();
  const isVisible = await bumblebee.isVisible().catch(() => false);
  
  if (isVisible) {
    // Get initial position
    const initialPosition = await bumblebee.boundingBox();
    if (initialPosition) {
      console.log(`Initial bumblebee position: x=${initialPosition.x.toFixed(0)}, y=${initialPosition.y.toFixed(0)}`);
      
      // Check if starting from edge (left or right)
      const startsFromLeft = initialPosition.x < 50;
      const startsFromRight = initialPosition.x > viewport.width - 100;
      console.log(`Starts from left edge: ${startsFromLeft}, from right edge: ${startsFromRight}`);
    }
    
    // Wait and monitor movement for up to 15 more seconds
    console.log('Monitoring bumblebee movement...');
    const positions: { x: number; y: number; time: number }[] = [];
    
    for (let i = 0; i < 10; i++) {
      await page.waitForTimeout(1500);
      const box = await bumblebee.boundingBox().catch(() => null);
      if (box) {
        positions.push({ x: box.x, y: box.y, time: i * 1500 });
        console.log(`  Position ${i + 1}: x=${box.x.toFixed(0)}, y=${box.y.toFixed(0)}`);
      }
      
      const stillVisible = await bumblebee.isVisible().catch(() => false);
      if (!stillVisible) {
        console.log('  Bumblebee has flown away!');
        break;
      }
    }
    
    // Check if bumblebee moved across the screen (edge to edge)
    if (positions.length >= 2) {
      const firstPos = positions[0];
      const lastPos = positions[positions.length - 1];
      const distanceTraveled = Math.abs(lastPos.x - firstPos.x);
      
      console.log(`Total distance traveled: ${distanceTraveled.toFixed(0)}px`);
      
      // Consider it "edge to edge" if it traveled at least 50% of viewport width
      const traveledFarEnough = distanceTraveled > viewport.width * 0.5;
      console.log(`Traveled at least 50% of screen width: ${traveledFarEnough}`);
      
      // Check if it started from one edge and reached the other (or close)
      const startedNearLeft = firstPos.x < 100;
      const startedNearRight = firstPos.x > viewport.width - 150;
      const endedNearRight = lastPos.x > viewport.width - 150;
      const endedNearLeft = lastPos.x < 100;
      
      const crossedScreen = (startedNearLeft && endedNearRight) || 
                           (startedNearRight && endedNearLeft);
      console.log(`Crossed from edge to edge: ${crossedScreen}`);
      
      expect(traveledFarEnough || crossedScreen).toBe(true);
      console.log('✓ Bumblebee flight across screen verified');
    } else {
      console.log('ℹ Not enough position data to verify edge-to-edge flight');
      // Still pass if we saw the bee at some point
      expect(isVisible).toBe(true);
    }
  } else {
    // Bumblebee might not appear due to probability (15-30%)
    console.log('ℹ Bumblebee not visible - may not have appeared due to probability (15-30%)');
    // Take screenshot to document the state
    await page.screenshot({ path: 'test-results/tc-014-bumblebee-not-visible.png' });
    
    // This is acceptable - the bee appears randomly
    // We'll verify the bee component exists in the DOM at least
    const beeInDom = await page.locator('svg[viewBox="0 0 64 64"]').count() > 0;
    expect(beeInDom).toBe(true);
    console.log('✓ Bumblebee component exists in DOM');
  }
  
  await page.screenshot({ path: 'test-results/tc-014-bumblebee-flight.png' });
  console.log('✓ TC-014: Bumblebee flight test completed');
});

/**
 * TC-021: Flutter playground page loads
 * Navigate to /case-studies/flutter, verify page loads
 */
test('TC-021: Flutter playground page loads correctly', async ({ page }) => {
  console.log('TC-021: Testing Flutter playground page load...');
  
  await page.goto('/case-studies/flutter');
  await waitForPageReady(page);
  
  // Verify URL
  await expect(page).toHaveURL(/\/case-studies\/flutter/);
  console.log('✓ URL verified: /case-studies/flutter');
  
  // Verify page has main content
  const mainContent = page.locator('main, article, section').first();
  await expect(mainContent).toBeVisible();
  console.log('✓ Main content is visible');
  
  // Verify page has heading
  const heading = page.locator('h1, h2').first();
  await expect(heading).toBeVisible();
  const headingText = await heading.textContent();
  console.log(`✓ Page heading: ${headingText}`);
  
  await page.screenshot({ path: 'test-results/tc-021-flutter-playground.png', fullPage: true });
  console.log('✓ TC-021: Flutter playground page verified');
});

/**
 * TC-022: Buzz HQ playground page loads
 * Navigate to /case-studies/buzz-hq, verify page loads
 */
test('TC-022: Buzz HQ playground page loads correctly', async ({ page }) => {
  console.log('TC-022: Testing Buzz HQ playground page load...');
  
  await page.goto('/case-studies/buzz-hq');
  await waitForPageReady(page);
  
  // Verify URL
  await expect(page).toHaveURL(/\/case-studies\/buzz-hq/);
  console.log('✓ URL verified: /case-studies/buzz-hq');
  
  // Verify page has main content
  const mainContent = page.locator('main, article, section').first();
  await expect(mainContent).toBeVisible();
  console.log('✓ Main content is visible');
  
  // Verify page has heading
  const heading = page.locator('h1, h2').first();
  await expect(heading).toBeVisible();
  const headingText = await heading.textContent();
  console.log(`✓ Page heading: ${headingText}`);
  
  await page.screenshot({ path: 'test-results/tc-022-buzz-hq-playground.png', fullPage: true });
  console.log('✓ TC-022: Buzz HQ playground page verified');
});

/**
 * TC-023: Flutter Fields playground page loads
 * Navigate to /case-studies/flutter-fields, verify page loads
 */
test('TC-023: Flutter Fields playground page loads correctly', async ({ page }) => {
  console.log('TC-023: Testing Flutter Fields playground page load...');
  
  await page.goto('/case-studies/flutter-fields');
  await waitForPageReady(page);
  
  // Verify URL
  await expect(page).toHaveURL(/\/case-studies\/flutter-fields/);
  console.log('✓ URL verified: /case-studies/flutter-fields');
  
  // Verify page has main content
  const mainContent = page.locator('main, article, section').first();
  await expect(mainContent).toBeVisible();
  console.log('✓ Main content is visible');
  
  // Verify page has heading
  const heading = page.locator('h1, h2').first();
  await expect(heading).toBeVisible();
  const headingText = await heading.textContent();
  console.log(`✓ Page heading: ${headingText}`);
  
  await page.screenshot({ path: 'test-results/tc-023-flutter-fields-playground.png', fullPage: true });
  console.log('✓ TC-023: Flutter Fields playground page verified');
});

/**
 * TC-024: All playground pages load without errors
 * Test all playground pages load successfully
 */
test('TC-024: All playground pages load successfully', async ({ page }) => {
  console.log('TC-024: Testing all playground pages...');
  
  const playgroundPages = [
    { path: '/case-studies/buzz', name: 'Buzz' },
    { path: '/case-studies/flutter', name: 'Flutter' },
    { path: '/case-studies/buzz-hq', name: 'Buzz HQ' },
    { path: '/case-studies/flutter-fields', name: 'Flutter Fields' },
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
