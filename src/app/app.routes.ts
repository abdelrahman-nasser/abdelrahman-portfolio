import { Routes } from '@angular/router';

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
