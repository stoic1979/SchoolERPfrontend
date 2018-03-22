import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard'


const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule'
  },
  { 
    path: '', 
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'dashboard', 
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'layouts', 
    loadChildren: './dummy/dummy.module#DummyModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: './user-management/user-management.module#UserManagementModule',
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
