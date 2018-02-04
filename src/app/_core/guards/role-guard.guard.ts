import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { SharedService } from '../services/shared.service';
import { IUser } from '../interfaces/user';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private adb: AngularFireDatabase,
    private sharedService: SharedService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    let user = this.sharedService.getUser();
    if (user) {
      return Observable.of(user.admin ? true : false);
    } else {
      return this.afAuth.authState.first().flatMap(cUser => {
        return this.adb.object(`users/${cUser.uid}`).valueChanges().first().map((x: IUser) => {
          return x.admin ? true : false;
        });
      });
    }
  }
}
