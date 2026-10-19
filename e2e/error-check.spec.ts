import { test, expect } from '@playwright/test';

const APP_ORIGIN = 'http://localhost:3000';

/**
 * Only errors the app itself authored should fail this check.
 *
 * `msg.location().url` carries the source of a console error, so a cross-origin
 * entry means something the page *embedded* produced it. Today that is the
 * YouTube player on /case-studies/pimcore/studio-extensions, which reaches out
 * to googleads.g.doubleclick.net and static.doubleclick.net/instream — that is
 * environmental third-party noise, not an app defect.
 *
 * This is deliberately not a blanket "ignore console errors" filter: an error
 * reported against the app origin still fails, and so does an uncaught
 * exception, which has no source URL at all.
 */
function isAppAuthored(sourceUrl: string | undefined): boolean {
  if (!sourceUrl) return true; // no source -> an exception in app code
  return sourceUrl.startsWith(APP_ORIGIN);
}

test.describe('Error Checking', () => {
  const pages = [
    { name: 'Homepage', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pimcore hub', path: '/case-studies/pimcore' },
    { name: 'Pimcore extensions', path: '/case-studies/pimcore/studio-extensions' }
  ];

  for (const { name, path } of pages) {
    test(`${name} - no console errors`, async ({ page }) => {
      const errors: string[] = [];
      const ignored: string[] = [];

      // Capture console errors authored by the app
      page.on('console', msg => {
        if (msg.type() !== 'error') return;
        const entry = `${msg.text()} (from ${msg.location().url ?? 'unknown source'})`;
        if (isAppAuthored(msg.location().url)) errors.push(entry);
        else ignored.push(entry);
      });

      // Capture page errors — uncaught exceptions are always ours
      page.on('pageerror', err => {
        errors.push(err.message);
      });

      await page.goto(path);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);

      console.log(`\n${name} (${path}):`);
      ignored.forEach(e => console.log(`  ⚠ Ignored (third-party): ${e}`));
      if (errors.length > 0) {
        console.log('  ❌ Errors found:');
        errors.forEach(e => console.log(`    - ${e}`));
      } else {
        console.log('  ✅ No app errors');
      }

      expect(errors).toHaveLength(0);
    });
  }
});