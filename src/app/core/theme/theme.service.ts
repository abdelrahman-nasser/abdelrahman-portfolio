import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, DestroyRef, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

import { ResolvedTheme, ThemePreference } from './theme.models';
import { ThemeStorageService } from './theme-storage.service';

const DARK_THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly storage = inject(ThemeStorageService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly preferenceState = signal<ThemePreference>(this.storage.readPreference());
  private readonly systemThemeState = signal<ResolvedTheme>('light');
  private systemThemeQuery: MediaQueryList | null = null;

  readonly preference = this.preferenceState.asReadonly();
  readonly resolvedTheme = computed<ResolvedTheme>(() => {
    const preference = this.preferenceState();

    return preference === 'system' ? this.systemThemeState() : preference;
  });

  constructor() {
    this.initializeSystemTheme();
    this.applyResolvedTheme();

    this.destroyRef.onDestroy(() => {
      this.systemThemeQuery?.removeEventListener('change', this.handleSystemThemeChange);
    });
  }

  setPreference(preference: ThemePreference): void {
    this.preferenceState.set(preference);
    this.storage.writePreference(preference);
    this.applyResolvedTheme();
  }

  private readonly handleSystemThemeChange = (event: MediaQueryListEvent): void => {
    this.systemThemeState.set(event.matches ? 'dark' : 'light');

    if (this.preferenceState() === 'system') {
      this.applyResolvedTheme();
    }
  };

  private initializeSystemTheme(): void {
    if (!this.isBrowser) {
      return;
    }

    const browserWindow = this.document.defaultView;

    if (typeof browserWindow?.matchMedia !== 'function') {
      return;
    }

    try {
      this.systemThemeQuery = browserWindow.matchMedia(DARK_THEME_MEDIA_QUERY);
      this.systemThemeState.set(this.systemThemeQuery.matches ? 'dark' : 'light');
      this.systemThemeQuery.addEventListener('change', this.handleSystemThemeChange);
    } catch {
      this.systemThemeQuery = null;
    }
  }

  private applyResolvedTheme(): void {
    if (!this.isBrowser) {
      return;
    }

    this.document.documentElement.dataset['theme'] = this.resolvedTheme();
  }
}
