import { Component } from '@angular/core';

import { portfolioProjects } from '../../content';
import { PageContainer } from '../../layout/page-container/page-container';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  imports: [PageContainer, ProjectCard],
  selector: 'app-projects-page',
  styleUrl: './projects-page.scss',
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  protected readonly projects = portfolioProjects;
}
