import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { portfolioProjects } from '../../../content';
import type { PortfolioProject } from '../../../models/project.models';
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let fixture: ComponentFixture<ProjectCard>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the project title from its input', () => {
    renderProject(portfolioProjects[0]);

    expect(compiled.querySelector('h3')?.textContent?.trim()).toBe(portfolioProjects[0].title);
  });

  it('renders the project subtitle from its input', () => {
    renderProject(portfolioProjects[1]);

    expect(compiled.querySelector('.project-card__subtitle')?.textContent?.trim()).toBe(
      portfolioProjects[1].subtitle,
    );
  });

  it('renders the project summary from its input', () => {
    renderProject(portfolioProjects[2]);

    expect(compiled.querySelector('.project-card__summary')?.textContent?.trim()).toBe(
      portfolioProjects[2].summary,
    );
  });

  it('renders every project tag as informational text', () => {
    const project = portfolioProjects[2];
    renderProject(project);

    const tags = Array.from(compiled.querySelectorAll('.project-card__tags li'));

    expect(tags.map((tag) => tag.textContent?.trim())).toEqual(project.tags);
    expect(
      compiled.querySelectorAll('.project-card__tags a, .project-card__tags button'),
    ).toHaveLength(0);
  });

  it('links the case-study action to the project route', () => {
    const project = portfolioProjects[1];
    renderProject(project);

    const link = compiled.querySelector<HTMLAnchorElement>('.project-card__link');

    expect(link?.getAttribute('href')).toBe(project.route);
  });

  it('identifies the project in the case-study action accessible name', () => {
    const project = portfolioProjects[0];
    renderProject(project);

    const link = compiled.querySelector<HTMLAnchorElement>('.project-card__link');

    expect(link?.textContent?.trim()).toContain('View case study');
    expect(link?.getAttribute('aria-label')).toBe(`View ${project.title} case study`);
  });

  it('applies the featured state from project metadata', () => {
    renderProject(portfolioProjects[0]);

    const card = compiled.querySelector('article');

    expect(card?.classList.contains('project-card--featured')).toBe(true);
    expect(card?.classList.contains('project-card--standard')).toBe(false);
    expect(compiled.querySelector('.project-card__featured-label')?.textContent?.trim()).toBe(
      'Featured Project',
    );
  });

  it.each([portfolioProjects[1], portfolioProjects[2]])(
    'applies the standard state to $title',
    (project) => {
      renderProject(project);

      const card = compiled.querySelector('article');

      expect(card?.classList.contains('project-card--standard')).toBe(true);
      expect(card?.classList.contains('project-card--featured')).toBe(false);
      expect(compiled.querySelector('.project-card__featured-label')).toBeNull();
    },
  );

  it.each(portfolioProjects)('does not mutate $title content while rendering', (project) => {
    const originalProject = {
      ...project,
      tags: [...project.tags],
    };
    const originalTagsReference = project.tags;

    renderProject(project);

    expect(project).toEqual(originalProject);
    expect(project.tags).toBe(originalTagsReference);
  });

  function renderProject(project: PortfolioProject): void {
    fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  }
});
