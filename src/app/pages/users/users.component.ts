import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription';

import { IUser } from '../../_core/interfaces/user';
import { SharedService } from '../../_core/services/SharedService/shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  uid = '';
  private listing$: Subscription = new Subscription();
  users: IUser[] = [];

  constructor(
    private sharedService: SharedService,
    private adb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  ngOnDestroy() {
    this.listing$.unsubscribe();
  }

  async getUserList() {
    try {
      let user = this.sharedService.getUser();
      if (!user) {
        await this.afAuth.authState.first().toPromise();
        this.uid = await this.afAuth.auth.currentUser.uid;
        user = await this.adb.object(`users/${this.uid}`).valueChanges().first().toPromise() as IUser;
        this.sharedService.storeUser(user);
      } else {
        this.uid = user.id;
      }

      if (user.admin) {
        this.listing$ = this.adb.list(`users`).snapshotChanges().subscribe(items => {
          this.users = [];
          items.map(item => {
            if (item.payload.val().admin !== true) {
              const data: IUser = {
                id: item.payload.val().id,
                email: item.payload.val().email,
                password: item.payload.val().password,
                name: item.payload.val().name,
                admin: item.payload.val().admin,
                photo: item.payload.val().photo
              };
              this.users.push(data);
            }
          })
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async deleteUser(user: IUser) {
    await this.adb.object(`users/${user.id}`).remove();
  }

  addUser() {
    this.router.navigate(['/accounts/new']);
  }
}
