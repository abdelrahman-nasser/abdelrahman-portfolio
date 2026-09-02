# Upland FileBound — SaaS Process & Document Automation

**Status:** Draft for factual approval  
**Portfolio Priority:** Flagship Case Study  
**Role:** Senior Software Engineer  
**Company:** FlairsTech, working with Upland Software  
**Period:** Sep 2019 — Feb 2024  
**Engagement:** Nearly five years  
**Audience:** Recruiters, Engineering Managers, Technical Leads, CTOs

---

## 1. Public Summary

FileBound is a mature enterprise SaaS platform for document management, workflow automation, electronic forms, integrations, and business-process automation.

I worked on the product for nearly five years as part of a distributed engineering engagement with Upland Software. My work covered backend services, REST APIs, data-access code, web applications, workflow features, integrations, production support, security hardening, performance improvements, and automated testing.

I joined as the first FlairsTech engineer assigned to the FileBound engagement and remained involved as the engineering team expanded to approximately 15 developers.

---

## 2. What I Worked On

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

## 3. Technology Stack

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
- AWS S3 for document and build-artifact storage

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

#### Mobile / Modern Web Area

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
- Reusable integration-test fixtures / cleanup patterns

---

## 4. Architecture Context

FileBound was a mature, long-lived enterprise product with a mixed architecture reflecting years of evolution.

The platform included:

- ASP.NET MVC server-rendered web functionality;
- ASP.NET Web API endpoints;
- a newer API v2 layer;
- Dapper-based data-access factories;
- SQL Server;
- document storage in AWS S3;
- legacy JavaScript/jQuery UI;
- newer Angular-based functionality;
- a WPF workflow designer;
- external identity and e-signature integrations;
- document-processing and search components.

This environment required balancing feature development with:

- backward compatibility;
- technical debt;
- integration stability;
- performance;
- security;
- production reliability.

---

## 5. Engineering Challenge — Multi-Queue Workflow Sorting & Filtering

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

## 6. Engineering Challenge — Reducing Repeated Settings Queries

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

> Public portfolio note: avoid claiming a percentage or latency reduction unless a measured value can be verified.

---

## 7. Production & Reliability Work

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

## 8. API & Data-Layer Contributions

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

## 9. BI Data Sources — Full-Stack Vertical Slice

One feature involved introducing BI data-source support across the complete application stack.

The implementation included:

- new SQL/database structures;
- DAL/factory support;
- API v2 endpoint(s);
- tests.

This is a useful example of end-to-end feature ownership because the change crossed persistence, backend behavior, API design, and verification.

---

## 10. Testing & Engineering Standards

I contributed to reusable integration-test infrastructure around the data-access layer.

The pattern included:

- entity-specific fixtures;
- setup/cleanup helpers;
- repeatable database-backed tests;
- consistent coverage for factory/data-access objects.

This pattern was applied across multiple entities and helped make API/data-layer work safer to evolve.

### TO CONFIRM BEFORE PUBLICATION

Kiro's repository analysis suggests that this pattern became a standard used by other engineers.

Confirm whether you are comfortable stating:

> "I established a reusable integration-test pattern that was later adopted across multiple data-access components."

If yes, this can be promoted as a technical-leadership example.

---

## 11. Code Review & Team Growth

Confirmed public fact:

- I joined as the first FlairsTech engineer assigned to the FileBound engagement.
- The engineering team later expanded to approximately 15 developers.

### NEEDS CONFIRMATION

Repository history suggests that later in the engagement I frequently acted as a merge reviewer/approver for work from other engineers.

Before publishing, confirm whether the following statement is accurate:

> "As the engagement grew, my responsibilities expanded beyond implementation to include regular pull-request review, technical guidance, and consistency across shared engineering patterns."

Do **not** publish the inferred "~80+ PR approvals" number unless manually verified and you explicitly want to use it.

---

## 12. Architecture / Design Contributions

Strong candidates for public portfolio discussion:

### API v2 Consistency

Worked on the newer API layer using consistent controller + factory-backed patterns across multiple entities.

### Integration-Test Pattern

Created reusable test fixtures and cleanup patterns for database-backed components.

### Upload Security

Implemented allow-list based file-extension validation.

### BI Data Sources

Worked through the vertical slice from database structure to data-access layer and API endpoint.

### Cross-Cutting Caching

Introduced in-process settings caching to reduce repeated database calls.

---

## 13. What This Experience Taught Me

Working on FileBound for nearly five years reinforced several engineering lessons:

### Mature Systems Reward Restraint

The best change is not always the largest redesign. In a mature product, preserving compatibility and reducing regression risk can be more important than introducing a newer pattern.

### Production Ownership Changes How You Design

Supporting real production issues makes error handling, observability, defensive coding, and backward compatibility part of everyday engineering decisions.

### Performance Problems Are Often Cross-Cutting

A small repeated database call can have system-wide impact when it occurs on every request.

### Integration Reliability Needs Defensive Engineering

External systems change. Authentication models change. Networks fail. Integration code needs retries, clear failure behavior, and compatibility thinking.

### Security Is Not a Separate Phase

XSS fixes, file-upload validation, access-flow defects, and session isolation all reinforce that security concerns live across the full stack.

### Test Infrastructure Multiplies Team Effectiveness

Reusable testing patterns make future feature work safer and reduce the cost of validating changes.

---

## 14. Suggested Architecture Diagram

The public portfolio may use a simplified conceptual diagram such as:

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

This must remain conceptual and should not expose proprietary internal topology.

---

## 15. Homepage Project Card

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

## 16. Short Recruiter Version

> Nearly five years contributing to Upland Software's FileBound enterprise SaaS platform as part of a distributed US-based engineering organization. Worked across .NET backend services, REST APIs, SQL Server/Dapper data access, integrations, workflow, eForms, security hardening, performance optimization, testing, and production support. Joined as the first FlairsTech engineer on the engagement and contributed as the team expanded to approximately 15 developers.

---

## 17. Short Engineering-Manager Version

> Worked across a mature, long-lived SaaS codebase spanning ASP.NET MVC/Web API, SQL Server/Dapper, legacy JavaScript, Angular, WPF workflow tooling, AWS S3, identity, document-processing, and e-signature integrations. Owned cross-layer features, production defects, security fixes, API/data-layer work, integration reliability, performance improvements, and reusable integration-test infrastructure while balancing backward compatibility and technical debt.

---

## 18. Public-Safety Rules for This Case Study

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

## 19. Facts Still Requiring Abdelrahman's Confirmation

Before marking this case study final:

- [ ] Confirm that the "first FlairsTech engineer" statement is accurate.
- [ ] Confirm that team growth to approximately 15 developers is accurate.
- [ ] Confirm that you are comfortable describing FileBound as a mature enterprise SaaS platform publicly.
- [ ] Confirm that you personally worked on the listed eForms/Anonymous Forms areas.
- [ ] Confirm that you personally worked on the listed REST API areas.
- [ ] Confirm that you personally worked on DocuSign and HelloSign integrations.
- [ ] Confirm that you personally implemented the settings caching change.
- [ ] Confirm that you personally worked on the XSS/security-hardening fixes.
- [ ] Confirm that the multi-queue workflow feature is suitable for public discussion.
- [ ] Confirm that the BI Data Sources work was your end-to-end contribution.
- [ ] Confirm whether you created the reusable integration-test pattern.
- [ ] Confirm whether that test pattern was adopted by other engineers.
- [ ] Confirm whether regular PR review/approval became part of your responsibilities.
- [ ] Confirm whether we may describe your later role as including technical guidance.
- [ ] Confirm whether Angular 16 belongs to the period you personally worked on FileBound.
- [ ] Confirm whether AWS S3 document-storage details are safe to mention publicly.
- [ ] Confirm that no listed detail violates NDA/confidentiality obligations.

---

## 20. Portfolio Recommendation

This should be the first and deepest case study in the portfolio.

Recommended homepage ordering:

1. Upland FileBound
2. Saudi Ministry of Justice
3. SCEGA

Recommended case-study emphasis:

**Mature SaaS + cross-layer engineering + production ownership + integrations + security + performance + team growth**

This story differentiates Abdelrahman more strongly than a generic list of .NET and Angular technologies.
