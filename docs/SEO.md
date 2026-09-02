# Abdelrahman Hegab Portfolio — SEO Strategy

**Document:** SEO Strategy  
**Status:** Draft for approval  
**Owner:** Abdelrahman Hegab  
**Product:** Professional Engineering Portfolio  
**Framework:** Angular 22  
**Rendering:** Static prerendering  
**Hosting:** Cloudflare Pages  
**Last Updated:** September 2026

---

# 1. Purpose

This document defines how the portfolio will be made discoverable, indexable, shareable, and understandable to search engines and social platforms.

The SEO goal is not high-volume traffic.

The goal is to make it easy for:

- recruiters;
- engineering managers;
- CTOs;
- hiring teams;
- professional contacts;

to find and understand Abdelrahman Hegab's engineering profile.

---

# 2. SEO Objectives

Primary objectives:

1. Rank reliably for Abdelrahman's full name.
2. Clearly associate Abdelrahman with:
   - Senior Software Engineer;
   - .NET;
   - Angular;
   - Software Architecture;
   - Enterprise SaaS;
   - Government Digital Services.
3. Make flagship project case studies indexable.
4. Produce strong social/link previews.
5. Avoid duplicate/canonical ambiguity.
6. Prevent private/internal research content from being indexed or published.
7. Keep the technical implementation simple and static.

---

# 3. Search Intent

The portfolio primarily targets branded and professional search intent.

Examples:

```text
Abdelrahman Hegab
Abdelrahman Hegab software engineer
Abdelrahman Hegab .NET
Abdelrahman Hegab Angular
Abdelrahman Hegab portfolio
Abdelrahman Hegab Upland
Abdelrahman Hegab Three Pillars
```

Secondary long-tail intent may include:

```text
Senior .NET Angular engineer Egypt
Senior full stack .NET Angular engineer
.NET Angular software architect
enterprise SaaS .NET Angular engineer
government digital services Angular .NET
```

Do not unnaturally repeat these phrases.

---

# 4. SEO Principle

Write for humans first.

Search optimization should come from:

- clear page topics;
- accurate headings;
- public-safe technical content;
- semantic HTML;
- useful project case studies;
- descriptive titles;
- internal linking;
- prerendered HTML;
- correct metadata.

Do not use keyword stuffing.

---

# 5. Rendering Strategy

The site uses Angular static prerendering.

Every indexable route should produce meaningful HTML during build.

Search engines should not need JavaScript to discover the primary content.

This applies to:

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

---

# 6. Indexable Route Strategy

Index:

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

Do not index:

- internal research documents;
- source files;
- preview/debug pages;
- test pages;
- temporary staging-only routes.

The `docs/` directory must never be published as a browsable production content area.

---

# 7. URL Structure

Approved URLs:

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

Rules:

- lowercase;
- hyphens;
- descriptive;
- no numeric IDs;
- no file extensions;
- stable after launch.

Avoid changing slugs after indexing.

---

# 8. Canonical Domain

Before the custom domain is purchased, configure the site with a temporary base URL.

Do not spread the temporary Cloudflare URL throughout source code.

Centralize:

```ts
siteConfig.baseUrl
```

Once the custom domain is approved:

1. update `siteConfig.baseUrl`;
2. regenerate sitemap;
3. update canonical URLs;
4. update Open Graph URLs;
5. update Search Console property;
6. redirect old production hostname where appropriate.

---

# 9. Canonical URLs

Every indexable page should include:

```html
<link rel="canonical" href="https://example.com/path">
```

Rules:

- self-referencing canonical;
- absolute URL;
- one canonical only;
- no query-string variations unless intentionally canonicalized.

---

# 10. Page Title Pattern

Recommended general pattern:

```text
Primary Page Topic | Abdelrahman Hegab
```

Homepage exception:

```text
Abdelrahman Hegab | Senior Software Engineer
```

Keep titles concise and meaningful.

---

# 11. Homepage Metadata

## Title

Recommended:

```text
Abdelrahman Hegab | Senior Software Engineer
```

Alternative:

```text
Abdelrahman Hegab | Senior .NET & Angular Engineer
```

Recommended final default:

```text
Abdelrahman Hegab | Senior Software Engineer
```

## Description

Recommended:

```text
Senior Software Engineer with 10+ years of experience in .NET, Angular, software architecture, enterprise SaaS, and government digital platforms.
```

Do not add unsupported claims.

---

# 12. Experience Page Metadata

Title:

```text
Experience | Abdelrahman Hegab
```

Description:

```text
Explore Abdelrahman Hegab's software engineering experience across enterprise SaaS, .NET, Angular, government digital services, integrations, and technical leadership.
```

---

# 13. Projects Index Metadata

Title:

```text
Engineering Projects | Abdelrahman Hegab
```

Description:

```text
Selected software engineering case studies covering enterprise SaaS, government digital services, .NET, Angular, integrations, security, and production engineering.
```

---

# 14. Upland FileBound Metadata

Title:

```text
Upland FileBound Engineering Case Study | Abdelrahman Hegab
```

Description:

```text
A software engineering case study covering nearly five years of work on Upland FileBound across .NET, APIs, workflow, integrations, security, performance, and production support.
```

Do not add unsupported performance numbers.

---

# 15. MOJ Case Study Metadata

Title:

```text
Saudi Ministry of Justice Lawyer Licensing Case Study | Abdelrahman Hegab
```

Description:

```text
Full-stack engineering case study for a Saudi government lawyer-licensing platform covering .NET 8, Vue, integration architecture, security, and reusable frontend patterns.
```

---

# 16. SCEGA Case Study Metadata

Title:

```text
SCEGA Event Licensing Platform Case Study | Abdelrahman Hegab
```

Description:

```text
Engineering case study for a Saudi government event-licensing platform covering Angular 19 architecture, reusable components, .NET 9, CQRS, authentication, and complex workflows.
```

---

# 17. Engineering Page Metadata

Title:

```text
Engineering Approach | Abdelrahman Hegab
```

Description:

```text
How Abdelrahman Hegab approaches backend engineering, Angular architecture, APIs, distributed systems, production reliability, technical leadership, and AI-assisted development.
```

---

# 18. About Page Metadata

Title:

```text
About | Abdelrahman Hegab
```

Description:

```text
Learn about Abdelrahman Hegab's journey from Microsoft technology training to senior software engineering across SaaS, enterprise systems, and government digital platforms.
```

---

# 19. Contact Page Metadata

Title:

```text
Contact | Abdelrahman Hegab
```

Description:

```text
Contact Abdelrahman Hegab for senior software engineering opportunities involving .NET, Angular, software architecture, enterprise systems, and complex integrations.
```

---

# 20. CV Page Metadata

Title:

```text
CV | Abdelrahman Hegab
```

Description:

```text
View or download Abdelrahman Hegab's professional CV covering senior software engineering experience in .NET, Angular, SaaS, architecture, and government systems.
```

---

# 21. 404 Metadata

Title:

```text
Page Not Found | Abdelrahman Hegab
```

404 should not be intentionally included in sitemap.

If supported cleanly:

```text
noindex
```

may be applied to the not-found page.

---

# 22. SEO Metadata Model

Use centralized typed metadata:

```ts
interface SeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;

  noindex?: boolean;
}
```

Project content should include its SEO metadata.

---

# 23. SeoService Responsibilities

A centralized service should manage:

- document title;
- description;
- canonical link;
- Open Graph title;
- Open Graph description;
- Open Graph URL;
- Open Graph image;
- Open Graph type;
- optional Twitter/X card metadata;
- robots metadata for exceptional routes.

Do not duplicate meta-tag update code in page components.

---

# 24. Page Metadata Flow

Conceptually:

```text
Route
  ↓
Page / Project Content
  ↓
SeoMetadata
  ↓
SeoService
  ↓
Document Head
```

Project detail pages resolve metadata from the project model.

---

# 25. Open Graph Basics

Required:

```text
og:title
og:description
og:type
og:url
og:image
```

Homepage type:

```text
website
```

Project pages may remain:

```text
website
```

or use a suitable content type if intentionally configured.

Keep implementation simple.

---

# 26. Twitter / X Cards

Recommended:

```text
twitter:card = summary_large_image
twitter:title
twitter:description
twitter:image
```

This is useful even when the link is shared outside X because several preview systems understand similar metadata.

---

# 27. Open Graph Image Size

Use:

```text
1200 × 630
```

Format:

```text
PNG
```

or well-optimized JPEG/WebP where preview compatibility is verified.

Recommended:

```text
PNG
```

for text-heavy branded visuals.

---

# 28. Open Graph Assets

Recommended:

```text
public/og/
├── home.png
├── experience.png
├── projects.png
├── upland-filebound.png
├── moj-lawyer-licensing.png
├── scega-event-licensing.png
└── engineering.png
```

Not every minor page requires a unique image.

Fallback to homepage OG image when appropriate.

---

# 29. OG Visual Style

Follow Design System:

```text
Dark/navy neutral background
Primary blue accent
Subtle architecture pattern
Clear typography
```

Example homepage:

```text
Abdelrahman Hegab

Senior Software Engineer

.NET · Angular · Architecture · Enterprise Systems
```

---

# 30. Project OG Image Content

Example:

```text
Upland FileBound

Enterprise SaaS Engineering Case Study

.NET · APIs · Workflow · Integrations
```

Do not include customer screenshots.

---

# 31. OG Image Safety

Never include:

- private system screenshots;
- internal architecture;
- ticket IDs;
- internal domains;
- client data;
- source code screenshots containing private content.

---

# 32. Structured Data

Homepage should include `Person` JSON-LD.

Potential structure:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abdelrahman Hegab",
  "jobTitle": "Senior Software Engineer",
  "url": "https://example.com",
  "sameAs": [
    "LinkedIn",
    "GitHub"
  ]
}
```

Use actual approved URLs in implementation.

---

# 33. Structured Data Rules

Only include information visible or clearly supported publicly.

Do not include:

- salary;
- private address;
- private phone;
- unapproved employer relationships;
- uncertain project dates;
- unsupported awards.

---

# 34. Person Location

If location is included, keep it public/general.

Example:

```text
Cairo, Egypt
```

Do not include residential address.

---

# 35. Person Expertise

Do not dump dozens of keywords into structured data.

If `knowsAbout` is used later, keep it limited to core professional areas.

Example:

```text
.NET
Angular
Software Architecture
Enterprise Software
```

Optional, not required for v1.

---

# 36. Project Structured Data

Do not add complex structured data to project pages initially.

Potential future:

```text
CreativeWork
```

Only if it provides a clear benefit and accurate representation.

No need to optimize for rich-result types the site does not qualify for.

---

# 37. Breadcrumbs

Visible breadcrumb on project pages:

```text
Projects / Upland FileBound
```

Could later include breadcrumb structured data.

Not required for initial launch.

---

# 38. Heading Structure — Homepage

Recommended:

```text
H1
Abdelrahman Hegab

H2
Selected Work

H2
Experience

H2
Engineering Expertise

H2
How I Engineer

H2
AI-Augmented Engineering

H2
Credentials
```

Do not make every card title an H2.

Use H3 inside sections where appropriate.

---

# 39. Heading Structure — Project Page

Example:

```text
H1
Upland FileBound

H2
Overview

H2
My Role

H2
Architecture

H2
Engineering Challenges

H3
Workflow Challenge

H3
Integration Reliability

H2
Technology Stack

H2
Lessons
```

---

# 40. Semantic HTML

Use:

```text
<header>
<nav>
<main>
<section>
<article>
<footer>
```

where meaningful.

Project case study may use:

```text
<article>
```

for the main content.

Avoid excessive `<div>` nesting.

---

# 41. Link Text

Good:

```text
View Upland FileBound case study
```

Acceptable UI label:

```text
View Case Study
```

when card context makes destination unambiguous.

Poor:

```text
Click here
Read more
```

without context.

---

# 42. Internal Linking

Homepage should link to:

- Projects;
- each flagship case study;
- Experience;
- Engineering;
- Contact;
- CV.

Experience page should link to relevant project pages.

Engineering page should link to project examples.

Project pages should link to:

- Projects index;
- related engineering topics where useful;
- previous/next project.

---

# 43. Internal Linking Principle

Each major page should have at least one natural route to another relevant page.

Avoid isolated pages.

Do not add artificial keyword-heavy links.

---

# 44. Project-to-Experience Linking

Example:

```text
Upland FileBound
→ related FlairsTech/Upland experience
```

MOJ/SCEGA:

```text
→ related Three Pillars experience
```

This reinforces professional context.

---

# 45. Experience-to-Project Linking

Experience entries may include:

```text
Related case study
```

This helps recruiters move from timeline claims to technical evidence.

---

# 46. Content Depth

Flagship project pages should be substantial enough to demonstrate engineering depth.

Do not optimize them into 150-word marketing pages.

Case studies should explain:

- context;
- personal role;
- architecture;
- challenges;
- decisions;
- lessons.

This naturally creates high-quality indexable content.

---

# 47. Keyword Strategy

Use important terms naturally.

Core:

```text
Senior Software Engineer
.NET
Angular
Software Architecture
Enterprise SaaS
Government Digital Services
ASP.NET Core
TypeScript
SQL Server
Microservices
REST APIs
```

Project-specific terms should be used only where true.

---

# 48. SCEGA SEO Accuracy

Allowed:

```text
Angular 19
.NET 9
CQRS
MediatR
Clean Architecture
event licensing
government digital platform
```

Do not use:

```text
Micro Frontends
Module Federation
microservices
```

for SCEGA.

---

# 49. MOJ SEO Accuracy

Allowed:

```text
.NET 8
Vue
government licensing
integration architecture
security
micro frontend
```

Do not add technologies not verified for the project.

---

# 50. Upland SEO Accuracy

Allowed:

```text
enterprise SaaS
document workflow
.NET
Web API
Dapper
SQL Server
Angular
integrations
security
performance
production support
```

Avoid internal product architecture details beyond approved public-safe wording.

---

# 51. Keyword Stuffing Prohibited

Bad:

```text
Senior .NET Angular software engineer .NET developer Angular developer
software architect senior full stack developer...
```

Do not write unnatural copy.

---

# 52. Name Consistency

Use:

```text
Abdelrahman Hegab
```

consistently.

Do not alternate between:

- Abdelrahman Nasser;
- Abdelrahman N. Hegab;
- A. Hegab;

unless there is a specific approved reason.

Consistency improves professional identity association.

---

# 53. Job Title Consistency

Primary public title:

```text
Senior Software Engineer
```

Secondary descriptors:

```text
.NET & Angular
Software Architecture
Enterprise & SaaS Systems
```

Do not rotate between many competing titles in metadata.

---

# 54. Company / Client Naming

Use company/client names only where already approved and publicly appropriate.

Do not expose internal business relationships based only on Git metadata.

---

# 55. Project Dates

Do not include unresolved project dates in metadata.

Current MOJ/SCEGA timeline inconsistencies must remain excluded until manually reconciled.

---

# 56. Sitemap

Generate:

```text
public/sitemap.xml
```

Expected entries:

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

Do not include:

```text
/404
/docs
```

---

# 57. Sitemap Generation

Preferred implementation:

```text
scripts/generate-sitemap.mjs
```

Inputs:

- configured production base URL;
- known static routes;
- project slugs.

Generate automatically during build/release.

---

# 58. Sitemap Source of Truth

Project URLs should derive from the same project data/slugs used by Angular where practical.

Avoid maintaining:

```text
project list in app
+
unrelated hardcoded list in sitemap
```

If a small explicit export is cleaner, keep both validated.

---

# 59. Sitemap `lastmod`

Optional.

Do not populate misleading dates.

If included, derive from a real build/content timestamp.

Not required for v1.

---

# 60. Sitemap Priority / Change Frequency

Do not spend time on:

```text
priority
changefreq
```

They provide little value for this portfolio.

Keep sitemap simple.

---

# 61. Robots File

Production:

```text
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Update domain before launch.

---

# 62. Preview Deployments

Cloudflare preview deployments should not become indexed as competing canonical pages.

Preferred protections may include:

- canonical pointing to production URL;
- preview-specific `X-Robots-Tag: noindex`;
- platform access/protection where available.

Exact Cloudflare implementation should be verified at deployment time.

---

# 63. Staging / Preview Canonical

Preview pages should not self-canonicalize to their temporary preview domain.

Use production canonical base when safe.

Before custom domain is finalized, treat the chosen production Pages domain as canonical production.

---

# 64. Redirect Strategy

Once a custom domain is selected:

```text
Cloudflare Pages hostname
→ custom domain
```

should ideally redirect/canonicalize consistently as supported by hosting configuration.

Avoid having two independently indexable production hostnames.

---

# 65. WWW Strategy

If the final domain supports both:

```text
www.example.com
example.com
```

choose one canonical hostname.

Redirect the other permanently.

Do not serve both without canonical consistency.

---

# 66. HTTPS

Production must use HTTPS.

Cloudflare provides HTTPS for Pages/custom domains.

No HTTP page should be canonical.

---

# 67. Trailing Slash Policy

Choose a consistent policy based on Angular/Cloudflare output.

Examples:

```text
/projects/upland-filebound
```

not a mixture of:

```text
/projects/upland-filebound/
/projects/upland-filebound
```

Canonical and internal links should match the chosen form.

---

# 68. Case Sensitivity

All internal URLs lowercase.

Do not generate:

```text
/Projects/Upland-FileBound
```

---

# 69. Query Parameters

The portfolio does not need indexable query-parameter variants.

Avoid creating pages like:

```text
/projects?category=angular
```

for v1.

If filters are added later, canonicalize appropriately.

---

# 70. Duplicate Content

Do not publish full CV text on multiple pages word-for-word.

Experience page should expand/contextualize the CV.

About page should tell the career story.

Case studies should provide engineering evidence.

Each page should have a distinct purpose.

---

# 71. Homepage vs About

Homepage:

```text
fast scan
```

About:

```text
professional narrative
```

Avoid copy-pasting the same long biography onto both.

---

# 72. Experience vs CV

CV:

```text
formal career document
```

Experience page:

```text
web-oriented career context
```

Avoid exact duplication.

---

# 73. Project Index vs Project Detail

Index:

```text
selection / summaries
```

Detail:

```text
deep engineering story
```

Do not reproduce full case studies on index.

---

# 74. CV PDF Discoverability

CV may be indexable as a PDF depending on hosting/search behavior.

That is acceptable if it contains approved public information.

Ensure:

- correct filename;
- text-based PDF;
- no outdated/private metadata if avoidable.

---

# 75. CV Filename

Use:

```text
Abdelrahman-Hegab-CV.pdf
```

Descriptive and stable.

---

# 76. PDF Metadata

When the CV PDF is next regenerated, prefer:

```text
Title: Abdelrahman Hegab — CV
Author: Abdelrahman Hegab
Subject: Senior Software Engineer
```

Avoid internal/generated tool metadata where practical.

This belongs to the CV generation workflow, not Angular.

---

# 77. Image SEO

For meaningful images:

- descriptive alt text;
- meaningful filenames;
- dimensions defined;
- optimized size.

Example:

```text
upland-filebound-architecture.svg
```

not:

```text
image1.svg
```

---

# 78. Architecture Image Alt Text

If diagram is meaningful:

```text
Conceptual architecture of the FileBound platform showing web clients, APIs, workflow, data storage, and external integrations.
```

Also provide visible textual explanation.

---

# 79. Decorative Images

Use:

```html
alt=""
```

when purely decorative.

Do not stuff keywords into alt text.

---

# 80. Favicon / Site Identity

Use consistent:

```text
AH
```

favicon/monogram.

Provide appropriate favicon assets/manifest only as needed.

---

# 81. Web App Manifest

Optional.

The portfolio does not need to behave like an installed PWA.

Do not add PWA/service worker infrastructure for SEO.

---

# 82. Service Worker

Do not add Angular PWA/service-worker just for performance or SEO.

Cloudflare CDN + static assets are sufficient.

---

# 83. Core Web Vitals

Design/implementation should support:

- low LCP;
- low CLS;
- responsive interaction.

Key tactics:

- prerender;
- optimized fonts;
- explicit image dimensions;
- minimal JS;
- no huge hero image;
- no animation-heavy content.

---

# 84. LCP

Likely LCP element:

- hero heading;
- hero supporting text;
- optional hero visual.

Avoid making a huge profile photo the LCP unless optimized carefully.

---

# 85. CLS

Prevent layout shift by:

- reserving image dimensions;
- stable header height;
- font fallback strategy;
- no late-injected banners;
- stable project-card layout.

---

# 86. INP / Interaction

Keep JavaScript light.

Do not add:

- large animation frameworks;
- complex runtime rendering;
- unnecessary state management.

---

# 87. Font SEO / Performance

Font choice is not a direct ranking mechanism, but font loading affects user experience.

Use:

- `font-display: swap`;
- suitable fallback;
- limited weights;
- optional preload only for truly critical font files.

---

# 88. External Fonts

If using an external provider:

- consider privacy;
- avoid blocking rendering;
- keep requests minimal.

Self-hosting may be preferred if licensing and repository policy allow it.

---

# 89. Page Speed

Do not add third-party scripts before launch unless necessary.

No:

- chat widgets;
- analytics;
- heatmaps;
- social embeds;
- external badge scripts.

---

# 90. Social Links

Plain links are preferred.

Do not embed LinkedIn/GitHub widgets.

---

# 91. GitHub Profile Link

Use the approved public GitHub profile URL from `CONTENT.md`.

Centralize it.

---

# 92. LinkedIn Link

Use the approved public LinkedIn profile URL from `CONTENT.md`.

Centralize it.

---

# 93. Search Console

After custom/production domain is ready:

1. create/verify Google Search Console property;
2. submit sitemap;
3. inspect homepage;
4. inspect flagship case studies;
5. request indexing if necessary;
6. monitor coverage/indexing issues.

---

# 94. Bing Webmaster Tools

Optional but recommended after launch.

Can provide additional indexing visibility.

Not a blocker.

---

# 95. Search Console Monitoring

Check periodically:

- indexed pages;
- canonical issues;
- mobile usability;
- Core Web Vitals;
- sitemap errors;
- manual/security actions;
- search queries.

Do not obsess over daily ranking fluctuations for a branded portfolio.

---

# 96. Launch Indexing

After production launch:

- confirm robots permits indexing;
- sitemap reachable;
- canonical correct;
- no `noindex` accidentally present;
- production hostname preferred;
- preview/staging not competing.

---

# 97. Updating Content

When career content changes:

1. update approved source content;
2. update runtime typed content;
3. update page metadata if positioning changes;
4. regenerate sitemap if routes change;
5. redeploy;
6. request reindexing only if useful.

---

# 98. Adding a New Case Study

When adding:

```text
/projects/new-project
```

SEO checklist:

- unique slug;
- unique title;
- unique description;
- canonical;
- OG title;
- OG description;
- OG image;
- sitemap entry;
- internal links;
- project schema/content validated;
- public safety reviewed.

---

# 99. Removing a Case Study

If a public URL has already been indexed:

do not simply delete it without considering redirect.

Preferred:

```text
old project URL
→ closest relevant page
```

if a meaningful replacement exists.

Otherwise return a proper not-found response/experience.

---

# 100. Changing a Slug

Avoid after launch.

If unavoidable:

```text
old slug
→ 301 redirect → new slug
```

Update:

- canonical;
- sitemap;
- internal links;
- OG URL.

---

# 101. Privacy and SEO

Do not publish content solely because it may improve search ranking.

Privacy/confidentiality has higher priority.

Never publish:

- private emails;
- internal repos;
- project secrets;
- client operational details;
- internal ticket IDs;
- user/citizen data.

---

# 102. AI-Generated SEO Copy

AI agents may propose title/description wording.

They may not:

- invent achievements;
- exaggerate roles;
- add unverified technologies;
- add fake metrics;
- create client claims.

All career SEO metadata must remain factual.

---

# 103. Search Snippet Quality

Descriptions should:

- summarize page value;
- use natural language;
- avoid repeating title verbatim;
- avoid "Welcome to my portfolio";
- avoid vague buzzwords.

---

# 104. Homepage Content Signals

Homepage should clearly contain:

```text
Abdelrahman Hegab
Senior Software Engineer
.NET
Angular
Software Architecture
Enterprise SaaS
Government Digital Services
```

Naturally, not as keyword list.

---

# 105. Experience Content Signals

Experience page should make company/role progression clear.

Use visible text, not only icons/logos.

---

# 106. Project Content Signals

Each project page should identify:

- system type;
- personal contribution;
- engineering areas;
- relevant stack;
- challenges.

This is better than a tag-only project card.

---

# 107. Engineering Page Signals

Engineering page can reinforce expertise across:

- backend;
- frontend;
- architecture;
- integrations;
- production;
- technical leadership.

Use real project references.

---

# 108. AI-Augmented Engineering SEO

Do not over-optimize for:

```text
AI engineer
AI developer
prompt engineering
```

The user is positioned as a Senior Software Engineer using AI-assisted workflows.

---

# 109. Localization / Language

Version 1 site language:

```text
English
```

Set:

```html
<html lang="en">
```

Do not add Arabic localization unless explicitly planned.

---

# 110. Future Localization

If Arabic is later added:

use real localized routes/metadata.

Do not machine-translate all content without review.

Potential structure:

```text
/en/
/ar/
```

would require architecture/SEO review.

---

# 111. Hreflang

Not required for English-only v1.

---

# 112. Dates in Search

Project dates with unresolved timeline conflicts should remain omitted.

Do not use incorrect `datePublished` structured data.

---

# 113. Blog / Engineering Notes

Out of v1 scope.

If introduced later:

```text
/notes
/notes/:slug
```

would create more non-branded search potential.

Do not delay portfolio launch for blog content.

---

# 114. Blog SEO Future Rules

If notes are added later:

- unique titles;
- canonical URLs;
- article metadata;
- published/updated dates;
- author;
- sitemap;
- internal links;
- no thin AI-generated content.

---

# 115. No Programmatic SEO

Do not create dozens/hundreds of pages based on technology keyword combinations.

Examples prohibited:

```text
/angular-developer
/dotnet-developer
/software-architect-egypt
```

unless each becomes a genuinely useful page in the future.

---

# 116. No Hidden SEO Content

Do not hide keyword blocks using CSS.

All indexable content should be useful to users.

---

# 117. No Meta Keywords

Do not add:

```text
<meta name="keywords">
```

It is unnecessary.

---

# 118. Meta Description Length

Do not obsess over exact character counts.

Aim for concise summaries, generally around one or two short sentences.

Search engines may rewrite snippets.

---

# 119. Title Length

Keep titles concise.

Put the most meaningful topic first.

Example:

```text
SCEGA Event Licensing Platform Case Study | Abdelrahman Hegab
```

not:

```text
Abdelrahman Hegab Professional Portfolio Software Engineering Project Case Study SCEGA...
```

---

# 120. Canonical Service Implementation

SeoService should ensure only one canonical tag exists.

Pseudo-flow:

```text
find canonical link
if absent → create
set href = absolute canonical
```

Safe during prerender/browser execution.

---

# 121. Metadata During Prerender

SEO metadata must be set during Angular prerendering, not only after browser interaction.

Route/page initialization should provide metadata synchronously where possible.

Static content makes this straightforward.

---

# 122. Dynamic Project SEO

For:

```text
/projects/:slug
```

the project must be resolved during prerender.

Metadata must come from the resolved project object before HTML generation completes.

Unknown slug should not accidentally receive another project's canonical.

---

# 123. Not Found SEO

Unknown project slug should result in:

- not-found content;
- appropriate title;
- no canonical pointing to a valid unrelated project.

Consider `noindex`.

---

# 124. Content Prerender Validation

During release verify generated HTML contains:

```text
<title>
meta description
canonical
OG metadata
H1
```

for representative routes.

Do not assume runtime JavaScript will fix missing prerender metadata.

---

# 125. Search Engine Rendering Test

After launch use Search Console URL Inspection to confirm rendered/indexed content.

Particularly inspect:

- homepage;
- Upland;
- MOJ;
- SCEGA.

---

# 126. Social Preview Testing

Before launch test links through relevant preview-debug tools where available.

At minimum verify:

- correct image URL;
- image accessible publicly;
- correct title;
- correct description;
- absolute canonical/OG URL.

---

# 127. OG Image Cache

Social platforms cache previews.

When replacing an image after launch, caching may delay changes.

Use stable but versionable asset filenames where necessary.

Example:

```text
upland-filebound-v2.png
```

only when preview refresh is required.

---

# 128. Canonical Image URLs

Open Graph images must use absolute URLs.

Centralize base URL.

---

# 129. Search-Friendly Navigation

Primary navigation links should be normal anchor/router links available in HTML.

Do not make navigation dependent on JavaScript button click handlers only.

---

# 130. Footer Links

Footer should include useful crawlable links:

- Projects;
- Experience;
- Engineering;
- About;
- Contact;
- LinkedIn;
- GitHub.

Keep it concise.

---

# 131. Skip Link

Accessibility and SEO both benefit from semantic structure.

Provide:

```text
Skip to main content
```

---

# 132. Breadcrumb Navigation

Project breadcrumb should use real links.

Example:

```text
Projects
→ Upland FileBound
```

---

# 133. Project Pagination

Previous/Next project links should use real anchor/router links.

They create useful internal relationships between case studies.

---

# 134. Search Result Branding

Once a custom domain is established, ensure:

- site name consistent;
- favicon present;
- structured Person data;
- title naming consistent.

Search engines control final result appearance.

---

# 135. Domain Choice and SEO

A clean personal domain helps branding but does not need to contain every keyword.

Priority:

```text
name clarity
memorability
professionalism
```

not:

```text
senior-dotnet-angular-developer-egypt.com
```

---

# 136. Domain Migration

If launching first on Cloudflare Pages and later moving to custom domain:

- set custom domain as canonical;
- redirect old hostname where possible;
- update sitemap;
- update OG URLs;
- update Search Console.

---

# 137. Backlinks

No artificial backlink campaign.

Natural professional links may come from:

- LinkedIn;
- GitHub profile;
- CV;
- job applications;
- personal email signature;
- professional communities.

---

# 138. GitHub Profile

After launch, add portfolio URL to GitHub profile.

This creates a trusted professional connection.

---

# 139. LinkedIn

After launch, add portfolio URL to LinkedIn contact/featured information where appropriate.

---

# 140. CV

Add portfolio URL to the CV once the final domain is stable.

---

# 141. Email Signature

Optional:

```text
Abdelrahman Hegab
Senior Software Engineer
Portfolio | LinkedIn
```

Not part of website implementation.

---

# 142. Content Freshness

Portfolio does not need fake weekly updates.

Update when:

- new role;
- new project;
- new certification;
- major technical article;
- contact information changes.

---

# 143. Last Updated Labels

Do not add visible "last updated" dates to every page unless useful.

They can make evergreen case studies look stale.

---

# 144. Project Historical Context

Case studies describe historical work.

Search value comes from engineering depth, not artificial freshness.

---

# 145. Search Analytics

Initially use Search Console query data.

Do not add invasive client analytics merely for SEO.

---

# 146. Search Console Questions

Useful queries:

- Is the name ranking?
- Are project pages indexed?
- Are branded queries appearing?
- Which technical queries generate impressions?
- Are there canonical problems?
- Are mobile pages healthy?

---

# 147. SEO QA — Homepage

Check:

- [ ] unique title
- [ ] description
- [ ] canonical
- [ ] OG
- [ ] one H1
- [ ] Person structured data
- [ ] project links
- [ ] CV
- [ ] social links
- [ ] semantic landmarks

---

# 148. SEO QA — Experience

Check:

- [ ] unique title
- [ ] unique description
- [ ] H1
- [ ] company/role text visible
- [ ] project links
- [ ] canonical

---

# 149. SEO QA — Projects Index

Check:

- [ ] unique title
- [ ] description
- [ ] H1
- [ ] all flagship projects linked
- [ ] descriptive card copy
- [ ] canonical

---

# 150. SEO QA — Case Study

For each:

- [ ] unique title
- [ ] description
- [ ] canonical
- [ ] OG image
- [ ] one H1
- [ ] context
- [ ] personal role
- [ ] relevant technologies
- [ ] challenge headings
- [ ] Projects breadcrumb
- [ ] previous/next project
- [ ] no confidential content

---

# 151. SEO QA — Engineering

Check:

- [ ] unique title
- [ ] description
- [ ] one H1
- [ ] real examples linked
- [ ] no duplicate CV copy

---

# 152. SEO QA — About

Check:

- [ ] unique title
- [ ] description
- [ ] professional narrative
- [ ] no private biography details
- [ ] Contact CTA

---

# 153. SEO QA — Contact

Check:

- [ ] unique title
- [ ] description
- [ ] email accessible
- [ ] LinkedIn
- [ ] GitHub
- [ ] CV
- [ ] no unnecessary form

---

# 154. Build-Time SEO Validation

Automate validation where practical:

- every route has metadata;
- all project SEO fields present;
- canonical paths unique;
- OG images referenced exist;
- sitemap contains expected routes.

Do not build a complex SEO framework.

---

# 155. SEO Unit Tests

Good targets:

```text
buildCanonicalUrl
metadata lookup
project SEO completeness
unique canonical paths
```

---

# 156. SEO E2E

Representative Playwright tests:

```text
homepage
upland case study
404
```

Validate head metadata in rendered browser.

---

# 157. robots Meta Service

Support:

```text
index,follow
```

implicitly for public routes.

Only add explicit noindex for exceptional pages such as 404/preview behavior if needed.

---

# 158. Noindex Safety

Before release search generated HTML/source for accidental:

```text
noindex
```

Production indexable pages must not contain it.

---

# 159. Environment-Specific SEO

Avoid bundling totally different content between preview and production.

Difference should be limited to:

- canonical/base URL handling;
- indexing protection where required.

---

# 160. Production Base URL Validation

CI/release should fail or warn if production build still uses placeholder:

```text
https://example.com
```

once real domain is configured.

---

# 161. Sitemap HTTP Validation

After deploy:

```text
GET /sitemap.xml
```

must return successful response and XML content.

---

# 162. robots HTTP Validation

After deploy:

```text
GET /robots.txt
```

must return successful response.

---

# 163. OG Image HTTP Validation

After deploy verify representative:

```text
/og/home.png
/og/upland-filebound.png
```

return valid images.

---

# 164. Canonical HTTP Validation

Canonical URLs themselves should return:

```text
200
```

for valid pages.

---

# 165. Redirect Loops

Test final hostname configuration for redirect loops between:

```text
www
non-www
Pages hostname
custom domain
```

---

# 166. Case Study Titles and Search Clarity

Prefer descriptive names:

```text
Saudi Ministry of Justice — Lawyer Licensing Platform
SCEGA — Government Event Licensing Platform
```

rather than internal codenames only.

---

# 167. Public Client Names

Use client names in titles only when approved as public-safe.

Current case studies already use approved public context.

Do not reveal private client relationships discovered only in code history.

---

# 168. Technical Terms in Titles

Avoid packing frameworks into project title.

Bad:

```text
SCEGA Angular 19 .NET 9 CQRS EF Core Project
```

Use frameworks in description/body instead.

---

# 169. Case Study Intro

First 100–200 words should naturally explain:

- what the system is;
- what user contributed;
- major engineering context.

This helps both humans and search understanding.

---

# 170. Content Trust

Credibility improves when the site carefully distinguishes:

```text
I designed
I implemented
I contributed to
I worked within
```

Do not imply ownership of whole platforms.

---

# 171. No Fake Testimonials

Do not add invented testimonials, endorsements, or logos.

If real recommendations are added later, source/permission should be verified.

---

# 172. Employer Logos

Optional.

Do not depend on them for SEO or credibility.

Text company names are sufficient.

---

# 173. Logo Alt Text

If employer/client logos are later included:

use appropriate accessible names.

Do not repeat company names excessively around them.

---

# 174. Search Snippet Date Problem

Avoid visible generic dates that may be interpreted as article publication dates unless necessary.

The site is portfolio content, not news.

---

# 175. Structured Data Validation

Before launch test JSON-LD with an appropriate structured-data validator.

Fix syntax/errors.

Do not add schema types solely to get warnings-free scores if they don't fit the content.

---

# 176. Open Graph Description

Can reuse meta description where appropriate.

No need to maintain two completely different descriptions unless social copy benefits.

---

# 177. Site Name

Recommended:

```text
Abdelrahman Hegab
```

Not:

```text
Abdelrahman's Portfolio
```

for primary branding.

---

# 178. Homepage H1

Recommended:

```text
Abdelrahman Hegab
```

Role directly nearby:

```text
Senior Software Engineer
```

---

# 179. Entity Consistency

Keep these consistent across:

- HTML;
- metadata;
- structured data;
- CV;
- LinkedIn/GitHub where controllable.

Name:

```text
Abdelrahman Hegab
```

Role:

```text
Senior Software Engineer
```

Core:

```text
.NET & Angular
```

---

# 180. Technical SEO Non-Goals

Do not add:

- AMP;
- dynamic rendering service;
- server-side SEO proxy;
- separate mobile site;
- PWA solely for SEO;
- keyword landing pages;
- automatic content generation.

Static Angular prerendering is enough.

---

# 181. Initial Launch SEO Checklist

Before public launch:

## Metadata

- [ ] Homepage title/description
- [ ] Experience title/description
- [ ] Projects title/description
- [ ] Upland metadata
- [ ] MOJ metadata
- [ ] SCEGA metadata
- [ ] Engineering metadata
- [ ] About metadata
- [ ] Contact metadata
- [ ] CV metadata

## Technical

- [ ] prerendered HTML
- [ ] canonical tags
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] HTTPS
- [ ] one canonical hostname
- [ ] direct URLs work
- [ ] no accidental noindex
- [ ] 404 handled

## Social

- [ ] home OG image
- [ ] 3 project OG images
- [ ] absolute OG URLs
- [ ] social previews tested

## Structured

- [ ] Person JSON-LD
- [ ] valid syntax
- [ ] only approved data

## Quality

- [ ] semantic headings
- [ ] internal links
- [ ] performance
- [ ] accessibility
- [ ] mobile
- [ ] no confidential content

---

# 182. Post-Launch Checklist

After deployment:

1. verify production canonical;
2. verify sitemap;
3. verify robots;
4. verify direct project URLs;
5. add site to Google Search Console;
6. submit sitemap;
7. inspect homepage;
8. inspect flagship project pages;
9. add final domain to GitHub profile;
10. add final domain to LinkedIn;
11. add final domain to CV.

---

# 183. First 30 Days

Monitor:

- indexing;
- canonical warnings;
- branded impressions;
- mobile/Core Web Vitals;
- broken routes.

Do not make aggressive SEO changes before enough data exists.

---

# 184. SEO Content Review Frequency

Quarterly or when major career changes occur.

Review:

- role/title;
- latest experience;
- technologies;
- project ordering;
- meta descriptions;
- CV;
- contact information.

---

# 185. Final SEO Principle

The portfolio should rank because it contains accurate, well-structured, technically substantive information about Abdelrahman Hegab.

The SEO strategy is therefore:

> Clear identity + prerendered public content + strong technical case studies + semantic structure + correct metadata + disciplined canonical/indexing behavior.

Do not trade credibility, privacy, accessibility, or engineering simplicity for speculative SEO tricks.
