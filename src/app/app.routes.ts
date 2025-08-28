import { Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule),
  },
   {
    path: 'profile',
    loadChildren: () => import('./feature/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
   {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
