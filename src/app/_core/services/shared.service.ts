import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class SharedService {

  private user = new Subject<IUser>();
  user$ = this.user.asObservable();
  userInfo: IUser = null;

  constructor(
    private http: HttpClient
  ) { }

  storeUser(user: IUser) {
    this.userInfo = user;
    this.user.next(user);
  }

  getUser(): IUser {
    return this.userInfo;
  }

  createAccount(newUser) {
    console.log(newUser);
    return this.http.post(`${environment.firebase.cloudFunctionsURL}/addNewAccount`, newUser, {observe: 'response'}).map((x: any) => {
      console.log('addNewAccount response = ', x);
      return x;
    });
  }
}
