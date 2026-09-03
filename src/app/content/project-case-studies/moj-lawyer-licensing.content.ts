import type { ProjectCaseStudy } from '../../models/project.models';

export const mojLawyerLicensingCaseStudy = {
  projectId: 'moj-lawyer-licensing',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: [
        'The Saudi Ministry of Justice lawyer-licensing platform supports digital workflows across the professional licensing lifecycle, including new applications, renewals, reissues, cancellations, and trainee management.',
        'The service operated within a broader government e-services portal and coordinated citizen-facing workflows with enterprise licensing, workflow, identity, verification, address, and document services. Public descriptions remain deliberately conceptual so the engineering story is clear without exposing private government topology.',
      ],
      subsections: [
        {
          title: 'Technical context',
          bullets: [
            'Frontend: Vue 2, TypeScript, Vue Router, Vuex, Vuetify, and vue-i18n.',
            'Backend and data: .NET 8, ASP.NET Core 8 Web API, C#, EF Core, and SQL Server.',
            'Architecture and integration: a path-based Micro Frontend, a layered application backend, REST APIs, Refit clients, and an API gateway.',
          ],
        },
      ],
    },
    {
      id: 'my-contribution',
      title: 'My Contribution',
      paragraphs: [
        'I contributed as a senior full-stack engineer across backend integrations, APIs, data-model changes, frontend routing, reusable components, secure navigation between systems, and release support. The work combined delivery of specific features with shared technical patterns used across multiple licensing flows.',
        'I worked within the platform architecture and collaborated across feature, review, and release activities. This was senior-engineer responsibility rather than ownership of the entire ministry platform or formal people management.',
      ],
      bullets: [
        'Implemented ASP.NET Core integration services, typed HTTP contracts, request and response mapping, error handling, and persistent audit records.',
        'Contributed EF Core entities and migrations for trainee, integration-audit, and related domain changes.',
        'Designed reusable Vue and TypeScript route-guard patterns and shared business components.',
        'Supported peer review, feature integration, deployment preparation, and production releases.',
      ],
    },
    {
      id: 'government-portal-and-frontend-architecture',
      title: 'Government Portal & Frontend Architecture',
      paragraphs: [
        'The Vue application operated as an independently routed frontend area inside a larger government portal shell. Path-based routing and reverse-proxy integration allowed the licensing experience to participate in the wider portal while retaining its own route architecture and feature boundaries.',
        'That context made navigation and eligibility part of the application architecture. Licensing routes depended on asynchronous business checks that varied by request type and could include user status, existing requests, returned requests, and eligibility for older-system workflows.',
      ],
      subsections: [
        {
          title: 'Composable eligibility guards',
          paragraphs: [
            'I designed reusable guard factories and composition utilities so routes could assemble the checks they needed without repeating complex conditional logic. This kept business-rule enforcement consistent as workflows evolved and gave asynchronous checks a predictable place in the routing layer.',
          ],
        },
        {
          title: 'Shared business components',
          bullets: [
            'A reusable consent checklist supported multiple request types and read-only previews.',
            'A shared date component presented Hijri and Gregorian dates consistently.',
            'Academic qualifications, dialogs, constants, and multi-section organization data were moved toward shared patterns where responsibilities genuinely overlapped.',
          ],
        },
      ],
    },
    {
      id: 'backend-and-enterprise-integrations',
      title: 'Backend & Enterprise Integrations',
      paragraphs: [
        'One of my main contributions was the integration layer between the application and an enterprise licensing backend. The work covered typed Refit clients, application services, contract mapping, licensing lifecycle operations, date-format coordination, and controlled API failure behavior.',
        'The integration was designed for operability as well as connectivity. Correlation identifiers and a persistent audit trail made outbound calls traceable across success and failure paths, supporting production diagnosis without exposing technical details to end users.',
      ],
      subsections: [
        {
          title: 'Integration auditability',
          bullets: [
            'Captured operational request and response context, status, timing, correlation identifiers, and error information.',
            'Persisted audit records even when an external call failed so support work retained a useful diagnostic trail.',
            'Kept external contracts typed and mapping responsibilities explicit across application and integration boundaries.',
          ],
        },
        {
          title: 'Data and domain work',
          paragraphs: [
            "I contributed EF Core entities, specification-based queries, no-tracking reads, model changes, and several targeted migrations. The work included trainee lifecycle data and integration audit persistence without implying authorship of the platform's complete data model.",
          ],
        },
      ],
    },
    {
      id: 'secure-cross-system-navigation',
      title: 'Secure Cross-System Navigation',
      paragraphs: [
        'The modern licensing experience still needed to move users into an older ministry system for selected workflows. Passing raw request identifiers through redirect URLs would have created an avoidable manipulation risk at a system boundary.',
        'I contributed a purpose-scoped encrypted-token flow spanning a backend encryption endpoint, frontend service integration, URL-safe token handling, and redirect coordination. The design protected identifiers while preserving the navigation context required to continue the user journey across systems.',
        'The public description intentionally omits endpoint paths, token formats, key storage, internal URLs, and authentication topology.',
      ],
    },
    {
      id: 'release-and-production-support',
      title: 'Release & Production Support',
      paragraphs: [
        'Integration-heavy delivery continued beyond feature implementation. I participated in peer review, feature and bug-fix merges, failed-build fixes, deployment preparation, and production release activity across backend, frontend, integration, and shared-code areas.',
        'This work reinforced the need for consistent contracts, useful failure information, and verification at system boundaries. Release participation is presented as collaborative senior-engineer responsibility, not as a formal leadership title.',
      ],
    },
    {
      id: 'what-this-work-demonstrates',
      title: 'What This Work Demonstrates',
      paragraphs: [
        'The project demonstrates full-stack engineering in a regulated, integration-heavy environment where frontend architecture, backend contracts, security boundaries, data persistence, and production support had to work as one system.',
      ],
      bullets: [
        'Integration engineering that treats typed contracts, auditability, error handling, and traceability as first-class concerns.',
        'Frontend architecture that turns complex eligibility rules and recurring licensing behavior into reusable patterns.',
        'Security awareness when navigation crosses the boundary between modern and legacy systems.',
        'Pragmatic architecture: precise system boundaries and terminology without overstating platform ownership.',
        'Collaborative delivery across implementation, review, release preparation, and production support.',
      ],
    },
  ],
} as const satisfies ProjectCaseStudy;
