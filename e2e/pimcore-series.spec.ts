import { test, expect, type Page, type ConsoleMessage } from '@playwright/test';

/**
 * Pimcore Studio series tests
 *
 * The series is three routes: a hub that indexes the parts, plus Part 1
 * (/frontend-transition) and Part 2 (/studio-extensions). CaseStudySeriesNav
 * is the only thing stitching them together, so these tests cover the seams:
 * the hub lists both parts, each part carries the strip, the part you are on
 * is the one marked aria-current="page", and moving sideways actually lands
 * where the link says it does.
 *
 * Part 2 also carries the honest-absence copy — the page says outright that
 * it has no measured result. Tests below pin that language and pin the
 * fabricated metrics it replaced, so neither can be reintroduced silently.
 */

const HUB = '/case-studies/pimcore';
const PART_1 = '/case-studies/pimcore/frontend-transition';
const PART_2 = '/case-studies/pimcore/studio-extensions';

/** aria-label the series nav gives itself for this series. */
const SERIES_NAV_LABEL = 'Pimcore Studio — case study parts';

const PARTS = [
  { path: PART_1, label: 'Front-end transition' },
  { path: PART_2, label: 'Native extensions' },
];

/** The series title link back to the hub, scoped to the series nav. */
function seriesTitleLink(page: Page) {
  return page
    .getByRole('navigation', { name: SERIES_NAV_LABEL })
    .getByRole('link', { name: 'Pimcore Studio', exact: true });
}

/** A single part link inside the series nav, addressed by its visible label. */
function partLink(page: Page, label: string) {
  return page.getByRole('navigation', { name: SERIES_NAV_LABEL }).getByRole('link', {
    name: label,
    exact: true,
  });
}

/**
 * Console/page errors, tagged with where they came from.
 *
 * Third-party embed requests are separated out because the YouTube iframe on
 * Part 2 is the one asset the app does not serve. Anything that fails from our
 * own origin is a real defect and fails the test; see TC-037.
 */
function collectErrors(page: Page) {
  const errors: { text: string; url: string }[] = [];

  const onConsole = (msg: ConsoleMessage) => {
    if (msg.type() === 'error') {
      errors.push({ text: msg.text(), url: msg.location().url });
    }
  };
  const onPageError = (error: Error) => {
    errors.push({ text: error.message, url: '' });
  };

  page.on('console', onConsole);
  page.on('pageerror', onPageError);

  return {
    errors,
    stop: () => {
      page.off('console', onConsole);
      page.off('pageerror', onPageError);
    },
  };
}

test.describe('Pimcore Series', () => {
  test.describe('Hub', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
    });

    test('TC-030: Hub shows the series title and links to both parts', async ({ page }) => {
      await page.goto(HUB);
      await page.waitForLoadState('networkidle');

      // The hub is titled for the series, not for either part
      await expect(
        page.getByRole('heading', { level: 1, name: 'Pimcore Studio' })
      ).toBeVisible();

      // Both parts are indexed, each as a link to its own route
      const parts = page.locator('#parts');
      await expect(parts).toBeVisible();

      for (const part of PARTS) {
        const link = parts.locator(`a[href="${part.path}"]`);
        await expect(link).toHaveCount(1);
        await expect(link).toBeVisible();
      }
    });
  });

  test.describe('Series Nav', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
    });

    test('TC-031: Every part renders the series nav, titled by a link back to the hub', async ({ page }) => {
      for (const part of PARTS) {
        await page.goto(part.path);
        await page.waitForLoadState('networkidle');

        const seriesNav = page.getByRole('navigation', { name: SERIES_NAV_LABEL });
        await expect(seriesNav).toBeVisible();

        // Series title links to the hub, and the strip lists every part
        const titleLink = seriesTitleLink(page);
        await expect(titleLink).toBeVisible();
        await expect(titleLink).toHaveAttribute('href', HUB);

        for (const sibling of PARTS) {
          await expect(partLink(page, sibling.label)).toHaveAttribute(
            'href',
            sibling.path
          );
        }

        console.log(`✓ ${part.path} renders the series nav`);
      }
    });

    test('TC-032: Only the part being read is marked aria-current', async ({ page }) => {
      for (const current of PARTS) {
        await page.goto(current.path);
        await page.waitForLoadState('networkidle');

        const seriesNav = page.getByRole('navigation', { name: SERIES_NAV_LABEL });

        // The part you are on is marked...
        await expect(partLink(page, current.label)).toHaveAttribute(
          'aria-current',
          'page'
        );
        // ...and the other one is not, so the marker never goes stale
        for (const sibling of PARTS) {
          if (sibling.path === current.path) continue;
          await expect(partLink(page, sibling.label)).not.toHaveAttribute(
            'aria-current',
            'page'
          );
        }
        // The hub link is a plain link — it is not a part, so it is never current
        await expect(seriesTitleLink(page)).not.toHaveAttribute(
          'aria-current',
          'page'
        );

        // Exactly one link in the strip carries the marker
        await expect(seriesNav.locator('a[aria-current="page"]')).toHaveCount(1);

        console.log(`✓ ${current.path} marks "${current.label}" as current`);
      }
    });

    test('TC-033: Cross-navigation hub → Part 2 → hub → Part 1 lands on each route', async ({ page }) => {
      await page.goto(HUB);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL(HUB);

      // Hub → Part 2, via the part card
      await page.locator(`#parts a[href="${PART_2}"]`).click();
      await expect(page).toHaveURL(PART_2);
      await expect(page.getByRole('navigation', { name: SERIES_NAV_LABEL })).toBeVisible();

      // Part 2 → hub, via the series title in the strip
      await seriesTitleLink(page).click();
      await expect(page).toHaveURL(HUB);
      await expect(
        page.getByRole('heading', { level: 1, name: 'Pimcore Studio' })
      ).toBeVisible();

      // Hub → Part 1, via the part card
      await page.locator(`#parts a[href="${PART_1}"]`).click();
      await expect(page).toHaveURL(PART_1);

      // And the strip landed on Part 1 knowing where we are
      await expect(partLink(page, 'Front-end transition')).toHaveAttribute(
        'aria-current',
        'page'
      );
    });

    test('TC-034: Series nav links are keyboard reachable and activate on Enter', async ({ page }) => {
      await page.goto(PART_2);
      await page.waitForLoadState('networkidle');

      const otherPart = partLink(page, 'Front-end transition');

      // Walk the real tab order from the top of the document until the strip's
      // Part 1 link takes focus. The global rail and the back-to-home link sit
      // in front of it, so this walks through them rather than assuming a count.
      // No sleeps — the check is the active element.
      let reachedAt = 0;
      for (let i = 1; i <= 24; i++) {
        await page.keyboard.press('Tab');
        const focused = await otherPart.evaluate(
          (el) => el === document.activeElement
        );
        if (focused) {
          reachedAt = i;
          break;
        }
      }
      expect(reachedAt, 'Part 1 link was not reachable by tabbing').toBeGreaterThan(0);
      await expect(otherPart).toBeFocused();

      // Enter on a focused link navigates like a click
      await page.keyboard.press('Enter');
      await expect(page).toHaveURL(PART_1);
      await expect(partLink(page, 'Front-end transition')).toHaveAttribute(
        'aria-current',
        'page'
      );
    });
  });

  test.describe('Part 2 Content', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.goto(PART_2);
      await page.waitForLoadState('networkidle');
    });

    test('TC-035: Honest-absence copy is present and fabricated metrics are not', async ({ page }) => {
      const body = page.locator('body');

      // The results section states outright that there is nothing measured
      await expect(body).toContainText('no measured result');

      // The AI-skills section states what the skills do not do
      await expect(body).toContainText('do not guarantee correct output');

      // Metrics that were never measured must not have crept back in
      await expect(body).not.toContainText('NPS');
      await expect(body).not.toContainText('89%');
      await expect(body).not.toContainText('% improvement');
    });

    test('TC-036: Part 2 embeds the walkthrough video', async ({ page }) => {
      const video = page.locator('iframe[src*="jC58hL2cR4w"]');
      await expect(video).toHaveCount(1);
      await expect(video).toBeVisible();
      await expect(video).toHaveAttribute(
        'src',
        /youtube\.com\/embed\/jC58hL2cR4w/
      );
    });

    test('TC-037: No console errors on any route in the series', async ({ page }) => {
      const appOrigin = 'http://localhost:3000';

      for (const route of [HUB, PART_1, PART_2]) {
        const captured = collectErrors(page);

        await page.goto(route);
        await page.waitForLoadState('networkidle');

        // Resources the app does not serve itself. The YouTube embed is
        // unreachable from a sandbox with no external DNS, and Chromium reports
        // that as a console error even though the app is fine.
        const thirdParty = captured.errors.filter((e) => e.url !== appOrigin);
        const fromApp = captured.errors.filter((e) => e.url === appOrigin || e.url === '');

        captured.stop();

        for (const error of fromApp) {
          console.log(`  [${route}] app-origin error: ${error.text}`);
        }
        for (const error of thirdParty) {
          console.log(`  [${route}] third-party error (ignored): ${error.text} — ${error.url}`);
        }

        // Nothing from our own origin, and no script errors from anywhere:
        // tolerated errors are resource loads the app does not control.
        expect(fromApp, `console errors from ${appOrigin} on ${route}`).toEqual([]);
        expect(
          thirdParty.filter((e) => !e.text.startsWith('Failed to load resource')),
          `non-network console errors on ${route}`
        ).toEqual([]);
      }
    });
  });
});
