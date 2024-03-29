import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { NavigatorComponent } from './components/navigator';
import { VerticalTimelineComponent } from './components/vertical-timeline'
import { VerticalNavigatorComponent } from './components/vertical-navigator'
import { FooterComponent } from './components/footer'
import {SubnavComponent} from './components/navigator-subnav';
import { CapitalizePipe } from './pipes/capitalize.pipe'
import { ReactiveFormsModule } from '@angular/forms'
import {SvgIconComponent} from './components/svg-icon'
// import {MatchHeightDirective} from './directives/match-height.directive'

const DECLARATIONS = [NavigatorComponent, FooterComponent, VerticalTimelineComponent, VerticalNavigatorComponent, SubnavComponent, CapitalizePipe, SvgIconComponent]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: DECLARATIONS,
  exports: [ DECLARATIONS ]
})
export class SharedModule { }
