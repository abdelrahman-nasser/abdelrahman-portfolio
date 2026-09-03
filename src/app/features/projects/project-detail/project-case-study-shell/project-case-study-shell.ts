import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageContainer } from '../../../../layout/page-container/page-container';
import type { PortfolioProject } from '../../../../models/project.models';

@Component({
  imports: [PageContainer, RouterLink],
  selector: 'app-project-case-study-shell',
  styleUrl: './project-case-study-shell.scss',
  templateUrl: './project-case-study-shell.html',
})
export class ProjectCaseStudyShell {
  readonly project = input.required<PortfolioProject>();
}
