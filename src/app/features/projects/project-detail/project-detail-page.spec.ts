import { TestBed } from '@angular/core/testing';
import { provideRouter, type Route } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from '../../../app.routes';
import { portfolioProjects } from '../../../content';
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
