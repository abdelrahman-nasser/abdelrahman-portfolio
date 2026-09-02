# Abdelrahman Hegab Portfolio — Implementation Roadmap

**Document:** Implementation Roadmap  
**Status:** Ready for implementation planning  
**Owner:** Abdelrahman Hegab  
**Product:** Professional Engineering Portfolio  
**Framework:** Angular 22  
**Hosting:** Cloudflare Pages  
**Last Updated:** September 2026

---

# 1. Purpose

This roadmap turns the approved product, content, design, architecture, SEO, and testing documents into a practical implementation sequence.

The goal is to build the portfolio through:

- small pull requests;
- clear ownership;
- minimal architectural drift;
- easy AI-agent review;
- continuous validation;
- low-risk deployment.

This is intentionally not a "build everything in one branch" plan.

---

# 2. Source Documents

Implementation must follow:

```text
docs/PRD.md
docs/CONTENT.md
docs/INFORMATION-ARCHITECTURE.md
docs/DESIGN-SYSTEM.md
docs/ARCHITECTURE.md
docs/TESTING.md
docs/SEO.md
AGENTS.md
```

Approved project editorial sources:

```text
docs/case-studies/UPLAND-FILEBOUND-CASE-STUDY.md
docs/case-studies/MOJ-NLAWYERS-CASE-STUDY.md
docs/case-studies/SCEGA-CASE-STUDY.md
```

Do not implement directly from raw research analysis files.

---

# 3. Delivery Strategy

Use short-lived branches.

Recommended branch naming:

```text
feature/<scope>
fix/<scope>
docs/<scope>
chore/<scope>
```

Examples:

```text
feature/app-shell
feature/theme-system
feature/home-hero
feature/project-cards
feature/upland-case-study
fix/mobile-nav-focus
chore/configure-playwright
```

---

# 4. Pull Request Philosophy

Each PR should be:

- focused;
- reviewable;
- independently buildable;
- small enough for meaningful code review;
- testable;
- documented if it changes architecture.

Avoid combining:

```text
homepage + case studies + SEO + CI + deployment
```

into one PR.

---

# 5. Milestone Overview

Recommended implementation phases:

```text
Phase 0   Repository Readiness
Phase 1   Angular Initialization
Phase 2   Global Design Foundation
Phase 3   App Shell & Navigation
Phase 4   Theme System
Phase 5   Homepage Core
Phase 6   Homepage Evidence Sections
Phase 7   Projects Infrastructure
Phase 8   Upland Case Study
Phase 9   MOJ Case Study
Phase 10  SCEGA Case Study
Phase 11  Experience Page
Phase 12  Engineering Page
Phase 13  About / Contact / CV
Phase 14  SEO & Social Metadata
Phase 15  Testing & Accessibility
Phase 16  CI/CD
Phase 17  Cloudflare Deployment
Phase 18  Launch QA
Phase 19  Post-Launch Improvements
```

---

# 6. Phase 0 — Repository Readiness

## Goal

Make sure the repository documentation and structure are ready before application code exists.

## Tasks

- ensure all planning docs are committed;
- ensure `AGENTS.md` exists in repo root;
- ensure `.gitignore` is correct;
- ensure `README.md` placeholder/basic project description exists;
- ensure case-study docs are committed;
- verify no confidential research is accidentally in a public runtime path;
- verify repo branch is clean.

## Deliverable

Repository ready for Angular initialization.

## Suggested Commit

```text
docs: complete portfolio planning foundation
```

---

# 7. Phase 1 — Angular Initialization

## Branch

```text
chore/angular-initialization
```

## Goal

Create the Angular 22 application with the approved architecture.

## Tasks

Initialize with:

```text
Angular 22
routing
SCSS
standalone
strict
SSR/prerender support
existing Git repo
```

Then:

- verify Angular version;
- verify Node compatibility;
- commit `package-lock.json`;
- configure Node version pinning;
- verify production build;
- confirm static prerender setup;
- inspect generated output structure;
- remove unnecessary generated demo content;
- confirm app boots.

## Important

Do not add UI framework.

Do not add Tailwind.

Do not add state management.

## Validation

```text
npm ci
npm run build
```

## Deliverable

Minimal Angular application builds successfully.

## Suggested PR Title

```text
chore: initialize Angular portfolio application
```

---

# 8. Phase 2 — Formatting, Linting, Baseline Tooling

## Branch

```text
chore/code-quality
```

## Goal

Establish consistent code quality before feature implementation.

## Tasks

- configure Prettier;
- configure Angular-compatible ESLint if needed;
- add scripts:
  - format;
  - format:check;
  - lint;
- standardize EditorConfig;
- ensure TypeScript strict mode;
- verify no generated lint noise.

## Validation

```text
npm run format:check
npm run lint
npm run build
```

## Deliverable

Consistent formatting/lint baseline.

---

# 9. Phase 3 — Global Design Foundation

## Branch

```text
feature/design-foundation
```

## Goal

Implement the design tokens and global visual system.

## Tasks

Create:

```text
src/styles/_tokens.scss
src/styles/_reset.scss
src/styles/_typography.scss
src/styles/_layout.scss
src/styles/_utilities.scss
src/styles/styles.scss
```

Implement:

- brand colors;
- light theme variables;
- dark theme variables;
- spacing scale;
- radius scale;
- typography;
- content containers;
- focus styles;
- button primitive styles;
- basic links;
- section spacing.

## Do Not

- build homepage yet;
- introduce page-specific styles;
- add decorative animation.

## Validation

- light theme variables render;
- dark theme variables render;
- typography correct;
- focus style visible;
- no overflow.

## Suggested PR

```text
feat: implement portfolio design foundation
```

---

# 10. Phase 4 — App Shell

## Branch

```text
feature/app-shell
```

## Goal

Build the structural shell shared across all pages.

## Components

```text
AppShell
AppHeader
PageContainer
AppFooter
```

## Tasks

- semantic header;
- main landmark;
- footer;
- skip-to-content link;
- desktop navigation structure;
- placeholder routes;
- basic page container;
- footer links.

## Validation

- keyboard navigation;
- skip link works;
- route outlet works;
- semantic landmarks correct.

## Suggested PR

```text
feat: implement application shell
```

---

# 11. Phase 5 — Theme System

## Branch

```text
feature/theme-system
```

## Goal

Implement:

```text
System
Light
Dark
```

## Tasks

Create:

```text
ThemeService
ThemeToggle
theme models
storage abstraction
```

Implement:

- system preference;
- localStorage persistence;
- early theme initialization;
- theme attribute;
- accessible toggle.

## Tests

- theme resolution;
- persistence;
- system preference;
- storage failure fallback.

## Validation

- no obvious flash;
- theme persists after reload;
- works across routes;
- prerender build works.

## Suggested PR

```text
feat: add light and dark theme system
```

---

# 12. Phase 6 — Mobile Navigation

## Branch

```text
feature/mobile-navigation
```

## Goal

Finish responsive navigation before homepage work expands.

## Tasks

- menu toggle;
- accessible expanded state;
- mobile menu panel;
- Escape behavior;
- route-change close;
- touch targets;
- scroll locking if required;
- focus behavior.

## Tests

- open/close;
- route click closes;
- keyboard behavior;
- responsive Playwright smoke.

## Suggested PR

```text
feat: implement accessible mobile navigation
```

---

# 13. Phase 7 — Content Models

## Branch

```text
feature/content-models
```

## Goal

Create the typed public content layer.

## Create

```text
src/app/models/
src/app/content/
```

Models:

```text
Profile
ExperienceItem
ProjectCaseStudy
EngineeringChallenge
TechnologyTag
SeoMetadata
Credential
NavigationItem
```

Content:

```text
profile.content.ts
navigation.content.ts
experience.content.ts
skills.content.ts
credentials.content.ts
contact.content.ts
```

## Important

Use only approved public-safe data.

Do not add project research evidence.

## Tests

- unique slugs;
- required fields;
- content completeness.

## Suggested PR

```text
feat: add typed portfolio content model
```

---

# 14. Phase 8 — Homepage Hero

## Branch

```text
feature/home-hero
```

## Goal

Implement the first-screen experience.

## Content

```text
Abdelrahman Hegab
Senior Software Engineer
.NET & Angular · Software Architecture · Enterprise Systems
```

## Tasks

- hero layout;
- primary message;
- View My Work;
- Download CV;
- Contact;
- LinkedIn/GitHub links;
- responsive design;
- subtle background visual if approved.

## Do Not

- add typing animation;
- add tech logo cloud;
- add photo unless approved.

## Validation

- mobile;
- desktop;
- dark/light;
- keyboard;
- CTA routes.

---

# 15. Phase 9 — Professional Snapshot

## Branch

```text
feature/home-snapshot
```

## Goal

Add fast-scan career evidence.

## Cards

Suggested:

```text
10+ Years
Software Engineering

Nearly 5 Years
Upland FileBound

Core Stack
.NET + Angular

Experience
Enterprise · SaaS · Government
```

## Important

No animated counters.

No unsupported metrics.

## Suggested PR

```text
feat: add professional snapshot section
```

---

# 16. Phase 10 — Project Card System

## Branch

```text
feature/project-cards
```

## Goal

Build reusable selected-work cards before populating case studies.

## Component

```text
ProjectCard
```

Variants:

```text
featured
standard
```

## Tasks

- featured Upland card;
- standard MOJ/SCEGA cards;
- tags;
- engineering theme;
- CTA;
- conceptual visual slot;
- responsive layout.

## Tests

- card route;
- featured variant;
- tags;
- accessible link.

## Suggested PR

```text
feat: add selected project card system
```

---

# 17. Phase 11 — Homepage Selected Work

## Branch

```text
feature/home-selected-work
```

## Goal

Render the three flagship projects.

Order:

```text
1. Upland FileBound
2. MOJ Lawyer Licensing
3. SCEGA Event Licensing
```

## Layout

Desktop:

```text
Upland featured full-width / large
MOJ + SCEGA side by side
```

Mobile:

```text
stacked
```

## Validation

- exact order;
- routes correct;
- no internal project details;
- no timeline inconsistencies.

---

# 18. Phase 12 — Homepage Experience Preview

## Branch

```text
feature/home-experience
```

## Goal

Show career progression concisely.

## Tasks

- timeline component;
- company;
- role;
- period;
- short context;
- link to full Experience page.

## Important

Do not duplicate full CV bullets.

---

# 19. Phase 13 — Engineering Expertise

## Branch

```text
feature/home-engineering-expertise
```

## Categories

```text
Backend
Frontend
Architecture
Data
Delivery
Quality
```

## Tasks

- reusable expertise cards;
- concise descriptions;
- technology lists;
- responsive grid.

## Do Not

- use percentage bars;
- use star ratings;
- use huge logo grids.

---

# 20. Phase 14 — How I Engineer

## Branch

```text
feature/home-engineering-principles
```

## Principles

```text
Architecture with Purpose
End-to-End Ownership
Production Matters
Maintainability Scales Teams
```

Optional:

```text
Collaboration
```

## Tasks

- principle-card component;
- numbered visual treatment;
- concise copy.

---

# 21. Phase 15 — AI-Augmented Engineering

## Branch

```text
feature/home-ai-engineering
```

## Goal

Show AI-assisted workflow professionally.

## Flow

```text
Requirements
→ Analysis
→ Architecture
→ Task Breakdown
→ AI Assistance
→ Validation
→ Human Review
→ CI/CD
```

## Important

Focus on engineering process.

Do not center vendor logos.

Do not position as AI Engineer.

---

# 22. Phase 16 — Credentials & Contact CTA

## Branch

```text
feature/home-credentials-contact
```

## Tasks

- credentials section;
- Microsoft certifications;
- education reference where appropriate;
- contact CTA;
- email;
- LinkedIn;
- GitHub;
- CV.

## Validation

- links correct;
- no private email aliases;
- mobile layout.

---

# 23. Phase 17 — Homepage Completion Review

## Branch

No new feature branch required if handled through review/fixes.

## Goal

Review full homepage as a recruiter.

## Checklist

- can identity be understood in 5 seconds?
- are flagship projects visible quickly?
- is Upland visually primary?
- is content concise?
- are CTAs clear?
- does mobile feel intentional?
- does dark mode feel polished?
- no duplicate wording?
- no weak/fake metrics?

Only after homepage feels coherent should deep pages proceed.

---

# 24. Phase 18 — Projects Index

## Branch

```text
feature/projects-index
```

## Goal

Create `/projects`.

## Tasks

- page hero;
- three project cards;
- consistent content;
- SEO metadata;
- link to each case study.

No filters.

No categories UI needed for three projects.

---

# 25. Phase 19 — Project Detail Infrastructure

## Branch

```text
feature/project-detail-infrastructure
```

## Goal

Build the shared case-study renderer.

## Components

```text
ProjectHero
ProjectMetadata
ChallengeBlock
TechnologyGroup
DecisionCallout
ArchitectureDiagram
NextProjectNav
```

## Routing

```text
/projects/:slug
```

## Tasks

- slug resolver/helper;
- unknown slug handling;
- shared layout;
- previous/next navigation;
- SEO integration hook.

## Tests

- valid slug;
- invalid slug;
- order;
- previous/next.

---

# 26. Phase 20 — Upland Content Model

## Branch

```text
feature/upland-content
```

## Goal

Convert approved Upland case-study editorial copy into typed runtime content.

## Important

Use only:

```text
approved public-safe case study
```

Do not pull from raw FileBound research automatically.

## Content

- overview;
- role;
- architecture;
- challenges;
- stack;
- lessons;
- SEO.

---

# 27. Phase 21 — Upland Case Study UI

## Branch

```text
feature/upland-case-study
```

## Goal

Implement flagship case study first.

## Emphasis

```text
Mature SaaS
Production engineering
Workflow
Integrations
Security
Performance
```

## Visual

Create public-safe conceptual architecture diagram.

## Validation

- mobile architecture;
- no internal repo/ticket names;
- no unsupported metrics;
- nearly-five-year wording preserved accurately.

---

# 28. Phase 22 — MOJ Content Model

## Branch

```text
feature/moj-content
```

## Goal

Convert approved MOJ case study into runtime data.

## Emphasis

```text
Government licensing
Full-stack
Integration engineering
Security
Reusable frontend architecture
```

## Guardrails

Do not expose:

- internal system names where case study says generic;
- endpoints;
- internal packages;
- private government topology.

---

# 29. Phase 23 — MOJ Case Study UI

## Branch

```text
feature/moj-case-study
```

## Key Stories

- enterprise licensing integration;
- auditability;
- route-guard architecture;
- secure cross-system redirect;
- full-stack contributions.

## Timeline

Do not display unresolved project duration.

---

# 30. Phase 24 — SCEGA Content Model

## Branch

```text
feature/scega-content
```

## Goal

Convert approved SCEGA case study into runtime data.

## Emphasis

```text
Angular architecture
Reusable infrastructure
ConfigStepper
FileUpload
Full-stack
AD → JWT
CQRS
```

## Guardrails

Never describe SCEGA as:

```text
Micro Frontends
Module Federation
Microservices
```

---

# 31. Phase 25 — SCEGA Case Study UI

## Branch

```text
feature/scega-case-study
```

## Visual

Architecture should clearly show:

```text
Public Angular SPA
        ↓
.NET API
        ↓
Data / integrations
```

Separate staff app may be shown as context but not as work owned by Abdelrahman.

## Timeline

Do not display unresolved contribution dates.

---

# 32. Phase 26 — Experience Page

## Branch

```text
feature/experience-page
```

## Route

```text
/experience
```

## Content

- professional intro;
- career timeline;
- role summaries;
- technical progression;
- related project links;
- leadership/collaboration evidence;
- CV CTA.

## Important

Do not duplicate CV verbatim.

---

# 33. Phase 27 — Engineering Page

## Branch

```text
feature/engineering-page
```

## Route

```text
/engineering
```

## Sections

```text
Backend Engineering
Frontend Engineering
Architecture
Data & Performance
Integrations
Testing & Quality
Delivery & Production
Technical Leadership
AI-Augmented Engineering
```

## Key Rule

Use case studies as evidence.

Do not create generic "expert in everything" claims.

---

# 34. Phase 28 — About Page

## Branch

```text
feature/about-page
```

## Route

```text
/about
```

## Narrative

```text
Technology training
→ Software development
→ Enterprise systems
→ Mature SaaS
→ Government digital services
→ Architecture / AI-assisted workflow
```

Professional, not overly personal.

---

# 35. Phase 29 — Contact Page

## Branch

```text
feature/contact-page
```

## Route

```text
/contact
```

## Content

- email;
- LinkedIn;
- GitHub;
- location;
- CV;
- opportunity statement.

No backend.

No CAPTCHA.

No form.

---

# 36. Phase 30 — CV Page

## Branch

```text
feature/cv-page
```

## Route

```text
/cv
```

## Tasks

- View CV;
- Download CV;
- verify actual PDF;
- stable file path;
- metadata.

## Asset

```text
public/cv/Abdelrahman-Hegab-CV.pdf
```

---

# 37. Phase 31 — 404 Page

## Branch

```text
feature/not-found-page
```

## Tasks

- clear message;
- Back Home;
- View Projects;
- metadata/noindex if appropriate;
- direct static-host behavior.

---

# 38. Phase 32 — SEO Infrastructure

## Branch

```text
feature/seo-infrastructure
```

## Tasks

Implement:

```text
SeoMetadata
SeoService
canonical handling
OG handling
Twitter card metadata
Person JSON-LD
```

## Validation

- prerendered metadata;
- project-specific metadata;
- 404 metadata.

---

# 39. Phase 33 — Sitemap & Robots

## Branch

```text
feature/sitemap-robots
```

## Tasks

- `scripts/generate-sitemap.mjs`;
- sitemap generation;
- robots file;
- canonical base config;
- production placeholder validation.

## Tests

- expected routes;
- valid project slugs;
- no `/docs/`.

---

# 40. Phase 34 — Open Graph Assets

## Branch

```text
feature/open-graph-assets
```

## Required

```text
home.png
upland-filebound.png
moj-lawyer-licensing.png
scega-event-licensing.png
```

Optional:

```text
projects.png
experience.png
engineering.png
```

## Style

Follow Design System.

No screenshots of private systems.

---

# 41. Phase 35 — Unit / Content Test Foundation

## Branch

```text
test/unit-foundation
```

## Tasks

- verify Vitest setup;
- add content validation;
- project slug tests;
- theme tests;
- SEO helper tests;
- confidentiality scanning;
- runtime/docs import guard.

---

# 42. Phase 36 — Playwright Setup

## Branch

```text
test/playwright-setup
```

## Tasks

- install Playwright;
- config;
- baseURL;
- static preview server workflow;
- smoke tests.

## Initial Tests

```text
home
navigation
projects
theme
404
```

---

# 43. Phase 37 — Accessibility Automation

## Branch

```text
test/accessibility
```

## Tasks

Potential:

```text
@axe-core/playwright
```

Scan representative pages.

## Manual

Document manual accessibility checklist.

---

# 44. Phase 38 — Responsive E2E

## Branch

```text
test/responsive
```

## Viewports

```text
390
768
1440
```

## Checks

- no horizontal overflow;
- project layout;
- mobile nav;
- tags wrap;
- diagrams fit.

---

# 45. Phase 39 — CI

## Branch

```text
chore/github-actions-ci
```

## Workflow

```text
npm ci
format check
lint
unit tests
production build
Playwright critical suite
```

## Required Checks

Configure once stable.

## Do Not

disable tests to get CI green.

Fix root causes.

---

# 46. Phase 40 — Cloudflare Pages Setup

## Branch

```text
chore/cloudflare-pages
```

## Tasks

- connect GitHub repo;
- production branch `main`;
- build command;
- verify output directory from real Angular build;
- preview deployments;
- test deep links;
- test 404;
- test asset paths.

## Do Not

guess output directory.

Verify it.

---

# 47. Phase 41 — Preview Deployment Review

## Goal

Review the portfolio as an external visitor.

## Recruiter Review

Questions:

- Who is this person?
- What is his seniority?
- What does he build?
- What are his strongest projects?
- How do I contact him?

## Engineering Manager Review

Questions:

- Does he show architecture depth?
- Does he show production ownership?
- Does he distinguish contribution from system capability?
- Are technical stories credible?

---

# 48. Phase 42 — Lighthouse & Performance

## Tasks

Run Lighthouse on:

```text
homepage
Upland case study
SCEGA case study
```

Review:

- LCP;
- CLS;
- JS;
- CSS;
- fonts;
- images.

## Target

```text
95+
```

where realistic without harming UX.

---

# 49. Phase 43 — Cross-Browser QA

Before launch:

```text
Chromium
Firefox
WebKit
```

Critical flows only.

Focus on:

- navigation;
- theme;
- layouts;
- architecture diagrams;
- CV;
- mobile behavior.

---

# 50. Phase 44 — Manual Accessibility QA

Perform:

- keyboard-only navigation;
- focus review;
- screen reader smoke;
- 200% zoom;
- reduced motion;
- light/dark contrast;
- heading review.

Fix blockers before launch.

---

# 51. Phase 45 — Confidentiality Release Audit

This is mandatory.

Search production runtime/build for:

- internal email domains;
- private repo URLs;
- Azure DevOps URLs;
- internal endpoints;
- connection strings;
- private keys;
- client secrets;
- internal PR/ticket IDs.

Review every case study manually.

No release if confidential content is detected.

---

# 52. Phase 46 — Final Content Review

Review:

- spelling;
- grammar;
- company names;
- role names;
- project names;
- links;
- CV;
- metadata.

Check that no AI-generated exaggeration slipped into public content.

---

# 53. Phase 47 — Production Launch

## Requirements

- custom domain optional;
- Pages production URL acceptable initially;
- CI green;
- E2E green;
- prerender green;
- metadata correct;
- robots correct;
- sitemap correct;
- CV works;
- OG works.

## Launch

Merge final release changes to:

```text
main
```

Cloudflare Pages deploys.

---

# 54. Phase 48 — Search Setup

After launch:

- Google Search Console;
- submit sitemap;
- inspect homepage;
- inspect 3 case studies;
- verify indexing;
- optionally Bing Webmaster Tools.

---

# 55. Phase 49 — Professional Profile Integration

After stable production URL exists:

Update:

- GitHub profile;
- LinkedIn;
- CV;
- job applications;
- optional email signature.

---

# 56. Phase 50 — Domain

If custom domain was deferred:

Research/buy after site is visually ready.

Then:

- connect to Cloudflare;
- set canonical;
- regenerate sitemap;
- update OG;
- redirect Pages hostname if appropriate;
- update Search Console;
- update GitHub/LinkedIn/CV.

---

# 57. Phase 51 — Post-Launch Monitoring

First month:

- indexing;
- broken links;
- mobile issues;
- Cloudflare errors;
- Core Web Vitals;
- recruiter feedback;
- case-study engagement qualitatively.

Do not add analytics immediately unless needed.

---

# 58. Future Phase — HCWW Case Study

Not required for v1.

Process:

```text
repo analysis
→ engineering research Markdown
→ confirmation
→ public-safe case study
→ runtime content
```

Only add if it strengthens the portfolio beyond the current three projects.

---

# 59. Future Phase — Mobil Case Study

Same process.

Useful if it adds a distinct technical story.

Do not add simply to increase project count.

---

# 60. Future Phase — Engineering Notes

Potential:

```text
/notes
```

Topics could include:

- Angular architecture;
- .NET API design;
- AI-agent workflows;
- integration reliability;
- architecture tradeoffs.

Do not launch a blog with low-quality AI-generated filler.

---

# 61. Future Phase — Analytics

If needed later:

- privacy-first tool;
- small script;
- clear purpose.

Questions should drive analytics.

Example:

```text
Are visitors opening project case studies?
Which case study receives most engagement?
```

Not:

```text
collect everything because analytics exists.
```

---

# 62. Future Phase — Contact Form

Only if direct email/LinkedIn proves insufficient.

Prefer isolated serverless function.

Do not introduce full backend.

---

# 63. Future Phase — CMS

Only if content volume/maintenance genuinely requires it.

Current typed content model is preferred.

A CMS would require architecture review.

---

# 64. Future Phase — Localization

Arabic version is optional future scope.

Would require:

- translation review;
- routes;
- hreflang;
- RTL;
- localized metadata.

Do not machine-translate blindly.

---

# 65. Recommended PR Sequence

Practical initial sequence:

```text
PR 01 — Angular initialization
PR 02 — Formatting / linting
PR 03 — Design foundation
PR 04 — App shell
PR 05 — Theme
PR 06 — Mobile navigation
PR 07 — Content models
PR 08 — Hero
PR 09 — Snapshot
PR 10 — Project cards
PR 11 — Selected work
PR 12 — Experience preview
PR 13 — Expertise
PR 14 — Engineering principles
PR 15 — AI workflow
PR 16 — Credentials/contact
PR 17 — Projects index
PR 18 — Project detail infrastructure
PR 19 — Upland
PR 20 — MOJ
PR 21 — SCEGA
PR 22 — Experience page
PR 23 — Engineering page
PR 24 — About
PR 25 — Contact/CV
PR 26 — SEO
PR 27 — Sitemap/robots
PR 28 — OG assets
PR 29 — Unit/content tests
PR 30 — Playwright
PR 31 — Accessibility
PR 32 — CI
PR 33 — Cloudflare
PR 34 — Launch fixes
```

This is guidance, not a mandatory PR count.

Closely related work may be combined if the PR stays reviewable.

---

# 66. MVP Definition

The portfolio is MVP-complete when:

```text
Home
Experience
Projects
3 flagship case studies
Engineering
About
Contact
CV
Light/Dark
Responsive
SEO
Prerender
Testing
CI
Cloudflare deployment
```

are complete.

---

# 67. MVP Does Not Require

- custom domain;
- blog;
- analytics;
- contact form;
- Arabic;
- HCWW;
- Mobil;
- CMS;
- portrait;
- testimonial section.

Do not delay launch for these.

---

# 68. Launch Priority

Priority:

```text
Accuracy
↓
Content
↓
Usability
↓
Technical quality
↓
Visual polish
↓
Optional extras
```

Never reverse this.

---

# 69. AI Agent Work Allocation

## ChatGPT

Use for:

- product decisions;
- content review;
- case-study editorial work;
- architecture review;
- recruiter review;
- technical-manager review.

## Codex

Use for:

- Angular implementation;
- refactoring;
- tests;
- build fixes;
- CI;
- scripts.

## Antigravity

Use for:

- browser QA;
- responsive review;
- visual iteration;
- accessibility workflows;
- preview validation.

## Kiro / Repository Analysis Agent

Use for:

- historical project code analysis;
- Git evidence;
- architecture reconstruction;
- research Markdown generation.

---

# 70. Agent Handoff Template

Each implementation task should give the agent:

```text
Goal
Scope
Relevant docs
Files likely involved
Acceptance criteria
Tests required
Explicit non-goals
```

Example:

```text
Goal:
Implement the homepage hero.

Read:
AGENTS.md
docs/DESIGN-SYSTEM.md
docs/INFORMATION-ARCHITECTURE.md

Scope:
Hero only.

Acceptance:
Responsive, dark/light, accessible, correct CTAs.

Do not:
Modify project cards, add animation library, change content facts.
```

---

# 71. Task Size Guidance

Good task:

```text
Implement ThemeService and ThemeToggle.
```

Too broad:

```text
Build the whole design system, homepage, dark mode, projects and SEO.
```

---

# 72. Definition of Done Per PR

Every implementation PR should satisfy:

- scope complete;
- relevant docs followed;
- tests pass;
- build passes;
- mobile checked;
- dark/light checked if UI;
- no console errors;
- no new dependency without approval;
- no confidential content;
- focused diff.

---

# 73. Architecture Drift Check

Before merging a PR ask:

```text
Did this introduce:
backend?
state library?
UI framework?
Tailwind?
runtime SSR?
new architecture pattern?
```

If yes and not approved:

do not merge.

---

# 74. Content Drift Check

Before merging public content:

```text
Did any:
date
role
metric
technology
team size
project ownership
leadership claim
```

change?

If yes:

manually review against approved sources.

---

# 75. Visual Drift Check

Before merging UI:

- correct brand blue;
- Inter;
- spacing scale;
- radius;
- borders;
- restrained shadows;
- no random colors;
- no excessive cards;
- no decorative tech-logo clutter.

---

# 76. Accessibility Drift Check

Before merging:

- semantic control;
- focus;
- keyboard;
- contrast;
- mobile target size;
- heading hierarchy.

---

# 77. Performance Drift Check

Before merging dependencies/features:

- bundle impact;
- asset size;
- no unnecessary JS;
- no blocking third-party script.

---

# 78. Suggested First Coding Session

Once all docs are complete:

```text
1. Pull main
2. Verify clean working tree
3. Create branch:
   chore/angular-initialization
4. Initialize Angular 22
5. Verify Node
6. Build
7. Commit package-lock
8. Remove starter content
9. Push branch
10. Open PR
```

Do not start Hero work in the initialization PR.

---

# 79. Suggested Second Coding Session

```text
feature/design-foundation
```

Implement only:

- tokens;
- reset;
- typography;
- layout;
- global focus.

No homepage yet.

---

# 80. Suggested Third Coding Session

```text
feature/app-shell
```

Implement:

- header;
- nav;
- footer;
- router shell;
- skip link.

---

# 81. Suggested Fourth Coding Session

```text
feature/theme-system
```

Then proceed feature by feature.

---

# 82. Completion Criteria for Planning Phase

Planning is complete when the repository contains:

```text
docs/PRD.md
docs/CONTENT.md
docs/INFORMATION-ARCHITECTURE.md
docs/DESIGN-SYSTEM.md
docs/ARCHITECTURE.md
docs/TESTING.md
docs/SEO.md
docs/ROADMAP.md
AGENTS.md
README.md
```

plus approved project case studies.

After that:

```text
STOP PLANNING
START IMPLEMENTING
```

unless a new material requirement appears.

---

# 83. Roadmap Governance

This roadmap is guidance, not bureaucracy.

It may change when implementation reveals a better sequence.

However:

- architecture changes require explicit review;
- public content changes require factual review;
- major scope additions should not silently enter v1.

---

# 84. Success Criteria

The project is successful when a recruiter can quickly understand:

```text
Senior Software Engineer
.NET + Angular
10+ years
Enterprise SaaS
Government Digital Services
Architecture
Production experience
```

and an engineering manager can open the case studies and see credible evidence of:

- technical ownership;
- system thinking;
- integration experience;
- frontend architecture;
- backend depth;
- production engineering;
- security awareness;
- code quality;
- reusable infrastructure.

---

# 85. Final Roadmap Principle

The portfolio should be built the same way a strong product would be built:

> Define the product, lock the architecture, establish quality foundations, implement in small slices, validate continuously, and ship before optional complexity grows.

Do not turn the portfolio itself into a mega-project that never launches.
