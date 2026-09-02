import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ThemeToggle } from '../../shared/components/theme-toggle/theme-toggle';

interface NavigationItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  imports: [RouterLink, RouterLinkActive, ThemeToggle],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly navigationItems: readonly NavigationItem[] = [
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Engineering', path: '/engineering' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
}
