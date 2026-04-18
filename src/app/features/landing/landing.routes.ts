import type { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Watojoel • Home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
