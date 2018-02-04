import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription';

import { SharedService } from '../../_core/services/SharedService/shared.service';
import { IReservation } from '../../_core/interfaces/reservation';
import { IUser } from '../../_core/interfaces/user';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {

  uid = '';
  private listing$: Subscription = new Subscription();
  reservations: IReservation[] = [];

  constructor(
    private afAuth: AngularFireAuth,
    private adb: AngularFireDatabase,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBookingList();
  }

  async getBookingList() {
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
        this.listing$ = this.adb.list(`reservations`)
          .snapshotChanges()
          .subscribe(items => {
            this.reservations = [];
            items.map(item => {
              const reservation: IReservation = {
                $key: item.payload.val().id,
                email: item.payload.val().email,
                name: item.payload.val().name,
                userId: item.payload.val().userId,
                owner: item.payload.val().owner,
                reservationDate: item.payload.val().reservationDate
              };
              this.reservations.push(reservation);
            });
          });
      } else {
        this.listing$ = this.adb.list(`reservations`)
          .snapshotChanges()
          .subscribe(items => {
            this.reservations = [];
            items.map(item => {
              const reservation: IReservation = {
                $key: item.payload.val().id,
                email: item.payload.val().email,
                name: item.payload.val().name,
                userId: item.payload.val().userId,
                owner: item.payload.val().owner,
                reservationDate: item.payload.val().reservationDate
              };
              this.reservations.push(reservation);
            });
          });
      }
    } catch (e) {
      console.log(e);
    }
  }

  ngOnDestroy() {
    this.listing$.unsubscribe();
  }

  showDetails(res: IReservation) {
    this.router.navigate(['/reservations/view/' + res.$key]);
  }

  editReservation(res: IReservation) {
    this.router.navigate(['/reservations/edit/' + res.$key]);
  }

  async deleteReservation(res: IReservation) {
    try {
      await this.adb.object(`reservations/${res.$key}`).remove();
    } catch (e) {
      console.log(e);
    }
  }
}
