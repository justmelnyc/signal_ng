import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account.routing';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './account/account.component';
import { AccountCreateComponent } from './account-create/account-create';
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from '../core/core.module';
import { AccountFormComponent } from './account-create/account-form'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AccountsComponent, AccountComponent, AccountCreateComponent, AccountFormComponent]
})
export class AccountModule { }
