import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin/admin.component'
import {AuthGuard} from './core/guards/auth.guard'

export const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
      data: {animation: 'home'} },
  { path: '**', redirectTo: 'pages/page-404' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
