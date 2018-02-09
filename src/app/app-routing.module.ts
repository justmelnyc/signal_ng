import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';

import { AuthGuard } from './_core/guards/auth.guard';
import { RoleGuard } from './_core/guards/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    data: {animation: 'home'},
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent,
    data: {animation: 'login'}
  }, {
    path: 'accounts',
    loadChildren: './pages/users/users.module#UsersModule',
    data: {animation: 'users'},
    canActivate: [AuthGuard, RoleGuard]
  }, {
    path: 'account/:uid',
    loadChildren: './pages/spots/spots.module#SpotsModule',
    data: {animation: 'spots'},
    canActivate: [AuthGuard, RoleGuard]
  }, {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsModule',
    data: {animation: 'settings'},
    canActivate: [AuthGuard]
  }, {
    path: 'player/:uid',
    loadChildren: './pages/player/player.module#PlayerModule',
    data: {animation: 'player'},
    canActivate: [AuthGuard]
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
