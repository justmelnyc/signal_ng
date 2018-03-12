import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account.routing';
import { AccountsComponent } from './accounts/accounts';
import { AccountComponent } from './account/account.component';
import { AccountCreateComponent } from './account-create/account-create';
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from '../core/core.module';
import { AccountFormComponent } from './account-create/account-form'
import { ReactiveFormsModule } from '@angular/forms';
import { AccountLoginComponent } from './account-login/account-login'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [AccountsComponent, AccountComponent, AccountCreateComponent, AccountFormComponent, AccountLoginComponent]
})
export class AccountModule { }
