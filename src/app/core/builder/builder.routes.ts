import { Routes } from "@angular/router";

export const buttonRoutes: Routes = [
  {
    path: 'button',
    loadComponent: () => import('./controls/button-control.component').then(m => m.ButtonControlComponent) 
  },
  {
    path: 'colors',
    loadComponent: () => import('./controls/color-control.component').then(m => m.ColorControlComponent)
  },
  {
    path: 'texts',
    loadComponent: () => import('./controls/text-control.component').then(m => m.TextControlComponent)
  }
];
