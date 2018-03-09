import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { DashboardsAlpha } from './alpha.page';
import { DashboardsBeta } from './beta.page';
import { Dashboard } from './dashboard'

export const routes: Routes = [
  { path: 'dashboards/alpha', component: DashboardsAlpha },
  { path: 'dashboards/beta', component: DashboardsBeta },
  { path: 'dashboards/main', component: Dashboard },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardsAlpha,
    DashboardsBeta,
      Dashboard
  ]

})

export class DashboardsModule { }
