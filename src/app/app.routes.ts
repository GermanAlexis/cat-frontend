import { Routes } from '@angular/router';
import { userinfoGuard } from './common/guard/userinfo.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'cat',
    canActivate: [userinfoGuard],
    loadChildren: () => import('./cat/cat.routes').then((m) => m.catRoutes),
  },
];
