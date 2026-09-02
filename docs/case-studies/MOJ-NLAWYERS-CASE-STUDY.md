# Saudi Ministry of Justice — Lawyer Licensing Platform

**Status:** Public-safe draft for approval  
**Portfolio Priority:** Flagship Case Study  
**Role:** Senior Software Engineer  
**Company:** Three Pillars  
**Client Context:** Saudi Ministry of Justice  
**Public Positioning:** Government Digital Services · Full-Stack Engineering · Integrations · Micro Frontend

---

## 1. Public Summary

Contributed as a senior full-stack engineer to a Saudi Ministry of Justice digital platform supporting the professional licensing lifecycle of lawyers.

The platform supported workflows including new license applications, renewals, reissues, cancellations, trainee management, and related eligibility and verification processes.

My strongest contributions were in:

- enterprise backend integrations;
- ASP.NET Core APIs;
- Vue/TypeScript frontend architecture;
- reusable route-guard patterns;
- secure cross-system redirects;
- EF Core data-model changes and migrations;
- shared frontend components;
- production release support.

The platform integrated with multiple government and enterprise systems through an API gateway and operated as a micro frontend inside a larger government e-services portal.

---

## 2. Project Context

The system replaced or modernized parts of an older lawyer-licensing experience with a newer integrated digital service.

At a high level, it connected:

- a citizen-facing lawyer licensing interface;
- a government workflow/case-management system;
- an enterprise licensing backend;
- national identity services;
- social-insurance data;
- academic-verification services;
- national-address services;
- document/attachment services.

For public portfolio use, these integrations should be described generically rather than exposing internal government topology or private endpoint names.

---

## 3. My Role

My contribution covered both backend and frontend engineering.

### Backend

I worked on:

- .NET 8 / ASP.NET Core Web API;
- enterprise backend integrations;
- typed HTTP clients using Refit;
- integration audit logging;
- EF Core entities and migrations;
- trainee-related backend work;
- secure token/encryption endpoints;
- API error handling;
- domain modeling.

### Frontend

I worked on:

- Vue 2 + TypeScript;
- route guards;
- shared components;
- shared modules;
- localization;
- legacy-system redirect flows;
- form/request workflow behavior;
- reusable UI patterns.

### Delivery & Review

I also participated in:

- pull-request review/merge activity;
- production deployment/release merges;
- shared-code refactoring;
- technical consistency across feature areas.

This should be presented as senior-engineer responsibility, not formal people management.

---

## 4. Technology Stack

### Backend

- .NET 8
- ASP.NET Core Web API
- C#
- Entity Framework Core 8
- SQL Server
- AutoMapper
- Refit
- Autofac
- Ardalis.Specification
- MediatR — present in the solution, but formal CQRS usage is not claimed
- Newtonsoft.Json
- Swashbuckle / Swagger

### Frontend

- Vue.js 2
- TypeScript
- Vue Router
- Vuex
- Vuetify
- vue-i18n
- moment-hijri
- Jest
- Cypress
- ESLint

### Architecture & Integration

- Layered / Clean Architecture style
- Generic Repository pattern
- Shared Kernel
- Path-based Micro Frontend
- API Gateway integration
- External workflow/case-management integration
- Enterprise government backend integration
- National identity and government data-provider integrations

### Delivery

- Azure DevOps Pipelines
- Windows/IIS-oriented deployment
- environment-based configuration
- production release merges

### Explicitly Not Claimed

No evidence supports claiming:

- backend microservices;
- Docker;
- Kubernetes;
- Redis;
- RabbitMQ;
- Kafka;
- Azure Service Bus;
- Angular;
- formal DDD;
- formal CQRS implementation.

---

## 5. Architecture

The backend was a single ASP.NET Core API solution organized into clear layers rather than independently deployed microservices.

A simplified public view:

```text
┌─────────────────────────────────────────────┐
│ Government E-Services Portal               │
│                                             │
│  Lawyer Licensing Micro Frontend            │
│  Vue 2 + TypeScript                         │
└──────────────────────┬──────────────────────┘
                       │
                       │ HTTP / API Gateway
                       ▼
┌─────────────────────────────────────────────┐
│ ASP.NET Core Web API                        │
│                                             │
│  Application Services                      │
│  Domain / Core                             │
│  Integration Layer                         │
│  EF Core Infrastructure                    │
└───────────────┬───────────────┬─────────────┘
                │               │
                ▼               ▼
          SQL Server      Government /
                          Enterprise Systems
                               │
             ┌─────────────────┼──────────────────┐
             ▼                 ▼                  ▼
      Licensing Backend   Workflow System   Identity /
                                             Verification
                                             Services
```

This is intentionally conceptual and does not expose internal endpoint names, service names, or infrastructure details.

---

## 6. Engineering Challenge — Enterprise Licensing Integration

One of my strongest contributions was building the integration layer between the application and an external enterprise licensing backend.

I worked on:

- typed Refit HTTP interfaces;
- integration service implementation;
- request/response mapping;
- multiple licensing lifecycle operations;
- error handling;
- correlation identifiers;
- request/response audit logging;
- execution-duration logging;
- persistence of integration logs;
- date-format conversion where required by the external system.

The integration covered multiple operations such as:

- registering lawyer records;
- renewals;
- reissues;
- status changes;
- cancellations;
- trainee retrieval.

### Why This Was Challenging

The integration was a cross-cutting concern spanning:

- application services;
- HTTP integration contracts;
- DTO mapping;
- database audit logging;
- error handling;
- production troubleshooting.

The design also needed to make failures diagnosable in production without exposing implementation details to end users.

### Seniority Signal

This work demonstrates ownership beyond simply calling an external API: the implementation included observability/auditability, typed contracts, failure handling, persistence, and production support considerations.

---

## 7. Integration Audit Trail

I implemented an audit-log pattern around outbound integration calls.

The pattern captured operational metadata such as:

- request information;
- response information;
- status;
- timing;
- correlation identifiers;
- success/failure state;
- error information.

The log was persisted even when calls failed, supporting:

- troubleshooting;
- support;
- traceability;
- production incident investigation.

For the public portfolio, this should be described as an integration audit trail without exposing actual government payloads, endpoint names, headers, or private data.

---

## 8. Engineering Challenge — Composable Route Guard Architecture

On the frontend, I designed and worked extensively on a reusable route-guard pattern for request eligibility.

The system needed to prevent users from entering licensing flows when business rules were not satisfied.

The guard architecture supported:

- different request types;
- asynchronous eligibility checks;
- existing/in-progress requests;
- legacy-system eligibility;
- user-status checks;
- returned-request re-entry;
- composition of multiple checks.

Rather than duplicating conditional logic across routes, the implementation used reusable guard factories and guard-composition utilities.

### Why This Was Challenging

Eligibility rules were:

- asynchronous;
- dependent on multiple APIs;
- different by request type;
- frequently refined as business behavior evolved.

### Seniority Signal

This demonstrates frontend architecture work focused on reusable business-rule enforcement rather than only page/component implementation.

---

## 9. Secure Legacy-System Bridge

I contributed to a secure redirect flow between the newer digital platform and an older ministry system.

Instead of exposing raw request identifiers in redirect URLs, the flow used a purpose-scoped encrypted token.

My contribution included:

- backend encryption endpoint;
- frontend service integration;
- URL-safe token handling;
- redirect coordination between systems.

### Engineering Goal

Protect identifiers from direct manipulation while allowing the user to move between newer and legacy systems.

For public use, the exact ministry key-storage package, encryption configuration, endpoint routes, and internal URL structure must remain private.

---

## 10. Shared Frontend Architecture

I contributed several refactorings aimed at improving reuse and consistency across licensing flows.

Examples include:

### Request Consent Checklist

Created a reusable consent/checklist component used across multiple request types, including read-only preview behavior.

### Localized Date Display

Created a shared component for displaying Hijri and Gregorian dates consistently.

### Academic Qualifications

Moved qualification functionality from request-specific code into a shared module and contributed related model enhancements.

### Shared Constants / Dialogs / Components

Contributed to moving duplicated functionality into reusable shared areas.

### Other Organization Data

Worked on shared data mapping and transformations used in multi-section registration workflows.

These changes demonstrate attention to maintainability and reducing duplicated frontend behavior.

---

## 11. Data & Persistence Work

The backend used:

- SQL Server;
- Entity Framework Core;
- repository abstractions;
- specification-based queries;
- migrations;
- read optimizations such as no-tracking queries;
- history/audit persistence patterns.

My direct contributions included several migrations and model changes, including work related to:

- trainee data;
- integration audit logs;
- work-related data models;
- identifier type changes;
- trainee exclusion dates.

### Important Public Claim Rule

Do not claim that I authored all migrations in the project.

The repository contains 40+ migrations overall, but my history supports authorship of several specific migrations rather than all of them.

---

## 12. Trainee Management

I contributed to the trainee-management area, including:

- entity/model changes;
- migrations;
- service-layer work;
- trainee-related integration models;
- external trainee retrieval.

The feature involved lifecycle/status behavior and coordination with external licensing data.

This can be included as a supporting example, but it is not as strong a portfolio story as the integration, guard architecture, or secure redirect work.

---

## 13. Domain Modeling — Legal Case / Mandate Extension

I also designed a domain model for a legal case/mandate-related extension.

The design included entities representing concepts such as:

- cases;
- hearings;
- involved parties;
- many-to-many relationships;
- composite keys;
- indexes;
- relationship behavior.

This work is useful evidence of schema/domain modeling.

However, because the analyzed branch was not merged into the main development branch at the time of analysis, the portfolio should describe it as:

> "Designed a domain model for a legal case-management extension"

rather than implying the full feature was deployed to production.

---

## 14. Authentication & Authorization Context

The system relied on the larger government portal and gateway architecture for much of its authentication context.

Verified security-related work tied directly to me includes:

- secure cross-system URL token generation;
- route-level business eligibility guards;
- integration with existing government identity/user-session APIs;
- API error-handling improvements.

Do not claim direct ownership of:

- the ministry-wide identity platform;
- the API gateway;
- JWT architecture;
- OAuth infrastructure;
- global authorization policies.

Those were platform capabilities that the application consumed.

---

## 15. Performance & Reliability

The repository shows several performance-oriented patterns in the application, including:

- EF Core no-tracking reads;
- projection-based queries;
- parallel frontend requests;
- selective caching of external lookups.

My portfolio should only attribute performance optimizations directly to me where commit evidence exists.

The strongest public reliability story remains the integration audit/error-handling work rather than an unsupported numeric performance claim.

No fabricated performance percentages should be used.

---

## 16. Production & Release Responsibility

My history includes merge activity around:

- feature integration;
- bug fixes;
- production releases;
- failed-build fixes;
- deployment preparation.

This supports saying:

> "Participated in production release management and merge/review activities for critical feature areas."

Do not publish internal PR IDs.

Do not convert merge history into a formal Team Lead title.

---

## 17. Code Review & Technical Collaboration

The repository history supports regular senior-level merge/review responsibility.

Public wording:

> As a senior engineer, I participated in peer review and release gating across feature and production changes, helping maintain consistency across backend, frontend, integration, and shared-code areas.

Avoid unsupported claims about:

- formal team leadership;
- direct reports;
- performance management;
- people-management responsibility.

---

## 18. What This Project Demonstrates

### Full-Stack Ownership

Worked across .NET backend services, EF Core, APIs, Vue/TypeScript frontend code, shared components, integrations, and deployment.

### Integration Engineering

Built production-oriented integration code with typed contracts, auditing, error handling, and traceability.

### Frontend Architecture

Created composable route-guard and shared-component patterns rather than implementing isolated screens only.

### Security Awareness

Implemented secure identifier/token handling for cross-system redirects.

### Government Digital Services

Worked in an integration-heavy environment spanning citizen-facing workflows and multiple government systems.

### Pragmatic Architecture

Worked within a layered monolithic backend and path-based micro frontend rather than mislabeling the project as microservices.

---

## 19. Lessons / Engineering Reflection

### Integration Code Needs First-Class Operability

Calling an external API is only part of the work. Production integrations need correlation, auditability, useful errors, and enough traceability to diagnose failures.

### Business Rules Belong in Reusable Structures

When eligibility logic spans several workflows, reusable guard composition is safer than duplicating complex conditionals.

### Shared Components Need Business Context

The most valuable frontend abstractions were not generic UI widgets; they were reusable business components shared across licensing flows.

### Legacy Integration Requires Security Discipline

Bridging new and old systems often creates weak boundaries. Sensitive identifiers should not simply be passed through query strings.

### Architecture Labels Should Be Precise

This project used a layered/clean backend architecture and a micro frontend, but not backend microservices. Accurate terminology matters.

---

## 20. Homepage Project Card

### Title

**Saudi Ministry of Justice — Lawyer Licensing Platform**

### Subtitle

**Government Digital Services · Full-Stack · Integrations**

### Short Description

Senior full-stack engineering on a government lawyer-licensing platform, including enterprise integrations, ASP.NET Core APIs, Vue/TypeScript route architecture, secure cross-system redirects, shared components, and production release support.

### Recommended Tags

- .NET 8
- ASP.NET Core
- EF Core
- Vue.js
- TypeScript
- Micro Frontend
- Integrations

### CTA

**View Case Study**

---

## 21. Recruiter Version

> Contributed as a Senior Software Engineer to a Saudi Ministry of Justice digital platform supporting lawyer licensing workflows including applications, renewals, reissues, cancellations, and trainee management. Worked full-stack across .NET 8, ASP.NET Core, EF Core, Vue/TypeScript, government integrations, shared frontend architecture, secure cross-system redirects, and production release activities.

---

## 22. Engineering Manager Version

> Worked full-stack on an integration-heavy government licensing platform using .NET 8, ASP.NET Core, EF Core, SQL Server, Vue 2, and TypeScript. One of my main contributions was building the integration layer for an external enterprise licensing backend using typed Refit clients, request/response mapping, correlation IDs, persistent audit logging, and production-oriented error handling. On the frontend, I designed reusable route-guard composition for complex licensing eligibility rules and contributed shared components/modules used across multiple request flows. I also implemented a secure encrypted-token bridge between the new portal and a legacy ministry system, contributed EF Core migrations and data-model changes, and participated in production release and peer-review activities.

---

## 23. Public-Safety Rules

### Safe to Publish

- Saudi Ministry of Justice client context
- lawyer licensing platform
- .NET 8 / ASP.NET Core
- EF Core / SQL Server
- Vue 2 / TypeScript
- micro frontend
- API gateway
- layered / clean architecture
- government/enterprise integrations
- audit logging
- secure cross-system redirects
- route-guard architecture
- shared frontend components
- production release participation

### Publish Generically

Use generic descriptions for:

- enterprise licensing backend;
- government workflow/case-management system;
- national identity platform;
- social-insurance service;
- national-address service;
- academic-verification service;
- document storage/service;
- API gateway.

### Do Not Publish

- internal Azure DevOps URL
- internal repo names
- internal email addresses
- internal PR/ticket IDs
- database names
- connection strings
- secrets/tokens
- internal package names
- exact endpoint paths
- internal environment variables
- internal government topology
- private operational rules
- proprietary source code
- customer/citizen data

---

## 24. Important Accuracy Notes

### Confirmed

- .NET 8 / ASP.NET Core Web API
- EF Core 8 / SQL Server
- Vue 2 / TypeScript
- path-based Micro Frontend
- layered / clean-style architecture
- API Gateway integration
- enterprise licensing integration
- integration audit logging
- route guard factory/composition work
- encrypted redirect/token work
- shared frontend component work
- several EF Core migrations
- production merge/release activity

### Do Not Claim

- backend microservices
- Angular
- Docker
- Kubernetes
- Redis
- message brokers
- formal DDD
- formal CQRS
- formal Team Lead title
- authorship of all 40+ migrations
- authorship of all project architecture

### Needs Manual Reconciliation

The repository analysis includes activity across a project timeline that extends beyond the employment end date currently used in the CV.

For the public portfolio:

- do not display a personal “2-year project duration” yet;
- use the confirmed Three Pillars employment dates elsewhere;
- review the Git identity/date history before publishing any personal contribution metrics tied to the full repository timeline.

---

## 25. Recommended Portfolio Positioning

This should be the second flagship case study after Upland FileBound.

Recommended emphasis:

**Government digital services + integration engineering + full-stack ownership + micro frontend + security + reusable frontend architecture**

Recommended homepage order:

1. Upland FileBound
2. Saudi Ministry of Justice — Lawyer Licensing Platform
3. SCEGA
