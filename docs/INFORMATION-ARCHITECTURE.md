# Abdelrahman Hegab Portfolio — Information Architecture

**Document:** Information Architecture  
**Status:** Draft for approval  
**Owner:** Abdelrahman Hegab  
**Product:** Professional Engineering Portfolio  
**Last Updated:** September 2026

---

# 1. Purpose

This document defines how the portfolio is structured, how visitors move through it, what content appears on each page, and which information belongs on the homepage versus deeper pages.

The objective is to make the portfolio useful to:

- recruiters;
- engineering managers;
- technical leads;
- CTOs / Heads of Engineering;
- senior engineers reviewing Abdelrahman's work.

The portfolio must communicate seniority quickly while still allowing deep technical exploration.

---

# 2. Core UX Principle

The site should support two levels of reading:

```text
FAST SCAN
Recruiter / hiring manager
30–60 seconds

        ↓

DEEP TECHNICAL REVIEW
Engineering manager / technical lead / CTO
5–15 minutes
```

The homepage should optimize for the fast scan.

Project case studies and the Engineering page should support deep review.

---

# 3. Primary Visitor Questions

Within the first minute, the site should answer:

1. Who is Abdelrahman Hegab?
2. What is his seniority?
3. What is his main stack?
4. What kind of systems has he built?
5. Has he worked on enterprise / SaaS / government platforms?
6. Does he have architecture experience?
7. Can he work full-stack?
8. Does he have technical-leadership exposure?
9. What are his strongest projects?
10. How can I contact him or download his CV?

---

# 4. Primary User Journeys

## 4.1 Recruiter Journey

```text
Landing Page
    ↓
Hero
    ↓
Professional Snapshot
    ↓
Selected Projects
    ↓
Experience Preview
    ↓
CV / Contact
```

Goal:

> Decide whether Abdelrahman matches an open role and contact him quickly.

---

## 4.2 Engineering Manager Journey

```text
Landing Page
    ↓
Selected Projects
    ↓
Project Case Study
    ↓
Architecture / Challenges / Decisions
    ↓
Engineering Approach
    ↓
Experience
    ↓
Contact
```

Goal:

> Understand technical depth, ownership, architecture thinking, and production experience.

---

## 4.3 Technical Lead / CTO Journey

```text
Landing Page
    ↓
Engineering
    ↓
Architecture Approach
    ↓
Flagship Case Studies
    ↓
Technical Decisions
    ↓
AI-Augmented Engineering
    ↓
Contact
```

Goal:

> Evaluate architectural maturity and engineering judgment.

---

# 5. Site Map

Recommended Version 1 structure:

```text
/
├── Home
│
├── Experience
│
├── Projects
│   ├── /projects/upland-filebound
│   ├── /projects/moj-lawyer-licensing
│   └── /projects/scega-event-licensing
│
├── Engineering
│
├── About
│
├── Contact
│
└── CV
```

Potential future routes:

```text
/notes
/notes/:slug
/projects/hcww
/projects/mobil-pos
```

These should not delay Version 1.

---

# 6. Global Navigation

Desktop:

```text
Abdelrahman Hegab

Home
Experience
Projects
Engineering
About
Contact

[Download CV]
```

Recommended sticky behavior:

- sticky header after initial scroll;
- compact height;
- subtle backdrop/background;
- no oversized navigation.

---

# 7. Mobile Navigation

Mobile header:

```text
Abdelrahman Hegab          [Menu]
```

Menu:

```text
Home
Experience
Projects
Engineering
About
Contact

Download CV
LinkedIn
GitHub
```

Requirements:

- keyboard accessible;
- focus trapped when open;
- closes after route navigation;
- no hover-only interactions;
- scroll locking while menu is open.

---

# 8. Homepage Structure

Final recommended hierarchy:

```text
01 Header
02 Hero
03 Professional Snapshot
04 Selected Work
05 Experience Preview
06 Engineering Expertise
07 How I Engineer
08 AI-Augmented Engineering
09 Credentials
10 Contact CTA
11 Footer
```

The homepage must remain concise.

Do not reproduce full project case studies on the homepage.

---

# 9. Homepage — Hero

## Purpose

Communicate identity, seniority, and specialization immediately.

## Content

### Name

```text
Abdelrahman Hegab
```

### Title

```text
Senior Software Engineer
```

### Expertise

```text
.NET & Angular
Software Architecture
Enterprise & SaaS Systems
```

### Primary message

Recommended direction:

> Building reliable enterprise, SaaS, and government digital platforms.

Alternative:

> Engineering scalable software for complex business systems.

Final marketing copy will be chosen during content/design refinement.

## Supporting paragraph

Suggested:

> Senior Software Engineer with 10+ years of experience across .NET, Angular, enterprise SaaS, government digital services, integrations, and production engineering.

## CTA Priority

Primary:

```text
View My Work
```

Secondary:

```text
Download CV
```

Tertiary:

```text
Contact Me
```

## Supporting Links

```text
LinkedIn
GitHub
```

---

# 10. Homepage — Professional Snapshot

## Purpose

Allow recruiters to scan major credentials in seconds.

Recommended cards:

```text
10+ Years
Software Engineering
```

```text
Nearly 5 Years
Upland FileBound
```

```text
Core Stack
.NET + Angular
```

```text
Experience
Enterprise · SaaS · Government
```

Optional fifth card:

```text
Engineering Focus
Architecture · APIs · Full Stack
```

Do not display fabricated metrics.

---

# 11. Homepage — Selected Work

## Purpose

Show evidence instead of skill claims.

Only 3 flagship projects should appear initially:

```text
01 Upland FileBound
02 Saudi Ministry of Justice — Lawyer Licensing Platform
03 SCEGA — Government Event Licensing Platform
```

These three tell complementary stories:

| Project | Main Story |
|---|---|
| Upland FileBound | Mature SaaS · Production · Integrations · Security · Performance |
| MOJ Lawyer Licensing | Government Integrations · Full Stack · Security |
| SCEGA Event Licensing | Angular Architecture · Reusable Infrastructure · Full Stack |

---

# 12. Project Card Structure

Each homepage project card should contain:

```text
Project Name
Context / Category

1–2 sentence summary

Technology Tags

Primary Engineering Theme

[View Case Study]
```

Example:

```text
Upland FileBound

Enterprise SaaS · Document & Workflow Automation

Nearly five years engineering a mature SaaS platform across backend
services, APIs, integrations, workflow, security, performance, and
production support.

.NET · ASP.NET Web API · SQL Server · Dapper · Angular

Mature SaaS Engineering

[View Case Study]
```

---

# 13. Selected Work Layout

Desktop recommendation:

```text
┌──────────────────────────────────────────────────────┐
│               Selected Work                         │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ Upland FileBound                              │   │
│  │ Large featured card                           │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌────────────────────┐ ┌────────────────────────┐ │
│  │ MOJ                │ │ SCEGA                  │ │
│  │ Lawyer Licensing   │ │ Event Licensing       │ │
│  └────────────────────┘ └────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

Upland gets greater visual emphasis as the flagship long-term SaaS case study.

On mobile:

```text
Upland
↓
MOJ
↓
SCEGA
```

---

# 14. Homepage — Experience Preview

## Purpose

Show career progression without turning the homepage into a CV.

Recommended timeline:

```text
Three Pillars
Senior Software Engineer

FlairsTech / Upland Software
Senior Software Engineer

OrchTech
Senior Software Engineer

Matrix Business Solutions
Software Engineer

New Horizons
Microsoft .NET Trainer
```

Each homepage entry:

```text
Company
Role
Short one-line context
Period
```

Maximum 1 sentence per position on homepage.

CTA:

```text
View Full Experience
```

---

# 15. Homepage — Engineering Expertise

## Purpose

Explain what Abdelrahman is strongest at.

Do not use percentage skill bars.

Recommended categories:

### Backend Engineering

```text
C#
.NET / ASP.NET Core
REST APIs
Entity Framework / EF Core
Dapper
Integration Engineering
```

### Frontend Engineering

```text
Angular
TypeScript
RxJS
Reactive Forms
Reusable UI Architecture
```

### Data

```text
SQL Server
PostgreSQL
Query Design
Data Access
Performance Troubleshooting
```

### Architecture

```text
Software Architecture
Clean / Layered Architecture
Microservices Experience
Distributed Systems
CQRS / MediatR
Design Patterns
```

Important:

Architecture claims should be presented at experience level, not falsely attributed to every project.

### Delivery

```text
Git
Azure DevOps
GitHub Actions
CI/CD
Docker
Production Support
```

---

# 16. Homepage — How I Engineer

Recommended section title:

```text
How I Engineer
```

Four principles:

```text
Architecture with Purpose
```

> Use patterns to solve real constraints, not to maximize architectural complexity.

```text
End-to-End Ownership
```

> Follow features from requirements and design through implementation, deployment, support, and troubleshooting.

```text
Production Matters
```

> Reliability, performance, integrations, and failure behavior are engineering concerns—not afterthoughts.

```text
Maintainability Scales Teams
```

> Favor clear boundaries, reusable infrastructure, disciplined reviews, and understandable code.

Optional fifth:

```text
Collaboration
```

> Work effectively across engineering, QA, DevOps, product, and business stakeholders.

---

# 17. Homepage — AI-Augmented Engineering

## Purpose

Show current engineering workflow without positioning Abdelrahman as an AI specialist.

Recommended structure:

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
Tests & Validation
    ↓
Human Review
    ↓
PR / CI
    ↓
Deployment
```

Supporting copy:

> I use AI coding agents to accelerate technical research, planning, implementation, refactoring, debugging, testing, documentation, and code review—while retaining human ownership of architecture, security, correctness, business logic, and final engineering decisions.

Do not make individual AI vendor logos the main visual.

---

# 18. Homepage — Credentials

Compact section only.

Display:

```text
Microsoft Certified Trainer
MCSD
MCSA: Web Applications
MCIT Web Development Diploma
```

Optional CTA:

```text
View Microsoft Transcript
```

Education should not take significant homepage space.

---

# 19. Homepage — Contact CTA

Final strong CTA:

```text
Let's build something reliable.
```

Alternative:

```text
Looking for a senior engineer who can work across architecture,
backend, frontend, and delivery?
```

Buttons:

```text
Contact Me
LinkedIn
Download CV
```

---

# 20. Footer

Recommended:

```text
Abdelrahman Hegab
Senior Software Engineer

Email
LinkedIn
GitHub

© Abdelrahman Hegab
```

Optional:

```text
Built with Angular
```

This can be included subtly if desired.

---

# 21. Projects Index Page

Route:

```text
/projects
```

Purpose:

Show all public case studies.

Version 1:

```text
Upland FileBound
MOJ Lawyer Licensing
SCEGA Event Licensing
```

Future:

```text
HCWW
Mobil POS
Additional selected work
```

Each card can be more detailed than the homepage card.

Filters are unnecessary for only three projects.

Do not build filtering until the project list becomes large.

---

# 22. Project Case Study Page Template

Every case study should follow the same visual/content structure.

```text
Project Header
↓
Overview
↓
My Role
↓
System / Architecture
↓
What I Worked On
↓
Engineering Challenges
↓
Technical Decisions
↓
Production / Reliability
↓
Technology Stack
↓
Lessons / Reflection
↓
Next Project
```

---

# 23. Project Header

Recommended:

```text
Upland FileBound

Enterprise SaaS · Document & Workflow Automation

Nearly five years contributing to a mature enterprise SaaS platform.

Role
Senior Software Engineer

Focus
Backend · APIs · Integrations · Workflow · Production

Technology
.NET · SQL Server · Dapper · Angular
```

Include:

```text
← All Projects
```

---

# 24. Case Study — Overview

Short, public-safe summary.

Maximum:

```text
2–4 short paragraphs
```

Do not start with technology.

Explain:

- what the product/system does;
- who uses it;
- why the system matters.

---

# 25. Case Study — My Role

Clearly separate:

```text
System capability
```

from:

```text
My contribution
```

This is important for credibility.

Use wording such as:

```text
I designed...
I implemented...
I contributed to...
I maintained...
I worked within...
I participated in...
```

Avoid implying sole ownership of the entire project.

---

# 26. Case Study — Architecture

Each flagship case study should have a simplified architecture diagram.

Recommended format:

```text
visual SVG / HTML diagram
+
short explanatory text
```

Not:

```text
screenshot of internal architecture
```

Architecture diagrams must be recreated specifically for the portfolio.

---

# 27. Case Study — Engineering Challenges

This is one of the most important sections.

Each project should show:

```text
2–4 major engineering challenges
```

Examples:

### FileBound

- workflow multi-queue behavior;
- integration compatibility;
- settings DB-call optimization;
- security/data-isolation issues.

### MOJ

- enterprise licensing integration;
- route-guard composition;
- secure legacy-system redirect.

### SCEGA

- reusable ConfigStepper;
- server-backed file uploader;
- Windows AD → JWT provisioning gate.

---

# 28. Case Study — Technical Decisions

This section should answer:

```text
Why was this approach chosen?
What trade-off existed?
What risk was being managed?
```

This is where seniority should become visible.

---

# 29. Case Study — Technology Stack

Do not display 30 logos.

Group technologies:

```text
Frontend
Backend
Data
Architecture
Integration
Delivery
```

Only show technologies actually relevant to that project.

---

# 30. Case Study — Lessons / Reflection

Short section:

```text
What did this project teach me?
```

This can include:

- architecture;
- production engineering;
- collaboration;
- backward compatibility;
- security;
- integration reliability;
- reusable infrastructure.

Avoid fake philosophical statements.

---

# 31. Case Study — Next Project Navigation

End each case study with:

```text
Previous Project
Next Project
```

Example:

```text
← Upland FileBound
SCEGA Event Licensing →
```

This encourages deeper browsing.

---

# 32. Experience Page

Route:

```text
/experience
```

Purpose:

Expand the CV experience without duplicating it word-for-word.

Recommended structure:

```text
Intro
↓
Career Timeline
↓
Role Details
↓
Leadership / Collaboration
↓
Technical Progression
↓
CV CTA
```

---

# 33. Experience Entry Structure

Each role:

```text
Company
Role
Period
Location

Context paragraph

Selected responsibilities

Selected engineering themes

Related projects
```

Example:

```text
FlairsTech / Upland Software
Senior Software Engineer

Nearly five years working on Upland FileBound...

Engineering themes:
• Mature SaaS
• Production support
• APIs & integrations
• Backward compatibility
• Security
• Performance

Related project:
Upland FileBound →
```

---

# 34. Engineering Page

Route:

```text
/engineering
```

Purpose:

Explain engineering philosophy and technical capability.

Recommended sections:

```text
Engineering Overview
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

---

# 35. Engineering Page — Backend

Content themes:

```text
.NET / ASP.NET Core
REST API design
Integration services
Data access
Security
Error handling
Background processing
Production troubleshooting
```

Use examples from real case studies.

---

# 36. Engineering Page — Frontend

Content themes:

```text
Angular architecture
Reactive Forms
RxJS
Reusable components
ControlValueAccessor
Feature-based structure
Validation
Localization
State patterns
Performance
```

SCEGA should provide several concrete examples here.

---

# 37. Engineering Page — Architecture

Possible topics:

```text
Layered Architecture
Clean Architecture
Microservices
Distributed Systems
CQRS
API Integration
Reusable platform components
```

Important:

Separate:

```text
Patterns I designed directly
Patterns I contributed to
Patterns I worked within
```

---

# 38. Engineering Page — Technical Leadership

Focus on evidence:

```text
Code reviews
Peer approvals
Mentoring
Shared infrastructure
Architecture discussions
Technical documentation
Repository standards
Production responsibility
```

Do not frame as formal management unless a role actually included it.

---

# 39. About Page

Route:

```text
/about
```

Purpose:

Humanize the professional story without becoming personal biography.

Recommended structure:

```text
Professional Story
↓
How I Started
↓
Enterprise / SaaS Journey
↓
Government Systems
↓
How I Work Today
↓
Knowledge Sharing
↓
Contact CTA
```

---

# 40. About — Professional Story

Suggested narrative:

```text
Microsoft technology training
        ↓
.NET software development
        ↓
Enterprise applications
        ↓
Senior engineering
        ↓
Long-term SaaS product work
        ↓
Government digital services
        ↓
Architecture + AI-augmented engineering
```

This should read as a career progression, not a CV timeline.

---

# 41. Contact Page

Route:

```text
/contact
```

Recommended Version 1:

```text
Email
LinkedIn
GitHub
Location
CV
```

No backend contact form required initially.

Potential copy:

> I'm open to senior engineering and technical-lead opportunities involving .NET, Angular, architecture, enterprise platforms, and complex integrations.

If availability wording is added, keep it easy to update.

---

# 42. CV Page / Integration

The CV does not need its own complex page.

Recommended:

```text
/cv
```

can simply:

- show a short introduction;
- offer View CV;
- offer Download PDF;
- link to LinkedIn.

Primary CV PDF:

```text
/public/cv/Abdelrahman-Hegab-CV.pdf
```

---

# 43. Content Density Rules

Homepage:

```text
Short
Scan-friendly
Evidence-driven
```

Case studies:

```text
Detailed
Technical
Structured
```

Engineering page:

```text
Conceptual
Evidence-backed
```

About:

```text
Narrative
Professional
```

Experience:

```text
Career context
Not duplicate CV
```

---

# 44. What NOT to Put on Homepage

Do not add:

- every project;
- every technology;
- full employment descriptions;
- all certifications;
- all education;
- long paragraphs;
- giant architecture diagrams;
- detailed production incidents;
- Git commit counts;
- PR counts;
- contribution percentages;
- low-priority legacy technologies.

These belong deeper in the site or not at all.

---

# 45. Content Priority Model

## Level 1 — Immediate

Visible within one screen:

```text
Name
Role
Core stack
Professional positioning
Primary CTA
```

## Level 2 — Evidence

Within homepage scroll:

```text
Selected projects
Experience
Engineering expertise
```

## Level 3 — Differentiation

Later homepage sections:

```text
Engineering approach
AI-Augmented Engineering
Credentials
```

## Level 4 — Deep Technical Detail

Dedicated pages:

```text
Architecture
Challenges
Technical decisions
Production stories
Detailed stacks
```

---

# 46. Visual Hierarchy

Recommended heading hierarchy:

```text
H1 — Page title / hero identity
H2 — Major sections
H3 — Project / principle headings
H4 — Sub-details
```

Only one meaningful H1 per page.

---

# 47. URL Strategy

Recommended slugs:

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

URLs should:

- be lowercase;
- use hyphens;
- remain human-readable;
- avoid IDs.

---

# 48. Internal Linking Strategy

Homepage should link to:

```text
Projects
Experience
Engineering
CV
Contact
```

Case studies should link to:

```text
Projects index
Engineering
Related experience
Next case study
Contact
```

Experience should link to:

```text
Related project case studies
```

Engineering should link to:

```text
Real project examples
```

This creates a connected portfolio instead of isolated pages.

---

# 49. Recruiter Scan Mode

Important content should be visually scannable using:

- short headings;
- badges/tags;
- concise cards;
- timelines;
- bold project names;
- restrained callouts.

Avoid:

- giant walls of text;
- paragraph-heavy homepage;
- dense technical tables on mobile.

---

# 50. Engineering Deep-Dive Mode

Case-study pages may use:

- architecture diagrams;
- code-like visual callouts;
- decision cards;
- challenge/solution pairs;
- technical timelines;
- technology groups.

Avoid showing proprietary source code.

---

# 51. Responsive Content Behavior

Desktop:

```text
2–3 column cards where appropriate
full architecture diagrams
side-by-side summaries
```

Tablet:

```text
2 columns where useful
simplified spacing
```

Mobile:

```text
single column
vertical timeline
horizontal tag wrapping
simplified architecture diagrams
sticky/mobile CTA carefully limited
```

---

# 52. Accessibility Structure

Information architecture should support:

- semantic landmarks;
- skip-to-content link;
- logical heading order;
- descriptive navigation;
- explicit link text;
- no "click here";
- no meaning communicated only by color;
- keyboard navigation;
- sensible tab order.

---

# 53. Search / SEO Structure

Each project page targets a distinct engineering story.

Suggested page titles:

```text
Abdelrahman Hegab | Senior Software Engineer
```

```text
Upland FileBound Engineering Case Study | Abdelrahman Hegab
```

```text
Saudi Ministry of Justice — Lawyer Licensing Case Study | Abdelrahman Hegab
```

```text
SCEGA Event Licensing Platform Case Study | Abdelrahman Hegab
```

```text
Engineering Approach | Abdelrahman Hegab
```

---

# 54. Open Graph Structure

Homepage preview:

```text
Abdelrahman Hegab
Senior Software Engineer
.NET · Angular · Architecture
```

Project preview:

```text
Upland FileBound
Enterprise SaaS Engineering Case Study
Abdelrahman Hegab
```

Equivalent per project.

---

# 55. Version 1 Content Scope

Must ship:

```text
Home
Experience
Projects index
3 flagship case studies
Engineering
About
Contact
CV
```

Should ship:

```text
dark mode
architecture diagrams
Open Graph images
responsive navigation
```

Future:

```text
HCWW
Mobil
Engineering Notes / Blog
Additional project case studies
```

---

# 56. Homepage Wireframe

```text
┌─────────────────────────────────────────────────────────────┐
│ Abdelrahman Hegab       Experience Projects Engineering CV │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Senior Software Engineer                                    │
│                                                             │
│ Abdelrahman Hegab                                           │
│                                                             │
│ .NET & Angular · Architecture · Enterprise Systems           │
│                                                             │
│ Building reliable enterprise, SaaS, and government          │
│ digital platforms.                                          │
│                                                             │
│ [View My Work] [Download CV] [Contact]                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ 10+ Years │ Nearly 5 Years Upland │ .NET + Angular │ SaaS   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Selected Work                                               │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Upland FileBound                                       │ │
│ │ Flagship large card                                    │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌──────────────────────────┐ ┌───────────────────────────┐ │
│ │ MOJ Lawyer Licensing     │ │ SCEGA Event Licensing    │ │
│ └──────────────────────────┘ └───────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ Experience                                                  │
│ Three Pillars                                               │
│ FlairsTech / Upland                                         │
│ OrchTech                                                    │
│ Matrix                                                      │
│ New Horizons                                                │
│ [View Full Experience]                                      │
├─────────────────────────────────────────────────────────────┤
│ Engineering Expertise                                       │
│ Backend │ Frontend │ Data │ Architecture │ Delivery         │
├─────────────────────────────────────────────────────────────┤
│ How I Engineer                                              │
│ Architecture │ Ownership │ Production │ Maintainability     │
├─────────────────────────────────────────────────────────────┤
│ AI-Augmented Engineering                                    │
│ Requirements → Design → AI Assist → Validation → Review     │
├─────────────────────────────────────────────────────────────┤
│ Credentials                                                 │
├─────────────────────────────────────────────────────────────┤
│ Looking for a senior engineer...?                           │
│ [Contact Me] [LinkedIn] [Download CV]                       │
├─────────────────────────────────────────────────────────────┤
│ Footer                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

# 57. Project Case Study Wireframe

```text
┌─────────────────────────────────────────────────────────────┐
│ ← Projects                                                  │
│                                                             │
│ Upland FileBound                                            │
│ Enterprise SaaS · Workflow & Document Automation             │
│                                                             │
│ Role · Focus · Technology                                   │
├─────────────────────────────────────────────────────────────┤
│ Overview                                                    │
├─────────────────────────────────────────────────────────────┤
│ My Role                                                     │
├─────────────────────────────────────────────────────────────┤
│ Architecture                                                │
│                                                             │
│ [Conceptual Architecture Diagram]                           │
├─────────────────────────────────────────────────────────────┤
│ What I Worked On                                            │
├─────────────────────────────────────────────────────────────┤
│ Engineering Challenge #1                                    │
│ Problem → Approach → Engineering Value                      │
├─────────────────────────────────────────────────────────────┤
│ Engineering Challenge #2                                    │
├─────────────────────────────────────────────────────────────┤
│ Production / Reliability                                    │
├─────────────────────────────────────────────────────────────┤
│ Technology Stack                                            │
├─────────────────────────────────────────────────────────────┤
│ Lessons                                                     │
├─────────────────────────────────────────────────────────────┤
│ ← Previous Project                     Next Project →        │
└─────────────────────────────────────────────────────────────┘
```

---

# 58. Navigation Labels — Final Recommendation

Use:

```text
Experience
Projects
Engineering
About
Contact
```

Avoid:

```text
Services
My Journey
Portfolio
Expertise
Resume
```

Reason:

The chosen labels are direct and immediately understandable to recruiters.

---

# 59. Primary CTAs — Final Recommendation

Throughout the site:

### Primary

```text
View My Work
```

### Conversion

```text
Contact Me
```

### Supporting

```text
Download CV
```

Do not overload pages with too many competing buttons.

---

# 60. Content Approval Checklist

Before moving to visual design:

- [ ] Homepage section order approved
- [ ] Navigation labels approved
- [ ] Three flagship projects approved
- [ ] Upland receives primary visual emphasis
- [ ] Experience remains concise on homepage
- [ ] Engineering expertise categories approved
- [ ] AI section included but not dominant
- [ ] Credentials kept compact
- [ ] No project dates shown until timeline inconsistencies are resolved
- [ ] No Micro Frontend claim for SCEGA
- [ ] Case-study page structure approved
- [ ] Contact strategy approved
- [ ] No contact form required for Version 1
- [ ] CV remains directly downloadable
- [ ] Mobile information hierarchy approved

---

# 61. Next Step

After this information architecture is approved:

```text
DESIGN-SYSTEM.md
```

will define:

- color palette;
- typography;
- spacing;
- grid;
- buttons;
- cards;
- project visuals;
- dark/light themes;
- motion;
- iconography;
- architecture-diagram style;
- responsive behavior.

Only after the design system and technical architecture are approved should Angular implementation begin.
