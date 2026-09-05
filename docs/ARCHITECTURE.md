# Abdelrahman Hegab Portfolio — Technical Architecture

**Document:** Technical Architecture  
**Status:** Draft for approval  
**Owner:** Abdelrahman Hegab  
**Product:** Professional Engineering Portfolio  
**Architecture Style:** Static-first Angular application with build-time prerendering  
**Last Updated:** September 2026

---

# 1. Architecture Goal

Build a fast, maintainable, SEO-friendly professional portfolio that demonstrates senior Angular engineering without introducing infrastructure that the product does not need.

The site should:

- load quickly;
- render useful HTML before JavaScript executes;
- work on static hosting;
- have excellent SEO;
- support light/dark themes;
- remain accessible;
- keep career content separate from UI logic;
- support three flagship technical case studies;
- be simple for AI coding agents to understand;
- be straightforward to maintain over several years.

The portfolio is not a SaaS application.

It should not contain unnecessary:

- backend services;
- databases;
- authentication;
- admin dashboards;
- CMS infrastructure;
- runtime SSR servers;
- microservices.

---

# 2. Architecture Decision Summary

| Area | Decision |
|---|---|
| Framework | Angular 22 |
| Angular version policy | Latest stable Angular 22 minor/patch when initialized |
| Language | TypeScript |
| Application model | Standalone Angular application |
| Rendering | Build-time prerendering / static output |
| Runtime server | None |
| Hosting | Cloudflare Pages |
| Routing | Angular Router |
| State | Signals for local/shared UI state where appropriate |
| Forms | Angular Reactive Forms only where forms are actually needed |
| Styling | SCSS + semantic design tokens |
| UI framework | None |
| Content | Strongly typed local content models |
| Backend | None for v1 |
| Analytics | None initially |
| Unit tests | Angular test tooling |
| E2E | Playwright |
| CI | GitHub Actions |
| Package manager | npm |
| Source control | Git / GitHub |
| Production branch | `main` |

---

# 3. Angular Version

Use:

```text
Angular 22
```

At initialization time, install the latest stable Angular 22 minor/patch release rather than pinning the architecture document to an old patch number.

Example policy:

```text
Angular major: 22
Angular minor/patch: latest stable available when project is initialized
```

Reasons:

- demonstrates current Angular knowledge;
- avoids intentionally starting a new portfolio on an older framework;
- gives access to current Angular rendering, router, signals, and build tooling;
- aligns with the portfolio's purpose as a demonstration of current engineering practice.

Do not automatically upgrade to Angular 23 later without an explicit architecture review.

---

# 4. Rendering Strategy

## Decision

Use:

```text
Angular hybrid-rendering tooling
+
build-time prerendering
+
fully static output
```

Do **not** run an Angular Node SSR server in production.

Recommended project setup includes Angular SSR/prerender tooling:

```text
@angular/ssr
```

but production output should be:

```text
outputMode: "static"
```

---

# 5. Why Static Prerendering

Every v1 page is public and known at build time.

Examples:

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

There is no user-specific server-rendered content.

Static prerendering therefore provides:

- HTML available immediately;
- excellent search-engine visibility;
- fast first load;
- CDN caching;
- no server runtime;
- no server maintenance;
- no server compute cost;
- simple Cloudflare Pages deployment.

---

# 6. Why Not Client-Side Rendering Only

A pure CSR SPA would work technically, but it is not preferred because the portfolio benefits strongly from:

- indexable case-study content;
- fast first contentful render;
- social/search discoverability;
- static page delivery;
- reduced dependence on JavaScript for initial content.

---

# 7. Why Not Runtime SSR

Runtime SSR would add:

- server infrastructure;
- additional deployment complexity;
- runtime failure modes;
- more hosting configuration;
- unnecessary compute.

There is no product requirement that justifies it.

If a future feature requires runtime/server behavior, add it separately rather than converting the entire portfolio into a server application.

---

# 8. Angular Project Configuration

The application should be created with:

```text
routing enabled
SCSS
strict TypeScript
standalone components
SSR/prerender support
```

Do not initialize Git through Angular CLI because the repository already exists.

Conceptual CLI configuration:

```text
Angular
├── routing: yes
├── style: scss
├── strict: yes
├── standalone: yes
├── ssr: yes
└── git: existing repository
```

The exact initialization command belongs in implementation/README after package versions are resolved.

---

# 9. Static Output Configuration

Production Angular configuration should use fully static output.

Conceptually:

```json
{
  "outputMode": "static"
}
```

All public routes must be prerenderable.

Dynamic project routes must have build-time parameters or explicit route definitions.

---

# 10. Application Architecture

Recommended top-level structure:

```text
src/
├── app/
│   ├── core/
│   ├── layout/
│   ├── shared/
│   ├── features/
│   ├── content/
│   ├── models/
│   └── app.routes.ts
│
├── styles/
│
├── assets/
│
└── index.html
```

Public static files:

```text
public/
├── cv/
├── images/
├── icons/
├── og/
├── robots.txt
├── sitemap.xml
└── favicon.svg
```

---

# 11. `core/`

`core/` contains application-wide technical infrastructure.

Recommended:

```text
core/
├── seo/
│   ├── seo.service.ts
│   └── seo.models.ts
│
├── theme/
│   ├── theme.service.ts
│   ├── theme.models.ts
│   └── theme-storage.service.ts
│
├── navigation/
│   └── navigation.service.ts
│
└── constants/
    └── app.constants.ts
```

Rules:

- no project-specific content;
- no presentation-heavy components;
- singleton application infrastructure only;
- do not create generic services without a real need.

---

# 12. `layout/`

Global page structure:

```text
layout/
├── app-shell/
├── header/
├── mobile-navigation/
├── footer/
└── page-container/
```

Responsibilities:

- site header;
- global navigation;
- footer;
- main content shell;
- mobile menu.

Do not place feature/business content inside layout components.

---

# 13. `shared/`

Reusable presentational and technical UI components.

Recommended:

```text
shared/
├── components/
│   ├── button/
│   ├── section-header/
│   ├── tag/
│   ├── project-card/
│   ├── architecture-diagram/
│   ├── challenge-block/
│   ├── timeline/
│   ├── technology-group/
│   ├── credential-item/
│   └── social-links/
│
├── directives/
├── pipes/
└── utilities/
```

Rules:

- reusable across more than one feature;
- no hardcoded career facts;
- no dependency on a specific project;
- strongly typed inputs;
- semantic HTML;
- accessibility built in.

---

# 14. `features/`

Page and domain presentation.

Recommended:

```text
features/
├── home/
├── experience/
├── projects/
│   ├── project-list/
│   └── project-detail/
├── engineering/
├── about/
├── contact/
├── cv/
└── not-found/
```

A feature may contain:

```text
components/
page component
feature-specific models/utilities if needed
```

Do not create NgModules for organizational reasons.

Use standalone components.

---

# 15. `content/`

This is the public portfolio data layer.

Recommended:

```text
content/
├── profile.content.ts
├── navigation.content.ts
├── experience.content.ts
├── skills.content.ts
├── engineering.content.ts
├── credentials.content.ts
├── contact.content.ts
└── projects/
    ├── upland-filebound.content.ts
    ├── moj-lawyer-licensing.content.ts
    └── scega-event-licensing.content.ts
```

Content files contain facts and copy.

Components render them.

Components do not own career data.

---

# 16. Why TypeScript Content Instead of a CMS

Version 1 content changes infrequently.

Using typed local content provides:

- compile-time validation;
- no backend;
- no CMS dependency;
- version history through Git;
- easy AI-agent review;
- easy prerendering;
- easy unit testing.

A CMS would add unnecessary product/infrastructure complexity.

---

# 17. Why TypeScript Content Instead of Markdown Rendering

The repository already contains detailed Markdown research and case-study documents under `docs/`.

Those documents are authoring/research sources.

For the live application, strongly typed TypeScript objects are preferred initially because they provide:

- strict data contracts;
- no Markdown parser dependency;
- predictable UI blocks;
- safe rendering;
- easier component composition;
- easier metadata generation.

The website does not need to render the large research documents verbatim.

---

# 18. Documentation vs Runtime Content

Keep two levels distinct:

```text
docs/
    research / requirements / full case studies
```

versus:

```text
src/app/content/
    approved public website content
```

Example:

```text
docs/case-studies/SCEGA-CASE-STUDY.md
```

is the detailed editorial source.

Then:

```text
src/app/content/projects/scega-event-licensing.content.ts
```

contains the structured public content rendered by Angular.

Never make Angular parse internal research files directly.

This helps prevent accidentally publishing confidential/internal research details.

---

# 19. Project Content Model

Recommended model:

```ts
interface ProjectCaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  featured: boolean;

  role: string;
  focus: string[];

  technologies: TechnologyTag[];

  overview: ContentBlock[];
  contributions: ContentBlock[];

  architecture?: ArchitectureDiagramDefinition;

  challenges: EngineeringChallenge[];
  decisions?: EngineeringDecision[];

  production?: ContentBlock[];
  lessons?: ContentBlock[];

  seo: SeoMetadata;
}
```

---

# 20. Technology Model

```ts
interface TechnologyTag {
  name: string;
  category:
    | 'frontend'
    | 'backend'
    | 'data'
    | 'architecture'
    | 'integration'
    | 'delivery';
}
```

Do not attach arbitrary colors to every technology.

---

# 21. Engineering Challenge Model

```ts
interface EngineeringChallenge {
  title: string;
  context: string;
  approach: string[];
  engineeringValue?: string[];
}
```

Avoid mandatory numeric results because several real projects do not have verified metrics.

---

# 22. Content Block Model

Keep structured copy simple.

Example:

```ts
type ContentBlock =
  | ParagraphBlock
  | BulletListBlock
  | CalloutBlock;
```

Do not create a full custom rich-text engine.

If content requirements later become more complex, revisit.

---

# 23. Architecture Diagram Model

Architecture diagrams should be portfolio-created conceptual visuals.

Suggested model:

```ts
interface ArchitectureDiagramDefinition {
  title: string;
  description: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}
```

Example node:

```ts
interface ArchitectureNode {
  id: string;
  label: string;
  type?: 'primary' | 'standard' | 'external' | 'data';
}
```

Example edge:

```ts
interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}
```

---

# 24. Diagram Implementation

Prefer:

```text
semantic HTML + CSS
```

or lightweight inline SVG for connectors.

Do not add:

- D3;
- Cytoscape;
- Mermaid runtime;
- large graph libraries;

for three simple conceptual diagrams.

If SVG is used:

- keep node labels available as text;
- provide a textual description;
- support responsive rendering.

---

# 25. Routes

Recommended:

```ts
[
  { path: '', ... },
  { path: 'experience', ... },
  { path: 'projects', ... },
  { path: 'projects/:slug', ... },
  { path: 'engineering', ... },
  { path: 'about', ... },
  { path: 'contact', ... },
  { path: 'cv', ... },
  { path: '**', ... }
]
```

---

# 26. Route Lazy Loading

Use lazy loading for page components:

```ts
loadComponent: () => import(...)
```

Reasons:

- smaller initial JS;
- cleaner route boundaries;
- modern Angular style;
- easy feature ownership.

Avoid creating lazy loading merely for tiny shared components.

---

# 27. Project Detail Routing

Preferred:

```text
/projects/:slug
```

Allowed slugs:

```text
upland-filebound
moj-lawyer-licensing
scega-event-licensing
```

A project content service/helper resolves the slug against the static project collection.

Unknown slug:

```text
→ project not found / 404 experience
```

---

# 28. Prerendering Project Routes

All known project slugs must be generated at build time.

Conceptually:

```text
/projects/upland-filebound
/projects/moj-lawyer-licensing
/projects/scega-event-licensing
```

The prerender configuration should derive parameters from the same project content collection where practical to avoid maintaining two unrelated lists.

---

# 29. Signals

Use Angular Signals for UI/application state where they simplify behavior.

Good candidates:

- current theme;
- mobile menu open/closed;
- selected theme preference;
- derived navigation state if necessary.

Do not replace every local variable with a signal simply because signals exist.

---

# 30. RxJS

Use RxJS when the problem is genuinely stream/asynchronous.

Examples:

- Router events;
- async browser APIs where streams are useful.

Avoid creating observable services for static portfolio content.

Static content should normally be plain typed data.

---

# 31. State Management

Do not add:

- NgRx;
- NGXS;
- Akita;
- Elf;
- Redux.

There is no application-state complexity that justifies them.

State strategy:

```text
static typed content
+
component state
+
small signal-based shared UI state
```

---

# 32. Dependency Injection

Use DI for application services that genuinely require lifecycle/shared behavior.

Examples:

- ThemeService
- SeoService

Do not put static content into injectable services unless there is a clear advantage.

Prefer pure exported data/functions where appropriate.

---

# 33. Component Input Style

Use modern Angular input APIs where stable and appropriate.

Priorities:

- strong typing;
- required inputs where genuinely required;
- immutable inputs;
- clear component contracts.

Do not adopt experimental APIs just to look modern.

---

# 34. Change Detection

Use modern Angular defaults and keep component state predictable.

For components where explicit OnPush still provides clarity/value, it is acceptable.

Do not perform premature micro-optimization.

The site is content-heavy and inherently lightweight.

---

# 35. Forms

Version 1 has no complex data-entry requirement.

If a contact form is not implemented:

```text
no application forms are required
```

Use simple links:

- mailto;
- LinkedIn;
- GitHub.

If a future contact form is added, use Angular Reactive Forms.

---

# 36. Theme Architecture

Theme values must be semantic CSS custom properties.

Example:

```css
:root {
  --color-bg-page: ...;
  --color-bg-surface: ...;
  --color-text-primary: ...;
  --color-text-secondary: ...;
  --color-border: ...;
  --color-primary: ...;
}
```

Dark theme:

```css
[data-theme='dark'] {
  ...
}
```

---

# 37. Theme State

Theme preference model:

```ts
type ThemePreference = 'system' | 'light' | 'dark';
```

Resolution:

```text
preference = system
→ use prefers-color-scheme

preference = light/dark
→ explicit theme
```

Persist explicit preference in:

```text
localStorage
```

---

# 38. Preventing Theme Flash

Because pages are prerendered, JavaScript applies user-specific preference after load.

Minimize flash by using a very small inline theme initialization script in the document head if necessary.

It should:

1. read stored theme preference;
2. resolve system preference;
3. set the theme attribute before primary paint.

Keep script tiny and dependency-free.

---

# 39. Browser API Safety

Prerendered code must not assume browser globals always exist.

Avoid direct top-level access to:

```text
window
document
localStorage
matchMedia
```

Use:

- platform checks;
- injection abstractions;
- browser-only lifecycle;
- small utilities.

This is required for reliable build-time prerendering.

---

# 40. Styling Architecture

Recommended:

```text
src/styles/
├── _tokens.scss
├── _reset.scss
├── _typography.scss
├── _layout.scss
├── _utilities.scss
└── styles.scss
```

Component styles remain colocated:

```text
project-card/
├── project-card.component.ts
├── project-card.component.html
└── project-card.component.scss
```

---

# 41. Global SCSS Responsibilities

Global styles contain only:

- reset;
- semantic variables;
- body typography;
- global focus styles;
- common layout primitives;
- tiny utility set.

Do not put feature-specific component CSS in global styles.

---

# 42. No Heavy UI Framework

Do not install:

- PrimeNG;
- Angular Material;
- NG-ZORRO;
- Bootstrap.

The portfolio requires a limited custom component set and does not benefit enough to justify a framework dependency.

SCEGA already provides professional evidence of experience with major Angular UI libraries.

---

# 43. Tailwind Decision

Do not use Tailwind in v1.

Use:

```text
SCSS
+
CSS custom properties
+
small shared layout utilities
```

Reasons:

- simpler dependency tree;
- demonstrates CSS/SCSS capability;
- strong design-system control;
- no utility-class-heavy templates;
- portfolio UI is modest in scope.

This can be revisited only through an explicit architecture change.

---

# 44. Font Delivery

Preferred:

```text
Inter
```

Use a performant delivery method.

Options:

1. self-host through project assets if licensing/source allows;
2. privacy-conscious external font delivery;
3. system fallback.

Do not expose or redistribute font files outside their licensing terms.

Configure font fallbacks so the site remains usable before the custom font loads.

---

# 45. Icons

Prefer:

```text
small inline SVG icon components
```

for the limited icon set.

Expected icons:

- GitHub;
- LinkedIn;
- email;
- theme;
- menu;
- arrow;
- external link.

Do not add a large icon package unless it materially reduces complexity.

---

# 46. Images

Image policy:

- optimized dimensions;
- modern formats where practical;
- width/height specified;
- lazy load below fold;
- meaningful alt text;
- decorative images empty-alt.

Use Angular image optimization features if appropriate.

---

# 47. Personal Portrait

Optional.

Architecture must not depend on a portrait.

If later added:

```text
public/images/profile/
```

with responsive optimized versions.

---

# 48. CV Handling

Store approved CV:

```text
public/cv/Abdelrahman-Hegab-CV.pdf
```

Actions:

- View CV;
- Download CV.

The file name should remain stable for external links where possible.

When CV changes:

1. replace file;
2. verify link;
3. update metadata if necessary;
4. deploy through normal CI/CD.

---

# 49. SEO Architecture

Create centralized SEO metadata.

Model:

```ts
interface SeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}
```

Every major route has metadata.

---

# 50. SEO Service

`SeoService` responsibilities:

- document title;
- meta description;
- Open Graph title;
- Open Graph description;
- Open Graph image;
- canonical URL;
- Twitter-compatible metadata if desired.

Do not scatter DOM metadata manipulation through page components.

---

# 51. Structured Data

Homepage may expose JSON-LD:

```text
Person
```

Potential properties:

- name;
- jobTitle;
- URL;
- sameAs LinkedIn/GitHub;
- address locality/country at appropriate public granularity.

Do not publish private data.

Project pages may later add:

```text
CreativeWork
```

only if meaningful.

---

# 52. Canonical URLs

Base URL should be environment-configurable until the final custom domain is chosen.

Temporary production base:

```text
Cloudflare Pages URL
```

Later:

```text
custom domain
```

Do not hardcode the temporary URL throughout the application.

Centralize:

```text
siteConfig.baseUrl
```

---

# 53. Sitemap

Generate or maintain:

```text
sitemap.xml
```

It should contain all public routes.

Because routes are static and few, generation can happen during the build with a small script.

Do not install a complex sitemap library unless necessary.

---

# 54. Robots

Provide:

```text
robots.txt
```

Production:

```text
Allow: /
Sitemap: ...
```

Preview deployments should not be treated as canonical production pages.

---

# 55. Open Graph Images

Store:

```text
public/og/
├── home.png
├── upland-filebound.png
├── moj-lawyer-licensing.png
└── scega-event-licensing.png
```

Dimensions:

```text
1200 × 630
```

Generation may initially be manual/design-generated.

Do not generate OG images dynamically at runtime.

---

# 56. Accessibility Architecture

Required globally:

- semantic HTML;
- skip-to-content;
- one primary H1 per page;
- logical heading levels;
- keyboard navigation;
- visible focus;
- reduced-motion support;
- meaningful links;
- accessible menu;
- sufficient contrast;
- responsive zoom.

Accessibility is part of component Definition of Done.

---

# 57. Navigation Accessibility

Mobile menu:

- proper button;
- `aria-expanded`;
- associated menu id;
- Escape closes menu;
- navigation selection closes menu;
- focus management;
- no inaccessible click-only divs.

Do not over-engineer a custom focus trap unless the menu behaves as a modal overlay requiring one.

---

# 58. Motion Architecture

Do not add animation libraries.

Use CSS transitions/intersection behavior only if needed.

Allowed:

- subtle reveal;
- hover;
- navigation;
- theme.

Respect:

```text
prefers-reduced-motion
```

---

# 59. Scroll Reveal

If section reveal is implemented:

- small custom directive;
- IntersectionObserver;
- no external library;
- content remains visible without JS;
- reduced motion disables transforms.

This is optional, not v1-critical.

---

# 60. Performance Budget

Targets:

```text
Lighthouse Performance    95+
Accessibility             95+
Best Practices            95+
SEO                       95+
```

Performance strategy:

- static HTML;
- CDN;
- lazy routes;
- limited dependencies;
- no heavy UI library;
- optimized images;
- no runtime data fetching for core content;
- no analytics initially.

---

# 61. JavaScript Budget Principle

Do not set an arbitrary impressive-looking number before measuring the initial build.

Instead:

1. build minimal app;
2. record baseline;
3. use Angular bundle budgets;
4. prevent unexplained growth.

Every new third-party dependency requires justification in PR description.

---

# 62. Dependency Policy

Before adding a package, ask:

1. Can platform/Angular APIs solve this cleanly?
2. Is the package actively maintained?
3. Is it tree-shakable?
4. What is the bundle cost?
5. Does it create long-term maintenance risk?
6. Is this capability actually required?

Agents may not add packages silently.

---

# 63. Approved Initial Dependencies

Expected:

```text
Angular framework packages
@angular/router
@angular/ssr
RxJS
TypeScript
SCSS tooling from Angular build
Playwright (dev)
```

No other major runtime dependencies should be assumed.

---

# 64. Security Model

The site has no user accounts and stores no sensitive data.

Main security concerns:

- dependency vulnerabilities;
- unsafe external links;
- accidental publication of confidential project details;
- XSS introduced by unsafe HTML;
- source-map/public artifact configuration;
- secret leakage through repo/config.

---

# 65. No Unsafe HTML Content

Do not render project content using:

```text
innerHTML
```

from arbitrary strings.

Typed content should render through Angular templates.

This is another reason not to build a generic Markdown/HTML rendering pipeline for v1.

---

# 66. External Links

Use safe attributes where appropriate:

```text
rel="noopener noreferrer"
```

Centralize external profile URLs in content/config.

---

# 67. Secrets

The portfolio should require no production secrets for v1.

Do not create environment secrets unless a feature needs them.

No keys belong in:

- Angular source;
- Git;
- public config;
- client-side environment files.

---

# 68. Project Confidentiality Boundary

`docs/research` and detailed analysis may include INTERNAL ONLY evidence.

Runtime content must be manually curated.

Rule:

```text
Never automatically transform research documents into published content.
```

Every live claim must come from an approved public-safe case study/content file.

---

# 69. Testing Strategy

Testing should focus on behavior that can actually break.

Three levels:

```text
Unit
Component / Integration
E2E
```

Avoid chasing coverage percentage for static text.

---

# 70. Unit Tests

Good unit candidates:

- theme resolution;
- project slug resolution;
- SEO metadata helpers;
- content validation utilities;
- sitemap generation;
- small pure transformations.

Do not create meaningless tests like:

```text
"component should be truthy"
```

unless scaffolded temporarily and later improved/removed.

---

# 71. Component Tests

Test interactive components:

- ThemeToggle;
- MobileNavigation;
- ProjectCard navigation behavior if needed;
- accessible menu behavior;
- any custom architecture interactions.

Static presentational components need minimal testing.

---

# 72. E2E — Playwright

Use Playwright.

Critical flows:

1. homepage loads;
2. main navigation works;
3. mobile navigation works;
4. each flagship project opens;
5. project next/previous navigation works;
6. theme toggle works;
7. theme persists;
8. CV link works;
9. LinkedIn link exists/correct;
10. GitHub link exists/correct;
11. contact email link exists;
12. 404 page works.

---

# 73. Responsive E2E

Smoke-test at minimum:

```text
mobile
tablet
desktop
```

Suggested representative widths:

```text
390
768
1440
```

Avoid screenshot testing every section initially.

---

# 74. Accessibility Testing

Automated accessibility checks should be added where practical.

Also manually verify:

- keyboard navigation;
- focus order;
- mobile menu;
- heading structure;
- contrast;
- 200% zoom;
- reduced motion.

Automation does not replace manual checks.

---

# 75. Linting / Formatting

Use current Angular-supported linting approach.

If ESLint is not included by default, add it deliberately after initialization.

Formatting:

```text
Prettier
```

may be added as a development dependency.

Configuration should be repository-level.

---

# 76. Formatting Rules

Suggested:

- 2-space indentation;
- single quote TypeScript where standard;
- trailing commas where supported;
- consistent HTML formatting;
- newline EOF.

Exact rules belong in config, not repeated in every prompt.

---

# 77. CI Architecture

Use GitHub Actions.

GitHub Actions is the quality and validation pipeline:

```text
Checkout
↓
Setup Node
↓
npm ci
↓
Lint
↓
Unit Tests
↓
Production Build / Prerender
↓
Playwright
```

Cloudflare Pages deployment remains separate from this workflow.

---

# 78. Production Deployment

Approved deployment flow:

```text
GitHub
   |
   +--> GitHub Actions
   |      quality + tests + build validation
   |
   +--> Cloudflare Pages Git integration
          Angular static build
          preview deployments
          main --> production
```

Cloudflare Pages should deploy `main`.

Pull requests receive preview deployments.

---

# 79. Cloudflare Pages

Production configuration:

```text
Production branch: main
Build command: npm run build
Build output: dist/abdelrahman-portfolio/browser
Node version: .nvmrc (24.20.0)
```

The output directory was verified from the Angular 22 production build before Cloudflare Pages
was configured. See `docs/DEPLOYMENT.md` for the operational deployment contract.

---

# 80. Preview Deployments

Every significant UI PR should be reviewable through a preview URL when possible.

Use preview deployments for:

- visual QA;
- mobile QA;
- recruiter-style review;
- accessibility review;
- stakeholder/self review.

---

# 81. Branching Strategy

Keep it simple.

Permanent:

```text
main
```

Feature branches:

```text
feature/<name>
fix/<name>
docs/<name>
chore/<name>
```

Examples:

```text
feature/app-shell
feature/home-hero
feature/project-cards
feature/upland-case-study
fix/mobile-navigation
docs/update-architecture
```

No long-lived `develop` branch is needed for a one-developer portfolio unless a future workflow proves otherwise.

---

# 82. Pull Requests

Even as a solo project, meaningful implementation work should use PRs once CI is operational.

Reasons:

- preview deployments;
- AI review;
- clean change history;
- portfolio demonstration;
- quality gates.

Tiny documentation corrections may go directly to `main` if desired.

---

# 83. Commit Convention

Use Conventional Commit-style messages.

Examples:

```text
feat: implement portfolio hero
feat: add FileBound case study
fix: correct mobile menu focus behavior
docs: define technical architecture
test: add project navigation e2e coverage
chore: configure prettier
```

---

# 84. Build Reproducibility

Commit:

```text
package-lock.json
```

CI uses:

```text
npm ci
```

Do not use unpinned global dependencies in CI.

---

# 85. Node Version

Select one supported Node LTS version compatible with the chosen Angular 22 release when initialization occurs.

Pin through a repository mechanism such as:

```text
.nvmrc
```

and/or:

```text
package.json engines
```

Do not hardcode a Node version in this architecture document without checking Angular's actual support matrix at initialization time.

---

# 86. Environment Configuration

The portfolio requires very little environment-specific configuration.

Recommended site config:

```ts
interface SiteConfig {
  siteName: string;
  baseUrl: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  cvPath: string;
}
```

Production domain can be substituted at build/configuration time or updated when selected.

Do not create multiple `environment.*.ts` files unless there is a real need.

---

# 87. Contact Strategy

Version 1 uses direct links.

No contact backend.

Example:

```text
mailto:
LinkedIn
GitHub
```

Benefits:

- no spam endpoint;
- no CAPTCHA;
- no email provider;
- no server;
- no secrets;
- no cost.

---

# 88. Future Contact Form

If later needed:

Prefer a small isolated serverless endpoint rather than adding an ASP.NET backend only for contact.

Architecture review required before implementation.

---

# 89. Analytics

Do not add analytics initially.

After launch, if metrics are desired:

- choose privacy-conscious analytics;
- verify performance impact;
- document cookie/privacy behavior;
- add only if the data will be used.

---

# 90. Error Handling

Static app errors are limited.

Provide:

```text
404 page
```

For unexpected component errors:

- fail gracefully;
- do not expose internal stack/debug details to users;
- rely on normal build/test quality.

No global enterprise error framework is needed.

---

# 91. 404 Strategy

Unknown route renders:

```text
Not Found
```

with:

```text
Back Home
View Projects
```

For static hosting, configure Cloudflare fallback behavior as needed so Angular routing and prerendered pages resolve correctly.

Test direct navigation to every route in production.

---

# 92. Content Validation

Add a lightweight development-time validation function/test that verifies:

- unique project slugs;
- required project SEO;
- unique route paths;
- all project links valid;
- technology names non-empty;
- featured project count expected.

This prevents static-data mistakes.

---

# 93. Broken Links

E2E or a small build script should verify internal route links.

External links should not be aggressively live-checked in every CI run because third-party availability can make CI flaky.

Manual/frequent validation is sufficient.

---

# 94. Sitemap Generation

Small Node script:

```text
scripts/generate-sitemap.mjs
```

Reads:

- static routes;
- project slugs;
- configured production base URL.

Generates:

```text
public/sitemap.xml
```

Could run before production build.

---

# 95. Repository Structure

After Angular initialization:

```text
abdelrahman-portfolio/
│
├── .github/
│   └── workflows/
│
├── docs/
│   ├── PRD.md
│   ├── CONTENT.md
│   ├── INFORMATION-ARCHITECTURE.md
│   ├── DESIGN-SYSTEM.md
│   ├── ARCHITECTURE.md
│   ├── SEO.md
│   ├── TESTING.md
│   ├── ROADMAP.md
│   └── case-studies/
│
├── public/
│   ├── cv/
│   ├── images/
│   ├── icons/
│   └── og/
│
├── scripts/
│
├── src/
│   ├── app/
│   │   ├── core/
│   │   ├── layout/
│   │   ├── shared/
│   │   ├── features/
│   │   ├── content/
│   │   └── models/
│   │
│   └── styles/
│
├── tests/
│   └── e2e/
│
├── AGENTS.md
├── README.md
├── package.json
├── package-lock.json
├── angular.json
└── tsconfig.json
```

---

# 96. AI-Agent Architecture Rules

AI agents must not:

- add a backend;
- add a UI framework;
- add state management;
- add a CMS;
- add analytics;
- add runtime SSR;
- add dependencies;
- publish research files;
- modify factual career claims;

without explicit approval.

Agents must follow:

```text
PRD
CONTENT
INFORMATION-ARCHITECTURE
DESIGN-SYSTEM
ARCHITECTURE
AGENTS
```

in that precedence/context.

---

# 97. Content Safety Rule for Agents

This is critical.

Research documents may contain:

- internal ticket IDs;
- repo names;
- architecture details;
- company/client internals.

Runtime code must only use approved public content.

Never tell an agent:

```text
"Read all research and automatically publish the project."
```

Instead:

```text
Use the approved public case-study content only.
```

---

# 98. Architecture Decision Records

Major future changes should be documented.

If needed, add:

```text
docs/adr/
```

Examples requiring an ADR:

- adding backend;
- changing hosting provider;
- adding CMS;
- adding Tailwind;
- adding Material/PrimeNG;
- introducing analytics;
- changing content engine;
- adding runtime SSR.

Version 1 does not need ADR files for every small choice.

---

# 99. Definition of Done — Feature

A feature is complete when applicable:

- requirement satisfied;
- matches Information Architecture;
- matches Design System;
- responsive;
- accessible;
- no invented content;
- unit/component tests pass;
- relevant E2E passes;
- production build passes;
- no console errors;
- no unexplained dependency;
- no confidential content;
- documentation updated if architecture changed.

---

# 100. Definition of Done — Project Page

Each project case study must have:

- correct public-safe title;
- overview;
- clear personal role;
- key contributions;
- architecture visualization;
- 2–4 real technical challenges;
- project-specific technology stack;
- engineering lessons;
- SEO metadata;
- Open Graph image;
- previous/next navigation;
- mobile layout;
- accessibility pass.

---

# 101. Definition of Done — Production

Before launch:

- production static build passes;
- every route works via direct URL;
- all pages prerender;
- sitemap correct;
- robots correct;
- canonical URLs correct;
- CV works;
- LinkedIn/GitHub/email correct;
- favicon correct;
- Open Graph previews correct;
- mobile navigation correct;
- theme persists;
- no confidential research content bundled;
- Lighthouse targets reviewed;
- Playwright critical flows pass;
- Cloudflare production deploy successful.

---

# 102. Architecture Non-Goals

The project is explicitly not intended to demonstrate every technology Abdelrahman knows.

Do not add:

```text
.NET backend just to show .NET
Redis just to show caching
Docker just to show containers
NgRx just to show NgRx
Microservices just to show architecture
```

The portfolio demonstrates those skills through case studies.

The architecture of the portfolio itself should demonstrate judgment and simplicity.

---

# 103. Architecture Strength

The engineering statement this repository should make is:

> Choose the simplest architecture that fully satisfies the product requirements, then execute it with strong structure, documentation, testing, accessibility, performance, and delivery discipline.

That is a stronger senior-engineering signal than introducing unnecessary complexity.

---

# 104. Current External Platform Decisions

Current Angular supports build-time prerendering and fully static output through its server/hybrid-rendering tooling.

Cloudflare Pages supports Angular builds from Git repositories and provides automatic deployment and pull-request previews.

Accordingly:

```text
Angular static prerender
        ↓
GitHub
        ↓
Cloudflare Pages
        ↓
CDN / custom domain
```

is the approved v1 deployment architecture.

---

# 105. Architecture Approval Checklist

Before Angular initialization:

- [ ] Angular 22 approved
- [ ] Latest stable Angular 22 minor/patch policy approved
- [ ] Standalone components approved
- [ ] Static prerendering approved
- [ ] No runtime SSR server approved
- [ ] Cloudflare Pages approved
- [ ] TypeScript content model approved
- [ ] Research docs remain separate from runtime content
- [ ] Signals used only for appropriate UI state
- [ ] No NgRx approved
- [ ] SCSS design-system architecture approved
- [ ] No Tailwind approved
- [ ] No Angular Material/PrimeNG approved
- [ ] No backend approved
- [ ] Playwright approved
- [ ] GitHub Actions approved
- [ ] `main` + short-lived feature branches approved
- [ ] Dependency approval rule accepted
- [ ] SEO architecture approved
- [ ] theme architecture approved
- [ ] project route/slugs approved
- [ ] confidentiality boundary approved

---

# 106. Next Step

After architecture approval, create:

```text
AGENTS.md
```

The agent contract will convert these architectural decisions into enforceable implementation rules for:

- Codex;
- Antigravity;
- Claude/Kiro-style agents;
- future AI coding tools.

After `AGENTS.md` is committed, finish:

```text
docs/TESTING.md
docs/SEO.md
docs/ROADMAP.md
README.md
```

Then initialize Angular and begin implementation through small pull requests.
