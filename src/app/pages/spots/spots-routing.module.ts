import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotsComponent } from './spots/spots.component';
import { NewSpotComponent } from './spots/new-spot/new-spot.component';

const routes: Routes = [
  {
    path: '',
    component: SpotsComponent,
    data: {title: 'spots'}
  }, {
    path: 'new',
    component: NewSpotComponent,
    data: {title: 'new spot'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotsRoutingModule { }
