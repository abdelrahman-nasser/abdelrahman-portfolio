import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { findProjectCaseStudy } from '../../../content';
import { ProjectCaseStudyShell } from './project-case-study-shell/project-case-study-shell';
import { PROJECT_DETAIL_PROJECT_ID_KEY, resolvePortfolioProject } from './project-detail-route';

@Component({
  imports: [ProjectCaseStudyShell],
  selector: 'app-project-detail-page',
  styleUrl: './project-detail-page.scss',
  templateUrl: './project-detail-page.html',
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly project = resolvePortfolioProject(
    this.route.snapshot.data[PROJECT_DETAIL_PROJECT_ID_KEY],
  );
  protected readonly caseStudy = findProjectCaseStudy(this.project.id);
}
