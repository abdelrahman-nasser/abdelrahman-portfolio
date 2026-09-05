import type { Route } from '@angular/router';

import { routes } from '../../app.routes';
import { portfolioProfile } from '../../content/profile.content';
import { portfolioProjects } from '../../content/projects.content';
import { SEO_ROUTE_DATA_KEY, SeoMetadata } from './seo.models';
import { buildSocialRouteUrl } from './seo.service';

const expectedTitles = new Map<string, string>([
  ['', 'Abdelrahman Hegab | Senior Software Engineer'],
  ['experience', 'Experience | Abdelrahman Hegab'],
  ['projects', 'Engineering Projects | Abdelrahman Hegab'],
  ['projects/upland-filebound', 'Upland FileBound Engineering Case Study | Abdelrahman Hegab'],
  [
    'projects/moj-lawyer-licensing',
    'Saudi Ministry of Justice Lawyer Licensing Case Study | Abdelrahman Hegab',
  ],
  [
    'projects/scega-event-licensing',
    'SCEGA Event Licensing Platform Case Study | Abdelrahman Hegab',
  ],
  ['engineering', 'Engineering Approach | Abdelrahman Hegab'],
  ['about', 'About | Abdelrahman Hegab'],
  ['contact', 'Contact | Abdelrahman Hegab'],
  ['cv', 'CV | Abdelrahman Hegab'],
]);

describe('route SEO metadata', () => {
  it('should cover exactly the ten public routes', () => {
    expect(routes).toHaveLength(10);
    expect(routes.map((route) => route.path)).toEqual([...expectedTitles.keys()]);
    expect(new Set(routes.map((route) => route.path))).toHaveLength(10);

    for (const route of routes) {
      expect(getSeoMetadata(route)).toBeDefined();
    }
  });

  it('should map every explicit project route to its canonical project ID', () => {
    const projectRouteContracts = routes
      .filter(({ path }) => path?.startsWith('projects/'))
      .map(({ path, data }) => ({ path, projectId: data?.['projectId'] }));

    expect(projectRouteContracts).toEqual(
      portfolioProjects.map(({ id, route }) => ({
        path: route.slice(1),
        projectId: id,
      })),
    );
  });

  it('should use the approved, route-appropriate titles', () => {
    for (const route of routes) {
      const expectedTitle = expectedTitles.get(route.path ?? '');

      expect(getSeoMetadata(route).title).toBe(expectedTitle);
    }
  });

  it('should provide a distinct, non-empty description for every route', () => {
    const descriptions = routes.map((route) => getSeoMetadata(route).description.trim());

    expect(descriptions.every((description) => description.length > 0)).toBe(true);
    expect(new Set(descriptions)).toHaveLength(routes.length);
  });

  it('should generate one absolute social URL for every public route', () => {
    const socialUrls = routes.map(({ path }) => buildSocialRouteUrl(path ? `/${path}` : '/'));
    const expectedUrls = routes.map(({ path }) =>
      path ? `${portfolioProfile.website}/${path}/` : `${portfolioProfile.website}/`,
    );

    expect(socialUrls).toEqual(expectedUrls);
    expect(new Set(socialUrls)).toHaveLength(10);
    expect(socialUrls.every((url) => new URL(url).protocol === 'https:')).toBe(true);
  });

  it('should mark only the homepage for Person structured data', () => {
    expect(getSeoMetadata(routes[0]).structuredData).toBe('person');

    for (const route of routes.slice(1)) {
      expect(getSeoMetadata(route).structuredData).toBeUndefined();
    }
  });

  it('should preserve project-specific SEO accuracy guards', () => {
    const upland = serializeRouteSeo('projects/upland-filebound');
    const moj = serializeRouteSeo('projects/moj-lawyer-licensing');
    const scega = serializeRouteSeo('projects/scega-event-licensing');

    expect(upland).not.toMatch(/redis|rabbitmq|hangfire|quartz|docker|kubernetes|microservices/i);

    expect(moj).toContain('.NET 8');
    expect(moj).toContain('Vue 2');
    expect(moj).toContain('path-based Micro Frontend');
    expect(moj).not.toMatch(/angular|module federation|microservices/i);

    expect(scega).toContain('Angular 19');
    expect(scega).toContain('.NET 9');
    expect(scega).toContain('CQRS/MediatR');
    expect(scega).not.toMatch(/micro[- ]?frontend|module federation|microservices/i);
  });

  it('should not add unresolved chronology to SEO metadata', () => {
    const allMetadata = JSON.stringify(routes.map((route) => getSeoMetadata(route)));

    expect(allMetadata).not.toMatch(/\b(?:19|20)\d{2}\b/);
  });

  it('should keep public SEO metadata free of confidential markers and draft placeholders', () => {
    const allMetadata = JSON.stringify(routes.map((route) => getSeoMetadata(route)));

    expect(allMetadata).not.toMatch(
      /\bpassword\b|\bconnection string\b|\blocalhost\b|\baccess token\b|\bapi key\b|dev\.azure\.com/i,
    );
    expect(allMetadata).not.toMatch(
      /\bTODO\b|\bTBD\b|lorem ipsum|coming soon|replace me|example\.com|your@email/i,
    );
  });
});

function getSeoMetadata(route: Route | undefined): SeoMetadata {
  const metadata = route?.data?.[SEO_ROUTE_DATA_KEY];

  if (!isSeoMetadata(metadata)) {
    throw new Error(`Route ${route?.path ?? '<missing>'} does not have valid SEO metadata.`);
  }

  return metadata;
}

function serializeRouteSeo(path: string): string {
  const route = routes.find((candidate) => candidate.path === path);

  return JSON.stringify(getSeoMetadata(route));
}

function isSeoMetadata(value: unknown): value is SeoMetadata {
  if (value === null || typeof value !== 'object') {
    return false;
  }

  const metadata = value as Partial<SeoMetadata>;

  return typeof metadata.title === 'string' && typeof metadata.description === 'string';
}
