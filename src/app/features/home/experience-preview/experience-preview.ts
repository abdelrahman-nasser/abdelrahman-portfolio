import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { portfolioExperience } from '../../../content';
import { PageContainer } from '../../../layout/page-container/page-container';
import type { ExperienceItem } from '../../../models/experience.models';

const experiencePreviewLimit = 3;
const experienceDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
});

@Component({
  imports: [PageContainer, RouterLink],
  selector: 'app-experience-preview',
  styleUrl: './experience-preview.scss',
  templateUrl: './experience-preview.html',
})
export class ExperiencePreview {
  protected readonly experiences: readonly ExperienceItem[] = portfolioExperience.slice(
    0,
    experiencePreviewLimit,
  );

  protected formatDate(value: string): string {
    const [year, month] = value.split('-').map(Number);

    if (month === undefined) {
      return value;
    }

    return experienceDateFormatter.format(new Date(Date.UTC(year, month - 1, 1)));
  }
}
