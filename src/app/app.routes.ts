import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'cat',
    canActivate: [], //TODO ? Guard
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
];
