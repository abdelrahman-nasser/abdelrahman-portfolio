import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { ThemePreference } from './theme.models';
import { ThemeService } from './theme.service';
import { ThemeStorageService } from './theme-storage.service';

class TestMediaQueryList {
  readonly media = '(prefers-color-scheme: dark)';
  onchange: ((event: MediaQueryListEvent) => unknown) | null = null;
  private readonly listeners = new Set<(event: MediaQueryListEvent) => void>();

  constructor(public matches: boolean) {}

  addEventListener(type: 'change', listener: (event: MediaQueryListEvent) => void): void {
    if (type === 'change') {
      this.listeners.add(listener);
    }
  }

  removeEventListener(type: 'change', listener: (event: MediaQueryListEvent) => void): void {
    if (type === 'change') {
      this.listeners.delete(listener);
    }
  }

  setMatches(matches: boolean): void {
    this.matches = matches;
    const event: MediaQueryListEvent = Object.assign(new Event('change'), {
      matches,
      media: this.media,
    });

    this.onchange?.(event);
    this.listeners.forEach((listener) => listener(event));
  }
}

interface ThemeServiceTestContext {
  readonly mediaQuery: TestMediaQueryList;
  readonly service: ThemeService;
  readonly storage: {
    readonly readPreference: ReturnType<typeof vi.fn>;
    readonly writePreference: ReturnType<typeof vi.fn>;
  };
}

describe('ThemeService', () => {
  const originalMatchMedia = window.matchMedia;

  function createService(
    initialPreference: ThemePreference = 'system',
    systemPrefersDark = false,
  ): ThemeServiceTestContext {
    const mediaQuery = new TestMediaQueryList(systemPrefersDark);
    const storage = {
      readPreference: vi.fn(() => initialPreference),
      writePreference: vi.fn(),
    };

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn(() => mediaQuery),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: ThemeStorageService, useValue: storage }],
    });

    return {
      mediaQuery,
      service: TestBed.inject(ThemeService),
      storage,
    };
  }

  afterEach(() => {
    TestBed.resetTestingModule();
    document.documentElement.removeAttribute('data-theme');
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: originalMatchMedia,
    });
  });

  it.each([
    ['system', false, 'light'],
    ['system', true, 'dark'],
    ['light', true, 'light'],
    ['dark', false, 'dark'],
  ] as const)(
    'should resolve %s preference with system dark set to %s as %s',
    (preference, systemPrefersDark, expectedTheme) => {
      const { service } = createService(preference, systemPrefersDark);

      expect(service.preference()).toBe(preference);
      expect(service.resolvedTheme()).toBe(expectedTheme);
    },
  );

  it.each(['system', 'light', 'dark'] as const)(
    'should persist the %s preference',
    (preference) => {
      const { service, storage } = createService();

      service.setPreference(preference);

      expect(storage.writePreference).toHaveBeenCalledWith(preference);
    },
  );

  it('should follow system theme changes while system is selected', () => {
    const { mediaQuery, service } = createService('system', false);

    mediaQuery.setMatches(true);

    expect(service.resolvedTheme()).toBe('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });

  it.each(['light', 'dark'] as const)(
    'should not override an explicit %s preference after a system change',
    (preference) => {
      const { mediaQuery, service } = createService(preference, preference === 'light');

      mediaQuery.setMatches(preference !== 'light');

      expect(service.resolvedTheme()).toBe(preference);
      expect(document.documentElement.dataset['theme']).toBe(preference);
    },
  );

  it('should apply the resolved theme to the document root', () => {
    const { service } = createService('light', true);

    expect(TestBed.inject(DOCUMENT).documentElement.dataset['theme']).toBe('light');

    service.setPreference('dark');

    expect(TestBed.inject(DOCUMENT).documentElement.dataset['theme']).toBe('dark');
  });
});
