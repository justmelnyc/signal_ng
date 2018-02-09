import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { NgArrayPipesModule } from 'ngx-pipes';

import { SpotsRoutingModule } from './spots-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SpotsComponent } from './spots/spots.component';
import { SpotComponent } from './spots/spot/spot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragulaModule,
    NgArrayPipesModule,
    SpotsRoutingModule,
    SharedModule
  ],
  declarations: [
    SpotsComponent,
    SpotComponent
  ]
})
export class SpotsModule { }
