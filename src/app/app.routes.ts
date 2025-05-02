import { Routes } from '@angular/router';
import {homeRoutes} from './components/pages/home.routes';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/pages/home.component').then(m => m.HomeComponent),
    data: { breadcrumb: 'Inicio' },
    children: homeRoutes
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
