import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePreference } from '../../../core/theme/theme.models';
import { ThemeService } from '../../../core/theme/theme.service';
import { ThemeToggle } from './theme-toggle';

class ThemeServiceStub {
  private readonly preferenceState = signal<ThemePreference>('system');

  readonly preference = this.preferenceState.asReadonly();
  readonly setPreference = vi.fn((preference: ThemePreference) => {
    this.preferenceState.set(preference);
  });
}

describe('ThemeToggle', () => {
  let fixture: ComponentFixture<ThemeToggle>;
  let themeService: ThemeServiceStub;

  beforeEach(async () => {
    themeService = new ThemeServiceStub();

    await TestBed.configureTestingModule({
      imports: [ThemeToggle],
      providers: [{ provide: ThemeService, useValue: themeService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggle);
    fixture.detectChanges();
  });

  it('should expose the current preference from the trigger', () => {
    const trigger = fixture.nativeElement.querySelector(
      '.theme-toggle__trigger',
    ) as HTMLButtonElement;

    expect(trigger.type).toBe('button');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(trigger.getAttribute('aria-label')).toContain('Theme: System');
  });

  it('should render keyboard-accessible System, Light, and Dark options', () => {
    openMenu();

    const options = getOptions();

    expect(options.map((option) => option.textContent?.trim())).toEqual([
      'System',
      'Light',
      'Dark',
    ]);
    expect(options.every((option) => option.type === 'button')).toBe(true);
    expect(options[0]?.getAttribute('aria-pressed')).toBe('true');
    expect(options[1]?.getAttribute('aria-pressed')).toBe('false');
    expect(options[2]?.getAttribute('aria-pressed')).toBe('false');
  });

  it('should update the preference and close after selecting an option', () => {
    openMenu();

    getOptions()[1]?.click();
    fixture.detectChanges();

    const trigger = fixture.nativeElement.querySelector(
      '.theme-toggle__trigger',
    ) as HTMLButtonElement;

    expect(themeService.setPreference).toHaveBeenCalledWith('light');
    expect(trigger.getAttribute('aria-label')).toContain('Theme: Light');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(trigger);
  });

  it('should close on Escape and restore focus to the trigger', () => {
    openMenu();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    const trigger = fixture.nativeElement.querySelector(
      '.theme-toggle__trigger',
    ) as HTMLButtonElement;

    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(trigger);
  });

  function openMenu(): void {
    const trigger = fixture.nativeElement.querySelector(
      '.theme-toggle__trigger',
    ) as HTMLButtonElement;

    trigger.click();
    fixture.detectChanges();
  }

  function getOptions(): HTMLButtonElement[] {
    return Array.from(fixture.nativeElement.querySelectorAll('.theme-toggle__option'));
  }
});
