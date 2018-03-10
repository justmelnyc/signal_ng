import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account.routing';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './account/account.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [AccountsComponent, AccountComponent, AccountCreateComponent]
})
export class AccountModule { }
