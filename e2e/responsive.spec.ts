import type { Locator, Page } from '@playwright/test';

import { expect, test } from './support/browser-errors';

const viewports = [
  { width: 1280, height: 900 },
  { width: 1024, height: 768 },
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

    if (viewport.width >= 1024) {
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

  const overflowDiagnostics = await page.evaluate(() => {
    const doc = document.documentElement;
    const clientWidth = doc.clientWidth;
    const scrollWidth = doc.scrollWidth;
    const hasOverflow = scrollWidth > clientWidth + 1;

    let offenders: Array<{
      tag: string;
      className: string;
      text: string | undefined;
      left: number;
      right: number;
      width: number;
    }> = [];

    if (hasOverflow) {
      offenders = [...document.querySelectorAll('*')]
        .map((element) => {
          const rect = element.getBoundingClientRect();

          return {
            tag: element.tagName,
            className:
              typeof element.className === 'string'
                ? element.className
                : (element.getAttribute('class') ?? ''),
            text: element.textContent?.trim().slice(0, 80),
            left: rect.left,
            right: rect.right,
            width: rect.width,
          };
        })
        .filter((element) => element.right > clientWidth + 0.5 || element.left < -0.5);
    }

    return {
      clientWidth,
      scrollWidth,
      overflow: scrollWidth - clientWidth,
      hasOverflow,
      offenders,
    };
  });

  if (overflowDiagnostics.hasOverflow) {
    console.error(
      `[OVERFLOW DETECTED] path: ${path}, viewport: ${page.viewportSize()?.width}px\n` +
        `clientWidth: ${overflowDiagnostics.clientWidth}, scrollWidth: ${overflowDiagnostics.scrollWidth}, overflow: ${overflowDiagnostics.overflow}px\n` +
        `Offenders (${overflowDiagnostics.offenders.length}):\n` +
        JSON.stringify(overflowDiagnostics.offenders, null, 2),
    );
  }

  expect(
    overflowDiagnostics.hasOverflow,
    `Route "${path}" had horizontal overflow at ${page.viewportSize()?.width}px (clientWidth=${overflowDiagnostics.clientWidth}, scrollWidth=${overflowDiagnostics.scrollWidth})`,
  ).toBe(false);

  const actionBounds = await criticalAction.boundingBox();
  const viewportSize = page.viewportSize();

  expect(actionBounds).not.toBeNull();
  expect(viewportSize).not.toBeNull();

  if (actionBounds && viewportSize) {
    expect(actionBounds.x).toBeGreaterThanOrEqual(-1);
    expect(actionBounds.x + actionBounds.width).toBeLessThanOrEqual(viewportSize.width + 1);
  }
}
