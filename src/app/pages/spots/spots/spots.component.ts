import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { ISpot } from '../../../_core/interfaces/spot';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss']
})
export class SpotsComponent implements OnInit, OnDestroy {

  private userId: string;
  private sub: any;
  spots_list: Array<ISpot> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private adb: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];

      if (this.userId) {
        this.getSpotList();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async getSpotList() {
    this.adb.list(`spots`, ref => ref.orderByChild('uid').equalTo(this.userId))
      .snapshotChanges()
      .subscribe(spots => {
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

  addNewSpot() {
    this.router.navigate([`/account/${this.userId}/new-spot`]);
  }

  editSpot(spot: ISpot) {
    this.router.navigate([`/account/${this.userId}/edit-spot/` + spot.id]);
  }
}
