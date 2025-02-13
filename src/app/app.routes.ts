import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'builder',
    loadChildren: () => import('./core/builder/builder.routes').then(m => m.buttonRoutes)
  }
];
