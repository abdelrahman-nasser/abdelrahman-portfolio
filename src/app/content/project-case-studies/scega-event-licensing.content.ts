import type { ProjectCaseStudy } from '../../models/project.models';

export const scegaEventLicensingCaseStudy = {
  projectId: 'scega-event-licensing',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: [
        'SCEGA is a Saudi government digital platform for event licensing and permitting workflows across conferences, exhibitions, workshops, gatherings, and related event types.',
        'The wider solution connected a public applicant experience with government identity, verification, payment, notification, and workflow capabilities. This case study stays at a public-safe architectural level and focuses on my verified work in the public Angular portal and selected areas of its shared .NET backend.',
      ],
      subsections: [
        {
          title: 'Technical context',
          bullets: [
            'Frontend: Angular 19, TypeScript 5.7, RxJS, Reactive Forms, PrimeNG, Angular Material/CDK, Tailwind CSS, SCSS, and ngx-translate.',
            'Backend and data: .NET 9, ASP.NET Core 9, EF Core 9, SQL Server, AutoMapper, and FluentValidation.',
            'Architecture: one Angular application organized through feature-based lazy routes and shared components, backed by a clean, layered API using CQRS and MediatR.',
          ],
        },
      ],
    },
    {
      id: 'my-contribution',
      title: 'My Contribution',
      paragraphs: [
        'I contributed full-stack, working primarily on reusable Angular infrastructure and complex public licensing flows while also implementing and refactoring selected backend capabilities.',
        'My frontend work included configurable multi-step workflows, shared form controls, cross-field validation, server-backed file upload, bilingual interface patterns, and authentication-state integration. On the backend, I contributed authentication and authorization infrastructure, CQRS request handling, EF Core changes, API workflows, mapping configuration, and dependency-registration improvements.',
      ],
      bullets: [
        'Designed shared Angular infrastructure that multiple licensing features could compose instead of rebuilding navigation and form behavior for each flow.',
        'Applied those patterns to workshop and gathering workflows, including modification, draft, validation, and API-integration behavior.',
        'Worked across frontend and backend boundaries while keeping the contribution distinct from ownership of the complete government solution.',
      ],
    },
    {
      id: 'configurable-licensing-workflows',
      title: 'Configurable Licensing Workflows',
      paragraphs: [
        'Complex licensing journeys needed consistent step navigation and validation without coupling reusable infrastructure to one event type. I designed a configuration-driven Angular stepper that let each workflow declare its own steps while sharing the mechanics around navigation, state, and validation.',
        'The stepper supported dynamic step composition, linear and non-linear movement, asynchronous entry and exit guards, lifecycle hooks, conditional navigation, validation gates, scroll-to-error behavior, persistence, and protection against duplicate navigation. Strongly typed configuration kept each workflow explicit as requirements evolved.',
      ],
      subsections: [
        {
          title: 'Workshop and gathering workflows',
          paragraphs: [
            'I used the shared infrastructure across workshop and gathering licensing flows, coordinating Reactive Forms, route data, model transformations, bilingual content, dynamic constraints, modification paths, and API calls. The gathering work also crossed into backend commands, handlers, mappings, controller behavior, and EF Core changes.',
          ],
        },
        {
          title: 'Engineering value',
          bullets: [
            'Kept navigation and lifecycle mechanics consistent across licensing journeys.',
            'Reduced workflow-specific duplication while leaving business rules inside their owning feature.',
            'Made additional steps and flows easier to extend through explicit TypeScript contracts.',
          ],
        },
      ],
    },
    {
      id: 'shared-forms-validation-and-file-upload',
      title: 'Shared Forms, Validation & File Upload',
      paragraphs: [
        'I built shared controls that behaved as native participants in Angular Reactive Forms. A reusable server-backed file-upload control implemented the ControlValueAccessor contract so licensing forms could handle attachment identifiers, validation, disabled and read-only states, and value changes through the same form APIs as other inputs.',
        'Edit flows added a second concern: persisted attachment identifiers had to be resolved into displayable file state and synchronized back into the form while add, remove, upload, and cancellation behavior remained predictable. The control handled that lifecycle without exposing storage details to feature components.',
      ],
      subsections: [
        {
          title: 'Reusable controls and validation',
          bullets: [
            'Created shared lookup controls for dependent selections such as region, city, location, and nationality.',
            'Implemented reusable cross-field validation for related form values, formats, date ranges, venue constraints, and attachment requirements.',
            'Kept validator error ownership isolated so one validator did not erase errors produced by another.',
            'Aligned frontend validation patterns with backend FluentValidation rules while preserving clear responsibility at each boundary.',
          ],
        },
      ],
    },
    {
      id: 'authentication-across-frontend-and-backend',
      title: 'Authentication Across Frontend & Backend',
      paragraphs: [
        'I contributed to an authentication pipeline that connected enterprise Windows SSO with JWT-based API access. Server-side identity establishment, application provisioning, role and permission mapping, token creation, and application authorization remained separate responsibilities within the trust boundary.',
        'A key rule was that an authenticated enterprise identity still had to be provisioned in the application before application claims were issued. This prevented identity-system access alone from becoming application authorization.',
      ],
      subsections: [
        {
          title: 'Frontend session behavior',
          bullets: [
            'Integrated credential propagation, authentication state, route guards, and role or privilege checks.',
            'Handled unauthorized responses, silent refresh, request retry, and logout when refresh could not recover the session.',
            'Improved registration reliability around verified contact state, duplicate contact data, and identity conflicts.',
          ],
        },
      ],
    },
    {
      id: 'cqrs-workflows-and-backend-refactoring',
      title: 'CQRS Workflows & Backend Refactoring',
      paragraphs: [
        'The ASP.NET Core backend used a clean, layered structure with CQRS and MediatR to keep application operations in focused command and query handlers. I contributed handlers, mappings, validation, API behavior, and EF Core data changes for workshop and gathering scenarios without treating CQRS as a distributed messaging design.',
        'I also refactored a large, centralized dependency-registration area into coherent extension methods and reorganized AutoMapper and application-startup configuration. The change preserved existing wiring while making service groups and startup responsibilities easier to find and maintain.',
      ],
      bullets: [
        'Kept request handling focused around explicit application operations.',
        'Improved the organization and discoverability of dependency configuration.',
        'Maintained clear boundaries between API, application, domain, and infrastructure concerns.',
      ],
    },
    {
      id: 'delivery-and-engineering-quality',
      title: 'Delivery & Engineering Quality',
      paragraphs: [
        'I authored a GitHub Actions workflow for Angular build verification and contributed pull-request templates, contribution guidance, formatting conventions, and project-structure documentation. This work established repeatable validation and clearer repository expectations without implying ownership of the wider delivery platform.',
        'Across the application, the same emphasis appeared in bilingual Arabic and English patterns, RTL-aware shared controls, explicit TypeScript contracts, subscription cleanup, guarded asynchronous navigation, and maintainable feature boundaries.',
      ],
      subsections: [
        {
          title: 'What this work demonstrates',
          bullets: [
            'Frontend platform thinking through reusable workflow, form, upload, lookup, validation, and authentication infrastructure.',
            'Full-stack capability across Angular application design and .NET API, data, security, and refactoring work.',
            'Security awareness at the boundary between enterprise identity, application provisioning, frontend sessions, and API authorization.',
            'Pragmatic architecture that applies shared patterns where they reduce complexity while keeping feature rules explicit.',
            'Delivery discipline through automation, documentation, and repository standards.',
          ],
        },
      ],
    },
  ],
} as const satisfies ProjectCaseStudy;
