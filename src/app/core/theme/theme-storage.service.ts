import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

import { isThemePreference, ThemePreference } from './theme.models';

const THEME_STORAGE_KEY = 'portfolio-theme';

export const THEME_STORAGE = new InjectionToken<Storage | null>('Theme storage', {
  factory: () => {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) {
      return null;
    }

    try {
      return inject(DOCUMENT).defaultView?.localStorage ?? null;
    } catch {
      return null;
    }
  },
});

@Injectable({ providedIn: 'root' })
export class ThemeStorageService {
  private readonly storage = inject(THEME_STORAGE);

  readPreference(): ThemePreference {
    try {
      const storedPreference = this.storage?.getItem(THEME_STORAGE_KEY) ?? null;

      return isThemePreference(storedPreference) ? storedPreference : 'system';
    } catch {
      return 'system';
    }
  }

  writePreference(preference: ThemePreference): void {
    try {
      this.storage?.setItem(THEME_STORAGE_KEY, preference);
    } catch {
      // Storage can be unavailable in privacy modes; the in-memory preference still works.
    }
  }
}
