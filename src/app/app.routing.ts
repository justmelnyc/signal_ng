import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin/admin.component'

export const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent,
      data: {animation: 'home'} },
  { path: '**', redirectTo: 'pages/page-404' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
