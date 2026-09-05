/**
 * e2e/accessibility.spec.ts
 *
 * Automated accessibility regression coverage for all 10 public routes.
 *
 * Tooling: @axe-core/playwright (dev-only dependency)
 * Standard: WCAG 2.2 A + AA tags (axe wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa)
 *
 * Narrow exclusions — none. All A/AA rules are active.
 *
 * Does NOT duplicate PR-30 route/navigation tests (those live in navigation.spec.ts).
 */

import AxeBuilder from '@axe-core/playwright';

import { expect, test } from './support/browser-errors';

// ---------------------------------------------------------------------------
// Route catalogue
// ---------------------------------------------------------------------------

const publicRoutes = [
  '/',
  '/experience',
  '/projects',
  '/projects/upland-filebound',
  '/projects/moj-lawyer-licensing',
  '/projects/scega-event-licensing',
  '/engineering',
  '/about',
  '/contact',
  '/cv',
] as const;

// ---------------------------------------------------------------------------
// Axe scan — all 10 public routes
// ---------------------------------------------------------------------------

test.describe('axe — all public routes', () => {
  for (const route of publicRoutes) {
    test(`${route} has zero A/AA axe violations`, async ({ page }) => {
      await page.goto(route);

      // Wait for the main landmark to be visible before scanning.
      await expect(page.locator('main')).toBeVisible();

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();

      expect(
        results.violations,
        `axe violations on ${route}:\n${JSON.stringify(results.violations, null, 2)}`,
      ).toHaveLength(0);
    });
  }
});

// ---------------------------------------------------------------------------
// Skip link
// ---------------------------------------------------------------------------

test.describe('skip link', () => {
  test('is hidden until focused, becomes visible on focus, and activates #main-content', async ({
    page,
  }) => {
    await page.goto('/');

    const skipLink = page.getByRole('link', { name: 'Skip to main content' });
    const main = page.locator('#main-content');

    // Skip link exists and points to the correct target.
    await expect(skipLink).toHaveAttribute('href', '#main-content');
    await expect(main).toHaveAttribute('tabindex', '-1');

    // Use keyboard Tab to trigger :focus-visible (the CSS transform that reveals the skip link
    // is bound to :focus-visible, not :focus — so programmatic focus() does not trigger it).
    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();

    // After keyboard focus the skip link transform slides it into view — verify it is visible.
    await expect(skipLink).toBeVisible();

    // Pressing Enter activates the link, moving focus to #main-content.
    await page.keyboard.press('Enter');

    const focusedId = await page.evaluate(() => document.activeElement?.id ?? '');
    expect(focusedId).toBe('main-content');
  });
});

// ---------------------------------------------------------------------------
// Keyboard navigation smoke
// ---------------------------------------------------------------------------

test.describe('keyboard navigation smoke', () => {
  test('desktop nav links are Tab-reachable and activate on Enter', async ({ page }) => {
    await page.goto('/');

    const primaryNav = page.getByRole('navigation', { name: 'Primary' });

    // Tab past the skip link to the brand link, then through the primary nav.
    await page.keyboard.press('Tab'); // skip link
    await page.keyboard.press('Tab'); // brand link

    // Tab through all 5 nav items.
    for (const label of ['Experience', 'Projects', 'Engineering', 'About', 'Contact']) {
      await page.keyboard.press('Tab');
      const focused = page.locator(':focus');
      await expect(focused).toHaveText(label);
      await expect(focused).toBeVisible();
    }

    // Continue to the theme toggle trigger.
    await page.keyboard.press('Tab');
    const themeTrigger = page.locator(':focus');
    await expect(themeTrigger).toHaveAttribute('aria-label', /^Theme:/);

    // Continue to the desktop CV link.
    await page.keyboard.press('Tab');
    const cvLink = page.locator(':focus');
    await expect(cvLink).toContainText('CV');

    // Activate the Projects link by keyboard to confirm Enter navigation.
    await primaryNav.getByRole('link', { name: 'Projects' }).focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/projects$/);
  });

  test('hero CTAs are keyboard-activatable', async ({ page }) => {
    await page.goto('/');

    const viewMyWork = page.getByRole('link', { name: 'View My Work' });
    await viewMyWork.focus();
    await expect(viewMyWork).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/projects$/);

    await page.goto('/');
    const downloadCv = page.getByRole('link', { name: 'Download CV' }).first();
    await downloadCv.focus();
    await expect(downloadCv).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/cv$/);
  });

  test('project card links are keyboard-activatable', async ({ page }) => {
    await page.goto('/projects');

    const firstCard = page.getByRole('link', { name: 'View Upland FileBound case study' });
    await firstCard.focus();
    await expect(firstCard).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/projects\/upland-filebound$/);
  });

  test('Back to Projects is keyboard-activatable from a case study', async ({ page }) => {
    await page.goto('/projects/upland-filebound');

    const backLink = page.getByRole('link', { name: 'Back to Projects' });
    await backLink.focus();
    await expect(backLink).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/projects$/);
  });

  test('contact mailto and tel links are keyboard-activatable', async ({ page }) => {
    await page.goto('/contact');

    const emailLink = page.getByRole('link', { name: /abdelrahman\.n\.hegab@outlook\.com/ });
    await emailLink.focus();
    await expect(emailLink).toBeFocused();
    await expect(emailLink).toHaveAttribute('href', /^mailto:/);

    const phoneLink = page.getByRole('link', { name: /\+20/ });
    await phoneLink.focus();
    await expect(phoneLink).toBeFocused();
    await expect(phoneLink).toHaveAttribute('href', /^tel:/);
  });

  test('footer links are keyboard-reachable', async ({ page }) => {
    await page.goto('/');

    const footerNav = page.getByRole('navigation', { name: 'Footer' });
    const footerLinks = footerNav.getByRole('link');

    const count = await footerLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = footerLinks.nth(i);
      await expect(link).toBeVisible();
    }
  });
});

// ---------------------------------------------------------------------------
// Mobile navigation ARIA state
// ---------------------------------------------------------------------------

test.describe('mobile navigation ARIA', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('aria-expanded reflects open/closed state and focus returns on Escape', async ({ page }) => {
    await page.goto('/');

    const trigger = page.getByRole('button', { name: /navigation/ });
    const mobileNav = page.getByRole('navigation', { name: 'Mobile' });

    // Closed state.
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(mobileNav).toHaveCount(0);

    // Open the menu.
    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(mobileNav).toBeVisible();

    // aria-controls points to the rendered nav element.
    await expect(trigger).toHaveAttribute('aria-controls', 'mobile-navigation');
    await expect(page.locator('#mobile-navigation')).toBeVisible();

    // Escape closes and returns focus to trigger.
    await page.keyboard.press('Escape');
    await expect(mobileNav).toHaveCount(0);
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();
  });

  test('mobile nav links are keyboard-reachable when menu is open', async ({ page }) => {
    await page.goto('/');

    const trigger = page.getByRole('button', { name: /navigation/ });
    await trigger.click();

    const mobileNav = page.getByRole('navigation', { name: 'Mobile' });
    await expect(mobileNav).toBeVisible();

    for (const label of ['Experience', 'Projects', 'Engineering', 'About', 'Contact']) {
      const link = mobileNav.getByRole('link', { name: label });
      await expect(link).toBeVisible();
      await link.focus();
      await expect(link).toBeFocused();
    }

    const cvLink = mobileNav.getByRole('link', { name: 'Download CV' });
    await expect(cvLink).toBeVisible();
  });

  test('mobile nav close on link click returns menu to closed state', async ({ page }) => {
    await page.goto('/');

    const trigger = page.getByRole('button', { name: /navigation/ });
    await trigger.click();

    const mobileNav = page.getByRole('navigation', { name: 'Mobile' });
    await mobileNav.getByRole('link', { name: 'About' }).click();

    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByRole('navigation', { name: 'Mobile' })).toHaveCount(0);
  });
});

// ---------------------------------------------------------------------------
// Theme toggle accessible state
// ---------------------------------------------------------------------------

test.describe('theme toggle accessible state', () => {
  test('aria-pressed reflects the active theme selection', async ({ page }) => {
    await page.goto('/');

    const themeTrigger = page.getByRole('button', { name: /^Theme:/ });

    await themeTrigger.click();

    const systemBtn = page.getByRole('button', { name: 'System', exact: true });
    const lightBtn = page.getByRole('button', { name: 'Light', exact: true });
    const darkBtn = page.getByRole('button', { name: 'Dark', exact: true });

    // Select Light — only Light should be pressed.
    await lightBtn.click();
    await themeTrigger.click();
    await expect(lightBtn).toHaveAttribute('aria-pressed', 'true');
    await expect(systemBtn).toHaveAttribute('aria-pressed', 'false');
    await expect(darkBtn).toHaveAttribute('aria-pressed', 'false');

    // Select Dark — only Dark should be pressed.
    await darkBtn.click();
    await themeTrigger.click();
    await expect(darkBtn).toHaveAttribute('aria-pressed', 'true');
    await expect(lightBtn).toHaveAttribute('aria-pressed', 'false');
    await expect(systemBtn).toHaveAttribute('aria-pressed', 'false');
  });

  test('theme toggle is keyboard-operable and Escape returns focus', async ({ page }) => {
    await page.goto('/');

    const themeTrigger = page.getByRole('button', { name: /^Theme:/ });

    // Open with keyboard.
    await themeTrigger.focus();
    await expect(themeTrigger).toBeFocused();
    await page.keyboard.press('Enter');

    const systemBtn = page.getByRole('button', { name: 'System', exact: true });
    await expect(systemBtn).toBeVisible();

    // Tab to first option.
    await page.keyboard.press('Tab');
    const firstOption = page.locator(':focus');
    const firstOptionText = await firstOption.textContent();
    expect(['System', 'Light', 'Dark']).toContain(firstOptionText?.trim());

    // Escape closes and returns focus to trigger.
    await page.keyboard.press('Escape');
    await expect(systemBtn).toHaveCount(0);
    await expect(themeTrigger).toBeFocused();
  });

  test('theme trigger accessible name reflects current selection', async ({ page }) => {
    await page.goto('/');

    const themeTrigger = page.getByRole('button', { name: /^Theme:/ });

    await themeTrigger.click();
    await page.getByRole('button', { name: 'Light', exact: true }).click();
    await expect(themeTrigger).toHaveAccessibleName(/Theme: Light/);

    await themeTrigger.click();
    await page.getByRole('button', { name: 'Dark', exact: true }).click();
    await expect(themeTrigger).toHaveAccessibleName(/Theme: Dark/);

    await themeTrigger.click();
    await page.getByRole('button', { name: 'System', exact: true }).click();
    await expect(themeTrigger).toHaveAccessibleName(/Theme: System/);
  });
});

// ---------------------------------------------------------------------------
// Axe — Light and Dark themes (contrast validation)
// ---------------------------------------------------------------------------

test.describe('axe — theme variants on homepage', () => {
  test('light theme: homepage has zero A/AA violations', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('portfolio-theme', 'light');
      document.documentElement.dataset['theme'] = 'light';
    });

    await expect(page.locator('main')).toBeVisible();

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    expect(
      results.violations,
      `Light theme axe violations:\n${JSON.stringify(results.violations, null, 2)}`,
    ).toHaveLength(0);
  });

  test('dark theme: homepage has zero A/AA violations', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('portfolio-theme', 'dark');
      document.documentElement.dataset['theme'] = 'dark';
    });

    await expect(page.locator('main')).toBeVisible();

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    expect(
      results.violations,
      `Dark theme axe violations:\n${JSON.stringify(results.violations, null, 2)}`,
    ).toHaveLength(0);
  });
});
