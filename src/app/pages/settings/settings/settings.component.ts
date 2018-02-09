import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { SharedService } from '../../../_core/services/SharedService/shared.service';
import { IUser } from '../../../_core/interfaces/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userId = '';
  spots_list: Array<any> = [];

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private adb: AngularFireDatabase,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getSpotList();
  }

  async getUserId() {
    let user = this.sharedService.getUser();
    if (!user) {
      await this.afAuth.authState.first().toPromise();
      this.userId = await this.afAuth.auth.currentUser.uid;
      user = await this.adb.object(`users/${this.userId}`).valueChanges().first().toPromise() as IUser;
      this.sharedService.storeUser(user);
    } else {
      this.userId = user.id;
    }
  }

  async getSpotList() {
    await this.getUserId();
    this.adb.list(`spots`, ref => ref.orderByChild('uid').equalTo(this.userId))
      .snapshotChanges()
      .subscribe(spots => {
        this.spots_list = [];
        spots.map(spot => {
          this.spots_list.push({
            id: spot.key,
            uid: spot.payload.val().uid,
            name: spot.payload.val().name,
            order: spot.payload.val().order,
            videos: spot.payload.val().videos
          });
        });
      });
  }

  playSpot(spot: any) {
    this.router.navigate([`player/${spot.id}`]);
  }
}
