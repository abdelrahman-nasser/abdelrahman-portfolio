import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { portfolioProfile } from '../../content';

interface FooterLink {
  readonly label: string;
  readonly url: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly profile = portfolioProfile;

  protected readonly internalLinks: readonly FooterLink[] = [
    { label: 'Projects', url: '/projects' },
    { label: 'Experience', url: '/experience' },
    { label: 'Engineering', url: '/engineering' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];

  protected readonly profileLinks: readonly FooterLink[] = [
    { label: 'Email', url: `mailto:${portfolioProfile.email}` },
    { label: 'LinkedIn', url: portfolioProfile.linkedin },
    { label: 'GitHub', url: portfolioProfile.github },
  ];
}
