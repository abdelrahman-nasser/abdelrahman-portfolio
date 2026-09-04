import { Routes } from '@angular/router';

import type { SeoRouteData } from './core/seo/seo.models';
import type { ProjectDetailRouteData } from './features/projects/project-detail/project-detail-route';

const loadProjectDetailPage = () =>
  import('./features/projects/project-detail/project-detail-page').then(
    (page) => page.ProjectDetailPage,
  );

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page').then((page) => page.HomePage),
    data: {
      seo: {
        title: 'Abdelrahman Hegab | Senior Software Engineer',
        description:
          'Senior Software Engineer with 10+ years of experience in .NET, Angular, software architecture, enterprise SaaS, and government digital platforms.',
        structuredData: 'person',
      },
    } satisfies SeoRouteData,
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/experience-page').then((page) => page.ExperiencePage),
    data: {
      seo: {
        title: 'Experience | Abdelrahman Hegab',
        description:
          "Explore Abdelrahman Hegab's software engineering experience across enterprise SaaS, .NET, Angular, government digital services, integrations, and technical leadership.",
      },
    } satisfies SeoRouteData,
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects-page').then((page) => page.ProjectsPage),
    data: {
      seo: {
        title: 'Engineering Projects | Abdelrahman Hegab',
        description:
          'Selected software engineering case studies covering enterprise SaaS, government digital services, .NET, Angular, integrations, security, and production engineering.',
      },
    } satisfies SeoRouteData,
  },
  {
    path: 'projects/upland-filebound',
    loadComponent: loadProjectDetailPage,
    data: {
      projectId: 'upland-filebound',
      seo: {
        title: 'Upland FileBound Engineering Case Study | Abdelrahman Hegab',
        description:
          'Upland FileBound engineering case study covering .NET APIs, integrations, workflow and eForms, security, performance, testing, and production engineering.',
      },
    } satisfies ProjectDetailRouteData & SeoRouteData,
  },
  {
    path: 'projects/moj-lawyer-licensing',
    loadComponent: loadProjectDetailPage,
    data: {
      projectId: 'moj-lawyer-licensing',
      seo: {
        title: 'Saudi Ministry of Justice Lawyer Licensing Case Study | Abdelrahman Hegab',
        description:
          'Full-stack engineering case study for a Saudi government lawyer-licensing platform covering .NET 8, Vue 2, secure integrations, and a path-based Micro Frontend.',
      },
    } satisfies ProjectDetailRouteData & SeoRouteData,
  },
  {
    path: 'projects/scega-event-licensing',
    loadComponent: loadProjectDetailPage,
    data: {
      projectId: 'scega-event-licensing',
      seo: {
        title: 'SCEGA Event Licensing Platform Case Study | Abdelrahman Hegab',
        description:
          'Engineering case study for a Saudi government event-licensing platform covering Angular 19, .NET 9, reusable workflows, authentication, CQRS/MediatR, and delivery.',
      },
    } satisfies ProjectDetailRouteData & SeoRouteData,
  },
  {
    path: 'engineering',
    loadComponent: () =>
      import('./features/engineering/engineering-page').then((page) => page.EngineeringPage),
    data: {
      seo: {
        title: 'Engineering Approach | Abdelrahman Hegab',
        description:
          'How Abdelrahman Hegab approaches backend engineering, Angular architecture, APIs, distributed systems, production reliability, technical leadership, and AI-assisted development.',
      },
    } satisfies SeoRouteData,
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about-page').then((page) => page.AboutPage),
    data: {
      seo: {
        title: 'About | Abdelrahman Hegab',
        description:
          "Learn about Abdelrahman Hegab's journey from Microsoft technology training to senior software engineering across SaaS, enterprise systems, and government digital platforms.",
      },
    } satisfies SeoRouteData,
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact-page').then((page) => page.ContactPage),
    data: {
      seo: {
        title: 'Contact | Abdelrahman Hegab',
        description:
          'Contact Abdelrahman Hegab for senior software engineering opportunities involving .NET, Angular, software architecture, enterprise systems, and complex integrations.',
      },
    } satisfies SeoRouteData,
  },
  {
    path: 'cv',
    loadComponent: () => import('./features/cv/cv-page').then((page) => page.CvPage),
    data: {
      seo: {
        title: 'CV | Abdelrahman Hegab',
        description:
          "View or download Abdelrahman Hegab's professional CV covering senior software engineering experience in .NET, Angular, SaaS, architecture, and government systems.",
      },
    } satisfies SeoRouteData,
  },
];
