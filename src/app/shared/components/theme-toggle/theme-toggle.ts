import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { ThemePreference } from '../../../core/theme/theme.models';
import { ThemeService } from '../../../core/theme/theme.service';

interface ThemeOption {
  readonly label: string;
  readonly value: ThemePreference;
}

@Component({
  selector: 'app-theme-toggle',
  styleUrl: './theme-toggle.scss',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly trigger = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');

  protected readonly theme = inject(ThemeService);
  protected readonly isOpen = signal(false);
  protected readonly currentPreferenceLabel = computed(
    () =>
      this.options.find((option) => option.value === this.theme.preference())?.label ?? 'System',
  );
  protected readonly options: readonly ThemeOption[] = [
    { label: 'System', value: 'system' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  protected toggleMenu(): void {
    this.isOpen.update((isOpen) => !isOpen);
  }

  protected selectTheme(preference: ThemePreference): void {
    this.theme.setPreference(preference);
    this.closeMenu(true);
  }

  @HostListener('document:click', ['$event'])
  protected closeOnOutsideClick(event: Event): void {
    if (this.isOpen() && !this.element.nativeElement.contains(event.target as Node)) {
      this.closeMenu(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected closeOnEscape(): void {
    this.closeMenu(true);
  }

  private closeMenu(restoreFocus: boolean): void {
    if (!this.isOpen()) {
      return;
    }

    this.isOpen.set(false);

    if (restoreFocus) {
      this.trigger().nativeElement.focus();
    }
  }
}
