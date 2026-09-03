import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { portfolioProjects } from '../../../../content';
import type { PortfolioProject } from '../../../../models/project.models';
import { ProjectCaseStudyShell } from './project-case-study-shell';

@Component({
  imports: [ProjectCaseStudyShell],
  template: `
    <app-project-case-study-shell [project]="project">
      <section class="projected-content" aria-labelledby="overview-heading">
        <h2 id="overview-heading">Overview</h2>
        <p>Future case-study content</p>
      </section>
    </app-project-case-study-shell>
  `,
})
class ProjectedContentHost {
  readonly project = portfolioProjects[0];
}

describe('ProjectCaseStudyShell', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCaseStudyShell, ProjectedContentHost],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the project title as the only h1', () => {
    const { compiled } = renderProject(portfolioProjects[0]);
    const headings = compiled.querySelectorAll('h1');

    expect(headings).toHaveLength(1);
    expect(headings[0]?.textContent?.trim()).toBe(portfolioProjects[0].title);
  });

  it('renders the project subtitle and summary', () => {
    const project = portfolioProjects[1];
    const { compiled } = renderProject(project);

    expect(compiled.querySelector('.project-case-study__subtitle')?.textContent?.trim()).toBe(
      project.subtitle,
    );
    expect(compiled.querySelector('.project-case-study__summary')?.textContent?.trim()).toBe(
      project.summary,
    );
  });

  it('renders canonical tags as informational, non-focusable text', () => {
    const project = portfolioProjects[2];
    const { compiled } = renderProject(project);
    const tagList = compiled.querySelector('.project-case-study__tags');
    const tags = Array.from(tagList?.querySelectorAll('li') ?? []);

    expect(tags.map((tag) => tag.textContent?.trim())).toEqual(project.tags);
    expect(tagList?.getAttribute('aria-label')).toBe(`${project.title} technologies`);
    expect(tagList?.querySelectorAll('a, button, [tabindex]')).toHaveLength(0);
  });

  it('uses a real router link back to the projects index', () => {
    const { compiled } = renderProject(portfolioProjects[0]);
    const backLink = compiled.querySelector<HTMLAnchorElement>('.project-case-study__back-link');

    expect(backLink?.tagName).toBe('A');
    expect(backLink?.getAttribute('href')).toBe('/projects');
    expect(backLink?.textContent?.trim()).toContain('Back to Projects');
  });

  it('projects future case-study content beneath the shared header', () => {
    const fixture = TestBed.createComponent(ProjectedContentHost);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectedContent = compiled.querySelector('.project-case-study__body .projected-content');

    expect(projectedContent).not.toBeNull();
    expect(projectedContent?.querySelector('h2')?.textContent?.trim()).toBe('Overview');
  });

  it.each(portfolioProjects)(
    'uses the same generic structure for $title regardless of identity or featured state',
    (project) => {
      const { compiled } = renderProject(project);

      expect(compiled.querySelectorAll('article.project-case-study')).toHaveLength(1);
      expect(compiled.querySelectorAll('.project-case-study__header')).toHaveLength(1);
      expect(compiled.querySelector('.project-case-study--featured')).toBeNull();
      expect(compiled.textContent).not.toContain('Featured Project');
    },
  );

  function renderProject(project: PortfolioProject): {
    readonly fixture: ComponentFixture<ProjectCaseStudyShell>;
    readonly compiled: HTMLElement;
  } {
    const fixture = TestBed.createComponent(ProjectCaseStudyShell);
    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();

    return {
      fixture,
      compiled: fixture.nativeElement as HTMLElement,
    };
  }
});
