import { Routes } from "@angular/router";

export const buttonRoutes: Routes = [
  {
    path: 'button',
    loadComponent: () => import('./controls/button-control.component').then(m => m.ButtonControlComponent) 
  }
];
