import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: App, 
  },
  {
    path: 'inicio',
    component: App, 
  },
  {
    path: 'inicio/:categoria',
    component: App, 
  },
  {
    path: 'inicio/:categoria/:subcategoria',
    component: App, 
  },
  {
    path: '**',
    redirectTo: '', 
  }
];
