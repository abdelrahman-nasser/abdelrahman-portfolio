import { TestBed } from '@angular/core/testing';
import { provideRouter, type Route } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from '../../../app.routes';
import {
  mojLawyerLicensingCaseStudy,
  portfolioProjects,
  projectCaseStudies,
  scegaEventLicensingCaseStudy,
  uplandFileBoundCaseStudy,
} from '../../../content';
import { ProjectDetailPage } from './project-detail-page';
import { resolvePortfolioProject } from './project-detail-route';

describe('ProjectDetailPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });
  });

  it.each(portfolioProjects)(
    'resolves $route to the canonical $title project metadata',
    async (project) => {
      const harness = await RouterTestingHarness.create();

      await harness.navigateByUrl(project.route, ProjectDetailPage);

      const compiled = harness.routeNativeElement;
      const tags = Array.from(compiled?.querySelectorAll('.project-case-study__tags li') ?? []).map(
        (tag) => tag.textContent?.trim(),
      );

      expect(compiled?.querySelectorAll('h1')).toHaveLength(1);
      expect(compiled?.querySelector('h1')?.textContent?.trim()).toBe(project.title);
      expect(compiled?.querySelector('.project-case-study__subtitle')?.textContent?.trim()).toBe(
        project.subtitle,
      );
      expect(compiled?.querySelector('.project-case-study__summary')?.textContent?.trim()).toBe(
        project.summary,
      );
      expect(tags).toEqual(project.tags);
    },
  );

  it('fails clearly when route data references an unknown project', async () => {
    TestBed.resetTestingModule();
    const invalidRoute: Route = {
      path: 'projects/invalid-configuration',
      component: ProjectDetailPage,
      data: {
        projectId: 'not-a-canonical-project',
      },
    };
    TestBed.configureTestingModule({
      providers: [provideRouter([invalidRoute])],
    });
    const harness = await RouterTestingHarness.create();

    await expect(harness.navigateByUrl('/projects/invalid-configuration')).rejects.toThrow(
      'Project detail route references an unknown project ID: not-a-canonical-project',
    );
  });

  it('renders Upland long-form content through the shared shell with semantic headings and lists', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/projects/upland-filebound', ProjectDetailPage);

    const compiled = harness.routeNativeElement;
    const sectionHeadings = Array.from(
      compiled?.querySelectorAll('.case-study-section > h2') ?? [],
    );

    expect(compiled?.querySelectorAll('article.project-case-study')).toHaveLength(1);
    expect(compiled?.querySelectorAll('h1')).toHaveLength(1);
    expect(sectionHeadings.map((heading) => heading.textContent?.trim())).toEqual(
      uplandFileBoundCaseStudy.sections.map((section) => section.title),
    );
    expect(compiled?.querySelectorAll('.case-study-section p').length).toBeGreaterThan(0);
    expect(compiled?.querySelectorAll('.case-study-section ul').length).toBeGreaterThan(0);
    expect(compiled?.textContent).toContain('nearly five years');
  });

  it('renders MOJ long-form content through the shared shell with semantic headings and lists', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/projects/moj-lawyer-licensing', ProjectDetailPage);

    const compiled = harness.routeNativeElement;
    const sectionHeadings = Array.from(
      compiled?.querySelectorAll('.case-study-section > h2') ?? [],
    );

    expect(compiled?.querySelectorAll('article.project-case-study')).toHaveLength(1);
    expect(compiled?.querySelectorAll('h1')).toHaveLength(1);
    expect(sectionHeadings.map((heading) => heading.textContent?.trim())).toEqual(
      mojLawyerLicensingCaseStudy.sections.map((section) => section.title),
    );
    expect(compiled?.querySelectorAll('.case-study-section p').length).toBeGreaterThan(0);
    expect(compiled?.querySelectorAll('.case-study-section ul').length).toBeGreaterThan(0);
    expect(compiled?.textContent).toContain('Vue 2');
    expect(compiled?.textContent).toContain('path-based Micro Frontend');
    expect(compiled?.textContent).not.toMatch(/Angular|Module Federation|microservices/i);
  });

  it('renders SCEGA long-form content through the shared shell with semantic headings and lists', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/projects/scega-event-licensing', ProjectDetailPage);

    const compiled = harness.routeNativeElement;
    const sectionHeadings = Array.from(
      compiled?.querySelectorAll('.case-study-section > h2') ?? [],
    );

    expect(compiled?.querySelectorAll('article.project-case-study')).toHaveLength(1);
    expect(compiled?.querySelectorAll('h1')).toHaveLength(1);
    expect(sectionHeadings.map((heading) => heading.textContent?.trim())).toEqual(
      scegaEventLicensingCaseStudy.sections.map((section) => section.title),
    );
    expect(compiled?.querySelectorAll('.case-study-section h3').length).toBeGreaterThan(0);
    expect(compiled?.querySelectorAll('.case-study-section p').length).toBeGreaterThan(0);
    expect(compiled?.querySelectorAll('.case-study-section ul').length).toBeGreaterThan(0);
    expect(compiled?.textContent).toContain('Angular 19');
    expect(compiled?.textContent).toContain('.NET 9');
    expect(compiled?.textContent).toContain('ControlValueAccessor');
    expect(compiled?.textContent).not.toMatch(
      /micro[- ]?frontend|module federation|microservices/i,
    );
  });

  it('renders detailed content for every project through one shared case-study shell', async () => {
    const harness = await RouterTestingHarness.create();

    for (const project of portfolioProjects) {
      await harness.navigateByUrl(project.route, ProjectDetailPage);

      const compiled = harness.routeNativeElement;
      const caseStudy = projectCaseStudies.find((candidate) => candidate.projectId === project.id);

      expect(caseStudy).toBeDefined();
      expect(compiled?.querySelectorAll('app-project-case-study-shell')).toHaveLength(1);
      expect(compiled?.querySelectorAll('article.project-case-study')).toHaveLength(1);
      expect(compiled?.querySelectorAll('.case-study-section')).toHaveLength(
        caseStudy?.sections.length ?? 0,
      );
    }
  });
});

describe('resolvePortfolioProject', () => {
  it.each(portfolioProjects)('returns the existing canonical object for $id', (project) => {
    expect(resolvePortfolioProject(project.id)).toBe(project);
  });

  it('does not silently fall back for missing route data', () => {
    expect(() => resolvePortfolioProject(undefined)).toThrow(
      'Project detail route references an unknown project ID: undefined',
    );
  });
});
