# AGENTS.md — Abdelrahman Hegab Portfolio

**Applies to:** All AI coding agents and automated engineering tools working in this repository  
**Repository:** `abdelrahman-portfolio`  
**Owner:** Abdelrahman Hegab  
**Last Updated:** September 2026

---

# 1. Purpose

This file defines mandatory engineering, architecture, content, security, design, and workflow rules for every AI agent that modifies this repository.

Agents must treat this file as an implementation contract.

The project is a professional engineering portfolio for:

> Abdelrahman Hegab — Senior Software Engineer

Primary positioning:

> .NET & Angular | Software Architecture | Enterprise & SaaS Systems

The portfolio itself should demonstrate senior engineering judgment through:

- simplicity;
- maintainability;
- accessibility;
- performance;
- testing;
- clear architecture;
- disciplined delivery;
- accurate technical storytelling.

---

# 2. Mandatory Source Documents

Before making meaningful implementation changes, read the relevant documents:

```text
docs/PRD.md
docs/CONTENT.md
docs/INFORMATION-ARCHITECTURE.md
docs/DESIGN-SYSTEM.md
docs/ARCHITECTURE.md
docs/TESTING.md
docs/SEO.md
docs/ROADMAP.md
```

Also read approved public case studies under:

```text
docs/case-studies/
```

Do not treat raw research/analysis documents as publishable content.

If documents conflict, prefer:

```text
1. Explicit latest user instruction
2. AGENTS.md
3. ARCHITECTURE.md
4. DESIGN-SYSTEM.md
5. INFORMATION-ARCHITECTURE.md
6. PRD.md
7. CONTENT.md
8. Other documentation
```

If a conflict materially affects product behavior or public career claims, stop and ask for clarification.

---

# 3. Core Rule: Do Not Invent Career Facts

Never invent or embellish:

- job titles;
- employment dates;
- project dates;
- team sizes;
- responsibilities;
- technologies;
- architecture ownership;
- performance metrics;
- user counts;
- transaction counts;
- revenue;
- uptime;
- deployment scale;
- leadership responsibility;
- code-review counts;
- customer/client names;
- certifications.

If a fact is uncertain:

```text
DO NOT GUESS
```

Use only content already approved in public-safe project/career documents.

---

# 4. Confidentiality Boundary

The repository may contain internal research material.

Never publish internal-only details into runtime content.

Do not expose:

- internal ticket IDs;
- PR numbers used only as research evidence;
- internal repo names/URLs;
- private email addresses;
- employee email aliases;
- customer/tenant names not approved;
- tokens;
- secrets;
- API keys;
- credentials;
- connection strings;
- internal endpoint paths;
- private IP addresses;
- private DNS names;
- database names;
- government operational thresholds;
- proprietary source code;
- internal architecture diagrams;
- confidential user/citizen data;
- private package feeds;
- internal AD group identifiers;
- signing keys.

Research content is not automatically public content.

---

# 5. Public Content Rule

Only approved public-safe content may be rendered in the website.

Preferred runtime source:

```text
src/app/content/
```

Detailed editorial sources:

```text
docs/case-studies/
```

Agents must never automatically transform all `docs/` content into live website content.

Before publishing a new claim, verify that it exists in approved content.

---

# 6. Architecture Summary

Approved v1 architecture:

```text
Angular 22
TypeScript
Standalone components
Angular Router
Build-time prerendering
Static output
SCSS
Semantic CSS design tokens
Signals for small UI state
Playwright
GitHub Actions
Cloudflare Pages
```

Explicit non-goals:

```text
No runtime SSR server
No backend
No CMS
No database
No authentication
No NgRx
No Tailwind
No Angular Material
No PrimeNG
No NG-ZORRO
No Bootstrap
No microservices
No unnecessary state-management library
No unnecessary animation library
```

Do not violate these decisions without explicit approval.

---

# 7. Dependency Policy

Do not add a dependency merely because it makes implementation easier.

Before adding any package, verify:

1. Angular/platform APIs cannot solve the problem cleanly.
2. The package is actively maintained.
3. Bundle impact is justified.
4. The capability is genuinely required.
5. The package does not duplicate existing functionality.
6. The dependency will remain useful long-term.

Agents must not silently install packages.

If a new runtime package is needed, explain why before adding it.

---

# 8. Angular Version

Use:

```text
Angular 22
```

Use the currently installed Angular 22 minor/patch version.

Do not upgrade the Angular major version without explicit approval.

Do not downgrade Angular.

---

# 9. Angular Style

Use modern Angular patterns.

Prefer:

- standalone components;
- standalone route configuration;
- lazy-loaded page components;
- strict typing;
- signals for simple shared UI state;
- Angular Router;
- semantic templates.

Avoid:

- unnecessary NgModules;
- giant components;
- inheritance-heavy component hierarchies;
- service classes with no real service responsibility;
- mutable global state;
- `any` unless absolutely unavoidable.

---

# 10. TypeScript Rules

Required:

- strict typing;
- explicit meaningful interfaces/types;
- readonly data where practical;
- no unnecessary `any`;
- no unsafe type assertions to silence compiler errors;
- no duplicated model definitions;
- no broad `unknown as X` casts unless justified.

Prefer:

```text
small interfaces
clear domain names
discriminated unions where useful
```

Do not over-engineer type systems.

---

# 11. Folder Structure

Expected:

```text
src/app/
├── core/
├── layout/
├── shared/
├── features/
├── content/
├── models/
└── app.routes.ts
```

Styles:

```text
src/styles/
├── _tokens.scss
├── _reset.scss
├── _typography.scss
├── _layout.scss
├── _utilities.scss
└── styles.scss
```

Public:

```text
public/
├── cv/
├── images/
├── icons/
└── og/
```

Do not create random top-level folders.

---

# 12. `core/` Rules

Use `core/` only for application-wide technical infrastructure.

Examples:

- theme;
- SEO;
- navigation helpers;
- configuration.

Do not put:

- project cards;
- experience content;
- case-study UI;
- career content;

inside `core/`.

---

# 13. `shared/` Rules

Shared components must be truly reusable.

Examples:

- Button
- Tag
- SectionHeader
- ProjectCard
- Timeline
- ArchitectureDiagram
- ChallengeBlock

Do not move a component into `shared/` merely because it might hypothetically be reused someday.

---

# 14. `features/` Rules

Features correspond to pages or product sections.

Expected:

```text
home
experience
projects
engineering
about
contact
cv
not-found
```

Each feature should own only feature-specific presentation.

---

# 15. Content Separation

Career/project content must not be hard-coded repeatedly in templates.

Use:

```text
src/app/content/
```

Examples:

```text
profile.content.ts
experience.content.ts
projects/upland-filebound.content.ts
```

Components render structured data.

Do not make project pages giant strings embedded inside component classes.

---

# 16. Content Model Rules

Content models should remain simple.

Do not build:

- custom rich-text engines;
- arbitrary JSON CMS schemas;
- runtime Markdown parsing;
- plugin systems.

The portfolio has a small fixed content domain.

Prefer typed structured objects.

---

# 17. Research vs Published Content

Files like:

```text
docs/case-studies/
docs/portfolio-analysis/
```

may contain deeper/internal evidence.

Live content should be manually curated.

Never expose:

```text
internal-only
do-not-publish
confidential
```

material.

---

# 18. Routing Rules

Approved routes:

```text
/
/experience
/projects
/projects/upland-filebound
/projects/moj-lawyer-licensing
/projects/scega-event-licensing
/engineering
/about
/contact
/cv
```

Unknown route:

```text
404
```

Do not invent extra major pages without approval.

---

# 19. Route Loading

Page-level routes should use lazy loading where reasonable:

```ts
loadComponent: () => import(...)
```

Do not lazy-load tiny shared components.

---

# 20. Rendering Rules

The site uses static prerendering.

All code must be compatible with build-time rendering.

Do not access browser-only globals at module initialization.

Unsafe examples:

```ts
const theme = localStorage.getItem(...);
const width = window.innerWidth;
```

without browser protection.

Handle:

- `window`;
- `document`;
- `localStorage`;
- `matchMedia`;

safely.

---

# 21. Runtime Server Rule

Do not add:

- Express server;
- ASP.NET backend;
- Node API;
- database;
- API routes;

for v1.

The production site is static.

---

# 22. Theme Rules

Support:

```text
system
light
dark
```

Use semantic CSS variables.

Do not hardcode theme colors throughout components.

Theme preference may persist in:

```text
localStorage
```

Theme initialization must avoid noticeable flash where practical.

---

# 23. Styling Rules

Use:

```text
SCSS
CSS custom properties
semantic design tokens
```

Do not introduce:

- Tailwind;
- Bootstrap;
- Material;
- PrimeNG;
- NG-ZORRO.

Do not use inline styles unless there is a strong technical reason.

Do not use arbitrary colors in components.

---

# 24. Design Tokens

Use semantic tokens such as:

```text
--color-bg-page
--color-bg-surface
--color-text-primary
--color-text-secondary
--color-border
--color-primary
```

Do not scatter hex values across components.

---

# 25. Brand Color

Primary brand:

```text
#004F90
```

Do not replace the brand color without approval.

Dark mode may use a lighter semantic primary token for contrast.

---

# 26. Typography

Primary web font:

```text
Inter
```

Monospace only for technical elements.

Do not use decorative fonts.

---

# 27. Visual Style

The site should feel:

```text
professional
modern
technical
calm
senior
```

Avoid:

- cyberpunk;
- neon;
- terminal-only design;
- typing effects;
- rotating titles;
- parallax;
- 3D tilt;
- particle backgrounds;
- mouse-follow effects;
- giant animated skill bars;
- animated counters.

---

# 28. Motion

Use subtle motion only.

Allowed:

- hover transitions;
- theme transitions;
- small section reveals;
- menu transition.

Respect:

```text
prefers-reduced-motion
```

Do not add animation libraries without approval.

---

# 29. Project Visuals

Project pages use recreated conceptual architecture visuals.

Do not use:

- screenshots of private systems;
- screenshots of internal admin panels;
- confidential architecture diagrams.

Architecture visuals must be public-safe abstractions.

---

# 30. Accessibility

Accessibility is mandatory.

Every feature must support:

- semantic HTML;
- keyboard navigation;
- visible focus;
- logical headings;
- sufficient contrast;
- accessible links;
- touch-friendly controls;
- reduced motion;
- responsive zoom.

Do not use clickable `<div>` elements when semantic buttons/links exist.

---

# 31. Heading Rules

One meaningful H1 per page.

Use logical hierarchy:

```text
H1
H2
H3
H4
```

Do not select heading level based only on visual size.

---

# 32. Mobile Navigation

Must be:

- keyboard accessible;
- screen-reader understandable;
- closable with Escape where appropriate;
- closed after navigation;
- controlled by semantic button;
- no inaccessible hover-only behavior.

---

# 33. Focus

Never remove focus outlines without an accessible replacement.

Use:

```text
:focus-visible
```

with clear brand-aligned focus state.

---

# 34. Performance

Targets:

```text
Performance 95+
Accessibility 95+
Best Practices 95+
SEO 95+
```

Do not sacrifice UX just to game Lighthouse.

Avoid:

- huge images;
- unnecessary JavaScript;
- large dependency bundles;
- blocking fonts;
- duplicated CSS;
- runtime API requests for static content.

---

# 35. Image Rules

All images require:

- appropriate dimensions;
- alt text if meaningful;
- empty alt if purely decorative;
- lazy loading below fold where suitable;
- optimized format.

Do not add massive unoptimized PNG/JPEG assets.

---

# 36. SEO

Every major page requires:

- unique title;
- meta description;
- canonical URL;
- Open Graph metadata.

Project pages require project-specific metadata.

Do not duplicate the same page title across every route.

---

# 37. Structured Data

Homepage may include:

```text
Person JSON-LD
```

Do not publish private or unsupported details.

---

# 38. CV

Approved path:

```text
public/cv/Abdelrahman-Hegab-CV.pdf
```

Do not rename casually.

Links must work on mobile and desktop.

---

# 39. Contact

Version 1 uses:

- email;
- LinkedIn;
- GitHub;
- CV.

Do not build a contact backend or form unless explicitly requested.

---

# 40. Testing

Before completing a feature, run applicable checks.

Expected categories:

- unit;
- component/integration;
- Playwright E2E;
- production build.

Do not add pointless tests solely to inflate coverage.

---

# 41. Test Philosophy

Test behavior that can fail.

Good examples:

- project route resolution;
- mobile navigation;
- theme persistence;
- CV link;
- project navigation;
- slug validation;
- SEO metadata generation.

Bad example:

```text
expect(component).toBeTruthy()
```

as the only meaningful test.

---

# 42. Playwright

Critical E2E flows:

- homepage loads;
- navigation works;
- mobile menu works;
- projects open;
- previous/next project navigation works;
- theme works;
- theme persists;
- CV link works;
- social links exist;
- contact email works;
- 404 works.

---

# 43. Build Must Pass

A task is not complete if:

```text
npm run build
```

fails.

Do not leave:

- TypeScript errors;
- template errors;
- broken imports;
- route errors;
- prerender failures.

---

# 44. Linting

If linting is configured, it must pass.

Do not disable lint rules globally to avoid fixing real issues.

If a lint rule is inappropriate, explain why before changing configuration.

---

# 45. Formatting

Follow repository Prettier/formatting rules.

Do not reformat unrelated files unnecessarily.

Keep diffs focused.

---

# 46. Git Workflow

Use short-lived branches.

Examples:

```text
feature/app-shell
feature/home-hero
feature/project-cards
feature/upland-case-study
fix/mobile-navigation
docs/update-seo
```

Avoid long-lived feature megabranches.

---

# 47. Commit Style

Use Conventional Commit-style messages.

Examples:

```text
feat: implement homepage hero
feat: add SCEGA project page
fix: correct dark theme contrast
docs: update architecture rules
test: add mobile navigation e2e coverage
chore: configure prettier
```

---

# 48. Pull Requests

Meaningful implementation should use PRs once CI is configured.

PRs should be:

- small enough to review;
- single-purpose;
- clearly described;
- tested.

Do not combine unrelated refactors with feature work.

---

# 49. PR Description

Include:

```text
What changed
Why
Testing performed
Screens / visual notes if UI
Architecture impact
Dependencies added
Known limitations
```

If no architecture impact:

```text
Architecture impact: none
```

---

# 50. Dependency Changes in PRs

Any new dependency must be called out explicitly.

Include:

```text
Dependency
Reason
Runtime/dev-only
Alternative considered
```

---

# 51. Documentation Updates

Update documentation when a change affects:

- architecture;
- route structure;
- design tokens;
- SEO;
- testing strategy;
- hosting;
- dependency policy;
- content model.

Do not update docs for trivial implementation details.

---

# 52. Agent Task Discipline

Do not respond to a broad request like:

```text
"Build the whole portfolio"
```

by modifying the entire site at once.

Break work into small implementation units.

Recommended sequence:

```text
app initialization
global styles
app shell
header
footer
theme
hero
snapshot
project cards
experience
engineering
AI section
credentials
contact
case studies
SEO
testing
deployment
```

---

# 53. Do Not Redesign Unasked Areas

When implementing a specific task:

```text
change only what is required
```

Do not use a small task as permission to redesign:

- unrelated pages;
- typography;
- navigation;
- project content;
- architecture.

---

# 54. No Silent Refactors

Do not perform large refactors during unrelated feature work.

If major cleanup is required, propose a dedicated task/PR.

---

# 55. Reuse

Before creating a component:

1. search existing components;
2. determine whether reuse is appropriate;
3. extend an existing component if the conceptual responsibility matches;
4. avoid duplication.

Do not force reuse where responsibilities differ.

---

# 56. Component Size

If a component becomes difficult to understand because it handles multiple responsibilities, split it.

Do not split components based on arbitrary line-count thresholds.

Split by responsibility.

---

# 57. Service Size

Services should represent coherent technical/domain responsibilities.

Avoid:

```text
UtilsService
CommonService
HelperService
GlobalService
```

containing unrelated functions.

Prefer small pure utility functions where DI is not required.

---

# 58. Naming

Use clear domain-oriented names.

Good:

```text
ProjectCardComponent
ThemeService
ProjectCaseStudy
EngineeringChallenge
```

Bad:

```text
CommonComponent
DataHelper
GenericService2
NewCard
```

---

# 59. Comments

Comments should explain:

```text
why
```

not obvious syntax.

Do not leave AI-generated narrative comments everywhere.

Remove stale comments.

---

# 60. TODOs

Do not leave vague TODOs.

Bad:

```text
// TODO fix later
```

Good:

```text
// TODO(#42): replace temporary static OG image after brand assets are approved.
```

If there is no tracking mechanism, avoid leaving TODOs.

---

# 61. Error Handling

Handle real failure paths.

Do not wrap every function in generic try/catch.

For static content lookup:

```text
unknown slug → 404 behavior
```

For browser storage:

```text
fail gracefully
```

No enterprise error framework required.

---

# 62. Logging

The production portfolio should not log internal data.

Avoid noisy `console.log`.

Remove debugging logs before completion.

Console warnings/errors in normal user flows are not acceptable.

---

# 63. Browser Storage

Only store non-sensitive preferences.

Allowed:

```text
theme preference
```

Do not store:

- career content;
- tokens;
- private data;
- analytics identifiers;

unless explicitly required.

---

# 64. Security

Do not introduce unsafe HTML rendering.

Avoid:

```text
innerHTML
bypassSecurityTrustHtml
```

unless absolutely necessary and explicitly reviewed.

No arbitrary HTML from content files.

---

# 65. External Links

Profile links:

- email;
- LinkedIn;
- GitHub.

Use safe external-link behavior.

Do not hardcode these in many files.

Centralize in content/config.

---

# 66. Personal Data

Do not expose additional personal data beyond approved public profile content.

No:

- home address;
- private phone/address metadata not approved;
- IDs;
- personal secrets.

---

# 67. Accuracy Rule — SCEGA

Approved:

- Angular 19 project experience;
- .NET 9 backend contribution;
- Clean Architecture;
- CQRS/MediatR;
- ConfigStepper;
- shared file-upload;
- shared lookups;
- authentication contribution.

Do **not** claim for SCEGA:

- Micro Frontends;
- Module Federation;
- backend microservices;
- NgRx;
- Redis;
- RabbitMQ;
- Kafka;
- Kubernetes;
- formal Team Lead responsibility.

---

# 68. Accuracy Rule — MOJ

Do not broaden project-level claims beyond the approved MOJ case study.

Do not infer technologies merely because they existed elsewhere at Three Pillars.

---

# 69. Accuracy Rule — FileBound

Do not publish:

- internal ticket IDs;
- repo names;
- customer tenants;
- secrets;
- internal topology.

Approved themes include:

- mature SaaS;
- .NET;
- Web API;
- SQL Server/Dapper;
- workflow;
- eForms;
- integrations;
- security;
- production engineering;
- performance;
- peer review.

---

# 70. Timeline Caution

There are unresolved timeline inconsistencies between some repository histories and the current master CV.

Do not invent or display project dates unless approved.

Do not change employment dates automatically.

---

# 71. Leadership Language

Allowed where supported:

```text
senior-engineer responsibility
code review
peer review
technical guidance
mentoring
shared infrastructure ownership
architecture contribution
```

Do not upgrade wording to:

```text
Team Lead
Engineering Manager
people manager
managed X developers
```

without explicit evidence/approval.

---

# 72. Metrics

Do not display raw Git commit counts on the public site by default.

They are research evidence, not necessarily useful portfolio metrics.

No contribution percentages unless explicitly approved.

---

# 73. Technology Logos

Do not make the site a grid of logos.

Prefer text-based technology tags.

Icons/logos are secondary.

---

# 74. Skill Bars

Never implement:

- percentage skill bars;
- circular proficiency meters;
- star ratings.

There is no defensible quantitative scale.

---

# 75. Hero

Hero must remain concise.

Do not add:

- typing animation;
- rotating titles;
- large tech-logo cloud;
- fake live coding terminal.

---

# 76. Upland Priority

Upland FileBound is the flagship project.

Homepage visual hierarchy should reflect this.

Do not randomly reorder flagship projects.

Current order:

```text
1. Upland FileBound
2. MOJ Lawyer Licensing
3. SCEGA Event Licensing
```

---

# 77. Homepage Scope

Homepage should remain concise.

Do not dump full case studies into the homepage.

Homepage purpose:

```text
identity
proof
career context
engineering approach
contact
```

---

# 78. Case Study Pages

Every flagship project should include:

- overview;
- role;
- architecture;
- contributions;
- engineering challenges;
- technology stack;
- lessons;
- navigation to other projects.

Do not fabricate results.

---

# 79. Architecture Diagrams

Keep diagrams conceptual.

Do not reproduce internal diagrams.

Use generic public-safe nodes such as:

```text
Web App
API
Workflow
Database
External Integration
```

---

# 80. AI-Augmented Engineering Section

Position AI as an engineering accelerator.

Approved concept:

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

Do not position Abdelrahman as:

- AI Expert;
- Prompt Engineer;
- Vibe Coder.

---

# 81. AI Tool Branding

Do not make ChatGPT/Codex/Claude logos the center of the page.

Focus on process.

Specific tool names may appear only where contextually useful.

---

# 82. Production Hosting

Approved:

```text
Cloudflare Pages
```

Do not introduce:

- VPS;
- Docker runtime;
- Kubernetes;
- Node SSR hosting;

without approval.

---

# 83. Cloudflare Build

Verify actual Angular output directory after initial build.

Do not guess and permanently configure the wrong output path.

---

# 84. CI

CI should eventually include:

```text
npm ci
lint
unit tests
build/prerender
Playwright
```

Do not mark work complete if CI is failing.

---

# 85. Node Version

Use a Node version officially supported by the installed Angular 22 version.

Pin it in repository configuration.

Do not guess support.

---

# 86. Package Lock

Commit:

```text
package-lock.json
```

CI uses:

```text
npm ci
```

---

# 87. No Secrets in CI

Do not create secrets unless a real requirement exists.

Static deployment should not require application secrets.

---

# 88. README

README should explain:

- project purpose;
- stack;
- architecture;
- setup;
- scripts;
- documentation;
- deployment;
- contribution/agent rules.

Do not turn README into a duplicate CV.

---

# 89. Before Starting a Task

Agent checklist:

```text
1. Read task.
2. Read relevant docs.
3. Inspect existing implementation.
4. Identify smallest correct change.
5. Check reuse opportunities.
6. Confirm no architecture violation.
7. Implement.
8. Test.
9. Build.
10. Review diff.
```

---

# 90. After Completing a Task

Report:

```text
Summary
Files changed
Testing performed
Build status
Any assumptions
Any follow-up needed
```

Do not claim tests passed unless they were actually run.

---

# 91. When a Command Fails

Do not hide failure.

Investigate:

- actual error;
- whether change caused it;
- environment limitation;
- pre-existing failure.

If unable to resolve, report exactly what failed.

---

# 92. When Content Is Missing

Do not invent copy.

Use a clear placeholder only when explicitly allowed, e.g.:

```text
TODO CONTENT — awaiting approval
```

Prefer stopping and asking for content when public accuracy matters.

---

# 93. When Requirements Are Ambiguous

Prefer:

1. existing docs;
2. existing patterns;
3. minimal interpretation.

If multiple materially different implementations are possible, ask.

Do not make architectural decisions silently.

---

# 94. Agent Ownership Boundaries

## ChatGPT / Planning Agent

Best suited for:

- PRD;
- content;
- architecture;
- design review;
- case-study review;
- recruiter/manager perspective.

## Codex / Coding Agent

Best suited for:

- Angular implementation;
- refactoring;
- tests;
- lint/build fixes;
- CI scripts.

## Antigravity / Browser Agent

Best suited for:

- browser validation;
- responsive QA;
- visual iteration;
- accessibility flows;
- end-to-end checks.

These are preferred responsibilities, not hard technical restrictions.

---

# 95. Never Modify Career Facts Autonomously

Agents may improve wording while preserving exact meaning.

Agents may not change:

- dates;
- roles;
- company relationships;
- technologies;
- team sizes;
- contribution claims;

without approval.

---

# 96. Never Publish Internal Analysis Automatically

A research finding labeled:

```text
VERIFIED
```

does **not** automatically mean:

```text
SAFE TO PUBLISH
```

Both evidence and public-safety classification matter.

---

# 97. Definition of Done — UI Feature

A UI feature is done when:

- matches design system;
- desktop works;
- mobile works;
- keyboard works;
- focus visible;
- dark/light works;
- no overflow;
- no console error;
- required tests pass;
- production build passes.

---

# 98. Definition of Done — Content Feature

A content feature is done when:

- public-safe;
- factual;
- no internal evidence leaked;
- spelling/grammar reviewed;
- links valid;
- responsive rendering correct;
- SEO metadata present where applicable.

---

# 99. Definition of Done — Refactor

A refactor is done when:

- external behavior remains unchanged;
- tests/build pass;
- duplication genuinely reduced;
- readability improved;
- no speculative abstraction introduced.

---

# 100. Definition of Done — Architecture Change

Requires:

- explicit approval;
- updated `ARCHITECTURE.md`;
- potentially an ADR;
- updated dependencies/config;
- tests/build;
- deployment impact review.

---

# 101. Do Not Optimize for AI Convenience

Do not distort architecture merely to make code easier for agents.

Optimize for:

```text
human maintainability
clarity
correctness
```

AI readability is useful but secondary.

---

# 102. Keep the Repository Professional

Avoid generated clutter:

- duplicate markdown summaries;
- temporary agent notes;
- random scratch files;
- `.bak`;
- `final-v2-final`;
- unused assets;
- unused components.

Delete temporary artifacts before completing a task.

---

# 103. No Generated Attribution

Do not add:

```text
Generated by ChatGPT
Generated by Codex
Generated by Claude
```

to production pages or source headers unless explicitly requested.

---

# 104. Code Review Mindset

Before finalizing, ask:

- Is this simpler than necessary?
- Did I add a dependency unnecessarily?
- Did I duplicate anything?
- Is the component doing too much?
- Is content hard-coded?
- Is it accessible?
- Does prerender still work?
- Is any confidential information exposed?
- Does this match the design system?
- Did I change anything outside scope?

---

# 105. Implementation Order

Preferred v1 implementation sequence:

```text
1. Initialize Angular
2. Configure formatting/lint
3. Add design tokens/global styles
4. Implement app shell
5. Implement theme
6. Implement header/navigation/footer
7. Implement homepage hero
8. Implement professional snapshot
9. Implement project cards
10. Implement experience preview
11. Implement expertise section
12. Implement engineering principles
13. Implement AI workflow
14. Implement credentials/contact
15. Implement project index
16. Implement Upland case study
17. Implement MOJ case study
18. Implement SCEGA case study
19. Implement Experience page
20. Implement Engineering page
21. Implement About
22. Implement Contact/CV
23. Add SEO
24. Add OG assets
25. Add Playwright
26. Configure CI
27. Deploy Cloudflare Pages
28. Perform accessibility/performance QA
```

Do not skip straight to project-page implementation before shared primitives exist.

---

# 106. Final Principle

The portfolio should communicate seniority through engineering judgment.

The repository should demonstrate:

> Use the simplest architecture that meets the product requirements, implement it cleanly, document it well, validate it thoroughly, and avoid pretending complexity is the same thing as seniority.

Every agent working in this repository must preserve that principle.
