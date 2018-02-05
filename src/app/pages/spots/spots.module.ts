import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotsRoutingModule } from './spots-routing.module';
import { SpotsComponent } from './spots/spots.component';
import { NewSpotComponent } from './spots/new-spot/new-spot.component';

@NgModule({
  imports: [
    CommonModule,
    SpotsRoutingModule
  ],
  declarations: [
    SpotsComponent,
    NewSpotComponent
  ]
})
export class SpotsModule { }
