import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Visual Testing
 * 
 * This configuration sets up visual regression testing for the Ida Portfolio.
 * It captures screenshots of key pages and components for comparison.
 */

export default defineConfig({
  testDir: './e2e',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use */
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],
  
  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like `await page.goto('/')` */
    baseURL: 'http://localhost:3000',
    
    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',
    
    /* Screenshot on failure */
    screenshot: 'only-on-failure',
    
    /* Video recording */
    video: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'chromium-mobile',
      use: { 
        ...devices['iPhone 13'],
      },
    },
    {
      name: 'chromium-tablet',
      use: { 
        ...devices['iPad Mini'],
      },
    },
  ],

  /* Run local dev server before starting the tests */
  webServer: {
    command: 'bun run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },

  /* Visual comparison settings */
  expect: {
    toHaveScreenshot: {
      /* Maximum acceptable difference in pixels */
      maxDiffPixels: 100,
      /* Threshold for pixel comparison (0-1) */
      threshold: 0.2,
      /* Animate screenshots for consistent captures */
      animations: 'disabled',
    },
  },
});
