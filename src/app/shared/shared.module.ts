import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { NavigatorComponent } from './components/navigator';
import { VerticalTimelineComponent } from './components/vertical-timeline'
import { VerticalNavigatorComponent } from './components/vertical-navigator'
import { FooterComponent } from './components/footer'

const COMPONENTS = [NavigatorComponent, FooterComponent, VerticalTimelineComponent, VerticalNavigatorComponent]
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: [
    COMPONENTS
  ]
})
export class SharedModule { }
