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
  },
  {
    path: 'logo',
    loadComponent: () => import('./controls/image-control.component').then(m => m.ImageControlComponent)
  },
  {
    path: 'fonts',
    loadComponent: () => import('./controls/font-control.component').then(m => m.FontControlComponent)
  },
  {
    path: 'carousel',
    loadComponent: () => import('./controls/carousel-control.component').then(m => m.CarouselControlComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./controls/contact-control.component').then(m => m.ContactControlComponent)
  }
];
