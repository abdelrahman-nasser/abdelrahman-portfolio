import type { Page } from '@playwright/test';

import { expect, test } from './support/browser-errors';

const productionOrigin = 'https://abdelrahman-nasser.github.io';

interface ExpectedMetadata {
  readonly path: string;
  readonly title: string;
  readonly descriptionFragment: string;
  readonly personStructuredData: boolean;
}

test('client-side navigation replaces SEO metadata and Person JSON-LD without stale duplicates', async ({
  page,
}) => {
  await page.goto('/');
  await expectMetadata(page, {
    path: '/',
    title: 'Abdelrahman Hegab | Senior Software Engineer',
    descriptionFragment: 'years of experience',
    personStructuredData: true,
  });

  const primaryNavigation = page.getByRole('navigation', { name: 'Primary' });

  await primaryNavigation.getByRole('link', { name: 'Projects' }).click();
  await expectMetadata(page, {
    path: '/projects',
    title: 'Engineering Projects | Abdelrahman Hegab',
    descriptionFragment: 'Selected software engineering case studies',
    personStructuredData: false,
  });

  await page
    .getByRole('link', {
      name: 'View Saudi Ministry of Justice — Lawyer Licensing Platform case study',
    })
    .click();
  await expectMetadata(page, {
    path: '/projects/moj-lawyer-licensing',
    title: 'Saudi Ministry of Justice Lawyer Licensing Case Study | Abdelrahman Hegab',
    descriptionFragment: 'Full-stack engineering case study',
    personStructuredData: false,
  });

  await primaryNavigation.getByRole('link', { name: 'About' }).click();
  await expectMetadata(page, {
    path: '/about',
    title: 'About | Abdelrahman Hegab',
    descriptionFragment: 'journey from Microsoft technology training',
    personStructuredData: false,
  });

  await page.locator('header').getByRole('link', { name: 'Abdelrahman Hegab' }).click();
  await expectMetadata(page, {
    path: '/',
    title: 'Abdelrahman Hegab | Senior Software Engineer',
    descriptionFragment: 'years of experience',
    personStructuredData: true,
  });
});

async function expectMetadata(page: Page, expected: ExpectedMetadata): Promise<void> {
  const description = page.locator('meta[name="description"]');
  const robots = page.locator('meta[name="robots"]');
  const openGraphTitle = page.locator('meta[property="og:title"]');
  const openGraphUrl = page.locator('meta[property="og:url"]');
  const twitterTitle = page.locator('meta[name="twitter:title"]');
  const personStructuredData = page.locator('script[data-person-structured-data]');

  await expect(page).toHaveTitle(expected.title);
  await expect(description).toHaveCount(1);
  await expect(description).toHaveAttribute('content', new RegExp(expected.descriptionFragment));
  await expect(robots).toHaveCount(1);
  await expect(robots).toHaveAttribute('content', 'index, follow');
  await expect(openGraphTitle).toHaveCount(1);
  await expect(openGraphTitle).toHaveAttribute('content', expected.title);
  await expect(openGraphUrl).toHaveCount(1);
  await expect(openGraphUrl).toHaveAttribute(
    'content',
    `${productionOrigin}${expected.path === '/' ? '/' : expected.path}`,
  );
  await expect(twitterTitle).toHaveCount(1);
  await expect(twitterTitle).toHaveAttribute('content', expected.title);
  await expect(personStructuredData).toHaveCount(expected.personStructuredData ? 1 : 0);
}
