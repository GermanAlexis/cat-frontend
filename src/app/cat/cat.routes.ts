import { Routes } from '@angular/router';
import { CatComponent } from './cat.component';
export const catRoutes: Routes = [
  {
    path: '',
    redirectTo: 'cat/',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CatComponent,
  },
];
