# Upland FileBound — SaaS Process & Document Automation

**Status:** Approved factual draft  
**Portfolio Priority:** Flagship Case Study  
**Role:** Senior Software Engineer  
**Company:** FlairsTech, working with Upland Software  
**Period:** Sep 2019 — Feb 2024  
**Engagement:** Nearly five years

---

## Public Summary

FileBound is a mature enterprise SaaS platform for document management, workflow automation, electronic forms, integrations, and business-process automation.

I worked on the product for nearly five years as part of a distributed engineering engagement with Upland Software. My work covered backend services, REST APIs, data-access code, web applications, workflow features, integrations, production support, security hardening, performance improvements, and automated testing.

I joined as the first FlairsTech engineer assigned to the FileBound account and remained involved as the FlairsTech engineering team grew to approximately 15 developers, and later beyond that size.

---

## What I Worked On

My work spanned several areas of the platform rather than a single isolated module.

### eForms & Anonymous Forms

Worked on electronic-form capabilities including:

- parent/child form behavior;
- form revisions;
- form-link behavior;
- published-version visibility;
- anonymous portal access;
- success-page behavior;
- session/data-isolation defects affecting anonymous submissions.

### REST APIs

Worked across both legacy and newer API layers.

Contributions included:

- CRUD endpoints for domain entities;
- fields and metadata APIs;
- business-intelligence data-source APIs;
- anonymous-form related APIs;
- integration-resource APIs;
- document-count endpoints;
- page and integration-parameter endpoints.

### Workflow

Worked on workflow-engine behavior and tooling, including:

- multi-load routing defects;
- multi-queue sorting/filtering;
- workflow email-template behavior;
- changes spanning workflow designer, backend services, persistence, and UI.

### Electronic Signature Integrations

Maintained integrations with external electronic-signature providers, including:

- DocuSign;
- HelloSign.

Work included:

- OAuth compatibility;
- retry/error-handling behavior;
- sender configuration persistence;
- production integration defects.

### Security Hardening

Worked on security-related fixes including:

- cross-site scripting prevention across dashboard widgets;
- upload extension allow-listing;
- authentication/access-flow defects in anonymous-form scenarios.

### Document & File Operations

Worked on:

- copying files between projects;
- clipboard behavior;
- document metadata;
- file-related edge cases;
- viewer-related defects.

### Web Viewer

Resolved issues involving:

- URL routing;
- related-files grids;
- locale/date handling;
- revision metadata;
- user-facing error behavior.

### Reporting & Audit

Fixed reporting/activity-log issues involving incorrect or missing project/type information.

---

## Technology Stack

### Backend

- C#
- .NET Framework 4.5.2 / 4.8
- ASP.NET MVC 4
- ASP.NET Web API 2
- OWIN
- Autofac
- Dapper
- Newtonsoft.Json
- RestSharp
- Swashbuckle / Swagger
- log4net

### Data & Storage

- Microsoft SQL Server
- Hand-written parameterized SQL through Dapper-based factory classes
- AWS S3 for document storage and build artifacts

### Frontend

#### Legacy Web Application

- Razor views
- jQuery
- jQuery UI
- Bootstrap
- TypeScript
- Highcharts
- Moment.js
- jqGrid
- toastr
- CKEditor
- CodeMirror
- custom JavaScript widgets

#### Modern / Mobile Web Area

- Angular
- TypeScript
- NgRx
- RxJS
- Angular Material
- ngx-translate
- ESLint
- Prettier
- Jasmine / Karma

### Integrations & Supporting Libraries

- DocuSign
- HelloSign
- ComponentSpace SAML
- Lucene.NET
- Aspose document-processing libraries
- HiQPdf
- ZXing.NET
- AWS SDK

### Desktop Tooling

- WPF workflow designer

### Build & Delivery

- Jenkins
- Windows build agents
- MSBuild
- NuGet
- PowerShell deployment/build scripts
- AWS S3 artifact upload
- Mend / WhiteSource security scanning

### Testing

- Unit tests
- Integration tests
- Jasmine frontend tests
- Reusable database-backed test fixtures and cleanup helpers

---

## Architecture Context

FileBound was a mature, long-lived enterprise product with a mixed architecture reflecting years of product evolution.

The platform included:

- ASP.NET MVC server-rendered functionality;
- ASP.NET Web API endpoints;
- a newer API v2 layer;
- Dapper-based data-access factories;
- SQL Server;
- AWS S3 document storage;
- legacy JavaScript/jQuery UI;
- newer Angular-based functionality;
- a WPF workflow designer;
- identity and e-signature integrations;
- document-processing and search components.

This environment required balancing feature development with:

- backward compatibility;
- technical debt;
- integration stability;
- performance;
- security;
- production reliability.

---

## Engineering Challenge — Multi-Queue Workflow Sorting & Filtering

One of the more complex features I worked on involved adding sorting and filtering behavior to workflow steps that supported multiple queues.

The change crossed several parts of the product:

- WPF workflow designer;
- backend/data-access layer;
- database changes;
- new domain/enumeration behavior;
- web/widget behavior;
- integration tests.

The challenge was not only implementing the new behavior, but fitting it safely into a mature workflow engine with existing conventions and compatibility constraints.

### Why It Was Challenging

- The behavior touched multiple application layers.
- Existing workflow conventions had to remain compatible.
- Persistence and UI behavior had to evolve together.
- Integration tests needed to remain stable.
- The implementation required several iterations before the full behavior was correct.

### What This Demonstrates

- cross-layer feature ownership;
- ability to work in mature systems;
- workflow/domain complexity;
- persistence design;
- desktop + web coordination;
- regression awareness;
- iterative engineering.

---

## Engineering Challenge — Reducing Repeated Settings Queries

A recurring performance concern was repeated database access when application settings were read.

I introduced an in-process cache inside the settings data-access layer so repeated reads could be served without unnecessary database round trips.

A related optimization added early-exit behavior to avoid additional database queries when extended data was not required.

### Engineering Considerations

The change was cross-cutting because settings were used throughout the application.

The implementation needed to improve request-time behavior without changing consumers of the existing settings API.

### What This Demonstrates

- performance troubleshooting;
- understanding of database round-trip cost;
- cross-cutting optimization;
- low-risk improvement of mature code;
- maintaining existing call contracts.

---

## Production & Reliability Work

I regularly handled defects that affected production behavior.

Examples include:

### Electronic-Signature Integration Compatibility

Resolved failures caused by authentication-model changes in an external e-signature integration.

The fix involved:

- OAuth compatibility changes;
- HTTP retry behavior;
- controlled logging/error handling.

### Anonymous-Form Data Isolation

Resolved a defect where anonymous-form data could incorrectly appear across separate sessions.

This was both a correctness and privacy concern.

### Workflow Routing

Resolved workflow behavior where documents could incorrectly move into exception handling during multi-load processing.

### Anonymous Access / Authentication Flow

Fixed access-flow behavior where a specific anonymous-form URL scenario could bypass the expected login experience.

### Dashboard XSS Hardening

Fixed cross-site scripting vulnerabilities across multiple dashboard widgets.

### Locked-Document Error Handling

Improved a document-lock scenario that previously surfaced as an unhandled error rather than a controlled user-facing response.

---

## API & Data-Layer Contributions

I worked extensively with FileBound's API and persistence patterns.

Examples include:

- newer API v2 controllers;
- CRUD endpoints;
- field/metadata APIs;
- business-intelligence data-source APIs;
- anonymous-form entities;
- integration-related entities;
- document-count APIs;
- project-link data retrieval.

The data layer relied heavily on hand-written SQL through Dapper-based factory classes rather than Entity Framework.

This required attention to:

- query correctness;
- parameterization;
- data mapping;
- integration tests;
- backward compatibility;
- database migrations.

---

## BI Data Sources — Full-Stack Vertical Slice

One feature involved introducing BI data-source support across the complete application stack.

The implementation included:

- new SQL/database structures;
- DAL/factory support;
- API v2 endpoint(s);
- tests.

This is a useful example of end-to-end feature ownership because the change crossed persistence, backend behavior, API design, and verification.

---

## Testing & Engineering Standards

I worked extensively with reusable integration-test infrastructure around the data-access layer.

The project used:

- entity-specific fixtures;
- setup/cleanup helpers;
- repeatable database-backed tests;
- consistent coverage for factory/data-access objects.

I contributed to and expanded these testing patterns across multiple entities.

Because I do not clearly remember whether I originally created the overall test pattern, the portfolio should not claim sole authorship of the testing framework.

---

## Code Review & Team Collaboration

As a senior engineer, regular pull-request review and approval was part of my role.

The team used a review process where a pull request required approval from two senior-or-above engineers before it could be merged.

My responsibilities included:

- reviewing pull requests from other engineers;
- approving changes when they met the required quality bar;
- receiving the same peer review on my own changes;
- discussing implementation choices;
- helping maintain consistency across shared patterns and code paths.

This should be presented as collaborative senior-engineer responsibility rather than as a people-management claim.

---

## Team Growth

I joined as the first FlairsTech engineer assigned specifically to the FileBound account.

Over time, the FlairsTech engineering team supporting the account grew to approximately 15 developers and later beyond that size.

This is useful context because my experience evolved alongside the engagement from direct implementation work into broader senior-engineer responsibilities including:

- cross-cutting technical work;
- code review;
- production troubleshooting;
- integration reliability;
- security fixes;
- API consistency;
- performance improvements.

Avoid claiming formal team-lead or line-management responsibility unless separately verified.

---

## Architecture / Design Contributions

Strong public examples include:

### API v2 Consistency

Worked on the newer API layer using consistent controller + factory-backed patterns across multiple entities.

### Upload Security

Implemented allow-list based file-extension validation.

### BI Data Sources

Worked through the vertical slice from database structure to data-access layer and API endpoint.

### Cross-Cutting Caching

Introduced in-process settings caching to reduce repeated database calls.

### Testing Patterns

Contributed to reusable integration-test fixtures and cleanup patterns used across multiple data-access entities.

---

## What This Experience Taught Me

### Mature Systems Reward Restraint

The best change is not always the largest redesign. In a mature product, preserving compatibility and reducing regression risk can be more important than introducing a newer pattern.

### Production Ownership Changes How You Design

Supporting real production issues makes error handling, defensive coding, backward compatibility, and reliability part of everyday engineering decisions.

### Performance Problems Are Often Cross-Cutting

A small repeated database call can have system-wide impact when it occurs on every request.

### Integration Reliability Needs Defensive Engineering

External systems change. Authentication models change. Networks fail. Integration code needs retries, clear failure behavior, and compatibility thinking.

### Security Is Not a Separate Phase

XSS fixes, file-upload validation, access-flow defects, and session isolation reinforce that security concerns live across the full stack.

### Peer Review Improves Mature Codebases

A two-senior-approval process created regular technical discussion and shared responsibility for correctness, maintainability, and compatibility.

---

## Suggested Public Architecture Diagram

```text
                         ┌──────────────────────┐
                         │     Web Clients      │
                         │ Razor / JS / Angular │
                         └──────────┬───────────┘
                                    │
                     ┌──────────────▼──────────────┐
                     │ ASP.NET MVC / Web API Layer │
                     └──────────────┬──────────────┘
                                    │
                 ┌──────────────────┼──────────────────┐
                 │                  │                  │
                 ▼                  ▼                  ▼
        Application /        Workflow &        Integration
        Domain Services       eForms Logic        Services
                 │                  │                  │
                 └──────────────────┼──────────────────┘
                                    │
                            ┌───────▼────────┐
                            │ Dapper / DAL   │
                            │ Factory Layer  │
                            └───────┬────────┘
                                    │
                              ┌─────▼─────┐
                              │ SQL Server│
                              └───────────┘

        External Services:
        • AWS S3
        • DocuSign / HelloSign
        • SAML Identity
        • Document Processing
        • Search / Indexing
```

This diagram must remain conceptual and must not expose proprietary internal topology.

---

## Homepage Project Card

### Title

**Upland FileBound**

### Subtitle

**Enterprise SaaS · Document & Workflow Automation**

### Short Description

Nearly five years engineering a mature SaaS platform across backend services, APIs, integrations, workflow, eForms, security, performance, testing, and production support.

### Tags

- .NET
- ASP.NET MVC / Web API
- SQL Server
- Dapper
- Angular
- SaaS
- Integrations

### CTA

**View Case Study**

---

## Recruiter Version

> Nearly five years contributing to Upland Software's FileBound enterprise SaaS platform as part of a distributed US-based engineering organization. Worked across .NET backend services, REST APIs, SQL Server/Dapper data access, integrations, workflow, eForms, security hardening, performance optimization, testing, and production support. Joined as the first FlairsTech engineer assigned to the FileBound account and contributed as the engineering team grew to approximately 15 developers and beyond.

---

## Engineering-Manager Version

> Worked across a mature, long-lived SaaS codebase spanning ASP.NET MVC/Web API, SQL Server/Dapper, legacy JavaScript, Angular, WPF workflow tooling, AWS S3, identity, document-processing, and e-signature integrations. Owned cross-layer features, production defects, security fixes, API/data-layer work, integration reliability, performance improvements, and test coverage while participating in a peer-review process requiring two senior-or-above approvals before merge.

---

## Public-Safety Rules

Never publish:

- internal ticket IDs;
- internal repository names;
- private Bitbucket organization/repository paths;
- internal customer/tenant names;
- OAuth client IDs/secrets;
- API keys;
- tokens;
- Jenkins/Mend project tokens;
- production URLs;
- internal SQL/database names;
- private architecture diagrams;
- internal source code;
- confidential business rules;
- customer-specific configuration.

Avoid unnecessary disclosure of exact infrastructure regions or internal deployment topology unless there is a clear public benefit.

---

## Final Approved Facts

- First FlairsTech engineer assigned specifically to the FileBound account: **Confirmed**
- Team grew to approximately 15 developers and later beyond: **Confirmed**
- Nearly five years on FileBound: **Confirmed**
- Regular PR review/approval as a senior engineer: **Confirmed**
- Two senior-or-above approvals required before merge: **Confirmed**
- Sole creator of reusable integration-test framework: **Not claimed / not confirmed**
- Formal people-management responsibility: **Not claimed**
