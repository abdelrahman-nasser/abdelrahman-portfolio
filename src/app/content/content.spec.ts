import { portfolioProfile, portfolioProjects, publicPortfolioContent } from './index';

describe('public portfolio content', () => {
  it('should keep project identifiers, slugs, routes, and order values unique', () => {
    expect(new Set(portfolioProjects.map((project) => project.id)).size).toBe(
      portfolioProjects.length,
    );
    expect(new Set(portfolioProjects.map((project) => project.slug)).size).toBe(
      portfolioProjects.length,
    );
    expect(new Set(portfolioProjects.map((project) => project.route)).size).toBe(
      portfolioProjects.length,
    );
    expect(new Set(portfolioProjects.map((project) => project.order)).size).toBe(
      portfolioProjects.length,
    );
  });

  it('should preserve the approved flagship order and featured project', () => {
    expect(portfolioProjects.map(({ slug, order }) => ({ slug, order }))).toEqual([
      { slug: 'upland-filebound', order: 1 },
      { slug: 'moj-lawyer-licensing', order: 2 },
      { slug: 'scega-event-licensing', order: 3 },
    ]);

    const featuredProjects = portfolioProjects.filter((project) => project.featured);

    expect(featuredProjects).toHaveLength(1);
    expect(featuredProjects[0].slug).toBe('upland-filebound');
  });

  it('should derive every project route from its slug', () => {
    for (const project of portfolioProjects) {
      expect(project.route).toBe(`/projects/${project.slug}`);
    }
  });

  it('should expose plausible canonical contact details over secure URLs', () => {
    expect(portfolioProfile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(portfolioProfile.website).toMatch(/^https:\/\//);
    expect(portfolioProfile.linkedin).toMatch(/^https:\/\//);
    expect(portfolioProfile.github).toMatch(/^https:\/\//);
  });

  it('should reject high-signal confidential or research identifiers', () => {
    const serializedContent = JSON.stringify(publicPortfolioContent);
    const forbiddenPatterns = [
      /password\s*=/i,
      /connection\s*string/i,
      /bearer\s+[a-z0-9._~+/=-]+/i,
      /api[-_]?key\s*=/i,
      /client[_-]?secret/i,
      /secret\s*=/i,
      /begin (?:rsa |ec |openssh )?private key/i,
      /localhost:\d+/i,
      /(?:192\.168|10\.\d{1,3})\.\d{1,3}\.\d{1,3}/,
      /https?:\/\/[^/\s]*\binternal\b/i,
      /\.git(?:\b|\/)/i,
      /\bpr\s*#\d+\b/i,
      /\bcommit(?:\s+hash)?\s*[:#]?\s*[0-9a-f]{7,40}\b/i,
      /\b(?:feature|bugfix|hotfix|release)\/[a-z0-9._/-]+\b/i,
      /\b(?:src|source)\/[a-z0-9_./-]+\.(?:cs|ts|vue)\b/i,
    ];

    for (const pattern of forbiddenPatterns) {
      expect(serializedContent).not.toMatch(pattern);
    }
  });

  it('should protect SCEGA architecture accuracy', () => {
    const scega = findProject('scega-event-licensing');

    expect(JSON.stringify(scega)).not.toMatch(/micro frontend|module federation|microservices/i);
  });

  it('should protect MOJ frontend and backend architecture accuracy', () => {
    const moj = findProject('moj-lawyer-licensing');

    expect(moj.tags).toContain('Vue.js');
    expect(JSON.stringify(moj)).not.toMatch(/angular|module federation|microservices/i);
  });

  it('should protect Upland from unsupported infrastructure claims', () => {
    const upland = findProject('upland-filebound');

    expect(JSON.stringify(upland)).not.toMatch(/redis|rabbitmq|hangfire|quartz|docker/i);
  });

  it('should not expose unresolved project dates for MOJ or SCEGA', () => {
    for (const slug of ['moj-lawyer-licensing', 'scega-event-licensing']) {
      const project = findProject(slug);

      expect('startDate' in project).toBe(false);
      expect('endDate' in project).toBe(false);
    }
  });

  function findProject(slug: string) {
    const project = portfolioProjects.find((candidate) => candidate.slug === slug);

    expect(project).toBeDefined();

    if (!project) {
      throw new Error(`Missing project: ${slug}`);
    }

    return project;
  }
});
