import {
  findProjectCaseStudy,
  portfolioProfile,
  portfolioProjects,
  professionalSnapshot,
  projectCaseStudies,
  publicPortfolioContent,
  uplandFileBoundCaseStudy,
} from './index';

describe('public portfolio content', () => {
  it('should provide four complete and uniquely identified professional snapshot items', () => {
    expect(professionalSnapshot).toHaveLength(4);

    for (const item of professionalSnapshot) {
      expect(item.value.trim()).not.toBe('');
      expect(item.label.trim()).not.toBe('');
      expect(item.description.trim()).not.toBe('');
    }

    expect(new Set(professionalSnapshot.map((item) => item.value)).size).toBe(
      professionalSnapshot.length,
    );
    expect(new Set(professionalSnapshot.map((item) => item.label)).size).toBe(
      professionalSnapshot.length,
    );
  });

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
    const upland = JSON.stringify({
      project: findProject('upland-filebound'),
      caseStudy: uplandFileBoundCaseStudy,
    });

    expect(upland).not.toMatch(
      /redis|rabbitmq|hangfire|quartz|docker|kubernetes|kafka|mongodb|microservices/i,
    );
  });

  it('should publish detailed case-study content only for canonical Upland', () => {
    expect(projectCaseStudies).toHaveLength(1);
    expect(uplandFileBoundCaseStudy.projectId).toBe('upland-filebound');
    expect(findProject('upland-filebound').id).toBe(uplandFileBoundCaseStudy.projectId);
    expect(findProjectCaseStudy('upland-filebound')).toBe(uplandFileBoundCaseStudy);
    expect(findProjectCaseStudy('moj-lawyer-licensing')).toBeUndefined();
    expect(findProjectCaseStudy('scega-event-licensing')).toBeUndefined();
  });

  it('should keep Upland sections meaningful, uniquely identified, and structurally complete', () => {
    const sections = uplandFileBoundCaseStudy.sections;

    expect(sections.length).toBeGreaterThanOrEqual(5);
    expect(new Set(sections.map((section) => section.id)).size).toBe(sections.length);

    for (const section of sections) {
      const bulletCount = 'bullets' in section ? section.bullets.length : 0;

      expect(section.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(section.title.trim()).not.toBe('');
      expect(section.paragraphs.length + bulletCount).toBeGreaterThan(0);
    }
  });

  it('should keep canonical project metadata out of detailed case-study content', () => {
    expect(uplandFileBoundCaseStudy).not.toHaveProperty('title');
    expect(uplandFileBoundCaseStudy).not.toHaveProperty('subtitle');
    expect(uplandFileBoundCaseStudy).not.toHaveProperty('summary');
    expect(uplandFileBoundCaseStudy).not.toHaveProperty('tags');
  });

  it('should protect Upland role, testing, and metric accuracy', () => {
    const upland = JSON.stringify(uplandFileBoundCaseStudy);

    expect(upland).toContain('nearly five years');
    expect(upland).toContain(
      'first FlairsTech engineer assigned specifically to the FileBound account',
    );
    expect(upland).toContain('Angular 16 MobileView');
    expect(upland).toContain('Reaper');
    expect(upland).not.toMatch(
      /sole author|created Reaper|invented Reaper|built FileBound|owned the entire platform|managed \d+|led a \d+-person team/i,
    );
    expect(upland).not.toMatch(
      /\d+(?:\.\d+)?%|\d+\s*ms\b|\d+\s*(?:users|customers|transactions)\b/i,
    );
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
