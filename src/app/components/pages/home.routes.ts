import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'upload',
    loadComponent: () => import('./upload/upload.component').then(m => m.UploadComponent),
    data: { breadcrumb: 'Carga de información' }
  },
  {
    path: 'download',
    loadComponent: () => import('./download/download.component').then(m => m.DownloadComponent),
    data: { breadcrumb: 'Módulo de reportes' }
  },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'upload'
  }
];
