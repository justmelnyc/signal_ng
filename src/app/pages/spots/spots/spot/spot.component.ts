import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { SharedService, NotificationService } from '../../../../_core/services';
import { ISpot } from '../../../../_core/interfaces/spot';
import { FileUpload } from '../../../../_core/interfaces/file-upload';

export enum EPageType {
  CreatePage,
  EditPage,
  ViewPage
}

@Component({
  selector: 'app-new-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

  uid: '';
  spotId: '';
  currentFileUpload: FileUpload;
  enum_PageType = EPageType;
  pageType: EPageType = EPageType.CreatePage;

  newSpot: ISpot = {
    uid: '',
    name: '',
    order: -1,
    videos: []
  };

  constructor(
    private sharedService: SharedService,
    private afAuth: AngularFireAuth,
    private adb: AngularFireDatabase,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params.uid;
      this.newSpot.uid = params.uid;
      if (params.method === 'edit-spot') {
        this.pageType = EPageType.EditPage;
        this.spotId = params.spotId;
        this.getSpot();
      } else if (params.method === 'new-spot') {
        this.pageType = EPageType.CreatePage;
      }
    });
  }

  getSpot() {
    this.adb.object(`spots/${this.spotId}`).valueChanges()
      .subscribe((res: ISpot) => {
        this.newSpot = {
          uid: res.uid,
          name: res.name,
          order: res.order,
          videos: res.videos
        }
      });
  }

  onSubmit() {
    if (this.pageType === EPageType.CreatePage) {
      this.createSpot();
    } else {
      this.updateSpot();
    }
  }

  async createSpot() {
    try {
      await this.adb.list(`spots`).push(this.newSpot);
      this.notificationService.showNotification(
        'New Spot has been created Successfully!',
        'success'
      );
    } catch (e) {
      console.log(e);
      this.notificationService.showNotification(
        'New Spot creation has been failed.',
        'warning'
      );
    } finally {
    }
  }

  async updateSpot() {
    try {
      await this.adb.object(`spots/${this.spotId}`).update(this.newSpot);
      this.notificationService.showNotification(
        'Spot has been updated Successfully!',
        'success'
      );
    } catch (e) {
      console.log(e);
      this.notificationService.showNotification(
        'Spot update has been failed.',
        'warning'
      );
    } finally {
    }
  }

  onFileUploadSuccess(uploadedFile: FileUpload) {
    this.currentFileUpload = uploadedFile;
    this.newSpot.videos.push(this.currentFileUpload);
  }

  deleteVideo(video: FileUpload) {
    this.sharedService.deleteVideo(video)
  }

  // async deleteUser(deleteUser: IUser) {
  //   await this.adb.list(`users`, ref => ref.orderByChild('id').equalTo(deleteUser.id))
  //     .snapshotChanges()
  //     .subscribe(users => {
  //       users.map(user => {
  //         this.sharedService.deleteAccount(deleteUser.id).subscribe(res => {
  //           this.adb.object(`users/${user.key}`).remove();
  //           this.notificationService.showNotification(
  //             'Selected account has been deleted Successfully!',
  //             'success'
  //           );
  //         }, (err) => {
  //           this.notificationService.showNotification(
  //             err.error,
  //             'warning'
  //           );
  //         })
  //       })
  //     });
  // }
}
