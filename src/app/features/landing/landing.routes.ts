import { Routes } from '@angular/router';

export const routes: Routes = [
    // 1. La page Home (L'URL finale sera par exemple /fr/home)
    {
        path: 'home',
        title: 'Watojoel • Home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
    },

    // 3. Redirection 404 relative à la langue courante
    // (ex: si l'utilisateur tape /en/nimportequoi, il est redirigé vers /en/home)
    {
        path: '**',
        redirectTo: 'home'
    }
];
