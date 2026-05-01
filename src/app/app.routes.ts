import { Routes } from '@angular/router';

export const routes: Routes = [
    // 2. Le paramètre dynamique ":lang" qui va englober toute ton application
    {
        path: ':lang', // Va capturer "fr", "en", etc.
        loadComponent: () => import("./layout/layout.component").then((m) => m.LayoutComponent),
        data: { layout: 'landing' },
        children: [
            {
                path: '',
                loadChildren: () => import('./features/landing/landing.routes').then((m) => m.routes)
            }
        ]
    },

    // 3. Fallback de sécurité global (Si l'URL ne correspond à rien du tout)
    {
        path: '**',
        redirectTo: 'fr/home'
    }
];
