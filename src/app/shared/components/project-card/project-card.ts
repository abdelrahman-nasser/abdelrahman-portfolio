import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { PortfolioProject } from '../../../models/project.models';

@Component({
  imports: [RouterLink],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<PortfolioProject>();
}
