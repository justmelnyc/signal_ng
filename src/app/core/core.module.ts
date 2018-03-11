import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgxCoolDialogsModule, NgxCoolDialogsService } from 'ngx-cool-dialogs'

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxCoolDialogsModule
  ],
  declarations: [],
  providers: [AuthService, NgxCoolDialogsService]
})
export class CoreModule { }
