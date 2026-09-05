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
    'https://abdelrahman-hegab.pages.dev',
  );
});

test('CV renders its canonical profile, experience, and certifications with the approved PDF download', async ({
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

  const cvCertificationsSection = page.locator(
    'section[aria-labelledby="cv-certifications-title"]',
  );
  await expect(cvCertificationsSection).toBeVisible();
  await expect(
    cvCertificationsSection.getByRole('heading', { name: 'Certifications', level: 2 }),
  ).toBeVisible();
  await expect(
    cvCertificationsSection.getByRole('heading', { name: 'Microsoft', level: 3 }),
  ).toBeVisible();

  const canonicalCertifications = [
    'Microsoft Certified Trainer (MCT)',
    'Microsoft Certified Solutions Developer (MCSD): Web Applications',
    'Microsoft Certified Solutions Associate (MCSA): Web Applications',
    'Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3',
    'Microsoft Certified Professional (MCP)',
  ];

  for (const title of canonicalCertifications) {
    await expect(
      cvCertificationsSection.getByRole('heading', { name: title, level: 4 }),
    ).toBeVisible();
  }

  const cvTranscriptLink = cvCertificationsSection.getByRole('link', {
    name: 'View Microsoft Transcript',
    exact: true,
  });
  await expect(cvTranscriptLink).toBeVisible();
  await expect(cvTranscriptLink).toHaveAttribute(
    'href',
    'https://learn.microsoft.com/en-us/users/abdelrahman91/transcript/vpjp9iq53rz38zk',
  );
  await expect(cvTranscriptLink).toHaveAttribute('target', '_blank');
  await expect(cvTranscriptLink).toHaveAttribute('rel', 'noopener noreferrer');

  // Verify obsolete headings are NOT present
  await expect(page.getByRole('heading', { name: 'Credentials', level: 2 })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Microsoft Certifications' })).toHaveCount(0);

  const downloadLink = page.getByRole('link', { name: 'Download CV', exact: true });
  await expect(downloadLink).toBeVisible();
  await expect(downloadLink).toHaveAttribute(
    'href',
    '/assets/cv/Abdelrahman-Hegab-Senior-Software-Engineer-CV.pdf',
  );
  await expect(downloadLink).toHaveAttribute(
    'download',
    'Abdelrahman-Hegab-Senior-Software-Engineer-CV.pdf',
  );
  await expect(page.getByText('PDF · Abdelrahman Hegab · Senior Software Engineer')).toBeVisible();
});

test('homepage renders the generalized Certifications section with Microsoft provider and transcript action', async ({
  page,
}) => {
  await page.goto('/');

  const section = page.locator('section.certifications');
  await expect(section).toBeVisible();
  await expect(section.getByRole('heading', { name: 'Certifications', level: 2 })).toBeVisible();
  await expect(section.getByRole('heading', { name: 'Microsoft', level: 3 })).toBeVisible();

  const canonicalCertifications = [
    'Microsoft Certified Trainer (MCT)',
    'Microsoft Certified Solutions Developer (MCSD): Web Applications',
    'Microsoft Certified Solutions Associate (MCSA): Web Applications',
    'Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3',
    'Microsoft Certified Professional (MCP)',
  ];

  for (const title of canonicalCertifications) {
    await expect(section.getByRole('heading', { name: title, level: 4 })).toBeVisible();
  }

  const transcriptLink = section.getByRole('link', {
    name: 'View Microsoft Transcript',
    exact: true,
  });
  await expect(transcriptLink).toBeVisible();
  await expect(transcriptLink).toHaveAttribute(
    'href',
    'https://learn.microsoft.com/en-us/users/abdelrahman91/transcript/vpjp9iq53rz38zk',
  );
  await expect(transcriptLink).toHaveAttribute('target', '_blank');
  await expect(transcriptLink).toHaveAttribute('rel', 'noopener noreferrer');

  // Verify obsolete headings are NOT present
  await expect(page.getByRole('heading', { name: 'Credentials', level: 2 })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Microsoft Certifications' })).toHaveCount(0);
});

test('homepage hero Download CV action targets the approved static PDF', async ({ page }) => {
  await page.goto('/');

  const heroDownloadCv = page.getByRole('link', { name: 'Download CV', exact: true });
  await expect(heroDownloadCv).toBeVisible();
  await expect(heroDownloadCv).toHaveAttribute(
    'href',
    '/assets/cv/Abdelrahman-Hegab-Senior-Software-Engineer-CV.pdf',
  );
  await expect(heroDownloadCv).toHaveAttribute(
    'download',
    'Abdelrahman-Hegab-Senior-Software-Engineer-CV.pdf',
  );
});

test('the approved downloadable CV PDF is available as a static asset', async ({ request }) => {
  const response = await request.get(
    '/assets/cv/Abdelrahman-Hegab-Senior-Software-Engineer-CV.pdf',
  );
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('application/pdf');

  const buffer = await response.body();
  expect(buffer.length).toBe(275107);
  expect(buffer.subarray(0, 5).toString('utf8')).toBe('%PDF-');
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
