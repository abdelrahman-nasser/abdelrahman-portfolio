# Abdelrahman Hegab — Engineering Portfolio

Professional engineering portfolio for **Abdelrahman Hegab**, Senior Software Engineer specializing in **.NET, Angular, software architecture, enterprise SaaS, integrations, and government digital platforms**.

> This repository contains the implemented Angular 22 portfolio, its automated quality pipeline,
> and its Cloudflare Pages deployment configuration.

---

## Portfolio Goal

This is not intended to be a traditional template-style developer portfolio.

The goal is to present:

- senior software engineering experience;
- enterprise SaaS work;
- government digital services;
- architecture and system-design thinking;
- full-stack .NET + Angular capability;
- production engineering;
- integrations;
- security;
- reusable frontend infrastructure;
- technical leadership and code-review experience;
- AI-augmented engineering workflows.

The portfolio is designed for two reading modes:

```text
Recruiter / Hiring Manager
        ↓
30–60 second scan
        ↓
Identity · Seniority · Stack · Experience · Projects · Contact


Engineering Manager / CTO / Technical Lead
        ↓
5–15 minute deep review
        ↓
Architecture · Challenges · Decisions · Production · Engineering Approach
```

---

# Positioning

Primary professional title:

```text
Senior Software Engineer
```

Primary technology positioning:

```text
.NET & Angular
Software Architecture
Enterprise & SaaS Systems
```

Primary portfolio message:

> Building reliable enterprise, SaaS, and government digital platforms.

---

# Flagship Case Studies

Version 1 focuses on three complementary engineering stories.

## 1. Upland FileBound

**Enterprise SaaS · Document & Workflow Automation**

Nearly five years contributing to a mature SaaS platform across:

- backend services;
- REST APIs;
- workflow;
- eForms;
- integrations;
- security;
- performance;
- production support;
- peer review.

Primary portfolio story:

```text
Mature SaaS + Production Engineering
```

Detailed editorial source:

```text
docs/case-studies/UPLAND-FILEBOUND-CASE-STUDY.md
```

---

## 2. Saudi Ministry of Justice — Lawyer Licensing Platform

**Government Digital Services · Full Stack · Integrations**

Engineering work across:

- .NET 8;
- ASP.NET Core;
- EF Core;
- Vue + TypeScript;
- enterprise integrations;
- integration auditability;
- route-guard architecture;
- secure cross-system redirects;
- shared frontend components;
- production/release work.

Primary portfolio story:

```text
Government Integrations + Security + Full Stack
```

Detailed editorial source:

```text
docs/case-studies/MOJ-NLAWYERS-CASE-STUDY.md
```

---

## 3. SCEGA — Government Event Licensing Platform

**Saudi Government · Angular Architecture · Full Stack**

Primary contribution to the Angular public portal plus verified backend work including:

- Angular 19;
- TypeScript;
- reusable ConfigStepper infrastructure;
- server-backed ControlValueAccessor file upload;
- shared lookup controls;
- cross-field validation;
- bilingual UI;
- .NET 9;
- CQRS / MediatR;
- authentication architecture;
- backend refactoring.

Primary portfolio story:

```text
Angular Architecture + Reusable Infrastructure + Full Stack
```

Important accuracy rule:

```text
SCEGA was NOT a Micro Frontend / Module Federation implementation.
```

Detailed editorial source:

```text
docs/case-studies/SCEGA-CASE-STUDY.md
```

---

# Planned Site Structure

Version 1:

```text
/
├── Home
├── Experience
├── Projects
│   ├── /projects/upland-filebound
│   ├── /projects/moj-lawyer-licensing
│   └── /projects/scega-event-licensing
├── Engineering
├── About
├── Contact
└── CV
```

Future optional additions:

```text
/notes
/projects/hcww
/projects/mobil-pos
```

These are intentionally excluded from the initial launch scope.

---

# Homepage Structure

Planned order:

```text
01 Header
02 Hero
03 Professional Snapshot
04 Selected Work
05 Experience Preview
06 Engineering Expertise
07 How I Engineer
08 AI-Augmented Engineering
09 Certifications
10 Contact CTA
11 Footer
```

The homepage is optimized for scanning.

Detailed technical content belongs in case studies and the Engineering page.

---

# Technical Architecture

Version 1 architecture:

```text
Angular 22
TypeScript
Standalone Components
Angular Router

Build-time Prerendering
Static Output
No Runtime SSR Server

SCSS
Semantic CSS Design Tokens

Signals for small UI state
No NgRx

Typed Local Content
No CMS
No Backend

Vitest
Playwright

GitHub Actions
Cloudflare Pages
```

The portfolio deliberately uses the simplest architecture that fully satisfies the product requirements.

---

# Architecture Principle

> Choose the simplest architecture that fully satisfies the product requirements, then execute it with strong structure, documentation, testing, accessibility, performance, and delivery discipline.

The repository is not intended to demonstrate every technology Abdelrahman knows by installing it.

Therefore Version 1 intentionally does **not** use:

```text
.NET backend
Database
Redis
Microservices
NgRx
Tailwind
Angular Material
PrimeNG
NG-ZORRO
Bootstrap
Runtime SSR
CMS
Kubernetes
```

Those technologies and architecture patterns are demonstrated through real project case studies where relevant.

---

# Rendering & Hosting

Delivery architecture:

```text
GitHub
   |
   +--> GitHub Actions quality validation
   |
   +--> Cloudflare Pages Git integration
          Angular build / prerender
          static output
          preview deployments
          main --> production
```

Production: <https://abdelrahman-hegab.pages.dev>

Non-production branches are eligible for Cloudflare preview deployments for:

- visual review;
- responsive QA;
- recruiter-style review;
- accessibility validation.

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the deployment contract and smoke checklist.

---

# Design Direction

The visual system should feel:

```text
Senior Engineer
+
Modern SaaS
+
Engineering Documentation
+
Personal Brand
```

Not:

```text
Cyberpunk
Neon
Gaming UI
Typing-animation portfolio
Template marketplace
```

Primary brand color:

```text
#004F90
```

Primary web font:

```text
Inter
```

Themes:

```text
System
Light
Dark
```

Styling:

```text
SCSS
CSS Custom Properties
Semantic Design Tokens
```

---

# AI-Augmented Engineering Positioning

The portfolio presents AI as an engineering accelerator rather than a replacement for engineering judgment.

Planned workflow visual:

```text
Requirements
    ↓
Technical Analysis
    ↓
Architecture / PRD
    ↓
Task Breakdown
    ↓
AI-Assisted Implementation
    ↓
Testing & Validation
    ↓
Human Review
    ↓
PR / CI
    ↓
Deployment
```

Public positioning:

> AI coding agents are used to accelerate research, planning, implementation, refactoring, debugging, testing, documentation, and code review while human ownership remains with architecture, correctness, security, business logic, validation, and final engineering decisions.

---

# Documentation

The repository is documentation-first.

## Product & Content

### [`docs/PRD.md`](docs/PRD.md)

Defines:

- product vision;
- audiences;
- requirements;
- homepage;
- case studies;
- performance;
- accessibility;
- release definition.

### [`docs/CONTENT.md`](docs/CONTENT.md)

Canonical public-content source for:

- profile;
- career summary;
- experience;
- skills;
- credentials;
- project drafts;
- engineering positioning.

---

## UX & Design

### [`docs/INFORMATION-ARCHITECTURE.md`](docs/INFORMATION-ARCHITECTURE.md)

Defines:

- site map;
- homepage hierarchy;
- recruiter journey;
- engineering-manager journey;
- project-card hierarchy;
- case-study structure;
- page wireframes;
- navigation.

### [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md)

Defines:

- colors;
- themes;
- typography;
- spacing;
- cards;
- buttons;
- project visuals;
- architecture diagrams;
- motion;
- responsive design;
- accessibility.

---

## Engineering

### [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

Defines:

- Angular architecture;
- prerendering;
- routing;
- folder structure;
- content model;
- theme architecture;
- SCSS;
- SEO integration;
- testing;
- CI/CD;
- Cloudflare deployment;
- dependency policy.

### [`docs/TESTING.md`](docs/TESTING.md)

Defines:

- Vitest;
- Angular TestBed;
- Playwright;
- content validation;
- confidentiality checks;
- prerender testing;
- accessibility;
- responsive E2E;
- release testing.

### [`docs/SEO.md`](docs/SEO.md)

Defines:

- metadata;
- canonical URLs;
- project SEO;
- Open Graph;
- structured data;
- sitemap;
- robots;
- Search Console;
- domain migration.

### [`docs/ROADMAP.md`](docs/ROADMAP.md)

Defines the implementation sequence from:

```text
Angular initialization
→ design foundation
→ shell
→ theme
→ homepage
→ case studies
→ SEO
→ testing
→ CI/CD
→ Cloudflare
→ launch
```

---

# AI Agent Rules

### [`AGENTS.md`](AGENTS.md)

Every coding agent working in this repository must read and follow `AGENTS.md`.

It defines:

- architecture constraints;
- Angular conventions;
- content safety;
- confidentiality;
- dependency policy;
- SCSS rules;
- testing requirements;
- Git workflow;
- public career-claim accuracy;
- definition of done.

Critical rule:

> AI agents must never invent career facts or automatically publish internal research.

---

# Documentation vs Runtime Content

The repository intentionally separates editorial/research content from content that the Angular application will eventually publish.

Detailed editorial content:

```text
docs/
```

Future approved runtime content:

```text
src/app/content/
```

Example:

```text
docs/case-studies/SCEGA-CASE-STUDY.md
```

will later be curated into something like:

```text
src/app/content/projects/scega-event-licensing.content.ts
```

The Angular application must **not automatically parse and publish research documents**.

This is a confidentiality boundary.

---

# Planned Angular Structure

After initialization:

```text
src/
├── app/
│   ├── core/
│   │   ├── seo/
│   │   ├── theme/
│   │   └── navigation/
│   │
│   ├── layout/
│   │   ├── app-shell/
│   │   ├── header/
│   │   ├── mobile-navigation/
│   │   └── footer/
│   │
│   ├── shared/
│   │   └── components/
│   │
│   ├── features/
│   │   ├── home/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── engineering/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── cv/
│   │   └── not-found/
│   │
│   ├── content/
│   │   └── projects/
│   │
│   ├── models/
│   └── app.routes.ts
│
└── styles/
    ├── _tokens.scss
    ├── _reset.scss
    ├── _typography.scss
    ├── _layout.scss
    ├── _utilities.scss
    └── styles.scss
```

---

# Planned Public Assets

```text
public/
├── cv/
│   └── Abdelrahman-Hegab-CV.pdf
│
├── images/
├── icons/
├── og/
│   ├── home.png
│   ├── upland-filebound.png
│   ├── moj-lawyer-licensing.png
│   └── scega-event-licensing.png
│
├── robots.txt
├── sitemap.xml
└── favicon.svg
```

---

# Testing Strategy

Approved stack:

```text
Vitest
Angular TestBed
jsdom
Playwright
```

Important automated checks will cover:

- project slugs;
- public content integrity;
- confidential-pattern detection;
- theme persistence;
- mobile navigation;
- direct deep links;
- project navigation;
- SEO metadata;
- sitemap;
- prerender build;
- 404;
- CV link;
- responsive layouts.

Testing should focus on behavior that can materially break credibility, navigation, accessibility, public safety, or deployment.

---

# Quality Targets

Planned Lighthouse targets:

```text
Performance       95+
Accessibility     95+
Best Practices    95+
SEO               95+
```

These are quality goals, not an excuse to compromise usability for a perfect score.

---

# Accessibility

Accessibility is part of the Definition of Done.

The site must support:

- semantic HTML;
- skip-to-content;
- keyboard navigation;
- visible focus;
- logical heading structure;
- sufficient contrast;
- reduced motion;
- responsive zoom;
- touch-friendly controls;
- accessible mobile navigation.

---

# SEO

Every major page will have:

- unique title;
- description;
- canonical URL;
- Open Graph metadata.

Homepage will include:

```text
Person JSON-LD
```

Project pages will have independent metadata and social preview images.

All production pages will be prerendered.

---

# Security & Confidentiality

No production application secrets are expected.

The main project-security concerns are:

- dependency security;
- unsafe HTML;
- accidental publication of confidential research;
- internal URL leakage;
- source/content mistakes.

Never publish:

```text
internal repo URLs
ticket IDs
private email aliases
connection strings
credentials
API keys
government operational rules
private architecture
internal endpoints
customer/citizen data
```

---

# Current Accuracy Guardrails

## SCEGA

Do not claim:

```text
Micro Frontends
Module Federation
Microservices
NgRx
Redis
RabbitMQ
Kubernetes
```

unless future verified evidence explicitly changes the approved case study.

## MOJ

Do not broaden project technologies or architecture beyond the approved public case study.

Project dates remain excluded until timeline reconciliation is complete.

## Upland FileBound

Do not publish internal:

- ticket IDs;
- repository information;
- tenant information;
- secrets;
- private topology.

---

# Git Workflow

Permanent branch:

```text
main
```

Short-lived branches:

```text
feature/<scope>
fix/<scope>
docs/<scope>
chore/<scope>
test/<scope>
```

Examples:

```text
chore/angular-initialization
feature/design-foundation
feature/app-shell
feature/theme-system
feature/home-hero
feature/upland-case-study
test/playwright-setup
```

---

# Commit Convention

Use Conventional Commit-style messages.

Examples:

```text
feat: implement homepage hero
feat: add Upland case study
fix: correct mobile navigation focus
docs: define portfolio architecture
test: add project navigation e2e coverage
chore: configure Angular application
```

---

# Implementation Roadmap

Recommended first implementation PRs:

```text
PR 01  Angular initialization
PR 02  Formatting / linting
PR 03  Design foundation
PR 04  App shell
PR 05  Theme
PR 06  Mobile navigation
PR 07  Content models
PR 08  Hero
PR 09  Professional snapshot
PR 10  Project cards
PR 11  Selected work
PR 12  Experience preview
PR 13  Engineering expertise
PR 14  Engineering principles
PR 15  AI workflow
PR 16  Credentials / contact
PR 17  Projects index
PR 18  Project detail infrastructure
PR 19  Upland case study
PR 20  MOJ case study
PR 21  SCEGA case study
PR 22  Experience page
PR 23  Engineering page
PR 24  About
PR 25  Contact / CV
PR 26  SEO
PR 27  Sitemap / robots
PR 28  Open Graph assets
PR 29  Unit / content tests
PR 30  Playwright
PR 31  Accessibility
PR 32  CI
PR 33  Cloudflare Pages
PR 34  Final launch polish
```

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for details.

---

# Current Project Status

```text
[x] Product Requirements
[x] Career / Portfolio Content
[x] Flagship Project Research
[x] Upland Case Study
[x] MOJ Case Study
[x] SCEGA Case Study
[x] Information Architecture
[x] Design System
[x] Technical Architecture
[x] Agent Rules
[x] Testing Strategy
[x] SEO Strategy
[x] Implementation Roadmap
[x] README

[x] Angular initialization
[x] UI implementation
[x] Runtime content
[x] Case-study rendering
[x] E2E
[x] CI/CD
[x] Cloudflare deployment
[ ] Production launch
```

---

# Getting Started

## Current State

The Angular application, automated tests, GitHub Actions quality pipeline, and Cloudflare Pages
Git deployment are implemented. Node `24.20.0` is pinned in `.nvmrc`.

---

# Development Commands

```bash
npm ci
npm start
npm run build
npm test
npm run lint
npm run test:e2e
```

Run `npm run quality` for the local formatting, lint, unit/component, and production-build gate.
Run `npm run test:e2e` for the Playwright browser suite.

---

# Definition of Done

A feature is complete when applicable:

- requirement satisfied;
- design system followed;
- responsive;
- accessible;
- public content accurate;
- no confidential information;
- relevant tests pass;
- production build passes;
- no console errors;
- no unexplained dependencies;
- documentation updated if architecture changed.

---

# MVP Scope

Version 1 ships with:

```text
Home
Experience
Projects
3 Flagship Case Studies
Engineering
About
Contact
CV
Light/Dark Theme
Responsive UI
SEO
Prerendering
Testing
CI
Cloudflare Deployment
```

Not required for v1:

```text
Blog
Analytics
Contact Form
CMS
Arabic Localization
HCWW Case Study
Mobil Case Study
Custom Backend
```

---

# Engineering Principle

The portfolio itself should demonstrate the same engineering judgment it describes.

> Senior engineering is not about maximizing complexity. It is about selecting the right level of complexity, designing clear boundaries, validating assumptions, delivering reliably, and making systems easier to understand and maintain.

---

## License / Content

This repository contains personal portfolio content and project case-study material.

Career content, written case studies, personal branding, and project narratives should not be reused as generic template content without permission.

Third-party product, company, and technology names remain the property of their respective owners.
