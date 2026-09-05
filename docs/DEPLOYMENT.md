# Cloudflare Pages Deployment

## Hosting contract

The portfolio is hosted as a statically prerendered Angular application on Cloudflare Pages.

```text
GitHub repository
   |
   +--> GitHub Actions
   |      formatting, lint, unit/component tests, build validation, and Playwright
   |
   +--> Cloudflare Pages Git integration
          npm run build
          static browser output
          preview deployments for non-production branches
          main --> production
```

Cloudflare Pages owns build and deployment. GitHub Actions remains the quality gate. The
repository does not contain a Wrangler deployment workflow, Cloudflare credentials, Pages
Functions, a Worker, or a runtime server.

## Cloudflare configuration

| Setting | Value |
| --- | --- |
| Pages project | `abdelrahman-hegab` |
| Deployment method | Git integration with GitHub |
| Repository | `abdelrahman-nasser/abdelrahman-portfolio` |
| Framework preset | Angular |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build` |
| Build output directory | `dist/abdelrahman-portfolio/browser` |
| Node version source | `.nvmrc` (`24.20.0`) |
| Application environment variables | None |
| Production origin | `https://abdelrahman-hegab.pages.dev` |
| Custom domain | Not configured |

The initial Cloudflare Pages project was created as `abdelrahman-portfolio`, which received the
URL `https://abdelrahman-portfolio-1od.pages.dev` because `abdelrahman-portfolio.pages.dev` was
already occupied. Because Cloudflare Pages `*.pages.dev` subdomains cannot be renamed in place,
the safe migration path was executed: the dedicated project `abdelrahman-hegab` was created
with Git integration on `main`, successfully producing the exact production origin
`https://abdelrahman-hegab.pages.dev`. The prior `abdelrahman-portfolio` project remains intact
temporarily to preserve existing links until user cleanup.
Cloudflare detected Node `24.20.0` from `.nvmrc` and npm `11.19.0`.

## Deployment behavior

- A push to `main` triggers the production build and deployment.
- All non-production branches are eligible for automatic preview deployments.
- Preview deployments are public by default and use temporary Cloudflare URLs.
- Preview URLs must never be used in profile, sitemap, robots, Open Graph, or other
  production-origin metadata.
- GitHub Actions validates pull requests and pushes to `main`; it does not deploy the site.
- Cloudflare build comments are enabled.

Cloudflare normalizes prerendered directory routes with a permanent trailing-slash redirect,
for example `/about` to `/about/`. The resulting route serves its route-specific static HTML.
No catch-all `_redirects` rule is configured.

## Production smoke checklist

After a production deployment, verify direct entry and reload for:

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

Also verify:

- `/robots.txt`;
- `/sitemap.xml`;
- `/assets/social/portfolio-og.png`;
- JavaScript and CSS chunks load without 404 responses;
- desktop and mobile navigation;
- System, Light, and Dark theme behavior and persistence;
- project and case-study navigation;
- Contact and CV routes;
- route-specific title, description, robots, Open Graph, and Twitter metadata;
- homepage Person JSON-LD appears only on the homepage;
- no console, page, hydration, or asset-loading errors.

## Rollback

Use the Cloudflare Pages project deployment history to select the last known-good production
deployment and roll production back to it. Fix the source on a short-lived branch and let the
normal GitHub Actions and Cloudflare Pages pipelines validate and redeploy the correction.
