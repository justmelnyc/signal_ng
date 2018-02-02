import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query } from '@angular/animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { IUser } from './_core/interfaces/user';
import { SharedService } from './_core/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            opacity: 0,
            transform: 'translateY(3%)'
          }),
          {optional: true}),
        query(':enter',
          animate('300ms ease',
            style({
              opacity: 1,
              transform: 'translateY(0%)'
            })
          ),
          {optional: true}),
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private adb: AngularFireDatabase,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  async loadUser() {
    try {
      await this.afAuth.authState.first().toPromise();
      const res = this.afAuth.auth.currentUser;
      const user: IUser = await this.adb.object(`users/${res.uid}`).valueChanges().first().toPromise() as IUser;
      this.sharedService.storeUser(user);
      console.log('loadUser');
    } catch (e) {
      this.sharedService.storeUser(null);
    }
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

}
