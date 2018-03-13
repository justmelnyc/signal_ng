import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';


export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'player',
  template: `
    <!--<vg-player (onPlayerReady)="onPlayerReady($event)">-->
      <!--&lt;!&ndash;<vg-buffering></vg-buffering>&ndash;&gt;-->

      <!--&lt;!&ndash;<vg-controls>&ndash;&gt;-->
        <!--&lt;!&ndash;<vg-play-pause></vg-play-pause>&ndash;&gt;-->
        <!--&lt;!&ndash;<vg-playback-button></vg-playback-button>&ndash;&gt;-->

        <!--&lt;!&ndash;<vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>&ndash;&gt;-->

        <!--&lt;!&ndash;<vg-scrub-bar>&ndash;&gt;-->
          <!--&lt;!&ndash;<vg-scrub-bar-current-time></vg-scrub-bar-current-time>&ndash;&gt;-->
          <!--&lt;!&ndash;<vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>&ndash;&gt;-->
        <!--&lt;!&ndash;</vg-scrub-bar>&ndash;&gt;-->

        <!--&lt;!&ndash;<vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>&ndash;&gt;-->

        <!--&lt;!&ndash;<vg-mute></vg-mute>&ndash;&gt;-->
        <!--&lt;!&ndash;<vg-volume></vg-volume>&ndash;&gt;-->

        <!--&lt;!&ndash;<vg-fullscreen></vg-fullscreen>&ndash;&gt;-->
      <!--&lt;!&ndash;</vg-controls>&ndash;&gt;-->

      <!--<video #media-->
             <!--controls-->
             <!--[vgMedia]="media"-->
             <!--[src]="currentItem.src"-->
             <!--id="singleVideo"-->
             <!--preload="auto" -->
             <!--playsinline -->
             <!--webkit-playsinline-->
             <!--crossorigin>-->
      <!--</video>-->
    <!--</vg-player>-->

    <!--<ul>-->
      <!--<li *ngFor="let item of playlist; let $index = index"-->
          <!--(click)="onClickPlaylistItem(item, $index)"-->
          <!--[class.selected]="item === currentItem">-->
        <!--{{ item.title }}-->
      <!--</li>-->
    <!--</ul>-->
    <h1>testing still</h1>
  `,
  styleUrls: ['player.scss']
})
export class PlayerComponent implements OnInit {

  playlist: Array<IMedia> = [
    {
      title: 'Mercurial',
      src: 'assets/media/nike.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Sure Thing',
      src: 'assets/media/sure.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Hate or Glory',
      src: 'assets/media/hate.mp4',
      type: 'video/mp4'
    }
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[ this.currentIndex ];
  // api: VgAPI;

  constructor(private api: VgAPI) {
    // this.api.play();
  }

  ngOnInit() {
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
