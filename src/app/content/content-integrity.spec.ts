import {
  aiAugmentedEngineering,
  engineeringPrinciples,
  expertiseGroups,
  portfolioCredentials,
  portfolioExperience,
  portfolioProfile,
  portfolioProjects,
  publicPortfolioContent,
} from './index';

const canonicalExperience = [
  {
    id: 'three-pillars',
    company: 'Three Pillars',
    role: 'Senior Software Engineer',
    startDate: '2024-02',
    endDate: '2025-06',
  },
  {
    id: 'flairstech-upland-software',
    company: 'FlairsTech (Upland Software)',
    role: 'Senior Software Engineer',
    startDate: '2019-09',
    endDate: '2024-02',
  },
  {
    id: 'orch-tech',
    company: 'OrchTech',
    role: 'Senior Software Engineer',
    startDate: '2018-03',
    endDate: '2019-09',
  },
  {
    id: 'matrix-business-solutions',
    company: 'Matrix Business Solutions',
    role: 'Software Engineer',
    startDate: '2016-09',
    endDate: '2018-03',
  },
  {
    id: 'new-horizons-clc',
    company: 'New Horizons CLC',
    role: 'Microsoft .NET Trainer',
    startDate: '2016',
    endDate: '2016',
  },
] as const;

const canonicalProjects = [
  {
    id: 'upland-filebound',
    title: 'Upland FileBound',
    route: '/projects/upland-filebound',
  },
  {
    id: 'moj-lawyer-licensing',
    title: 'Saudi Ministry of Justice — Lawyer Licensing Platform',
    route: '/projects/moj-lawyer-licensing',
  },
  {
    id: 'scega-event-licensing',
    title: 'SCEGA — Government Event Licensing Platform',
    route: '/projects/scega-event-licensing',
  },
] as const;

describe('canonical public content integrity', () => {
  it('preserves the canonical profile identity and contact fields', () => {
    expect(portfolioProfile).toEqual({
      cv: {
        pageUrl: '/cv',
        pdfUrl: '/assets/cv/Abdelrahman-Hegab-Senior-Software-Engineer-CV.pdf',
        downloadFileName: 'Abdelrahman-Hegab-Senior-Software-Engineer-CV.pdf',
      },
      name: 'Abdelrahman Hegab',
      role: 'Senior Software Engineer',
      headline: 'Senior Software Engineer | .NET & Angular | Software Architecture & Microservices',
      supportLine: 'Building scalable enterprise, SaaS, and government digital platforms.',
      summary:
        "Senior Software Engineer with 10+ years of experience designing and delivering enterprise applications, SaaS platforms, and government digital services using .NET and Angular. Strong background in software architecture, microservices, REST APIs, SQL Server/PostgreSQL, distributed systems, performance optimization, and end-to-end feature ownership. Nearly five years contributing to Upland Software's FileBound SaaS platform, alongside extensive experience delivering solutions for Saudi government entities and mentoring engineers.",
      location: 'Cairo, Egypt',
      email: 'abdelrahman.n.hegab@outlook.com',
      phone: '+20 1010 200 471',
      website: 'https://abdelrahman-hegab.pages.dev',
      linkedin: 'https://linkedin.com/in/abdelrahman-nasser',
      github: 'https://github.com/abdelrahman-nasser',
    });
    expect(publicPortfolioContent.profile).toBe(portfolioProfile);
  });

  it('preserves every canonical experience entry, its order, stored dates, and highlights', () => {
    expect(
      portfolioExperience.map(({ id, company, role, startDate, endDate }) => ({
        id,
        company,
        role,
        startDate,
        endDate,
      })),
    ).toEqual(canonicalExperience);

    for (const experience of portfolioExperience) {
      expectNonEmptyStrings(experience.highlights);
    }
  });

  it('rejects inflated formal roles from canonical experience', () => {
    const roles = portfolioExperience.map(({ role }) => role).join('\n');

    expect(roles).not.toMatch(
      /engineering manager|head of engineering|principal engineer|software architect/i,
    );
  });

  it('preserves the three canonical projects and their complete modeled public fields', () => {
    expect(portfolioProjects).toHaveLength(3);
    expect(portfolioProjects.map(({ id, title, route }) => ({ id, title, route }))).toEqual(
      canonicalProjects,
    );

    for (const project of portfolioProjects) {
      for (const value of [
        project.id,
        project.slug,
        project.title,
        project.subtitle,
        project.summary,
        project.route,
        project.kind,
      ]) {
        expect(value.trim()).not.toBe('');
      }

      expectNonEmptyStrings(project.tags);
    }
  });

  it('keeps engineering datasets complete, ordered, and uniquely identified', () => {
    expect(expertiseGroups.map(({ title }) => title)).toEqual([
      'Backend & Platform',
      'Frontend',
      'Architecture & Distributed Systems',
      'Data',
      'DevOps & Delivery',
      'Engineering Leadership',
      'AI-Augmented Development',
    ]);
    expect(new Set(expertiseGroups.map(({ id }) => id))).toHaveLength(expertiseGroups.length);
    expect(new Set(expertiseGroups.map(({ title }) => title))).toHaveLength(expertiseGroups.length);

    for (const group of expertiseGroups) {
      expect(group.id.trim()).not.toBe('');
      expect(group.title.trim()).not.toBe('');
      expectNonEmptyStrings(group.items);
    }

    expect(engineeringPrinciples.map(({ title }) => title)).toEqual([
      'Architecture before accidental complexity',
      'Evidence-driven engineering',
      'Build for maintainability',
      'Security and production behavior matter',
      'Reusable infrastructure over repeated implementation',
      'Human ownership with AI acceleration',
    ]);
    expect(new Set(engineeringPrinciples.map(({ id }) => id))).toHaveLength(
      engineeringPrinciples.length,
    );

    for (const principle of engineeringPrinciples) {
      expect(principle.id.trim()).not.toBe('');
      expect(principle.title.trim()).not.toBe('');
      expect(principle.description.trim()).not.toBe('');
    }
  });

  it('preserves the canonical AI workflow and explicit human ownership', () => {
    expect(aiAugmentedEngineering.workflow).toEqual([
      'Requirements',
      'Analysis',
      'Architecture',
      'Task Breakdown',
      'AI Assistance',
      'Validation',
      'Human Review',
      'CI/CD',
    ]);
    expect(new Set(aiAugmentedEngineering.workflow)).toHaveLength(
      aiAugmentedEngineering.workflow.length,
    );
    expect(aiAugmentedEngineering.humanResponsibilities).toEqual([
      'Architecture',
      'Validation',
      'Security',
      'Business logic',
      'Final engineering decisions',
    ]);
    expectNonEmptyStrings(aiAugmentedEngineering.capabilities);
  });

  it('preserves AI-Augmented Development positioning without unsupported identities', () => {
    const publicStrings = collectStrings(publicPortfolioContent).join('\n');

    expect(aiAugmentedEngineering.title).toBe('AI-Augmented Development');
    expect(publicStrings).not.toMatch(
      /\bai expert\b|\bai engineer\b|machine learning engineer|autonomous engineer|fully autonomous development|10x engineer/i,
    );
  });

  it('preserves the five canonical Microsoft credentials in order', () => {
    expect(portfolioCredentials).toEqual([
      {
        id: 'mct',
        title: 'Microsoft Certified Trainer (MCT)',
        issuer: 'Microsoft',
      },
      {
        id: 'mcsd-web-applications',
        title: 'Microsoft Certified Solutions Developer (MCSD): Web Applications',
        issuer: 'Microsoft',
      },
      {
        id: 'mcsa-web-applications',
        title: 'Microsoft Certified Solutions Associate (MCSA): Web Applications',
        issuer: 'Microsoft',
      },
      {
        id: 'microsoft-specialist-html5',
        title: 'Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3',
        issuer: 'Microsoft',
      },
      {
        id: 'mcp',
        title: 'Microsoft Certified Professional (MCP)',
        issuer: 'Microsoft',
      },
    ]);
    expect(new Set(portfolioCredentials.map(({ id }) => id))).toHaveLength(5);
    expect(new Set(portfolioCredentials.map(({ title }) => title))).toHaveLength(5);
  });

  it('keeps private, personal-life, and job-search metadata out of public runtime content', () => {
    const publicStrings = collectStrings(publicPortfolioContent).join('\n');
    const prohibitedPatterns = [
      /\b(?:expected\s+)?salary\b/i,
      /\bnotice period\b/i,
      /\bunemploy(?:ed|ment)?\b/i,
      /\blayoff\b|\blaid off\b/i,
      /\brelocation\b/i,
      /\bfamily details\b/i,
      /\bhealth details\b|\bmedical condition\b/i,
      /\bage\s*[:=]?\s*\d{1,3}\b/i,
      /\bmarital status\b|\bmarried\b/i,
      /\bchildren\b/i,
      /\bhome address\b|\bstreet address\b/i,
    ];

    for (const pattern of prohibitedPatterns) {
      expect(publicStrings).not.toMatch(pattern);
    }
  });

  it('rejects confidential markers, unsafe endpoints, and draft placeholders in public content', () => {
    const publicStrings = collectStrings(publicPortfolioContent).join('\n');
    const prohibitedPatterns = [
      /\bpassword\b/i,
      /\bconnection string\b/i,
      /\blocalhost\b/i,
      /\baccess token\b/i,
      /\bapi key\b/i,
      /\bprivate repository\b/i,
      /\b(?:10\.(?:\d{1,3}\.){2}\d{1,3}|127\.(?:\d{1,3}\.){2}\d{1,3}|169\.254\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})\b/,
      /dev\.azure\.com/i,
      /\bTODO\b|\bTBD\b|lorem ipsum|coming soon|replace me|example\.com|your@email/i,
    ];

    for (const pattern of prohibitedPatterns) {
      expect(publicStrings).not.toMatch(pattern);
    }
  });

  it('keeps canonical public URLs valid, secure, whitespace-free, and non-local', () => {
    const publicUrls = [
      portfolioProfile.website,
      portfolioProfile.linkedin,
      portfolioProfile.github,
    ];

    for (const value of publicUrls) {
      expect(value).not.toMatch(/\s/);
      expect(value).not.toMatch(/localhost|127\.0\.0\.1/i);
      expect(new URL(value).protocol).toBe('https:');
    }
  });
});

function collectStrings(value: unknown): readonly string[] {
  if (typeof value === 'string') {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectStrings(item));
  }

  if (value === null || typeof value !== 'object') {
    return [];
  }

  return Object.values(value).flatMap((item) => collectStrings(item));
}

function expectNonEmptyStrings(values: readonly string[]): void {
  expect(Array.isArray(values)).toBe(true);
  expect(values.length).toBeGreaterThan(0);

  for (const value of values) {
    expect(value.trim()).not.toBe('');
  }
}
