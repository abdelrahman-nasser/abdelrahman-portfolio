# Abdelrahman Hegab Portfolio — Design System

**Document:** Design System  
**Status:** Draft for approval  
**Owner:** Abdelrahman Hegab  
**Product:** Professional Engineering Portfolio  
**Last Updated:** September 2026

---

# 1. Design Goal

The portfolio should feel like the work of a senior engineer:

- professional;
- modern;
- technically credible;
- calm;
- confident;
- highly readable;
- visually polished without being flashy.

The visual design should support the content rather than compete with it.

The portfolio should feel closer to:

- Linear;
- Microsoft;
- GitHub;
- Stripe;
- Vercel;
- modern engineering documentation sites;

and less like:

- neon developer portfolios;
- cyberpunk themes;
- game UI;
- hacker-terminal aesthetics;
- heavy 3D portfolio templates;
- animation-first landing pages.

---

# 2. Brand Direction

Primary personal brand:

```text
Abdelrahman Hegab
Senior Software Engineer
.NET & Angular · Software Architecture · Enterprise Systems
```

The portfolio should visually connect to the CV.

Primary brand color:

```text
#004F90
```

This blue should remain recognizable across:

- buttons;
- links;
- accents;
- focus states;
- project highlights;
- architecture diagrams;
- Open Graph visuals.

---

# 3. Design Principles

## 3.1 Content First

Typography, whitespace, hierarchy, and layout matter more than decorative graphics.

## 3.2 Restraint

Use:

- subtle borders;
- soft shadows;
- restrained radius;
- controlled color usage;
- limited animation.

Avoid visual noise.

## 3.3 Technical Without Being Cold

Architecture diagrams and technical labels can give the site an engineering identity without making it look like documentation software.

## 3.4 Accessible by Default

Every component must be usable with:

- keyboard;
- touch;
- high zoom;
- reduced motion;
- light/dark system preferences.

## 3.5 Consistency Over Novelty

Reusable visual patterns should be preferred over custom styling for every section.

---

# 4. Color System

## 4.1 Primary Brand

```text
Primary 700   #004F90
Primary 600   #0868B5
Primary 500   #1580D1
Primary 400   #4BA0DD
Primary 300   #82BEE8
Primary 200   #B9DCF3
Primary 100   #E3F1FA
Primary 50    #F3F9FD
```

Primary usage:

- CTA buttons;
- active navigation;
- links;
- focus ring;
- selected project accents;
- diagram connectors;
- badges used sparingly.

Do not use primary blue as a large page background except for isolated visual callouts.

---

# 5. Light Theme

Recommended tokens:

```text
Page Background       #FFFFFF
Surface               #FFFFFF
Surface Secondary     #F7F9FC
Surface Elevated      #FFFFFF

Text Primary          #111827
Text Secondary        #4B5563
Text Muted            #6B7280
Text Subtle           #9CA3AF

Border                #E5E7EB
Border Strong         #D1D5DB

Primary               #004F90
Primary Hover         #0868B5
Primary Soft          #EAF4FB

Success               #15803D
Warning               #B45309
Danger                #B91C1C
```

---

# 6. Dark Theme

Recommended tokens:

```text
Page Background       #0B0F14
Surface               #11161D
Surface Secondary     #151B23
Surface Elevated      #1A222C

Text Primary          #F3F4F6
Text Secondary        #CBD5E1
Text Muted            #94A3B8
Text Subtle           #64748B

Border                #25303D
Border Strong         #344254

Primary               #4BA0DD
Primary Hover         #6AB1E3
Primary Soft          #102A3D

Success               #4ADE80
Warning               #F59E0B
Danger                #F87171
```

The dark theme should remain neutral and professional.

Avoid pure black.

---

# 7. Theme Behavior

Default:

```text
respect system preference
```

Theme options:

```text
System
Light
Dark
```

Store user selection locally.

Recommended behavior:

```text
first visit
→ prefers-color-scheme

explicit choice
→ localStorage
```

Theme switching should not cause a noticeable flash during page load.

---

# 8. Typography

## 8.1 Primary Font

Recommended:

```text
Inter
```

Alternative:

```text
Source Sans 3
```

Recommended final choice:

**Inter for the web UI**

Reason:

- excellent readability;
- strong technical/professional feel;
- modern;
- wide range of weights;
- highly readable at small sizes.

The CV may remain Source Sans while still feeling visually related.

---

# 9. Monospace Font

Use a monospace family only for:

- technology snippets;
- architecture labels;
- code-style callouts;
- small technical metadata.

Recommended:

```text
JetBrains Mono
```

Fallback:

```text
ui-monospace
SFMono-Regular
Consolas
Liberation Mono
monospace
```

Do not use monospace for normal body content.

---

# 10. Font Weights

```text
400 Regular
500 Medium
600 SemiBold
700 Bold
```

Avoid 800/900 unless there is a very specific visual reason.

---

# 11. Type Scale

Desktop:

```text
Display XL      64px / 1.05 / 700
Display         52px / 1.08 / 700
H1              44px / 1.10 / 700
H2              36px / 1.15 / 700
H3              28px / 1.20 / 600
H4              22px / 1.25 / 600
Body Large      18px / 1.65 / 400
Body            16px / 1.65 / 400
Body Small      14px / 1.55 / 400
Caption         12px / 1.45 / 500
```

Mobile:

```text
Display         40px
H1              36px
H2              30px
H3              24px
H4              20px
Body Large      17px
Body            16px
```

Use `clamp()` where practical.

---

# 12. Hero Typography

Recommended hierarchy:

```text
eyebrow
14px / 600 / uppercase optional

name
52–64px / 700

role
24–28px / 600

supporting paragraph
18–20px / 400
```

Do not make the name so large that the role becomes secondary.

---

# 13. Line Length

Body text should generally stay within:

```text
60–75 characters
```

Long case-study paragraphs:

```text
max-width: 760px
```

Intro paragraphs:

```text
max-width: 680px
```

---

# 14. Spacing System

Use a 4px base scale.

```text
space-1    4px
space-2    8px
space-3    12px
space-4    16px
space-5    20px
space-6    24px
space-8    32px
space-10   40px
space-12   48px
space-16   64px
space-20   80px
space-24   96px
space-32   128px
```

---

# 15. Section Spacing

Desktop:

```text
major section vertical padding
96px–128px
```

Tablet:

```text
80px
```

Mobile:

```text
64px
```

Hero may use more vertical spacing.

---

# 16. Content Width

Recommended:

```text
Maximum site width: 1280px
Primary content width: 1180px
Reading width: 760px
```

Container padding:

```text
Desktop    32px
Tablet     24px
Mobile     20px
Small      16px
```

---

# 17. Grid System

Desktop:

```text
12-column conceptual grid
24px–32px gap
```

Typical layouts:

```text
Hero:
7 columns content
5 columns visual / whitespace

Project grid:
8 + 4
or
6 + 6

Expertise:
4 + 4 + 4

Case study:
8 main + 4 metadata
```

Mobile becomes single-column.

---

# 18. Border Radius

Use a restrained system:

```text
Small      6px
Medium     10px
Large      14px
XL         18px
Pill       999px
```

Recommended:

- buttons: 8–10px;
- cards: 14px;
- chips/tags: pill;
- large visual containers: 18px.

Avoid overly rounded "bubble" UI.

---

# 19. Borders

Light:

```text
1px solid #E5E7EB
```

Dark:

```text
1px solid #25303D
```

Borders should do more visual work than shadows.

---

# 20. Shadows

Use shadows sparingly.

Light card:

```text
0 1px 2px rgba(15,23,42,0.04)
0 8px 24px rgba(15,23,42,0.05)
```

Hover:

```text
0 12px 30px rgba(15,23,42,0.08)
```

Dark theme should rely primarily on contrast/borders rather than visible shadows.

---

# 21. Buttons

Three button styles:

```text
Primary
Secondary
Ghost
```

---

# 22. Primary Button

Usage:

- View My Work
- Contact Me
- critical conversion CTA

Style:

```text
background: Primary
text: white
border: Primary
height: 44–48px
padding-inline: 20–24px
radius: 9px
font-weight: 600
```

Hover:

```text
Primary Hover
translateY(-1px) optional
```

No large glow.

---

# 23. Secondary Button

Usage:

```text
Download CV
View Experience
```

Style:

```text
transparent / surface
border
primary text
```

Hover:

```text
Primary Soft
Primary border
```

---

# 24. Ghost Button

Usage:

```text
GitHub
LinkedIn
Previous/Next
```

Minimal styling.

---

# 25. Button States

All buttons require:

```text
default
hover
focus-visible
active
disabled
```

Focus:

```text
2px primary ring
2px offset
```

---

# 26. Links

Normal content links:

```text
Primary
underline on hover
```

Inline text links should have sufficient distinction even without color.

Navigation links can avoid underline but must have clear active/hover state.

---

# 27. Navigation Design

Desktop header:

```text
height: 72–80px
```

Structure:

```text
Brand / Name
Navigation
CV CTA
Theme Toggle
```

Recommended visual:

- transparent initially;
- becomes subtle surface with backdrop blur on scroll;
- 1px bottom border;
- no oversized logo.

---

# 28. Brand Mark

Version 1 should use:

```text
Abdelrahman Hegab
```

as text branding.

Optional monogram:

```text
AH
```

could later be used for:

- favicon;
- social avatar;
- compact mobile mark.

Do not delay v1 for a custom logo.

---

# 29. Project Cards

Three levels:

```text
Featured
Standard
Compact
```

---

# 30. Featured Project Card

Used for Upland.

Suggested structure:

```text
Project category
Project title
Description
Engineering theme
Technology tags
CTA
Architecture-inspired visual
```

Desktop card:

```text
min-height: 420–480px
```

Layout:

```text
left: content
right: conceptual visual
```

The visual should not be a customer screenshot.

---

# 31. Standard Project Card

Used for MOJ and SCEGA on homepage.

Structure:

```text
Category
Title
Short summary
Tags
Engineering theme
CTA
```

Minimum height:

```text
320–360px desktop
```

---

# 32. Project Card Hover

Subtle only:

```text
border becomes primary-soft
card translateY(-3px)
shadow slightly increases
arrow moves 2–4px
```

No 3D tilt.

No mouse-follow effects.

---

# 33. Project Visual Style

Use custom conceptual graphics.

Examples:

### Upland

```text
Document
→ Workflow
→ API
→ Integration
```

### MOJ

```text
Portal
→ API
→ Integration Gateway
→ Government Systems
```

### SCEGA

```text
Stepper
→ Forms
→ API
→ Licensing Workflow
```

Visual style:

- simple nodes;
- rounded rectangles;
- thin connectors;
- primary blue accents;
- neutral surfaces;
- subtle grid/dot background.

---

# 34. Architecture Diagram Style

All project diagrams should share one visual system.

Nodes:

```text
Surface background
1px border
10px radius
```

Primary nodes:

```text
Primary Soft background
Primary border
```

Connectors:

```text
1.5px
Primary or muted
```

Labels:

```text
13–14px
500
```

Use icons only where meaningful.

Do not recreate internal architecture exactly.

---

# 35. Technical Tags

Examples:

```text
.NET 9
Angular 19
SQL Server
CQRS
Dapper
```

Style:

```text
12–13px
500
border
soft background
pill radius
```

Do not assign unique colors to every technology.

The portfolio should not resemble a sticker collection.

---

# 36. Section Eyebrows

Optional label above major headings:

```text
SELECTED WORK
EXPERIENCE
ENGINEERING
```

Style:

```text
12px
600
letter spacing 0.08em
Primary
```

Use consistently or not at all.

Recommended: use on major homepage sections.

---

# 37. Professional Snapshot Cards

Style:

```text
clean statistic card
minimal border
no icon required
```

Example:

```text
10+
Years Experience
```

Number:

```text
32–40px
700
```

Label:

```text
14px
secondary
```

Avoid animated counters.

---

# 38. Experience Timeline

Desktop:

```text
left column: dates
middle: line/node
right: content
```

Alternative:

```text
simple stacked cards
```

Recommended:

**simple vertical timeline**

because it feels professional and avoids excessive card repetition.

Timeline marker:

```text
small primary dot
```

Line:

```text
border muted
```

---

# 39. Engineering Expertise Cards

Recommended layout:

```text
Backend
Frontend
Architecture
Data
Delivery
Quality
```

Each card:

```text
title
short explanation
technology list
```

Avoid icon-heavy grids.

One simple icon per category is acceptable.

---

# 40. How I Engineer Section

Use four principle cards.

Recommended visual:

```text
01
Architecture with Purpose

02
End-to-End Ownership

03
Production Matters

04
Maintainability Scales Teams
```

Large numeric label gives subtle engineering/system feel.

---

# 41. AI-Augmented Engineering Visual

Use a workflow diagram, not logos.

```text
Requirements
→ Analysis
→ Architecture
→ Task Breakdown
→ AI Assist
→ Validation
→ Human Review
→ CI/CD
```

AI node may receive a subtle primary highlight.

Human Review node should be equally or more visually prominent.

---

# 42. Credentials

Use simple cards/rows.

Do not use fake certificate badges.

Each credential:

```text
Credential
Issuer
Status / year optional
External transcript link
```

---

# 43. Case Study Hero

Layout:

```text
Breadcrumb / Back
Project category
Project title
Summary

metadata row:
Role
Focus
Stack
```

Optional architecture visual to the side on desktop.

---

# 44. Case Study Challenge Blocks

Recommended structure:

```text
Challenge
What made it difficult

Approach
What I did

Engineering Value
What this demonstrates
```

Avoid "Problem / Solution / Result" if there is no measurable result.

---

# 45. Case Study Callouts

Three callout types:

```text
Engineering Decision
Production Lesson
Accuracy Note
```

Style:

- left border;
- subtle surface background;
- no bright warning colors unless necessary.

---

# 46. Technical Metadata Panel

Desktop case-study pages may have a small sticky metadata rail containing:

```text
Role
Project Type
Focus
Technology
```

Only use sticky behavior if it does not reduce usability.

Mobile:

```text
normal flow
```

---

# 47. Contact Design

Contact page/section should feel simple.

Recommended layout:

```text
heading
short availability statement
email
LinkedIn
GitHub
CV
```

No giant contact form.

No decorative map.

---

# 48. Iconography

Recommended:

```text
Lucide-style line icons
```

If using an icon package:

- keep tree-shakable;
- use one consistent set;
- avoid large icon dependency if inline SVG is enough.

Icons should assist scanning, not decorate every heading.

---

# 49. Social Icons

Use:

- LinkedIn;
- GitHub;
- Email;
- optional phone only where appropriate.

Keep accessible labels.

---

# 50. Motion Principles

Motion should communicate hierarchy/state.

Allowed:

```text
small section reveal
button hover
card hover
navigation transition
theme transition
diagram line animation optional
```

Avoid:

```text
parallax
scroll-jacking
continuous floating
cursor effects
particle backgrounds
rotating words
typing text
```

---

# 51. Motion Timing

Recommended:

```text
Fast         120ms
Normal       180ms
Slow         280ms
```

Easing:

```text
cubic-bezier(0.2, 0.8, 0.2, 1)
```

---

# 52. Section Reveal

Optional:

```text
opacity 0 → 1
translateY 12px → 0
180–280ms
```

Only once per section.

Respect:

```text
prefers-reduced-motion
```

Reduced motion:

```text
no translate
minimal/no animation
```

---

# 53. Background Decoration

Allowed:

- subtle dot grid;
- faint lines;
- low-contrast radial gradient;
- architecture-inspired node patterns.

Use only in:

```text
Hero
Featured Project
AI Workflow
```

Do not decorate every section.

---

# 54. Hero Background

Recommended:

```text
neutral background
+
very subtle primary radial gradient
+
optional architecture grid
```

Example concept:

```text
top-right soft blue glow
opacity < 10%
```

No large illustrated laptop/person.

---

# 55. Dark Mode Hero

Use:

```text
#0B0F14
```

with subtle blue glow:

```text
rgba(0,79,144,0.15)
```

No neon bloom.

---

# 56. Responsive Breakpoints

Recommended CSS breakpoints:

```text
xs     < 480px
sm     480px
md     768px
lg     1024px
xl     1280px
2xl    1536px
```

Use content-driven breakpoints where necessary.

---

# 57. Mobile Rules

At mobile widths:

- one-column layouts;
- navigation becomes menu;
- project cards stack;
- large architecture diagrams simplify;
- tags wrap;
- hero CTAs stack or wrap;
- section padding decreases;
- no sticky sidebars;
- body text remains at least 16px.

---

# 58. Tablet Rules

Tablet should not simply stretch mobile.

Allow:

```text
2-column snapshot cards
2-column expertise cards
2-column project cards where comfortable
```

---

# 59. Hero Responsive Layout

Desktop:

```text
content 60%
visual/whitespace 40%
```

Mobile:

```text
content 100%
visual reduced or moved below
```

The hero must remain strong without the visual.

---

# 60. Accessibility — Color

Target:

```text
WCAG AA minimum
```

Prefer:

```text
4.5:1 normal text
3:1 large text
```

Do not use Primary 400 text on white if contrast is insufficient.

---

# 61. Accessibility — Focus

All interactive elements:

```text
:focus-visible
```

Recommended focus:

```text
outline: 2px solid primary
outline-offset: 3px
```

Do not remove browser focus without replacement.

---

# 62. Accessibility — Touch Targets

Minimum:

```text
44x44px
```

for interactive touch controls.

---

# 63. Accessibility — Headings

Maintain semantic hierarchy.

Visual size must not dictate heading level.

---

# 64. Accessibility — Links

External links should have descriptive accessible labels.

If opening a new tab:

```text
rel="noopener noreferrer"
```

Do not overuse new tabs.

---

# 65. Accessibility — Icons

Decorative icons:

```text
aria-hidden="true"
```

Meaningful icon-only actions:

```text
aria-label
```

---

# 66. Accessibility — Theme Toggle

Theme toggle must communicate:

```text
current state
available action
```

Avoid only using a sun/moon icon with no accessible name.

---

# 67. Design Tokens

Recommended CSS custom-property organization:

```css
:root {
  --color-primary: ...;
  --color-bg: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-muted: ...;
  --color-border: ...;

  --space-1: ...;
  --space-2: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --shadow-sm: ...;
  --shadow-md: ...;

  --container-max: ...;
}
```

Dark theme overrides semantic tokens rather than component-specific colors.

---

# 68. Semantic Token Principle

Prefer:

```text
--color-text-primary
--color-surface
--color-border
```

over:

```text
--gray-900
--gray-100
```

inside components.

This makes dark theme easier to maintain.

---

# 69. Component Styling Principle

Avoid one-off values.

A component should primarily consume:

- design tokens;
- shared primitives;
- established layout utilities.

---

# 70. SCSS Strategy

Recommended:

```text
styles/
├── _tokens.scss
├── _mixins.scss
├── _typography.scss
├── _reset.scss
├── _utilities.scss
└── styles.scss
```

Component styles remain locally scoped.

Avoid a giant global stylesheet.

---

# 71. Utility CSS

Tailwind is not required for this portfolio.

Recommended approach:

```text
SCSS + semantic design tokens
```

Reason:

- portfolio is relatively small;
- full design control;
- fewer dependencies;
- architecture remains easy to inspect;
- demonstrates Angular/SCSS capability.

Tailwind may still be reconsidered during `ARCHITECTURE.md`, but should not be introduced automatically.

---

# 72. UI Framework

Do not use a heavy component framework for the portfolio.

Avoid importing:

- Angular Material;
- PrimeNG;
- NG-ZORRO;

just to build the portfolio UI.

Reason:

The portfolio needs only a small custom design system.

Use native semantic elements plus custom components.

This keeps:

- bundle smaller;
- styling cleaner;
- portfolio identity unique;
- dependencies lower.

---

# 73. Component Inventory

Version 1 visual components:

```text
AppHeader
MobileNavigation
ThemeToggle
Button
TextLink
SectionHeader
Tag
ProjectCard
SnapshotStat
Timeline
TimelineItem
ExpertiseCard
PrincipleCard
ArchitectureDiagram
ChallengeBlock
CredentialItem
SocialLinks
ContactCTA
AppFooter
```

Additional case-study components:

```text
ProjectHero
ProjectMetadata
ArchitectureNode
DecisionCallout
TechnologyGroup
NextProjectNav
```

---

# 74. Component Variant Strategy

Avoid duplicate components like:

```text
BlueProjectCard
DarkProjectCard
LargeProjectCard
```

Prefer:

```text
ProjectCard
variant="featured"
variant="standard"
```

Use variants only when visual/content behavior genuinely differs.

---

# 75. Card Philosophy

Not everything should be a card.

Use cards for:

- projects;
- expertise;
- stats;
- decisions.

Use plain layout for:

- experience timeline;
- body sections;
- case-study prose;
- About narrative.

This avoids the "dashboard portfolio" look.

---

# 76. Architecture Visual Accessibility

Diagrams must have:

- semantic text fallback;
- explanatory paragraph;
- sufficient contrast;
- no critical information communicated only through arrows/colors.

---

# 77. Images

Version 1 should not depend on photography.

Possible assets:

- optional professional portrait;
- custom architecture illustrations;
- Open Graph images;
- favicon/monogram.

Project screenshots are optional and should only be used if legally/publicly safe.

---

# 78. Professional Portrait

If used:

Recommended:

```text
small supporting visual
not dominant hero centerpiece
```

Style:

- clean background;
- professional;
- natural;
- no AI-looking corporate stock aesthetic.

Portfolio must still work perfectly without a portrait.

---

# 79. Open Graph Image

Recommended size:

```text
1200 × 630
```

Homepage content:

```text
Abdelrahman Hegab

Senior Software Engineer

.NET · Angular · Architecture · Enterprise Systems
```

Visual:

- dark/light neutral background;
- blue accent;
- subtle architecture pattern.

---

# 80. Project Open Graph Images

Use same template.

Example:

```text
Upland FileBound

Enterprise SaaS Engineering Case Study

Abdelrahman Hegab
```

---

# 81. Favicon

Version 1:

```text
AH
```

or a simplified geometric mark based on `A/H`.

Primary blue background or blue mark on transparent background.

Do not spend significant project time designing a complex logo.

---

# 82. Empty / Loading States

The portfolio is primarily pre-rendered/static.

Avoid unnecessary loading skeletons.

Loading UI is only needed for:

- deferred content;
- network-dependent functionality added later.

---

# 83. Error States

404 page should be simple:

```text
Page not found.

[Back Home]
[View Projects]
```

Maintain the site design language.

---

# 84. Scroll Behavior

Use native scrolling.

Smooth scrolling is acceptable for same-page anchor navigation.

Respect reduced-motion.

Do not implement custom scrollbars unless there is a compelling accessibility-safe reason.

---

# 85. Selection Styling

Optional:

```text
::selection {
  background: primary-soft;
}
```

Subtle brand touch.

---

# 86. Code / Technical Callouts

When displaying technical snippets:

```text
surface-secondary
monospace
border
small radius
```

Do not mimic a terminal unless actual command/code content is shown.

---

# 87. Tables

Avoid large tables on homepage.

Case-study technology comparisons or metadata tables should transform gracefully on mobile.

Prefer cards/lists if tables are not truly tabular.

---

# 88. Diagram Connectors

Use:

- straight or simple curved lines;
- arrowheads sparingly;
- consistent direction.

Preferred flow:

```text
top → bottom
```

or:

```text
left → right
```

Do not create spaghetti diagrams.

---

# 89. Project Accent Strategy

Use the same brand system for every project.

Optional slight accent differences:

```text
Upland → Primary Blue
MOJ    → Blue + Slate
SCEGA  → Blue + Cyan
```

But differences should be subtle.

Do not assign radically different brand themes per client.

---

# 90. Status / Metadata Labels

Examples:

```text
Enterprise SaaS
Government Digital Services
Full Stack
Frontend Architecture
```

Use neutral bordered tags.

Avoid loud colored badges.

---

# 91. Dark Mode Borders

Dark cards must remain distinguishable using:

- border;
- surface contrast;
- typography.

Avoid excessive shadow because dark shadows disappear.

---

# 92. Dark Mode Primary Color

Use a lighter brand tone for text/links:

```text
#4BA0DD
```

Keep brand identity without reducing readability.

---

# 93. Page Transition

Optional:

```text
fade 120–180ms
```

Do not animate full page sliding.

---

# 94. Sticky Header

Recommended.

On scroll:

```text
background becomes surface with 85–95% opacity
backdrop-filter blur
border-bottom appears
```

Keep height consistent to avoid layout shift.

---

# 95. Active Navigation

Recommended:

```text
text primary
small underline / bottom indicator
```

Avoid pill backgrounds for every active nav item unless design review shows it works.

---

# 96. Scroll-To-Top

Not required for v1.

Long case studies may optionally include a small accessible scroll-to-top control after testing.

---

# 97. Print Styles

Case-study pages should remain readable if printed.

At minimum:

- hide navigation;
- remove decorative backgrounds;
- keep text black on white;
- preserve links.

Not a v1 blocker.

---

# 98. Quality Targets

Visual QA should verify:

- no accidental overflow;
- no text clipping;
- consistent spacing;
- no low-contrast states;
- no excessive animation;
- no layout jump during font load;
- consistent button height;
- consistent card radius;
- consistent section widths.

---

# 99. Lighthouse Targets

Visual implementation should support:

```text
Performance       95+
Accessibility     95+
Best Practices    95+
SEO               95+
```

Design decisions must not knowingly sabotage these targets.

---

# 100. Final Visual Direction Summary

The approved design direction should feel:

```text
Senior Engineer
+
Modern SaaS
+
Engineering Documentation
+
Personal Brand
```

not:

```text
Junior Developer Portfolio
+
Template Marketplace
+
Gaming/Cyberpunk UI
```

---

# 101. Homepage Visual Rhythm

Recommended rhythm:

```text
Hero
   open / spacious

Snapshot
   compact

Selected Work
   visually rich

Experience
   clean / text-driven

Engineering Expertise
   structured cards

How I Engineer
   conceptual cards

AI Workflow
   diagram-driven

Credentials
   compact

Contact
   strong visual CTA
```

This creates variation without inconsistency.

---

# 102. Design Approval Checklist

Before implementation:

- [ ] Primary brand blue approved
- [ ] Light theme approved
- [ ] Dark theme approved
- [ ] Inter selected as primary web font
- [ ] Monospace usage limited to technical elements
- [ ] Spacing scale approved
- [ ] Border-radius system approved
- [ ] Project-card hierarchy approved
- [ ] Upland featured-card treatment approved
- [ ] Architecture-diagram style approved
- [ ] No heavy UI framework
- [ ] SCSS + design tokens preferred
- [ ] Motion restrained
- [ ] No typing effects
- [ ] No 3D/parallax/cursor effects
- [ ] Light/dark system support
- [ ] Accessibility rules accepted
- [ ] Responsive breakpoints accepted
- [ ] Open Graph visual direction approved
- [ ] `AH` monogram acceptable for favicon
- [ ] Portfolio works without a personal portrait

---

# 103. Next Step

After this design system is approved, create:

```text
docs/ARCHITECTURE.md
```

That document will define:

- Angular version;
- application structure;
- routes;
- content model;
- SSR/prerendering;
- SEO implementation;
- theme architecture;
- component boundaries;
- SCSS architecture;
- project case-study data model;
- testing;
- CI/CD;
- deployment;
- performance;
- security;
- dependency policy.

Then create:

```text
AGENTS.md
```

to turn the PRD, information architecture, design system, and technical architecture into enforceable rules for Codex, Antigravity, and other coding agents.
