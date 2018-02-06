import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

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
      const newSpot = await this.adb.list(`spots`).push(this.newSpot);
      this.spotId = newSpot.key;
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

    if (!this.newSpot.videos) {
      this.newSpot.videos = [];
    }

    this.newSpot.videos.push(this.currentFileUpload);
  }

  async deleteVideo(video: FileUpload) {
    const response = await this.sharedService.deleteVideo(video);

    if (response) {
      let newVideoList = [];
      this.newSpot.videos.map(element => {
        if (element !== video) {
          newVideoList.push(element);
        }
      });
      this.newSpot.videos = newVideoList;

      try {
        await this.adb.object(`spots/${this.spotId}`).update(this.newSpot);
        this.notificationService.showNotification(
          'selected video has been deleted successfully!',
          'success'
        );
      } catch (e) {
        console.log(e);
        this.notificationService.showNotification(
          'video delete action has been failed.',
          'warning'
        );
      } finally {
      }
    } else {
      this.notificationService.showNotification(
        'video delete action has been failed.',
        'warning'
      );
    }
  }
}
