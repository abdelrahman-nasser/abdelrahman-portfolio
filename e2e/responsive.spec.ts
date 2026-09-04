import type { Locator, Page } from '@playwright/test';

import { expect, test } from './support/browser-errors';

const viewports = [
  { width: 1280, height: 900 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 320, height: 720 },
] as const;

for (const viewport of viewports) {
  test(`critical pages reflow without horizontal overflow at ${viewport.width}px`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);

    await assertResponsivePage(page, '/', page.getByRole('link', { name: 'View My Work' }));
    await assertResponsivePage(
      page,
      '/projects',
      page.getByRole('link', { name: 'View Upland FileBound case study' }),
    );
    await assertResponsivePage(
      page,
      '/projects/upland-filebound',
      page.getByRole('link', { name: 'Back to Projects' }),
    );

    if (viewport.width >= 768) {
      await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
    } else {
      await expect(page.getByRole('button', { name: 'Open navigation' })).toBeVisible();
    }
  });
}

async function assertResponsivePage(
  page: Page,
  path: string,
  criticalAction: Locator,
): Promise<void> {
  const response = await page.goto(path);

  expect(response?.ok()).toBe(true);
  await expect(page.locator('main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(criticalAction).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
    ),
  ).toBe(true);

  const actionBounds = await criticalAction.boundingBox();
  const viewportSize = page.viewportSize();

  expect(actionBounds).not.toBeNull();
  expect(viewportSize).not.toBeNull();

  if (actionBounds && viewportSize) {
    expect(actionBounds.x).toBeGreaterThanOrEqual(-1);
    expect(actionBounds.x + actionBounds.width).toBeLessThanOrEqual(viewportSize.width + 1);
  }
}
