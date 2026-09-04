# Abdelrahman Hegab Portfolio — Testing Strategy

**Document:** Testing Strategy  
**Status:** Draft for approval  
**Owner:** Abdelrahman Hegab  
**Product:** Professional Engineering Portfolio  
**Framework:** Angular 22  
**Unit / Component Runner:** Vitest  
**End-to-End:** Playwright  
**Last Updated:** September 2026

---

# 1. Purpose

This document defines how the portfolio will be tested.

The goal is not maximum test count or artificial coverage.

The goal is confidence that:

- public career content renders correctly;
- navigation works;
- project routes work;
- accessibility-critical interactions work;
- theme behavior works;
- prerendering works;
- responsive layouts remain usable;
- the production build is deployable;
- confidential research content is not accidentally published.

The testing strategy should remain proportional to the product.

This is a static professional portfolio, not a transaction-processing application.

---

# 2. Testing Principles

## 2.1 Test Behavior, Not Framework Internals

Tests should validate user-visible or architecture-critical behavior.

Good:

```text
Theme preference persists across reload.
```

Poor:

```text
ThemeService private variable equals "dark".
```

---

## 2.2 Do Not Test Static Copy Repeatedly

Do not create dozens of brittle tests asserting every paragraph.

Content correctness should primarily be validated by:

- typed content models;
- content-validation tests;
- editorial review;
- public-safety review.

---

## 2.3 Prefer High-Value Tests

Testing priority:

```text
1. Build / prerender
2. Navigation
3. Public content integrity
4. Theme
5. Mobile navigation
6. Accessibility behavior
7. Project routing
8. SEO metadata
9. Responsive smoke tests
10. Pure utility logic
```

---

# 3. Testing Stack

Approved stack:

```text
Angular TestBed
Vitest
jsdom
Playwright
```

Optional development dependency when coverage is required:

```text
@vitest/coverage-v8
```

Do not add:

- Jest;
- Karma;
- Jasmine;
- Cypress;

unless an explicit architecture change is approved.

---

# 4. Why Vitest

Angular CLI uses Vitest as the default test runner for new Angular applications.

Benefits for this project:

- integrated with Angular CLI;
- fast execution;
- modern test API;
- jsdom DOM environment;
- easy CI execution;
- coverage support;
- no Chrome/Karma infrastructure required for normal unit tests.

Use Angular's default CLI integration unless a real need requires a custom Vitest configuration.

---

# 5. Why Playwright

Playwright is the approved browser-level testing tool.

It is appropriate for:

- routing;
- navigation;
- responsive layouts;
- mobile menu;
- theme persistence;
- CV link behavior;
- browser accessibility smoke checks;
- direct route loading;
- production-like user flows.

Playwright also allows testing Chromium, Firefox, and WebKit where needed.

---

# 6. Test Pyramid

For this portfolio:

```text
              ┌──────────────┐
              │   Manual QA  │
              │ Visual / A11y│
              └──────┬───────┘
                     │
             ┌───────▼────────┐
             │ Playwright E2E │
             │ Critical flows │
             └───────┬────────┘
                     │
          ┌──────────▼──────────┐
          │ Component / Service │
          │ Vitest + TestBed    │
          └──────────┬──────────┘
                     │
          ┌──────────▼──────────┐
          │ Pure Unit / Content │
          │ Validation          │
          └─────────────────────┘
```

There should be many small high-value unit tests, fewer component tests, and a focused E2E suite.

---

# 7. Test Categories

## 7.1 Pure Unit Tests

Use for:

- project slug lookup;
- project ordering;
- theme resolution functions;
- content validation;
- sitemap helpers;
- SEO metadata builders;
- small data transformations.

These should not require Angular TestBed unless DI is needed.

---

## 7.2 Service Tests

Use Angular TestBed when testing services such as:

```text
ThemeService
SeoService
```

Only test behavior the application relies on.

---

## 7.3 Component Tests

Use for interactive shared components.

Strong candidates:

```text
ThemeToggle
MobileNavigation
ProjectCard
NextProjectNavigation
ArchitectureDiagram if interactive
```

Static prose components generally do not require dedicated tests.

---

## 7.4 Page Tests

Use sparingly.

Pages should mostly compose already-tested components and typed content.

Useful page tests:

- correct H1;
- flagship project ordering;
- correct project content resolved from slug;
- 404 behavior.

---

## 7.5 End-to-End Tests

Use Playwright for complete user flows.

These are especially important because:

- the application is route-heavy;
- public content must be directly reachable;
- mobile navigation matters;
- static hosting must support direct route entry.

---

# 8. Unit Test Naming

Recommended format:

```text
describe('ThemeService', ...)
```

Tests:

```text
it('uses the system theme when preference is system', ...)
it('persists an explicit dark theme preference', ...)
```

Prefer behavior statements.

Avoid:

```text
it('works', ...)
it('test 1', ...)
```

---

# 9. Arrange / Act / Assert

Keep tests readable.

Example:

```ts
it('returns the matching project by slug', () => {
  // Arrange
  const slug = 'upland-filebound';

  // Act
  const project = findProjectBySlug(slug);

  // Assert
  expect(project?.title).toContain('FileBound');
});
```

Comments are optional when structure is already obvious.

---

# 10. Content Validation Tests

This project requires specific content-integrity tests.

Validate:

- project slugs are unique;
- exactly one flagship project is featured if the design expects one;
- all project titles are present;
- every project has SEO metadata;
- every project has technology tags;
- every project has at least one engineering challenge;
- project navigation order is deterministic;
- all internal project links map to valid routes.

---

# 11. Confidentiality Validation

Add a small automated safety check over runtime content.

The check should scan only publishable runtime sources, such as:

```text
src/app/content/
```

It should reject known sensitive patterns where practical, for example:

```text
dev.azure.com/
internal repository URLs
connection-string markers
BEGIN PRIVATE KEY
password=
client_secret
```

This is defense in depth, not a substitute for human review.

Do not scan secrets by printing their values to CI logs.

---

# 12. Research Boundary Test

Add a build/test rule verifying that runtime code does not import from:

```text
docs/
```

The website must not package research Markdown into production.

A simple repository check may be sufficient.

Example concept:

```text
grep imports/references from src/ to docs/
→ fail if found
```

Implement cleanly for the platform in use.

---

# 13. Project Slug Tests

Approved project slugs:

```text
upland-filebound
moj-lawyer-licensing
scega-event-licensing
```

Tests should verify:

- all resolve;
- duplicate slugs fail validation;
- unknown slugs produce not-found behavior.

Do not duplicate slug lists across many tests if the runtime collection can be inspected directly.

---

# 14. Flagship Ordering Test

Current project order:

```text
1. Upland FileBound
2. MOJ Lawyer Licensing
3. SCEGA Event Licensing
```

If project cards are ordered from content metadata, validate ordering logic.

Do not hardcode this in multiple UI components.

---

# 15. Theme Tests

Test:

- default `system` preference;
- explicit `light`;
- explicit `dark`;
- localStorage persistence;
- system preference resolution;
- safe behavior when localStorage is unavailable;
- browser-only APIs do not break prerender tests.

---

# 16. Theme Flash

Visual flash is difficult to fully unit test.

Validate with:

- Playwright;
- manual testing;
- screenshots/video if needed.

The page should not visibly render light and then jump to dark after hydration.

---

# 17. Mobile Navigation Component Tests

Validate:

- menu button exposes accessible state;
- menu opens;
- menu closes;
- navigation click closes menu;
- Escape closes menu when implemented;
- focus behavior remains sensible;
- no duplicate hidden/visible nav confusion for assistive technologies.

---

# 18. Header Tests

Only test behavior:

- navigation links exist;
- current route can be indicated;
- CV action exists;
- theme toggle is reachable.

Do not snapshot the entire header HTML.

---

# 19. Project Card Tests

Validate:

- correct title;
- correct route;
- correct semantic link behavior;
- featured variant class/state if applicable;
- technology tags render from content.

Avoid testing CSS pixel values in unit tests.

---

# 20. Architecture Diagram Tests

If diagrams are non-interactive:

- minimal component tests;
- verify textual description exists;
- verify nodes are rendered;
- verify accessibility fallback.

Visual accuracy belongs in browser/manual QA.

---

# 21. SEO Tests

For each public route verify:

- title exists;
- description exists;
- canonical path exists;
- Open Graph title exists where required;
- Open Graph image path valid where required.

Project pages must generate project-specific metadata.

---

# 22. SEO Browser E2E

Playwright should verify at least:

```text
homepage title
project title
canonical link
meta description
OG title
```

for one or more representative pages.

The metadata helper itself should have unit tests for all pages.

---

# 23. Sitemap Tests

Generated sitemap should verify:

- valid XML;
- expected routes;
- all 3 project pages;
- no `/docs/` paths;
- no preview-only/private paths;
- base URL is valid.

---

# 24. Robots Tests

Production `robots.txt` should:

- permit intended crawling;
- reference production sitemap.

Preview deployments may rely on hosting headers/configuration rather than changing the committed production file.

---

# 25. CV Tests

Validate:

- configured CV path exists in build/public assets;
- homepage CV link points to it;
- CV page link points to it.

Playwright should verify that the request returns successfully.

Do not parse the PDF in E2E unless a real need exists.

---

# 26. External Link Tests

At minimum validate configured URL format for:

```text
LinkedIn
GitHub
mailto
```

Do not call LinkedIn/GitHub in every CI test.

External networks can create flaky tests.

---

# 27. Navigation E2E

Required:

```text
Home
→ Projects
→ Upland
→ Next Project
→ MOJ
→ Next Project
→ SCEGA
```

Also test:

```text
Home
→ Experience
Home
→ Engineering
Home
→ About
Home
→ Contact
```

---

# 28. Direct URL E2E

This is critical for static hosting.

Test direct entry into:

```text
/projects/upland-filebound
/projects/moj-lawyer-licensing
/projects/scega-event-licensing
/experience
/engineering
/about
/contact
```

Do not test only client-side navigation from `/`.

---

# 29. 404 E2E

Visit:

```text
/does-not-exist
```

Verify:

- user sees clear not-found content;
- Home link works;
- Projects link works if present;
- no blank page;
- no JavaScript exception.

---

# 30. Theme E2E

Required flow:

```text
Open page
Set dark
Reload
Verify dark remains
Navigate to project
Verify dark remains
Switch to light
Verify light
```

Also test system preference if practical.

---

# 31. Responsive Test Viewports

Required smoke viewports:

```text
390 × 844
768 × 1024
1440 × 900
```

Optional:

```text
1920 × 1080
```

The exact device names are less important than representative widths.

---

# 32. Responsive Checks

At mobile:

- no horizontal overflow;
- menu usable;
- project cards stack;
- CTA buttons usable;
- technology tags wrap;
- architecture visuals fit;
- body text readable.

At tablet:

- grid behaves intentionally;
- no awkward half-desktop layout.

At desktop:

- maximum content width respected;
- sections do not become excessively wide.

---

# 33. Cross-Browser Strategy

CI baseline:

```text
Chromium
```

Before release:

```text
Chromium
Firefox
WebKit
```

The full suite does not necessarily need to run on all browsers for every small PR.

Suggested:

```text
PR:
Chromium critical suite

main / release:
Chromium + Firefox + WebKit critical suite
```

---

# 34. Browser-Specific Risks

Pay extra attention to:

- CSS backdrop filter;
- theme preference;
- sticky header;
- SVG diagrams;
- focus behavior;
- mobile menu;
- PDF link/download behavior;
- CSS `clamp()`;
- logical properties / RTL-safe CSS if used.

---

# 35. Accessibility Automated Tests

Use a lightweight automated accessibility approach in Playwright if selected.

Potential tool:

```text
@axe-core/playwright
```

This is optional but recommended.

Because it is an additional dev dependency, add only when the E2E setup is implemented and explicitly document the dependency.

Automated checks should scan:

```text
homepage
projects index
one project case study
experience
contact
```

---

# 36. Accessibility Manual Checklist

For every release:

- navigate entire site using keyboard only;
- verify focus visibility;
- verify skip link;
- verify mobile menu;
- zoom browser to 200%;
- verify no clipped content;
- enable reduced motion;
- test light/dark contrast;
- inspect heading order;
- verify icon-only buttons have names.

---

# 37. Screen Reader Smoke Test

Before initial public launch, manually test representative flows with a screen reader where possible.

Minimum:

```text
Hero
Main navigation
Selected projects
Project detail
Mobile menu
Contact links
```

No need to test every paragraph separately.

---

# 38. Visual Testing

Do not begin v1 with a huge screenshot-baseline suite.

Visual regression tests can become expensive to maintain during active design iteration.

Instead:

Phase 1:

```text
manual preview review
responsive browser QA
```

Phase 2 after design stabilizes:

consider Playwright screenshot tests for:

```text
homepage
featured project card
project case study hero
dark theme
mobile menu
```

---

# 39. Snapshot Tests

Avoid broad DOM snapshots.

They create noisy failures when content changes.

Prefer targeted assertions.

---

# 40. Coverage

Coverage is a diagnostic tool, not a target.

Do not impose:

```text
90% everywhere
```

for a content-heavy portfolio.

Suggested approach:

- enable coverage reports periodically;
- inspect important logic;
- avoid dropping meaningful logic entirely untested.

Potential minimum thresholds may be introduced later for:

```text
functions / utilities / services
```

only after real baseline data exists.

---

# 41. Coverage Command

When configured:

```text
ng test --coverage
```

Angular's current Vitest integration uses V8 coverage via:

```text
@vitest/coverage-v8
```

Do not install it until coverage reporting is actually needed.

---

# 42. No Fake Coverage Tests

Never add trivial tests only to raise coverage.

Examples of poor tests:

```text
expect(true).toBe(true)
```

or dozens of component-construction-only tests.

---

# 43. Prerender Build Test

The most important automated architecture test is the production build.

It must confirm:

- Angular compiles;
- TypeScript compiles;
- prerender succeeds;
- every static route generates;
- browser-only code does not crash build rendering.

A failed prerender is a release blocker.

---

# 44. Build Command

Exact npm scripts will be finalized after project initialization.

Expected concept:

```text
npm run build
```

CI must use production configuration.

---

# 45. Prerender Route Verification

After build, validate expected generated output.

At minimum verify files/routes exist for:

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

Exact output paths depend on Angular 22 build output and must be verified after initialization.

---

# 46. Production Static Server Test

Before deploy, serve the generated static output locally.

Test:

- direct route navigation;
- refresh on deep route;
- 404 behavior;
- assets;
- CV;
- theme;
- project navigation.

Use a lightweight static server only for local testing if necessary.

Do not add runtime production server architecture.

---

# 47. Cloudflare Preview QA

For meaningful UI PRs:

1. open preview deployment;
2. test desktop;
3. test mobile;
4. test dark/light;
5. click navigation;
6. open project page directly;
7. inspect console;
8. verify metadata when relevant.

Preview QA is part of the workflow, not a replacement for automated tests.

---

# 48. Console Quality

Normal user flows must not emit:

- errors;
- unhandled promise rejections;
- Angular hydration/prerender warnings;
- broken asset errors.

Warnings should be investigated.

---

# 49. CI Test Jobs

Recommended structure:

```text
quality
  npm ci
  lint
  ng test --watch=false
  build

e2e
  npm ci
  install Playwright browser
  build
  serve static output
  playwright test
```

Potential later optimization:

cache npm and Playwright browser artifacts appropriately.

Do not over-optimize CI before it becomes slow.

---

# 50. Pull Request Required Checks

Once CI is stable:

Required before merge:

```text
lint
unit tests
production build
critical Playwright E2E
```

Optional/manual:

```text
preview visual review
```

---

# 51. Main Branch Tests

On push to `main` run:

- all required PR checks;
- broader browser E2E if configured;
- production deployment through Cloudflare Pages integration.

---

# 52. Nightly Tests

Not needed for v1.

The site has no changing APIs/data.

Add scheduled tests only if future dynamic integrations justify them.

---

# 53. Test Data

No fixtures involving fake user/customer data are needed.

Career content itself is static test data.

If test project objects are needed, use clearly synthetic examples:

```text
test-project
Example Project
```

Do not copy confidential internal research into fixtures.

---

# 54. Mocking

Mock only boundaries.

Examples:

- `matchMedia`;
- localStorage failure;
- SEO DOM dependencies where required.

Do not mock plain TypeScript functions unnecessarily.

---

# 55. localStorage Tests

Use controlled test storage.

Validate graceful handling of exceptions, since browser privacy/security settings can theoretically restrict storage.

Failure should fall back to system/default theme.

---

# 56. `matchMedia` Tests

Mock:

```text
prefers-color-scheme: dark
prefers-color-scheme: light
```

Validate system theme resolution.

---

# 57. Platform / SSR Safety Tests

Critical services/components that touch browser APIs should be tested in a context that catches accidental server/prerender access.

The production prerender build remains the strongest integration test for this.

---

# 58. Route Metadata Tests

Create an expected route metadata matrix.

Example:

| Route | Expected Title Fragment |
|---|---|
| `/` | Abdelrahman Hegab |
| `/experience` | Experience |
| `/projects` | Projects |
| `/projects/upland-filebound` | FileBound |
| `/projects/moj-lawyer-licensing` | Ministry of Justice |
| `/projects/scega-event-licensing` | SCEGA |
| `/engineering` | Engineering |
| `/about` | About |
| `/contact` | Contact |

Do not require exact full-title text if minor editorial changes should not break tests unnecessarily.

---

# 59. HTML Semantics Tests

Automated checks can verify key structural requirements:

Homepage:

```text
one H1
main landmark
nav landmark
footer
```

Project:

```text
one H1
main
architecture description
```

Do not attempt to encode every semantic rule in unit tests.

---

# 60. Project Case Study Contract Tests

For each project validate:

```text
slug
title
summary
role
focus
technology list
at least 2 engineering challenges
SEO
```

Do not expose or test raw research evidence.

---

# 61. Technology Integrity

Content validation may maintain a known technology taxonomy.

This can catch spelling inconsistencies such as:

```text
ASP.NET Core
TypeScript
SQL Server
```

Do not make taxonomy so rigid that every new legitimate tag requires difficult code changes.

---

# 62. Broken Internal Links

Create a script or E2E test that follows internal nav/project links.

No internal link should lead to a 404.

---

# 63. Download Link Behavior

CV link may use:

```text
download
```

or open in browser depending on UX decision.

Test actual intended behavior.

Do not depend on browser-specific PDF viewer behavior beyond successful file access.

---

# 64. Reduced Motion Test

Playwright can emulate:

```text
reducedMotion: 'reduce'
```

Verify content remains visible and navigation still works.

Animations must never be required to reveal content.

---

# 65. Dark Mode Visual QA

Check:

- contrast;
- border visibility;
- code/diagram labels;
- project-card hierarchy;
- focus states;
- hover states;
- icons;
- primary color readability.

---

# 66. Light Mode Visual QA

Check:

- low-contrast muted text;
- border visibility;
- primary button;
- subtle backgrounds;
- architecture lines;
- focus ring.

---

# 67. No Horizontal Overflow Test

Playwright may check:

```js
document.documentElement.scrollWidth <= window.innerWidth
```

on representative pages/viewports.

This is useful for:

- architecture diagrams;
- long technology tags;
- mobile cards.

Allow carefully designed internal scroll areas only when intentional.

---

# 68. Performance Testing

Do not run Lighthouse as a blocking test on every commit initially.

Use:

```text
manual/local Lighthouse
Cloudflare preview Lighthouse
```

before milestones/releases.

Potential later:

```text
Lighthouse CI
```

after the site stabilizes.

---

# 69. Performance Release Checklist

Review:

- JS bundle;
- CSS bundle;
- font loading;
- image sizes;
- layout shifts;
- route loading;
- mobile performance;
- prerender output.

---

# 70. Lighthouse Targets

Targets from architecture/design:

```text
Performance       95+
Accessibility     95+
Best Practices    95+
SEO               95+
```

Treat these as quality goals, not permission to make UX worse to reach 100.

---

# 71. Test File Location

Unit/component tests colocated:

```text
theme.service.spec.ts
project-card.component.spec.ts
```

E2E:

```text
tests/e2e/
├── home.spec.ts
├── navigation.spec.ts
├── projects.spec.ts
├── theme.spec.ts
├── accessibility.spec.ts
└── smoke.spec.ts
```

---

# 72. E2E Page Objects

Do not create a complex Page Object Model for a small site initially.

Simple helper functions are enough.

If tests become repetitive, add small page helpers.

Avoid enterprise test architecture without need.

---

# 73. Playwright Config

Recommended principles:

```text
baseURL configured
trace on first retry
screenshot on failure
video on failure or retry
parallel where safe
retries in CI
```

Exact config should follow current Playwright best practices at implementation time.

---

# 74. Test IDs

Prefer semantic selectors:

```text
getByRole
getByLabel
getByText
```

Use:

```text
data-testid
```

only where semantic selection is impractical.

Do not fill production markup with unnecessary test IDs.

---

# 75. E2E Selector Stability

Good:

```ts
page.getByRole('link', { name: 'View My Work' })
```

Poor:

```ts
page.locator('.hero > div:nth-child(3) > a')
```

Tests should survive harmless layout refactors.

---

# 76. Visual Content Assertions

Do not assert entire paragraphs exactly unless legal/factual wording is intentionally immutable.

Prefer:

```text
heading exists
project exists
key phrase exists
```

Editorial copy will evolve.

---

# 77. CI Flakiness Policy

A flaky test is a defect.

Do not:

- add arbitrary sleeps;
- retry everything repeatedly;
- ignore failures.

Use explicit Playwright waiting through locators/state.

Fix race conditions.

---

# 78. Timeouts

Use default/tool-recommended timeouts where possible.

Do not globally raise timeouts to hide slow/broken tests.

Only use custom timeout for a justified operation.

---

# 79. No Live Backend Tests

There is no application backend.

E2E should not call:

- private project systems;
- company websites;
- government APIs.

The portfolio must remain self-contained.

---

# 80. No Internet Dependency in Unit Tests

Unit tests should run offline after dependencies are installed.

Do not retrieve:

- GitHub profile;
- LinkedIn;
- fonts;
- project data;

during unit tests.

---

# 81. Font Testing

Do not fail tests if an external font provider is temporarily unavailable.

Prefer self-contained font strategy where appropriate.

Layout should remain acceptable with fallback fonts.

---

# 82. Build Output Security Check

Before release, inspect build output for accidental strings such as:

```text
dev.azure.com
3pillars-eg.com internal addresses
@moj.gov.sa
client_secret
connection strings
```

Only use carefully selected patterns.

Some public company names may legitimately appear; tests should avoid false positives.

---

# 83. Source Map Review

Decide production source-map settings during Angular initialization.

No sensitive data should exist in source code regardless of source maps.

Do not treat disabled source maps as a substitute for confidentiality.

---

# 84. Dependency Audit

CI may run:

```text
npm audit
```

as informational initially.

Do not automatically apply breaking `npm audit fix --force`.

Security updates should be reviewed.

---

# 85. Package Version Testing

Renovation/dependency bots are optional and out of v1 scope.

Before major dependency upgrades:

- run unit tests;
- run build;
- run E2E;
- review Angular compatibility.

---

# 86. Release Test Matrix

Before first production launch:

## Functional

- [ ] Home
- [ ] Experience
- [ ] Projects
- [ ] Upland
- [ ] MOJ
- [ ] SCEGA
- [ ] Engineering
- [ ] About
- [ ] Contact
- [ ] CV
- [ ] 404

## Navigation

- [ ] Desktop nav
- [ ] Mobile nav
- [ ] Previous/next project
- [ ] Logo/home
- [ ] CV
- [ ] LinkedIn
- [ ] GitHub
- [ ] Email

## Themes

- [ ] System
- [ ] Light
- [ ] Dark
- [ ] Persistence
- [ ] No obvious flash

## Responsive

- [ ] 390
- [ ] 768
- [ ] 1440
- [ ] No overflow

## Accessibility

- [ ] Keyboard
- [ ] Focus
- [ ] Skip link
- [ ] Headings
- [ ] Contrast
- [ ] Reduced motion
- [ ] 200% zoom

## SEO

- [ ] titles
- [ ] descriptions
- [ ] canonicals
- [ ] OG
- [ ] sitemap
- [ ] robots
- [ ] structured data

## Production

- [ ] prerender build
- [ ] direct URLs
- [ ] preview
- [ ] Cloudflare deploy
- [ ] console clean

---

# 87. Definition of Done — Unit-Testable Logic

When adding logic:

- add focused tests where failure is meaningful;
- edge cases tested;
- test names explain behavior;
- no implementation-detail coupling;
- no fake coverage tests.

---

# 88. Definition of Done — Interactive Component

Required:

- component tests if behavior is non-trivial;
- keyboard behavior reviewed;
- accessible name/state;
- mobile behavior;
- theme behavior;
- E2E if part of critical journey.

---

# 89. Definition of Done — Page

Required:

- route works;
- direct route works after prerender/static hosting;
- H1 correct;
- SEO present;
- responsive;
- no overflow;
- critical links work.

---

# 90. Definition of Done — Case Study

Required:

- content-contract validation;
- project route E2E;
- architecture visual responsive;
- SEO;
- next/previous links;
- public-safety review;
- no internal research leakage.

---

# 91. Definition of Done — Release

Release is not ready if:

- build fails;
- prerender fails;
- critical E2E fails;
- direct route fails;
- mobile navigation fails;
- CV missing;
- console has errors;
- confidential content is detected;
- major accessibility blocker remains.

---

# 92. Agent Testing Rules

AI agents must:

1. run tests relevant to their change;
2. run production build for implementation tasks;
3. report exact commands run;
4. report failures honestly;
5. never claim tests passed without execution.

---

# 93. Small Documentation-Only Changes

For Markdown-only changes:

Full Angular test suite is not required unless the docs affect generated/runtime content.

At minimum:

- review diff;
- validate links/paths referenced;
- ensure documentation consistency.

---

# 94. Content-Only Runtime Changes

When modifying:

```text
src/app/content/
```

run:

- content validation tests;
- production build;
- relevant project/home E2E when practical.

---

# 95. Style-Only Changes

Run:

- build;
- relevant Playwright page;
- responsive visual QA;
- light/dark review.

Unit tests may not add value unless component behavior changed.

---

# 96. Refactoring

Run the tests covering the affected behavior.

Also run:

```text
production build
```

A refactor must not change public content unless explicitly intended.

---

# 97. CI Failure Handling

If CI fails:

1. inspect actual failure;
2. reproduce locally where possible;
3. determine whether failure is new;
4. fix root cause;
5. do not disable the check merely to merge.

Temporary disabling requires explicit approval and documented reason.

---

# 98. Test Maintenance

Delete obsolete tests when behavior is intentionally removed.

Do not keep dead tests commented out.

Update tests as requirements change.

---

# 99. Testing Roadmap

## Phase 1 — Initialization

- Vitest default Angular setup
- baseline app tests
- content validators

## Phase 2 — App Shell

- ThemeService tests
- theme toggle tests
- navigation component tests

## Phase 3 — Core Pages

- project lookup tests
- homepage project ordering
- project-card behavior

## Phase 4 — Case Studies

- content contract validation
- project route E2E
- previous/next navigation

## Phase 5 — Browser QA

- Playwright setup
- mobile navigation
- theme persistence
- direct routes
- 404

## Phase 6 — Accessibility / SEO

- automated accessibility checks
- SEO metadata tests
- sitemap validation

## Phase 7 — Release

- cross-browser critical suite
- Lighthouse review
- static deployment QA

---

# 100. Approved Commands

The repository exposes these testing and quality commands:

```text
npm test
npm run test:ci
npm run test:e2e
npm run test:e2e:headed
npm run lint
npm run build
```

Install the Chromium browser once after installing dependencies:

```text
npx playwright install chromium
```

Playwright starts the Angular development server automatically at
`http://127.0.0.1:4200`; a manually started server is not required.

Do not create redundant aliases without need.

---

# 101. Vitest Watch Behavior

Local development:

```text
ng test
```

may run in watch mode.

CI must run non-interactively.

The final CI command should follow the installed Angular 22 CLI behavior rather than relying on assumptions from older Karma tooling.

---

# 102. Browser Unit Testing

Most unit/component tests should run with jsdom.

Use real-browser unit mode only for behavior that genuinely depends on browser rendering/APIs.

Playwright E2E already covers browser-level flows.

Avoid duplicating the same test at every layer.

---

# 103. Test Ownership

The developer/agent implementing a behavioral feature owns its relevant tests.

Do not defer all testing to a final "testing phase."

Testing is part of implementation.

---

# 104. Test Review Questions

Before approving a test:

- Does this catch a real regression?
- Is it testing behavior?
- Is it stable?
- Is it readable?
- Does it duplicate an E2E test without benefit?
- Is it coupled to CSS/layout?
- Will a harmless copy change break it?
- Does it expose internal data?

---

# 105. What Not to Test

Do not spend time testing:

- Angular itself;
- static CSS token values through unit tests;
- every static paragraph;
- every technology tag individually;
- third-party website availability;
- browser PDF rendering internals;
- framework-generated boilerplate with no behavior.

---

# 106. Final Testing Principle

The testing strategy should demonstrate the same engineering judgment as the application architecture:

> Test the things that can materially damage correctness, credibility, accessibility, navigation, public safety, and deployment—without creating a large brittle test suite for a static portfolio.

The portfolio should be easy to change confidently, not difficult to change because every sentence has a snapshot test.
