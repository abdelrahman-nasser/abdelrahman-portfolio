import { expect, test } from './support/browser-errors';

const publicRoutes = [
  { path: '/', heading: 'Abdelrahman Hegab' },
  { path: '/experience', heading: 'Experience' },
  { path: '/projects', heading: 'Selected Projects' },
  { path: '/projects/upland-filebound', heading: 'Upland FileBound' },
  {
    path: '/projects/moj-lawyer-licensing',
    heading: 'Saudi Ministry of Justice — Lawyer Licensing Platform',
  },
  {
    path: '/projects/scega-event-licensing',
    heading: 'SCEGA — Government Event Licensing Platform',
  },
  { path: '/engineering', heading: 'Engineering' },
  { path: '/about', heading: 'About' },
  { path: '/contact', heading: 'Contact' },
  { path: '/cv', heading: 'Curriculum Vitae' },
] as const;

test.describe('public routes', () => {
  for (const route of publicRoutes) {
    test(`${route.path} renders its browser-visible identity`, async ({ page }) => {
      const response = await page.goto(route.path);

      expect(response?.ok()).toBe(true);
      await expect(page.locator('main')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(route.heading);
      await expect(page.locator('body')).not.toContainText('Cannot GET');
    });
  }
});

test('contact links expose the approved destinations without leaving the site', async ({
  page,
}) => {
  await page.goto('/contact');

  await expect(
    page.getByRole('link', { name: 'abdelrahman.n.hegab@outlook.com', exact: true }),
  ).toHaveAttribute('href', 'mailto:abdelrahman.n.hegab@outlook.com');
  await expect(page.getByRole('link', { name: '+20 1010 200 471', exact: true })).toHaveAttribute(
    'href',
    'tel:+201010200471',
  );
  const main = page.locator('main');

  await expect(main.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
    'href',
    'https://linkedin.com/in/abdelrahman-nasser',
  );
  await expect(main.getByRole('link', { name: /GitHub/ })).toHaveAttribute(
    'href',
    'https://github.com/abdelrahman-nasser',
  );
  await expect(main.getByRole('link', { name: /Portfolio/ })).toHaveAttribute(
    'href',
    'https://abdelrahman-nasser.github.io',
  );
});

test('CV renders its canonical profile, experience, and credentials without a fake PDF link', async ({
  page,
}) => {
  await page.goto('/cv');

  await expect(
    page.getByText(
      'Senior Software Engineer | .NET & Angular | Software Architecture & Microservices',
      { exact: true },
    ),
  ).toBeVisible();

  for (const employer of [
    'Three Pillars',
    'FlairsTech (Upland Software)',
    'OrchTech',
    'Matrix Business Solutions',
    'New Horizons CLC',
  ]) {
    await expect(page.getByText(employer, { exact: true })).toBeVisible();
  }

  await expect(page.getByRole('heading', { name: 'Credentials', level: 2 })).toBeVisible();
  await expect(page.locator('a[href$=".pdf"], a[download]')).toHaveCount(0);
});

test('the social image and crawl files are available from the local app server', async ({
  request,
}) => {
  const socialImage = await request.get('/assets/social/portfolio-og.png');
  expect(socialImage.ok()).toBe(true);
  expect(socialImage.headers()['content-type']).toContain('image/png');

  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBe(true);
  const robotsBody = await robots.text();
  expect(robotsBody).toContain('User-agent: *');
  expect(robotsBody).toContain('Sitemap:');

  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain('<urlset');
});
