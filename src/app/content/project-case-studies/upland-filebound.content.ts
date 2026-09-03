import type { ProjectCaseStudy } from '../../models/project.models';

export const uplandFileBoundCaseStudy = {
  projectId: 'upland-filebound',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: [
        'FileBound is a mature enterprise SaaS platform for document management, workflow automation, electronic forms, integrations, and business-process automation.',
        'I contributed to the product for nearly five years as part of a distributed engineering engagement with Upland Software. The work required balancing feature delivery with backward compatibility, technical debt, security, performance, and the reliability expectations of a long-lived production system.',
        'Its mixed architecture reflected years of product evolution: established ASP.NET MVC and Web API applications operated alongside a newer API layer, a WPF workflow designer, legacy web interfaces, and a newer Angular 16 MobileView area using NgRx and RxJS.',
      ],
      subsections: [
        {
          title: 'Technical context',
          bullets: [
            'Backend and APIs: C#, .NET Framework 4.5.2 and 4.8, ASP.NET MVC 4, ASP.NET Web API 2, OWIN, and Autofac.',
            'Data access: Microsoft SQL Server, Dapper, and hand-written parameterized SQL.',
            'Web applications: Razor, TypeScript, jQuery, and Angular 16 with NgRx and RxJS for the newer MobileView area.',
            'Workflow and integrations: a WPF workflow designer, REST APIs, DocuSign, and HelloSign.',
          ],
        },
      ],
    },
    {
      id: 'my-contribution',
      title: 'My Contribution',
      paragraphs: [
        'I joined as the first FlairsTech engineer assigned specifically to the FileBound account and remained involved as the FlairsTech engineering team grew to approximately 15 developers and later beyond that size. This was senior-engineer responsibility in a collaborative team, not formal people management.',
        'My contribution spanned product features and the engineering work needed to keep them dependable in production. I owned delivery of specific changes while working within established product conventions and shared review practices.',
      ],
      bullets: [
        'Backend services, API v1 and v2 endpoints, SQL-backed data access, and database changes.',
        'Workflow, eForms, anonymous-form behavior, document operations, reporting, and viewer functionality.',
        'Electronic-signature integrations, security hardening, performance improvements, and production troubleshooting.',
        'Integration tests, peer review, and technical discussion across shared patterns and code paths.',
      ],
    },
    {
      id: 'selected-engineering-challenges',
      title: 'Selected Engineering Challenges',
      paragraphs: [
        'The highest-signal work was rarely isolated to one controller or screen. It involved tracing behavior across product layers, preserving established contracts, and making changes that were safe for existing workflows.',
      ],
      subsections: [
        {
          title: 'Multi-queue workflow sorting and filtering',
          paragraphs: [
            'Adding sorting and filtering to workflow steps with multiple queues crossed the WPF workflow designer, backend and data-access code, persistence, web widgets, and integration tests. The challenge was to evolve the behavior without breaking existing workflow conventions.',
          ],
          bullets: [
            'Coordinated domain, persistence, desktop, and web behavior as one feature rather than as disconnected changes.',
            'Worked iteratively as compatibility constraints and regression scenarios became clearer.',
            'Kept integration coverage aligned with the evolving workflow behavior.',
          ],
        },
        {
          title: 'eForms and anonymous access',
          paragraphs: [
            'Electronic-form work covered parent and child behavior, revisions, published-version visibility, anonymous access, success-page behavior, and session isolation. These flows combined product rules with authentication, privacy, and state-management concerns.',
          ],
          bullets: [
            'Resolved a defect that could surface anonymous-form data across separate sessions.',
            'Corrected access-flow behavior for an anonymous-form URL scenario so the expected login experience was preserved.',
            'Maintained form-link and published-version behavior while working within existing compatibility constraints.',
          ],
        },
      ],
    },
    {
      id: 'api-and-integration-engineering',
      title: 'API & Integration Engineering',
      paragraphs: [
        'I worked across legacy and newer REST API layers, including CRUD endpoints, field and metadata APIs, business-intelligence data-source APIs, anonymous-form resources, integration resources, and document-count behavior. The Dapper-based data layer made query correctness, parameterization, mapping, migrations, and integration coverage part of API delivery.',
      ],
      subsections: [
        {
          title: 'Full-stack API slices',
          paragraphs: [
            'A business-intelligence data-source feature is one example of end-to-end ownership: it required new database structures, data-access factory support, API v2 behavior, and tests. The work followed existing controller and factory patterns so the addition remained consistent with the mature codebase.',
          ],
        },
        {
          title: 'Electronic-signature reliability',
          paragraphs: [
            'I maintained DocuSign and HelloSign integrations, including compatibility work when an external authentication model changed. The response combined OAuth-related changes with controlled retry and error-handling behavior so external failures remained diagnosable and production-safe.',
          ],
        },
      ],
    },
    {
      id: 'security-performance-and-production-quality',
      title: 'Security, Performance & Production Quality',
      paragraphs: [
        'Production support shaped the design of everyday changes. Defensive input and output handling, controlled failures, backward compatibility, and careful regression analysis were part of feature work rather than a separate final phase.',
      ],
      subsections: [
        {
          title: 'Security hardening',
          bullets: [
            'Hardened multiple dashboard widgets against cross-site scripting risks.',
            'Implemented allow-list based validation for uploaded file extensions.',
            'Addressed authentication, access-flow, and session-isolation defects in anonymous-form scenarios.',
          ],
        },
        {
          title: 'Reducing repeated settings queries',
          paragraphs: [
            'Application settings were read broadly enough that repeated database access became a cross-cutting concern. I introduced an in-process cache inside the existing settings data-access layer and added an early-exit path when extended data was not required. Consumers kept the same contract while avoidable database round trips were removed.',
          ],
        },
        {
          title: 'Controlled production behavior',
          bullets: [
            'Resolved workflow routing that could incorrectly send documents into exception handling during multi-load processing.',
            'Improved a locked-document scenario so it produced a controlled user-facing response instead of an unhandled error.',
            'Corrected viewer, reporting, audit, and document-operation defects where reliability depended on details across several layers.',
          ],
        },
      ],
    },
    {
      id: 'testing-and-engineering-infrastructure',
      title: 'Testing & Engineering Infrastructure',
      paragraphs: [
        'I worked extensively with, contributed to, and expanded reusable integration-test infrastructure around the data-access layer. Entity-specific fixtures, setup and cleanup helpers, and repeatable database-backed tests gave API and persistence changes a consistent verification path.',
        'The shared Reaper infrastructure predated my contribution. My role was to use and extend its reusable patterns across multiple entities and complex production scenarios as part of a collaborative engineering team.',
        "Code quality was also shared through peer review. Pull requests required approval from two senior-or-above engineers, and I regularly reviewed other engineers' work while receiving the same review on my own changes.",
      ],
    },
    {
      id: 'what-this-work-demonstrates',
      title: 'What This Work Demonstrates',
      paragraphs: [
        'FileBound reinforced that senior engineering in a mature platform is often about choosing the safest effective change, understanding how behavior crosses boundaries, and improving the system without turning every problem into a rewrite.',
      ],
      bullets: [
        'Pragmatic modernization: contributing to newer API and Angular areas while respecting legacy contracts and production constraints.',
        'Cross-layer ownership: carrying workflow, API, data, integration, and user-facing changes through verification.',
        'Defensive production engineering: treating security, failure handling, privacy, and backward compatibility as design concerns.',
        'Collaborative technical leadership: using peer review, shared testing patterns, and technical discussion to improve consistency and delivery confidence.',
      ],
    },
  ],
} as const satisfies ProjectCaseStudy;
