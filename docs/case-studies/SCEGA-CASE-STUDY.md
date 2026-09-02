# SCEGA — Government Event Licensing Platform

**Status:** Public-safe draft for approval  
**Portfolio Priority:** Flagship Case Study  
**Role:** Senior Software Engineer / Full-Stack Contributor  
**Company:** Three Pillars  
**Client Context:** Saudi Conferences & Exhibitions General Authority (SCEGA)  
**Primary Contribution:** Angular frontend architecture and shared infrastructure  
**Secondary Contribution:** .NET backend, authentication, CQRS features, and architecture refactoring

---

## 1. Public Summary

Contributed full-stack to a Saudi government digital platform that manages event licensing and permitting workflows for conferences, exhibitions, workshops, gatherings, and related event types.

My primary contribution was to the public-facing Angular application, where I designed and implemented reusable application infrastructure including a configurable multi-step wizard engine, a server-backed file-upload component, reusable lookup controls, validation utilities, authentication infrastructure, bilingual UI patterns, and major licensing workflows.

I also contributed to the .NET backend, including authentication architecture, CQRS handlers, EF Core schema changes, backend refactoring, and workshop/gathering APIs.

---

## 2. Project Context

The platform digitizes the process through which organizations and individuals apply for event permits and licenses.

At a high level, the wider system included:

- a public applicant portal;
- a separate staff/reviewer portal;
- a shared .NET backend API;
- an independent administrative backend;
- SQL Server persistence;
- government identity verification;
- electronic payment;
- commercial-registry verification;
- real-time notifications;
- scheduled/background processing.

My verified contribution was concentrated in:

- the public Angular portal;
- selected areas of the shared .NET backend.

I did not contribute to the staff frontend or the separate admin backend.

---

## 3. My Role

### Primary — Angular Frontend Engineering

I worked extensively on:

- Angular 19;
- TypeScript;
- Reactive Forms;
- PrimeNG;
- RxJS;
- ngx-translate;
- Tailwind CSS / SCSS;
- reusable shared components;
- form architecture;
- route/auth infrastructure;
- cross-field validation;
- API integration;
- bilingual Arabic/English UX;
- CI workflow and repository governance.

### Secondary — .NET Backend Engineering

I also contributed to:

- .NET 9 / ASP.NET Core;
- MediatR / CQRS handlers;
- EF Core;
- AutoMapper;
- FluentValidation;
- authentication and authorization infrastructure;
- JWT creation;
- Windows SSO integration;
- selected data migrations;
- workshop/gathering endpoints;
- dependency-injection restructuring.

---

## 4. Technology Stack

### Frontend

- Angular 19
- TypeScript 5.7
- RxJS 7.8
- Angular Router
- Angular Reactive Forms
- PrimeNG 19
- Angular Material / CDK
- Tailwind CSS 4
- SCSS
- ngx-translate
- ControlValueAccessor
- BehaviorSubject-based service state
- Angular CLI
- GitHub Actions

### Backend

- .NET 9
- ASP.NET Core
- C#
- Entity Framework Core 9
- SQL Server
- MediatR 13
- CQRS
- AutoMapper 14
- FluentValidation 11
- Repository Pattern
- Unit of Work
- Clean / Layered Architecture
- Windows Negotiate Authentication
- JWT

### Platform Capabilities I Consumed but Did Not Own

- Quartz.NET scheduled jobs
- SignalR notifications
- national digital identity verification
- national electronic payment
- commercial-registry verification

---

## 5. Architecture

### Frontend Architecture

The public portal was a single Angular 19 SPA organized using a feature-based structure:

```text
src/
├── core/
│   ├── guards/
│   ├── interceptors/
│   ├── resolvers/
│   ├── services/
│   └── abstractions/
├── shared/
│   ├── components/
│   ├── file-upload/
│   ├── lookups/
│   ├── validators/
│   └── managers/
├── features/
│   ├── auth/
│   ├── workshop/
│   ├── gathering/
│   ├── exhibition/
│   └── summit/
└── layouts/
```

The project used lazy-loaded routes and reusable shared infrastructure.

### Important Accuracy Note

This project was **not** a Micro Frontend architecture.

The public and staff portals were separate Angular applications deployed independently, but there was no Module Federation, remote-entry runtime loading, shell/remote architecture, or other micro-frontend mechanism.

Accurate wording:

> Feature-based Angular SPA with lazy-loaded routes and a shared internal design-system package.

---

## 6. Backend Architecture

The main backend followed a Clean / layered architecture:

```text
API
 │
 ▼
Application
 │
 ├── CQRS / MediatR
 ├── AutoMapper
 ├── FluentValidation
 │
 ▼
Core / Domain
 │
 ▼
Infrastructure
 ├── EF Core
 ├── Repositories
 ├── Unit of Work
 └── SQL Server

Additional layers:
- Integrations
- Scheduled Jobs
- Workflow integration
```

The backend was not a microservices architecture.

It was a single deployable application API serving both public and staff portals, with a separate independent admin backend.

---

## 7. Engineering Challenge — Configurable Multi-Step Wizard Engine

One of my strongest contributions was designing and implementing a reusable multi-step wizard infrastructure for complex licensing applications.

Rather than duplicating navigation and validation behavior for each service, I built a configuration-driven stepper component that allowed different workflows to define their steps declaratively.

The component supported:

- dynamic step components;
- linear and non-linear navigation;
- asynchronous `canEnter` / `canLeave` guards;
- lifecycle hooks;
- conditional navigation;
- form validation gates;
- automatic navigation state;
- scroll-to-first-error behavior;
- local persistence / auto-save;
- validation caching;
- navigation metrics;
- configurable async timeouts;
- PrimeNG stepper / breadcrumb integration;
- strongly typed TypeScript contracts.

The shared stepper was reused across multiple service flows.

### Engineering Value

This demonstrates:

- reusable platform-level frontend design;
- Angular component architecture;
- TypeScript API design;
- reactive-form integration;
- asynchronous workflow control;
- performance awareness;
- documentation and maintainability.

---

## 8. Engineering Challenge — Shared Server-Backed File Upload

I designed and implemented a reusable Angular file-upload component integrated directly with Angular Reactive Forms through `ControlValueAccessor`.

The component supported:

- single and multiple files;
- automatic upload;
- manual upload;
- server-backed attachment identifiers;
- drag and drop;
- validation;
- upload progress;
- read-only mode;
- downloads;
- existing-file hydration for edit flows;
- RTL support;
- bilingual UI;
- cancellation/cleanup of previous loading operations.

The edit flow required the component to retrieve metadata for already-persisted attachment IDs, reconstruct its visual state, synchronize with the Angular form, and support add/remove behavior safely.

---

## 9. Workshop Licensing Workflow

I contributed substantially to the workshop licensing workflow.

The flow included multiple steps such as:

- license/service selection;
- event details;
- event owner;
- event venue;
- attachments;
- order summary.

My work included:

- integrating the workflow with the shared stepper;
- Reactive Forms;
- TypeScript models;
- step configuration;
- frontend validations;
- bilingual translations;
- dynamic field constraints;
- modification flows;
- cancellation flows;
- API integration;
- selected backend model/API changes.

---

## 10. Gathering Workflow — Full-Stack Contribution

I also worked across frontend and backend on the gathering service.

### Frontend

- multi-step form integration;
- model transformations;
- route/data resolvers;
- modification flows;
- shared component usage.

### Backend

- gathering-domain refactoring;
- CQRS commands and handlers;
- update/create modification handlers;
- AutoMapper mappings;
- controller changes;
- EF Core schema changes;
- save-draft / modification behavior.

This is one of the clearest examples where my contribution crossed both Angular and .NET.

---

## 11. Cross-Field Validation Architecture

I implemented reusable cross-field validators for cases such as:

- event-owner rules depending on entity type;
- domestic vs international conditions;
- venue-area validation;
- venue-capacity validation;
- event/venue relationships;
- Saudi unified-number formats;
- phone-number formats;
- date ranges;
- file requirements.

A key design decision was ensuring that one validator removed only the error keys it owned rather than clearing errors set by other validators.

---

## 12. Shared Lookup Controls

I created reusable Angular lookup controls for common domain selections such as:

- region;
- city;
- hall/location;
- nationality;
- location category.

These components integrated with Reactive Forms through `ControlValueAccessor` and supported dependent/cascading lookups.

---

## 13. Event Manager Component Infrastructure

I contributed reusable components for selecting and creating event managers.

The implementation included:

- manager search/selection;
- single/multiple selection modes;
- add-manager modal;
- bilingual name validation;
- form integration;
- API model transformations;
- reusable translations.

---

## 14. Authentication — Windows SSO to JWT

My strongest backend architecture contribution was an authentication pipeline that bridged Windows Active Directory authentication with application JWT authorization.

The flow included:

```text
Windows / AD authentication
        ↓
Claims transformation
        ↓
Database provisioning check
        ↓
Role / permission mapping
        ↓
JWT generation
        ↓
Application authorization
```

I contributed:

- Windows Negotiate authentication wiring;
- claims transformation;
- extraction of user identity information;
- database provisioning validation;
- configuration-driven AD-group to application-role/permission mapping;
- JWT generation;
- reusable role constants;
- backend authentication documentation.

A key design decision was that being authenticated by the Windows domain alone was not sufficient; the user also needed to exist in the application database before application claims were created.

---

## 15. Frontend Authentication Infrastructure

On the public Angular application I also worked on:

- HTTP auth interceptor;
- credential propagation;
- `401` handling;
- silent token refresh;
- retry after refresh;
- logout on failed refresh;
- user state management;
- route guards;
- role/privilege checks;
- registration validation.

---

## 16. Registration Reliability & Validation

I worked on registration defects and validation including:

- duplicate contact detection;
- contact verification state;
- requiring verified contact information;
- national-ID uniqueness handling;
- frontend conflict handling;
- backend registration validation.

---

## 17. Backend Architecture Refactoring

I contributed to restructuring a dependency-registration file that had grown to more than two thousand lines.

The refactoring:

- identified logical registration groups;
- moved registration logic into modular extension methods;
- preserved existing dependency wiring;
- improved discoverability;
- reduced startup/configuration complexity.

I also restructured AutoMapper registration and `Program.cs` startup configuration.

---

## 18. CI/CD and Repository Governance

I authored a GitHub Actions workflow for the Angular repository.

The workflow provided build verification across supported Node.js versions and established a baseline for pull-request validation.

I also contributed:

- PR templates;
- repository contribution guidance;
- formatting conventions;
- project-structure documentation.

Testing existed in the application, but I should not claim direct test authorship because repository evidence did not verify it.

---

## 19. Bilingual / RTL Engineering

The public portal supported both Arabic and English.

My work included:

- modular translation files;
- ngx-translate usage;
- moving hard-coded text into translation resources;
- translated validation messages;
- RTL-aware shared components;
- bilingual component behavior.

---

## 20. Performance-Conscious Frontend Design

Examples in my shared infrastructure include:

- `ChangeDetectionStrategy.OnPush`;
- dynamic rendering of the active wizard step;
- validation-result caching;
- guarding against duplicate navigation;
- async operation timeouts;
- subscription cleanup;
- bundle warning cleanup.

No benchmark percentages should be claimed because no measured before/after performance data was found.

---

## 21. Production / Critical Fixes

Examples of meaningful issues I worked on included:

### Registration Identity Conflict
Improved frontend and backend handling when an identifying value was already registered.

### Contact Verification
Closed a flow where registration could proceed without the required verified contact state.

### Workshop Validation
Fixed validation, mapping, and field-constraint issues affecting valid licensing submissions.

### Gathering Domain Refactor
Corrected mapping/controller issues remaining after a conference-to-gathering domain refactor.

---

## 22. Architecture Decisions I Influenced

### Personal Frontend Design

- feature-based `core/shared/features/layouts` structure;
- reusable ConfigStepper;
- ControlValueAccessor-based shared controls;
- validator-owned-error pattern;
- strongly typed step configuration;
- modular i18n resources;
- shared lookup abstractions;
- reusable upload architecture.

### Personal Backend Design

- modular `Program.cs` configuration;
- modular dependency-registration structure;
- configuration-driven role mapping;
- Windows-auth database provisioning gate;
- AutoMapper organization.

### Existing Architecture I Extended

- Clean Architecture;
- CQRS / MediatR;
- repository/unit-of-work patterns;
- EF Core;
- scheduled jobs.

---

## 23. What This Project Demonstrates

### Frontend Platform Thinking
Built shared infrastructure used by multiple licensing features rather than limiting work to individual screens.

### Full-Stack Capability
Although my main contribution was Angular, I also worked directly in the .NET backend on authentication, CQRS features, data changes, mappings, and architecture refactoring.

### Government Workflow Complexity
The project involved multi-step regulated workflows, identity verification, document handling, payments, and multiple event types.

### Security Awareness
Contributed to both frontend session/auth behavior and backend AD-to-JWT authorization architecture.

### Maintainability
The work included reusable component design, shared validators, project organization, dependency-registration refactoring, documentation, and CI standards.

---

## 24. Engineering Lessons

### Reusable Components Should Encode Infrastructure, Not Business Rules
The stepper worked because navigation infrastructure was reusable while each licensing flow retained control of its own business logic.

### Complex Forms Need Deliberate Validation Ownership
Cross-field validators should never accidentally erase errors from other validators.

### Form Controls Should Behave Like Form Controls
Implementing shared inputs through ControlValueAccessor made file uploads, lookups, and manager selectors behave naturally inside Reactive Forms.

### Authentication Is More Than Token Creation
Identity, provisioning, role mapping, session handling, refresh behavior, and authorization need to work together.

### Shared Infrastructure Multiplies Team Output
A strong reusable component or abstraction can improve many features at once.

---

## 25. Homepage Project Card

### Title
**SCEGA — Government Event Licensing Platform**

### Subtitle
**Saudi Government · Angular 19 · .NET 9**

### Description
Full-stack contribution to a Saudi government event-licensing platform. Designed reusable Angular infrastructure including a configurable multi-step wizard, server-backed file upload, shared form controls, and validation patterns; also contributed .NET authentication architecture, CQRS workflows, and backend refactoring.

### Tags

- Angular 19
- TypeScript
- .NET 9
- PrimeNG
- EF Core
- CQRS / MediatR
- SQL Server

---

## 26. Recruiter Version

> Contributed to a Saudi government platform that digitizes licensing workflows for conferences, exhibitions, workshops, and other events. My primary work was in Angular 19, where I designed reusable multi-step form, file-upload, lookup, validation, authentication, and bilingual UI infrastructure. I also contributed to the .NET 9 backend through authentication architecture, CQRS handlers, EF Core changes, and backend refactoring.

---

## 27. Engineering Manager Version

> Worked primarily on the Angular 19 public portal and secondarily on the .NET 9 backend of a Saudi government event-licensing platform. On the frontend, I designed reusable platform infrastructure including a configuration-driven wizard engine with async guards and dynamic steps, a server-backed ControlValueAccessor file-upload component, reusable lookup controls, cross-field validation utilities, bilingual i18n patterns, and workshop/gathering licensing workflows. On the backend, I implemented a Windows AD-to-JWT authentication pipeline with a database provisioning gate, contributed CQRS/MediatR handlers and EF Core changes, and refactored large dependency-registration and AutoMapper configuration areas. I also authored the Angular GitHub Actions build pipeline and repository-governance documentation.

---

## 28. Public-Safety Rules

### Safe to Publish

- SCEGA / Saudi government event licensing context
- Angular 19
- TypeScript
- PrimeNG
- Tailwind
- .NET 9
- ASP.NET Core
- EF Core
- SQL Server
- MediatR / CQRS
- Clean Architecture
- ConfigStepper
- shared file-upload architecture
- shared lookup architecture
- general Windows SSO → JWT architecture
- CI/CD contribution
- bilingual Arabic/English UI

### Publish Generically

- national identity verification service;
- national electronic payment gateway;
- commercial-registry verification service;
- internal shared design-system package;
- government workflow/integration systems.

### Do Not Publish

- internal repositories;
- GitHub organization URLs;
- internal branch/PR identifiers;
- internal email addresses;
- AD SIDs;
- JWT keys;
- connection strings;
- private endpoint URLs;
- environment secrets;
- API keys;
- government operational thresholds;
- citizen/user data;
- internal enum/government codes;
- private RSA keys;
- private infrastructure details.

---

## 29. Accuracy Guardrails

### Verified and Safe to Claim

- Primary contribution in `eservice_external`
- Secondary contribution in `eservice_backend`
- No contribution to `eservice_internal`
- No contribution to `scega-admin-backend`
- Angular 19
- TypeScript 5.7
- PrimeNG 19
- Tailwind CSS 4
- .NET 9
- ASP.NET Core
- EF Core 9
- SQL Server
- MediatR / CQRS
- FluentValidation
- Clean / layered backend architecture
- feature-based Angular architecture
- ConfigStepper authorship
- shared file-upload authorship
- reusable lookup controls
- workshop work
- gathering full-stack work
- AD → JWT work
- GitHub Actions workflow
- backend DI refactoring

### Explicitly Do Not Claim

- Micro Frontends
- Module Federation
- backend microservices
- NgRx
- Redis
- RabbitMQ
- Kafka
- Azure Service Bus
- Kubernetes
- formal people management
- formal Team Lead title
- direct ownership of national identity/payment integrations
- direct authorship of SignalR or Quartz functionality
- direct test authorship unless later verified

---

## 30. Timeline Reconciliation Required

Repository evidence attributes my work to approximately:

```text
October 2025 → March 2026
```

However, the current master CV uses an earlier Three Pillars employment end date.

Do not publish project dates on the portfolio until this discrepancy is manually reconciled.

Possible explanations may include:

- continued consulting work;
- a later project assignment;
- an incorrect CV employment date;
- Git author-date/history differences.

This must be resolved from personal/employment records rather than inferred from Git.

---

## 31. Final Positioning

Recommended flagship order:

1. Upland FileBound
2. Saudi Ministry of Justice — Lawyer Licensing Platform
3. SCEGA — Government Event Licensing Platform

Recommended SCEGA emphasis:

**Angular architecture + reusable frontend infrastructure + full-stack capability + authentication/security + complex government workflows**

This case study is especially valuable because it demonstrates that my Angular expertise goes far beyond implementing screens: I designed reusable frontend infrastructure that multiple business workflows could build on while also contributing directly to the .NET backend.
