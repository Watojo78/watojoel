import { Routes } from '@angular/router';

export const routes: Routes = [
    //landing routes
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then((m) => m.LayoutComponent),
        data: { layout: 'landing' },
        children: [
            { 
                path: '', 
                loadChildren: () => import('./features/landing/landing.routes').then((m) => m.routes)
            },
        ]
    },
];
