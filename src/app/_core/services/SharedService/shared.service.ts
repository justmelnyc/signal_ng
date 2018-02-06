import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';

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
    return this.http.post(`${environment.firebase.cloudFunctionsURL}/addNewAccount`, newUser, {observe: 'response'})
      .map((response: any) => {
        return response;
      })
      .catch(error => {
        return Observable.throw(error);
      });
  }

  deleteAccount(uid) {
    return this.http.post(`${environment.firebase.cloudFunctionsURL}/deleteAccount`, uid, {observe: 'response'})
      .map((response: any) => {
        return response;
      })
      .catch(error => {
        return Observable.throw(error);
      });
  }

  deleteVideo(video) {
    return this.http.post(`${environment.firebase.cloudFunctionsURL}/deleteAccount`, video, {observe: 'response'})
      .map((response: any) => {
        return response;
      })
      .catch(error => {
        return Observable.throw(error);
      });
  }
}
