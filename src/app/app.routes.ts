import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'builder',
    loadChildren: () => import('./core/builder/builder.routes').then(m => m.buttonRoutes)
  }
];
