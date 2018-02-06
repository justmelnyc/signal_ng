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
    id: '',
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
      if (params.method === 'edit-spot') {
        this.pageType = EPageType.EditPage;
        this.spotId = params.spotId;
        this.getSpot();
      } else if (params.method === 'new-spot') {
        this.pageType = EPageType.ViewPage;
      }
    });
  }

  getSpot() {
    // const selectedSpot = this.adb.object(`spots/${this.spotId}`).valueChanges().first().toPromise() as ISpot;
    // console.log('selected Spot = ', selectedSpot);
  }

  async onCreateSpot() {
    try {
      const createdSpot = await this.adb.list(`spots`).push(this.newSpot);
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
