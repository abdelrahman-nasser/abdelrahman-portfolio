import { Component } from '@angular/core';

import { portfolioExperience } from '../../content';
import { PageContainer } from '../../layout/page-container/page-container';
import type { ExperienceItem } from '../../models/experience.models';

const experienceDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
});

@Component({
  imports: [PageContainer],
  selector: 'app-experience-page',
  styleUrl: './experience-page.scss',
  templateUrl: './experience-page.html',
})
export class ExperiencePage {
  protected readonly experiences: readonly ExperienceItem[] = portfolioExperience;

  protected formatDate(value: string): string {
    const [year, month] = value.split('-').map(Number);

    if (month === undefined) {
      return value;
    }

    return experienceDateFormatter.format(new Date(Date.UTC(year, month - 1, 1)));
  }
}
