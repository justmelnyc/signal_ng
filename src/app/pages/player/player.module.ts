import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule { }
