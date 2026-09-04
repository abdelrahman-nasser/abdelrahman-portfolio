import { expect, test as base } from '@playwright/test';

interface BrowserErrorFixtures {
  readonly browserErrors: string[];
}

export const test = base.extend<BrowserErrorFixtures>({
  browserErrors: [
    async ({ page }, use) => {
      const browserErrors: string[] = [];

      page.on('console', (message) => {
        if (message.type() === 'error') {
          browserErrors.push(`console.error: ${message.text()}`);
        }
      });

      page.on('pageerror', (error) => {
        browserErrors.push(`pageerror: ${error.message}`);
      });

      await use(browserErrors);

      expect(browserErrors, `Unexpected browser errors:\n${browserErrors.join('\n')}`).toEqual([]);
    },
    { auto: true },
  ],
});

export { expect } from '@playwright/test';
