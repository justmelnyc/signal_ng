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
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let user = this.sharedService.getUser();
    if (!user) {
      this.getAuthUser().then(user => {
        console.log('role guard = ', user);
        if (user.admin) {
          return true;
        }

        this.router.navigate(['/login']);
        return false;
      });
    } else {
      if (user.admin) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    }
  }

  async getAuthUser() {
    await this.afAuth.authState.first().toPromise();
    let uid = await this.afAuth.auth.currentUser.uid;
    const user = await this.adb.object(`users/${uid}`).valueChanges().first().toPromise() as IUser;
    this.sharedService.storeUser(user);
    return user;
  }
}
