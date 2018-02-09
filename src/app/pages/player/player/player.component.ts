import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { VgAPI } from 'videogular2/core';
import { IMedia } from '../../../_core/interfaces/media';
import { ISpot } from '../../../_core/interfaces/spot';
import {FileUpload} from '../../../_core/interfaces/file-upload';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playlist: Array<IMedia> = [];

  spotId = '';
  currentIndex = 0;
  currentItem: IMedia;
  api: VgAPI;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private adb: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.spotId = params['id'];

      if (this.spotId) {
        this.getPlaylist();
      }
    });
  }

  getPlaylist() {
    this.adb.object(`spots/${this.spotId}`).valueChanges()
      .subscribe((res: ISpot) => {
        console.log('getPlaylist = ', res);
        res.videos.map((video: FileUpload) => {
          this.playlist.push({
            title: video.name,
            src: video.url,
            type: 'video/mp4'
          })
        });

        this.currentItem = this.playlist[this.currentIndex];
      });
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[ this.currentIndex ];
  }

  playVideo() {
    this.api.play();
  }

  onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
  }
}
