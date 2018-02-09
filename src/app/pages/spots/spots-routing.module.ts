import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotsComponent } from './spots.component';
import { SpotComponent } from './spot/spot.component';

const routes: Routes = [
  {
    path: '',
    component: SpotsComponent,
    data: {title: 'spots'}
  }, {
    path: ':method/:spotId',
    component: SpotComponent,
    data: {title: 'edit spot'}
  }, {
    path: ':method',
    component: SpotComponent,
    data: {title: 'new spot'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotsRoutingModule { }
