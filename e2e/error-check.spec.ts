import { test, expect } from '@playwright/test';

test.describe('Error Checking', () => {
  const pages = [
    { name: 'Homepage', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Flutter', path: '/case-studies/flutter' },
    { name: 'Buzz', path: '/case-studies/buzz' }
  ];

  for (const { name, path } of pages) {
    test(`${name} - no console errors`, async ({ page }) => {
      const errors: string[] = [];
      
      // Capture console errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      // Capture page errors
      page.on('pageerror', err => {
        errors.push(err.message);
      });

      await page.goto(path);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);

      console.log(`\n${name} (${path}):`);
      if (errors.length > 0) {
        console.log('  ❌ Errors found:');
        errors.forEach(e => console.log(`    - ${e}`));
      } else {
        console.log('  ✅ No errors');
      }

      expect(errors).toHaveLength(0);
    });
  }
});
