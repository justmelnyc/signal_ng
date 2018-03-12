import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsComponent} from './accounts/accounts'
import {AccountComponent} from './account/account.component'
import {AccountCreateComponent} from './account-create/account-create'
import {AuthGuard} from '../core/guards/auth.guard'
import {AccountLoginComponent} from './account-login/account-login'

const routes: Routes = [
    { path: 'accounts', component: AccountsComponent, data: { title: 'accounts'} },
    { path: 'accounts-create', component: AccountCreateComponent },
    { path: 'accounts-access-key', component: AccountCreateComponent },
    { path: 'accounts-login', component: AccountLoginComponent },
    { path: 'accounts/:username', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'accounts/:username/edit', component: AccountComponent,
        data: {animation: 'home'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
