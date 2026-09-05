import { expect, test } from './support/browser-errors';

const projects = [
  {
    name: 'Upland FileBound',
    path: '/projects/upland-filebound',
  },
  {
    name: 'Saudi Ministry of Justice — Lawyer Licensing Platform',
    path: '/projects/moj-lawyer-licensing',
  },
  {
    name: 'SCEGA — Government Event Licensing Platform',
    path: '/projects/scega-event-licensing',
  },
] as const;

test('global navigation follows the critical portfolio journey', async ({ page }) => {
  await page.goto('/');

  const primaryNavigation = page.getByRole('navigation', { name: 'Primary' });

  await primaryNavigation.getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole('heading', { name: 'Selected Projects', level: 1 })).toBeVisible();
  await expect(primaryNavigation.getByRole('link', { name: 'Projects' })).toHaveAttribute(
    'aria-current',
    'page',
  );

  await page.getByRole('link', { name: 'View Upland FileBound case study' }).click();
  await expect(page).toHaveURL(/\/projects\/upland-filebound$/);
  await expect(page.getByRole('heading', { name: 'Upland FileBound', level: 1 })).toBeVisible();

  await page.getByRole('link', { name: 'Back to Projects' }).click();
  await expect(page).toHaveURL(/\/projects$/);

  for (const destination of [
    { name: 'Engineering', path: '/engineering' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]) {
    await primaryNavigation.getByRole('link', { name: destination.name }).click();
    await expect(page).toHaveURL(new RegExp(`${destination.path}$`));
    await expect(page.getByRole('heading', { name: destination.name, level: 1 })).toBeVisible();
    await expect(primaryNavigation.getByRole('link', { name: destination.name })).toHaveAttribute(
      'aria-current',
      'page',
    );
  }

  await page.getByRole('link', { name: 'CV', exact: true }).click();
  await expect(page).toHaveURL(/\/cv$/);
  await expect(page.getByRole('heading', { name: 'Curriculum Vitae', level: 1 })).toBeVisible();
});

for (const project of projects) {
  test(`the ${project.name} card opens its canonical route`, async ({ page }) => {
    await page.goto('/projects');
    await page.getByRole('link', { name: `View ${project.name} case study` }).click();

    await expect(page).toHaveURL(new RegExp(`${project.path}$`));
    await expect(page.getByRole('heading', { name: project.name, level: 1 })).toBeVisible();
  });
}

test('theme options apply System, Light, and Dark and persist the explicit preference', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');

  const root = page.locator('html');
  const themeTrigger = page.getByRole('button', { name: /^Theme:/ });

  await themeTrigger.click();
  await page.getByRole('button', { name: 'System', exact: true }).click();
  await expect(root).toHaveAttribute('data-theme', 'dark');
  await expect(themeTrigger).toHaveAccessibleName(/Theme: System/);

  await themeTrigger.click();
  await page.getByRole('button', { name: 'Light', exact: true }).click();
  await expect(root).toHaveAttribute('data-theme', 'light');

  await themeTrigger.click();
  await page.getByRole('button', { name: 'Dark', exact: true }).click();
  await expect(root).toHaveAttribute('data-theme', 'dark');
  expect(await page.evaluate(() => localStorage.getItem('portfolio-theme'))).toBe('dark');

  await page.reload();
  await expect(root).toHaveAttribute('data-theme', 'dark');
  await expect(themeTrigger).toHaveAccessibleName(/Theme: Dark/);
});

test.describe('mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('opens, navigates, closes, and restores focus after Escape', async ({ page }) => {
    await page.goto('/');

    const primaryNavigation = page.getByRole('navigation', { name: 'Primary' });
    const menuTrigger = page.getByRole('button', { name: /navigation/ });

    await expect(primaryNavigation).toBeHidden();
    await expect(menuTrigger).toBeVisible();
    await menuTrigger.click();
    await expect(menuTrigger).toHaveAttribute('aria-expanded', 'true');

    const mobileNavigation = page.getByRole('navigation', { name: 'Mobile' });
    await expect(mobileNavigation).toBeVisible();
    await mobileNavigation.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(page.getByRole('navigation', { name: 'Mobile' })).toHaveCount(0);

    await menuTrigger.click();
    await mobileNavigation.getByRole('link', { name: 'Experience' }).focus();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('navigation', { name: 'Mobile' })).toHaveCount(0);
    await expect(menuTrigger).toBeFocused();
  });
});
