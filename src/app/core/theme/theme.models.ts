export type ThemePreference = 'system' | 'light' | 'dark';

export type ResolvedTheme = 'light' | 'dark';

export function isThemePreference(value: string | null): value is ThemePreference {
  return value === 'system' || value === 'light' || value === 'dark';
}
