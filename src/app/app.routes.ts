import { Routes } from '@angular/router';

import type { ProjectDetailRouteData } from './features/projects/project-detail/project-detail-route';

const loadProjectDetailPage = () =>
  import('./features/projects/project-detail/project-detail-page').then(
    (page) => page.ProjectDetailPage,
  );

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page').then((page) => page.HomePage),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/experience-page').then((page) => page.ExperiencePage),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects-page').then((page) => page.ProjectsPage),
  },
  {
    path: 'projects/upland-filebound',
    loadComponent: loadProjectDetailPage,
    data: {
      projectId: 'upland-filebound',
    } satisfies ProjectDetailRouteData,
  },
  {
    path: 'projects/moj-lawyer-licensing',
    loadComponent: loadProjectDetailPage,
    data: {
      projectId: 'moj-lawyer-licensing',
    } satisfies ProjectDetailRouteData,
  },
  {
    path: 'projects/scega-event-licensing',
    loadComponent: loadProjectDetailPage,
    data: {
      projectId: 'scega-event-licensing',
    } satisfies ProjectDetailRouteData,
  },
  {
    path: 'engineering',
    loadComponent: () =>
      import('./features/engineering/engineering-page').then((page) => page.EngineeringPage),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about-page').then((page) => page.AboutPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact-page').then((page) => page.ContactPage),
  },
  {
    path: 'cv',
    loadComponent: () => import('./features/cv/cv-page').then((page) => page.CvPage),
  },
];
