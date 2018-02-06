import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

import { environment } from '../../../../environments/environment';
import { IUser } from '../../interfaces/user';

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

  deleteVideo(video): Promise<any> {
    return new Promise((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const uploadsRef = storageRef.child(`uploads/${video.name}`);

      uploadsRef.delete()
        .then(function () {
          resolve(true);
        })
        .catch(function (error) {
          reject(false);
        })
    })
  };
}
