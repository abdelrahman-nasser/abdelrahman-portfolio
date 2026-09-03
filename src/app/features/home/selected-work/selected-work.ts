import { Component } from '@angular/core';

import { portfolioProjects } from '../../../content';
import { PageContainer } from '../../../layout/page-container/page-container';
import { ProjectCard } from '../../../shared/components/project-card/project-card';

@Component({
  imports: [PageContainer, ProjectCard],
  selector: 'app-selected-work',
  styleUrl: './selected-work.scss',
  templateUrl: './selected-work.html',
})
export class SelectedWork {
  protected readonly projects = portfolioProjects;
}
