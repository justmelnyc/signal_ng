import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player',
  template: `
    <vg-player>
      <!--<vg-overlay-play [vgFor]="my-video"></vg-overlay-play>-->

      <video #myMedia
             [vgMedia]="myMedia"
             id="my-video"
             src="assets/media/nike.mp4"
             autoplay
             controls
             type="video/mp4">
      </video>
      
      <!--<video [vgMedia]="master" #master [vgMaster]="true" id="masterVideo" preload="auto" autoplay controls>-->
        <!--<source src="assets/media/sure.mp4" type="video/mp4">-->
      <!--</video>-->

      <!--<video [vgMedia]="slave" #slave id="slaveVideo" preload="auto">-->
        <!--<source src="assets/media/sure.mp4" type="video/mp4">-->
      <!--</video>-->
    </vg-player>
  `,
  styles: []
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
