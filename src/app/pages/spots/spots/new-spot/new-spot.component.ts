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
  templateUrl: './new-spot.component.html',
  styleUrls: ['./new-spot.component.scss']
})
export class NewSpotComponent implements OnInit {

  uid: '';
  currentFileUpload: FileUpload;
  enum_PageType = EPageType;
  pageType: EPageType = EPageType.CreatePage;
  playlist = [];

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
      this.uid = params.id;
      console.log('new spot = ', this.uid);
      this.newSpot.uid = this.uid;
    });
  }

  getSpot() {
    
  }

  async onCreateSpot() {
    try {
      const createdSpot = await this.adb.list(`spots`).push(this.newSpot);
      console.log('=====', createdSpot);
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

  onFileUploadSuccess(uploadedFile: FileUpload) {
    this.currentFileUpload = uploadedFile;
    this.newSpot.videos.push(this.currentFileUpload.url);
  }
}
