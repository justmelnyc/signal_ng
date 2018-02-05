import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpotsRoutingModule } from './spots-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SpotsComponent } from './spots/spots.component';
import { NewSpotComponent } from './spots/new-spot/new-spot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpotsRoutingModule,
    SharedModule
  ],
  declarations: [
    SpotsComponent,
    NewSpotComponent
  ]
})
export class SpotsModule { }
