import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsComponent} from './accounts/accounts.component'
import {AccountComponent} from './account/account.component'
import {AccountCreateComponent} from './account-create/account-create'

const routes: Routes = [
    { path: 'accounts', component: AccountsComponent, data: { title: 'accounts'} },
    { path: 'accounts-create', component: AccountCreateComponent },
    { path: 'accounts-access-key', component: AccountCreateComponent },
    { path: 'accounts/:username', component: AccountComponent },
    { path: 'accounts/:username/edit', component: AccountComponent,
        data: {animation: 'home'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
