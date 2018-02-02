import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { NewUserComponent } from './pages/users/new-user/new-user.component';

import { AuthGuard } from './_core/guards/auth.guard';
import { RoleGuard } from './_core/guards/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    data: {animation: 'home'}
  }, {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactModule',
    data: {animation: 'contact'}
  }, {
    path: 'login',
    component: LoginComponent,
    data: {animation: 'login'}
  }, {
    path: 'reservations',
    loadChildren: './pages/reservation/reservation.module#ReservationModule',
    data: {animation: 'reservations'},
    canActivate: [AuthGuard]
  }, {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfileModule',
    data: {animation: 'profile'},
    canActivate: [AuthGuard]
  }, {
    path: 'accounts', loadChildren: './pages/users/users.module#UsersModule',
    data: {animation: 'users'},
    canActivate: [AuthGuard, RoleGuard]
  }, {
    path: 'accounts/new',
    component: NewUserComponent,
    data: {animation: 'newUser'},
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
