import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgxCoolDialogsModule, NgxCoolDialogsService } from 'ngx-cool-dialogs'
import {NotifyService} from './services/notify.service';
import { BlinkerService } from './services/blinker.service'

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxCoolDialogsModule
  ],
  declarations: [],
  providers: [AuthService, NotifyService, NgxCoolDialogsService, BlinkerService]
})
export class CoreModule { }
