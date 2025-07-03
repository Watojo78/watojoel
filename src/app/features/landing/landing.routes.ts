import type { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Watojoel • Home',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
    },
    {
        path: 'home',
        title: 'Watojoel • Home',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
    },
    {
        path: 'projects',
        title: 'Watojoel • Projects',
        pathMatch: 'full',
        loadComponent: () => import('./pages/projects/projects.page').then((m) => m.ProjectsPage)
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
